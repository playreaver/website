"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[918], {
    6573: function(t, e, n) {
        n.d(e, {
            Iu: function() {
                return C
            },
            P6: function() {
                return oC
            },
            h4: function() {
                return Ad
            },
            mf: function() {
                return $d
            },
            t6: function() {
                return r.d
            },
            u8: function() {
                return _d
            },
            uT: function() {
                return fd
            }
        });
        var r = n(9022)
          , i = n(7294)
          , s = n(177)
          , o = n.n(s)
          , a = n(6873)
          , l = n.n(a)
          , c = n(2779)
          , d = n(7814)
          , u = n(3306);
        n(3636);
        const p = (0,
        i.createContext)()
          , C = ({children: t, value: e}) => r.j.jsx(p.Provider, {
            value: e,
            children: t
        })
          , f = (0,
        i.createContext)({
            data: null
        })
          , h = ({value: t, children: e}) => {
            const n = (0,
            i.useContext)(p);
            let s;
            n && (s = n.data);
            const o = t || s;
            return r.j.jsx(f.Provider, {
                value: {
                    data: o
                },
                children: e
            })
        }
          , m = (0,
        i.createContext)()
          , g = ({value: t, children: e}) => r.j.jsx(m.Provider, {
            value: t,
            children: e
        });
        var v = {
            "": ["<em>", "</em>"],
            _: ["<strong>", "</strong>"],
            "*": ["<strong>", "</strong>"],
            "~": ["<s>", "</s>"],
            "\n": ["<br />"],
            " ": ["<br />"],
            "-": ["<hr />"]
        };
        function y(t) {
            return t.replace(RegExp("^" + (t.match(/^(\t| )+/) || "")[0], "gm"), "")
        }
        function w(t) {
            return (t + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        function L(t, e) {
            var n, r, i, s, o, a = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, l = [], c = "", d = e || {}, u = 0;
            function p(t) {
                var e = v[t[1] || ""]
                  , n = l[l.length - 1] == t;
                return e ? e[1] ? (n ? l.pop() : l.push(t),
                e[0 | n]) : e[0] : t
            }
            function C() {
                for (var t = ""; l.length; )
                    t += p(l[l.length - 1]);
                return t
            }
            for (t = t.replace(/^\[(.+?)\]:\s*(.+)$/gm, (function(t, e, n) {
                return d[e.toLowerCase()] = n,
                ""
            }
            )).replace(/^\n+|\n+$/g, ""); i = a.exec(t); )
                r = t.substring(u, i.index),
                u = a.lastIndex,
                n = i[0],
                r.match(/[^\\](\\\\)*\\$/) || ((o = i[3] || i[4]) ? n = '<pre class="code ' + (i[4] ? "poetry" : i[2].toLowerCase()) + '"><code' + (i[2] ? ' class="language-' + i[2].toLowerCase() + '"' : "") + ">" + y(w(o).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (o = i[6]) ? (o.match(/\./) && (i[5] = i[5].replace(/^\d+/gm, "")),
                s = L(y(i[5].replace(/^\s*[>*+.-]/gm, ""))),
                ">" == o ? o = "blockquote" : (o = o.match(/\./) ? "ol" : "ul",
                s = s.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")),
                n = "<" + o + ">" + s + "</" + o + ">") : i[8] ? n = '<img src="' + w(i[8]) + '" alt="' + w(i[7]) + '">' : i[10] ? (c = c.replace("<a>", '<a href="' + w(i[11] || d[r.toLowerCase()]) + '">'),
                n = C() + "</a>") : i[9] ? n = "<a>" : i[12] || i[14] ? n = "<" + (o = "h" + (i[14] ? i[14].length : i[13] > "=" ? 1 : 2)) + ">" + L(i[12] || i[15], d) + "</" + o + ">" : i[16] ? n = "<code>" + w(i[16]) + "</code>" : (i[17] || i[1]) && (n = p(i[17] || "--"))),
                c += r,
                c += n;
            return (c + t.substring(u) + C()).replace(/^\n+|\n+$/g, "")
        }
        const b = (t, e) => e.map(t).join("\n")
          , x = ({data: t}) => `<blockquote>\n                <p>${null == t ? void 0 : t.text}</p>\n                <span>${null == t ? void 0 : t.caption}</span>\n            </blockquote>`
          , j = ({renderer: t}) => ({data: e}) => {
            const {url: n, rel: i, target: s, label: o} = e;
            return `<div class='buttonToolWrapper'>\n                <a\n                class="buttonTool"\n                ${i ? 'rel="nofollow"' : ""}\n                ${t !== r.B && t !== r.P && n ? /^https?:\/\/|^\//.test(n) ? `href="${n}"` : `href"http://${n}"` : ""}\n                target="${s ? "_blank" : "_self"}"\n                >\n                    <span>\n                        ${o}\n                    </span>\n                </a>\n            </div>`
        }
          , M = ({data: t}) => {
            let e = L(t.caption || "")
              , n = `<img src="${t.file.url}" alt="${void 0 === t.alt ? t.caption : t.alt}" />`;
            if (null != t && t.url) {
                const e = [];
                t.newTab && e.push('target="_blank"'),
                t.noFollow && e.push('rel="nofollow"'),
                n = `<a href="${t.url}" ${e.join(" ")}>${n}</a>`
            }
            return `<figure>\n                ${n}\n                ${e && `<figcaption>\n                ${e}\n                </figcaption>`}\n\n            </figure>`
        }
          , E = () => ""
          , N = () => '\n            <div class="grandParent-hr">\n                <div class="rte-hr-wrapper">\n                    <hr class="rte-hr">\n                </div>\n            </div>\n    '
          , k = ({data: {html: t}}) => `<div class='html--raw'>${t}</div>`
          , _ = ({data: t}) => {
            const {withHeadings: e, content: n} = t
              , r = e ? `\n    <thead>\n        <tr>\n           ${b((t => `<th >${t}</th>`), n[0])}\n        </tr>\n    </thead>\n    ` : ""
              , i = e ? n.slice(1) : n;
            return `<table>\n                ${r}\n                ${i.length ? `<tbody>\n            ${b((t => `<tr>${b((t => `<td>${t}</td>`), t)}</tr>`), i)}\n        </tbody>` : ""}\n            </table>`
        }
          , S = (t, e, n) => {
            const r = "unordered" === e ? "ul" : "ol";
            return `<${r} class=${n}>\n        ${i = t,
            i.map((t => {
                if (t.items.length > 0) {
                    const n = S(t.items, e, '"cdx-nested-list cdx-nested-list__item-children"');
                    return `<li class="cdx-nested-list__item">\n                            <div class="cdx-nested-list__item-body">\n                                <div class="cdx-nested-list__item-content">\n                                    ${t.content}\n                                </div>\n                            ${n}\n                            </div>\n                        </li>`
                }
                return `<li class="cdx-nested-list__item">\n                            <div class="cdx-nested-list__item-body">\n                                <div class="cdx-nested-list__item-content">\n                                    ${t.content}\n                                </div>\n                            </div>\n                        </li>`
            }
            )).join("")}\n    </${r}>`;
            var i
        }
          , A = ({data: t}) => {
            const {items: e, style: n} = (t => {
                const {items: e, ...n} = t;
                return e.length > 0 && "string" == typeof e[0] ? {
                    items: e.map((t => ({
                        content: t,
                        items: []
                    }))),
                    ...n
                } : t
            }
            )(t);
            return `<div class="nestedlist">${S(e, n, "cdx-nested-list")}</div>`
        }
          , T = (t, e={}) => {
            var n;
            const {isGatedContent: r, isFullPage: i, renderer: s} = (null == (n = e.data) ? void 0 : n.edjsOptions) || {};
            if (!t)
                return;
            const o = l()({
                quote: x,
                image: M,
                table: _,
                raw: k,
                publicPreview: E,
                delimiter: N,
                list: A,
                buttonTool: j({
                    renderer: s
                }),
                header: t => ( ({data: {text: t, level: e, id: n}}, r) => {
                    let i = n && e < 4 && "BUILDER" !== r
                      , s = `h${e}`;
                    return `<${s} ${i ? `class="linkable_heading" id="${n}"` : ""}>${i ? `<a class="cpy_icon"  href="#${n}"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>` : ""} <span>${t}</span></${s}>`
                }
                )(t, s),
                tableOfContent: t => ( ({data: t={}}, e) => `\n        <div class="table-of-content">\n            ${t.caption && `<p class="caption">${t.caption}</p>`}\n            <ul>\n                ${t.blocks.map(( ({data: {id: t, text: n=""}}) => (n = n.replace(/<[^>]*>/g, ""),
                `<li><a ${t && "BUILDER" !== e ? `href="#${t}"` : ""}>${n}</a></li>`))).join("\n")}\n            </ul>\n        </div>`)(t, s)
            });
            return t = "object" == typeof t ? t : JSON.parse(t),
            r && i && (t = ( ({editorContent: t, from: e=0, to: n}) => {
                n = n || t.blocks.findIndex((t => "publicPreview" === t.type));
                const r = t.blocks.slice(e, Math.max(n, 0));
                return {
                    time: t.time,
                    version: t.version,
                    blocks: r
                }
            }
            )({
                editorContent: t
            })),
            o.parse(t).join("")
        }
          , Z = (t, e, n) => {
            if (!t)
                return "";
            try {
                return o().compile(t)(e, {
                    data: n
                })
            } catch (r) {
                console.error(r)
            }
        }
          , I = {
            title: "{{meta.title}}",
            description: "{{meta.description}}",
            keywords: "{{meta.keywords}}",
            "og:title": "{{meta.opengraph.title}}",
            "og:description": "{{meta.opengraph.description}}",
            "og:image": "{{meta.opengraph.image}}",
            "twitter:card": "{{meta.twitter.card}}",
            "twitter:title": "{{meta.twitter.title}}",
            "twitter:description": "{{meta.twitter.description}}",
            "twitter:image": "{{meta.twitter.image}}"
        };
        o().registerHelper("longDate", ( (t, e) => {
            var n;
            const i = null == (n = e.data) ? void 0 : n.format;
            return (0,
            r.l)(t, i)
        }
        )),
        o().registerHelper("authorsName", (t => t.map((t => t.name)).join(", "))),
        o().registerHelper("edjsRichText", T);
        const O = () => {
            const t = (0,
            i.useContext)(f)
              , e = null == t ? void 0 : t.data;
            return {
                data: e,
                hasCMSData: !!e,
                renderContent: (t="", n={}) => e ? Z(t, e, n) : t
            }
        }
          , $ = typeof window < "u"
          , V = (t="dorik-builder-iframe") => (0,
        i.useMemo)(( () => {
            if (!$)
                return {};
            const e = document.getElementById(t);
            if (!e)
                return {
                    contentDocument: document,
                    contentWindow: window
                };
            const {contentDocument: n, contentWindow: r} = e;
            return {
                contentDocument: n,
                contentWindow: r
            }
        }
        ), [t])
          , R = (0,
        i.createContext)({});
        function P({children: t, value: e}) {
            const [n,s] = (0,
            i.useState)("")
              , [o,a] = (0,
            i.useState)({})
              , {contentDocument: l, contentWindow: c} = V()
              , {exitIntentPopup: d={}, onloadPopup: u={}} = (null == e ? void 0 : e.popupSetting) || {}
              , p = () => {
                let t = localStorage.getItem(`${r.E}-${d.id}-${d.suffixId}`);
                d.id && !t && (s(d.id),
                a((t => ({
                    ...t,
                    exitIntent: d
                }))))
            }
              , C = () => {
                let t = localStorage.getItem(`${r.O}-${u.id}-${u.suffixId}`);
                u.id && !t && (s(u.id),
                a((t => ({
                    ...t,
                    onload: u
                }))))
            }
            ;
            return (0,
            i.useEffect)(( () => (l.addEventListener("mouseleave", p),
            c.addEventListener("load", C),
            () => {
                l.removeEventListener("mouseleave", p),
                window.removeEventListener("load", C)
            }
            )), []),
            r.j.jsx(R.Provider, {
                value: {
                    modalId: n,
                    updateModalId: t => {
                        s(t)
                    }
                    ,
                    modalFor: o,
                    setModalFor: a
                },
                children: t
            })
        }
        function H(t, e) {
            var n, r;
            const i = "image" == (null == (n = t.style) ? void 0 : n.__backgroundType) ? null == (r = t.attr) ? void 0 : r.__class__overlayType : "";
            return `${e.replace(/color-overlay|gradient-overlay/g, "").trim()} ${i}`.trim()
        }
        function B(t) {
            var e, n, s;
            let {renderer: o, item: a, className: l} = t;
            l = H(a, l);
            const c = o === r.B
              , {data: d} = O()
              , u = (0,
            i.useContext)(m);
            let p = a.content;
            if ("nestedRow" === a.component_label) {
                const t = null == (e = a.configuration) ? void 0 : e.selectedField;
                if (null != (n = a.content) && n.length && t && (u || d)[t]) {
                    const e = a.content[0];
                    p = null != (s = (u || d)[t]) && s.length ? (u || d)[t].map((t => ({
                        ...e,
                        singleField: t,
                        isNestedCmsColumn: !0
                    }))) : "No Data Found"
                }
            }
            return r.j.jsx(h, {
                value: d,
                children: c ? r.j.jsx(D, {
                    props: {
                        ...t,
                        className: l
                    },
                    content: p
                }) : r.j.jsx(U, {
                    props: {
                        ...t,
                        className: l
                    },
                    content: p
                })
            })
        }
        const F = ({children: t, renderer: e, content: n}) => "string" == typeof n ? e ? r.j.jsx("p", {
            children: n
        }) : null : i.Children.map(t, (t => i.cloneElement(t, {
            content: n
        })))
          , U = ({props: t, content: e=[]}) => {
            const [n,s] = (0,
            i.useState)(!1)
              , {className: o, renderer: a, item: l, attrs: d, wrapperClass: u} = t
              , p = "row" === l.type || "cmsRow" === l.type
              , {settings: C={}, attr: f={}} = l
              , h = C.popup && n
              , m = p && "nestedRow" !== l.component_label;
            let g = m ? "container" : "";
            (0,
            i.useContext)(r.C),
            m && l.wrapper && "100%" === l.wrapper.width && (g = "container-fluid");
            const {modalId: v, updateModalId: y, modalFor: {exitIntent: w={}, onload: L={}}={}} = (0,
            i.useContext)(R)
              , b = t => {
                Object.keys(localStorage).map((e => {
                    e.startsWith(`${t}-${d.id}`) && localStorage.removeItem(e)
                }
                ))
            }
            ;
            return (0,
            i.useEffect)(( () => {
                f.id && v === f.id ? s(!0) : s(a === r.B && C.popupPreview)
            }
            ), [v, n, C.popupPreview]),
            r.j.jsx("div", {
                className: "" + (h ? `row-${f.id}-overlay` : ""),
                children: r.j.jsxs("div", {
                    className: `${g} ${u}  ${C.popup ? `${r.p}-popup-${l.id}` : ""} ${h ? `modal-${f.id}-visible` : ""}`,
                    ...d,
                    children: [C.popup ? r.j.jsx("span", {
                        className: `close-btn-${f.id} ${h ? "btn-visible" : ""}`,
                        onClick: () => {
                            let t = `${r.E}-${d.id}-${w.suffixId}`
                              , e = `${r.O}-${d.id}-${L.suffixId}`;
                            (null == w ? void 0 : w.id) === d.id && !(null != w && w.repeatedly) && (b(r.E),
                            localStorage.setItem(t, "disable")),
                            (null == L ? void 0 : L.id) === d.id && (null == L || !L.repeatedly) && (b(r.O),
                            localStorage.setItem(e, "disable"));
                            const n = document.querySelectorAll(`.${r.p}-popup-${l.id} video`);
                            n.length && n.forEach((t => {
                                t.pause(),
                                t.currentTime = 0
                            }
                            )),
                            y("")
                        }
                        ,
                        children: r.j.jsx(c.I, {
                            iconArgs: {
                                prefix: "fas",
                                iconName: "times",
                                type: "font-awesome"
                            },
                            exClass: "fa-2x"
                        })
                    }) : null, r.j.jsx("div", {
                        className: o + " flex  " + (C.popup ? "popup-row" : ""),
                        children: F({
                            ...t,
                            content: e
                        })
                    })]
                })
            })
        }
          , D = ({props: t, content: e=[]}) => {
            const {className: n, item: s={}, attrs: o, wrapperClass: a} = t
              , {attr: l={}, settings: c={}} = s;
            return "row" === s.type && "nestedRow" !== s.component_label && s.wrapper && s.wrapper.width,
            r.j.jsx(r.j.Fragment, {
                children: c.popupPreview && c.popup ? r.j.jsxs(i.Fragment, {
                    children: [r.j.jsxs("div", {
                        className: "empty-popup-row",
                        children: ["Preview Popup Row - $", l.id]
                    }), r.j.jsx(U, {
                        props: t,
                        content: e
                    })]
                }) : r.j.jsxs(i.Fragment, {
                    children: [(null == c ? void 0 : c.popup) && r.j.jsx("div", {
                        className: "builder-popup-row-indicator",
                        children: r.j.jsxs("span", {
                            children: ["POPUP ROW ", l.id ? `- ${l.id}` : null]
                        })
                    }), r.j.jsx("div", {
                        className: `${a}`,
                        ...o,
                        children: r.j.jsx("div", {
                            className: `${n} flex`,
                            children: F({
                                ...t,
                                content: e
                            })
                        })
                    })]
                })
            })
        }
        ;
        var z = function(t, e, n, r) {
            var i = -1
              , s = null == t ? 0 : t.length;
            for (r && s && (n = t[++i]); ++i < s; )
                n = e(n, t[i], i, t);
            return n
        };
        var G = function(t) {
            return function(e) {
                return null == t ? void 0 : t[e]
            }
        }
          , Y = G({
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
        })
          , X = "object" == typeof r.c && r.c && r.c.Object === Object && r.c
          , q = X
          , W = "object" == typeof self && self && self.Object === Object && self
          , K = q || W || Function("return this")()
          , J = K.Symbol;
        var Q = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
                i[n] = e(t[n], n, t);
            return i
        }
          , tt = Array.isArray
          , et = J
          , nt = Object.prototype
          , rt = nt.hasOwnProperty
          , it = nt.toString
          , st = et ? et.toStringTag : void 0;
        var ot = function(t) {
            var e = rt.call(t, st)
              , n = t[st];
            try {
                t[st] = void 0;
                var r = !0
            } catch {}
            var i = it.call(t);
            return r && (e ? t[st] = n : delete t[st]),
            i
        }
          , at = Object.prototype.toString;
        var lt = function(t) {
            return at.call(t)
        }
          , ct = ot
          , dt = lt
          , ut = J ? J.toStringTag : void 0;
        var pt = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ut && ut in Object(t) ? ct(t) : dt(t)
        };
        var Ct = function(t) {
            return null != t && "object" == typeof t
        }
          , ft = pt
          , ht = Ct;
        var mt = function(t) {
            return "symbol" == typeof t || ht(t) && "[object Symbol]" == ft(t)
        }
          , gt = Q
          , vt = tt
          , yt = mt
          , wt = J ? J.prototype : void 0
          , Lt = wt ? wt.toString : void 0;
        var bt = function t(e) {
            if ("string" == typeof e)
                return e;
            if (vt(e))
                return gt(e, t) + "";
            if (yt(e))
                return Lt ? Lt.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -Infinity ? "-0" : n
        }
          , xt = bt;
        var jt = function(t) {
            return null == t ? "" : xt(t)
        }
          , Mt = Y
          , Et = jt
          , Nt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
          , kt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        var _t = function(t) {
            return (t = Et(t)) && t.replace(Nt, Mt).replace(kt, "")
        }
          , St = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var At = function(t) {
            return t.match(St) || []
        }
          , Tt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var Zt = function(t) {
            return Tt.test(t)
        }
          , It = "\\ud800-\\udfff"
          , Ot = "\\u2700-\\u27bf"
          , $t = "a-z\\xdf-\\xf6\\xf8-\\xff"
          , Vt = "A-Z\\xc0-\\xd6\\xd8-\\xde"
          , Rt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
          , Pt = "[" + Rt + "]"
          , Ht = "\\d+"
          , Bt = "[" + Ot + "]"
          , Ft = "[" + $t + "]"
          , Ut = "[^" + It + Rt + Ht + Ot + $t + Vt + "]"
          , Dt = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , zt = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , Gt = "[" + Vt + "]"
          , Yt = "(?:" + Ft + "|" + Ut + ")"
          , Xt = "(?:" + Gt + "|" + Ut + ")"
          , qt = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?"
          , Wt = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?"
          , Kt = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?"
          , Jt = "[\\ufe0e\\ufe0f]?"
          , Qt = Jt + Kt + ("(?:\\u200d(?:" + ["[^" + It + "]", Dt, zt].join("|") + ")" + Jt + Kt + ")*")
          , te = "(?:" + [Bt, Dt, zt].join("|") + ")" + Qt
          , ee = RegExp([Gt + "?" + Ft + "+" + qt + "(?=" + [Pt, Gt, "$"].join("|") + ")", Xt + "+" + Wt + "(?=" + [Pt, Gt + Yt, "$"].join("|") + ")", Gt + "?" + Yt + "+" + qt, Gt + "+" + Wt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ht, te].join("|"), "g");
        var ne = function(t) {
            return t.match(ee) || []
        }
          , re = At
          , ie = Zt
          , se = jt
          , oe = ne;
        var ae = function(t, e, n) {
            return t = se(t),
            void 0 === (e = n ? void 0 : e) ? ie(t) ? oe(t) : re(t) : t.match(e) || []
        }
          , le = z
          , ce = _t
          , de = ae
          , ue = RegExp("['\u2019]", "g");
        var pe = function(t) {
            return function(e) {
                return le(de(ce(e).replace(ue, "")), t, "")
            }
        }
          , Ce = pe((function(t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase()
        }
        ))
          , fe = Ce;
        const he = (0,
        r.g)(fe);
        const me = t => "popup" === t ? "popup-btn" : "";
        function ge(t="") {
            if ("string" != typeof t)
                return t;
            return t.replace(/{{(.*?)}}/g, "{{{$1}}}")
        }
        function ve(t, e="") {
            const n = e
              , {renderContent: s, data: o} = O()
              , {getPageSlug: a} = (0,
            i.useContext)(r.C);
            if ("" === e)
                return "#";
            switch (!t && e.startsWith("#") && (t = "section"),
            e = s(e),
            t) {
            case "mailto":
                return `mailto:${e}`;
            case "tel":
                return `tel:${e}`;
            case "section":
            case "popup":
                return e.startsWith("#") ? e : `#${e}`;
            case "page":
                return function(t) {
                    const e = a(t);
                    return "/" + ("index" === (null == e ? void 0 : e.toLocaleLowerCase()) ? "" : e)
                }(e);
            case "cms-itemSlug":
                return function(t) {
                    const e = {
                        ...o
                    }
                      , n = /{{(\w+)\.\w+}}/g.exec(t)
                      , r = Array.isArray(n) && n[1]
                      , i = null == e ? void 0 : e[r]
                      , s = t => null != t && t._topicSlug ? {
                        ...t,
                        slug: `/${t._topicSlug}/${t.slug}`
                    } : t;
                    i && (e[r] = s(i));
                    const a = s(e);
                    return a ? Z(ge(t), a) : t
                }(n);
            default:
                return /^https?:\/\/|^\//.test(e) ? e : `http://${e}`
            }
        }
        const ye = () => {
            const {interactionDisabled: t} = (0,
            i.useContext)(r.C)
              , e = {};
            return t && (e.onClick = t => t.preventDefault()),
            {
                interactionProps: e,
                interactionDisabled: t
            }
        }
          , we = ({hrefType: t, noFollow: e, hrefValue: n, hrefTarget: r}) => {
            const {interactionDisabled: i, interactionProps: s} = ye()
              , o = {
                href: ve(t, n) || "#",
                ...s,
                ...e && {
                    rel: "nofollow"
                }
            };
            return !i && "_blank" === r && (o.target = "_blank",
            o.rel = e ? "nofollow noreferrer" : "noreferrer"),
            o
        }
        ;
        function Le(t) {
            const e = {};
            return function(t=[]) {
                return t.map((t => {
                    const [e,n=e] = t.split("=");
                    if (e) {
                        return {
                            key: e,
                            value: n.replace(/["']/g, "")
                        }
                    }
                }
                ))
            }(t).filter((t => t)).forEach((t => e[t.key] = t.value)),
            e
        }
        function be({item: t, attrs: e, renderer: n, className: s, wrapperClass: o, interactionDisabled: a}) {
            var l;
            const {id: c, brand: u, btn: p, links: C, toggle: f, settings: h={}} = t
              , {sticky: m} = h
              , {contentDocument: g, contentWindow: v} = V()
              , y = m ? "sticky-nav" : ""
              , w = ( () => {
                var t;
                return null != (t = null == p ? void 0 : p.items) && t.length ? p.items.map(( (t, e) => r.j.jsx(je, {
                    item: t
                }, e))) : null
            }
            )();
            return (0,
            i.useEffect)(( () => {
                !function(t) {
                    var e;
                    const n = `.dorik-nav-${c}`
                      , r = t.querySelector(n)
                      , i = r.querySelector(".dorik-navbar--toggle")
                      , s = i.nextElementSibling
                      , o = (null == (e = r.parentNode) ? void 0 : e.clientWidth) < 768;
                    function a(t) {
                        if (!t)
                            return;
                        t.classList.add("show");
                        const e = t.clientHeight + "px";
                        o && t.classList.add("collapsing"),
                        setTimeout(( () => {
                            t.style.height = e
                        }
                        ), 0),
                        setTimeout(( () => {
                            t.style.height = null,
                            t.classList.remove("collapsing")
                        }
                        ), 350)
                    }
                    function l(t) {
                        t && (t.style.height = t.clientHeight + "px",
                        o && t.classList.add("collapsing"),
                        setTimeout(( () => {
                            t.style.height = null
                        }
                        ), 0),
                        setTimeout(( () => {
                            t.classList.remove("show"),
                            t.classList.remove("collapsing")
                        }
                        ), 350))
                    }
                    i && i.addEventListener("click", (function() {
                        s.classList.contains("show") ? l(s) : a(s)
                    }
                    )),
                    s.addEventListener("click", (function(t) {
                        var e;
                        let n = null == (e = t.target.parentNode) ? void 0 : e.nextElementSibling;
                        const r = null == n ? void 0 : n.classList.contains("show");
                        t.target.closest("a") && !t.target.closest(".is-dropdown") ? o && l(s) : t.target.closest("a") && t.target.closest(".is-dropdown") && (r ? l(n) : a(n))
                    }
                    )),
                    t.querySelectorAll(".dorik-nav--dropdown").forEach((t => {
                        null == t || t.addEventListener("click", ( () => {
                            l(s),
                            l(t)
                        }
                        ))
                    }
                    ))
                }(g || document)
            }
            ), []),
            (0,
            i.useEffect)(( () => {
                if (!m || n === r.B)
                    return;
                const t = g || document
                  , e = v || window
                  , i = `.dorik-nav-${c}`;
                var s = t.querySelector(i);
                if (s) {
                    var o = 0
                      , a = !1;
                    t.addEventListener("scroll", (function() {
                        o = e.scrollY,
                        a || (e.requestAnimationFrame((function() {
                            (function(t) {
                                var e = s.parentNode
                                  , n = e.classList
                                  , r = t <= 50 && n.contains("sticky");
                                if (t > 50 && !n.contains("sticky")) {
                                    var i = e.clientHeight;
                                    e.style.top = "-" + i + "px",
                                    setTimeout(( () => {
                                        e.classList.add("sticky"),
                                        s.closest(".container-fluid") || s.classList.add("container"),
                                        e.style.top = null
                                    }
                                    ), 0)
                                } else
                                    r && (e.classList.remove("sticky"),
                                    s.classList.remove("container"))
                            }
                            )(o),
                            a = !1
                        }
                        )),
                        a = !0)
                    }
                    ))
                }
            }
            ), [m, n]),
            r.j.jsx("div", {
                className: `${r.p}-navbar--wrapper ${o} ${y}`,
                children: r.j.jsxs("div", {
                    className: `${r.p}-navbar ${s}`,
                    ...e,
                    children: [r.j.jsx("div", {
                        className: `${r.p}-navbar--brand`,
                        children: ( () => {
                            var t;
                            return null != u && u.logo ? r.j.jsx("a", {
                                href: a ? "#" : u.url,
                                onClick: t => a && t.preventDefault(),
                                children: r.j.jsx("img", {
                                    src: u.logo,
                                    alt: u.logoAlt,
                                    width: null == (t = u.style) ? void 0 : t.width
                                })
                            }) : null
                        }
                        )()
                    }), r.j.jsxs("button", {
                        "aria-label": "Navbar Toggle",
                        className: `${r.p}-navbar--toggle`,
                        "data-target": `#${r.p}NavbarCollapse`,
                        children: [r.j.jsx(d.G, {
                            fixedWidth: !0,
                            icon: ["fas", "bars"]
                        }), " ", null == f ? void 0 : f.text]
                    }), r.j.jsx("div", {
                        className: `${r.p}-navbar--collapse collapse`,
                        id: `${r.p}NavbarCollapse`,
                        children: r.j.jsxs("div", {
                            className: `${r.p}-navbar--navs`,
                            children: [null != (l = null == C ? void 0 : C.items) && l.length ? r.j.jsx("ul", {
                                className: `${r.p}-nav--links normalize`,
                                children: C.items.map(( (t, e) => r.j.jsx(xe, {
                                    link: t
                                }, e)))
                            }) : null, w && r.j.jsx("ul", {
                                className: `${r.p}-nav--btns normalize`,
                                children: w
                            })]
                        })
                    })]
                })
            })
        }
        function xe({link: t}) {
            var e, n, i, s, o, a, l;
            const c = we({
                hrefType: null == (e = t.settings) ? void 0 : e.hrefType,
                noFollow: null == (n = t.settings) ? void 0 : n.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            });
            return null != (i = t.settings) && i.dropdown && (c.onClick = t => t.preventDefault()),
            r.j.jsxs("li", {
                className: null != (s = t.settings) && s.dropdown ? "is-dropdown" : "",
                children: [r.j.jsxs("a", {
                    ...c,
                    className: `${r.p}-nav--link ${he(t.label)}  ${me(null == (o = t.settings) ? void 0 : o.hrefType)}`,
                    ...Le(t.data),
                    children: [t.icon && r.j.jsx("span", {
                        className: "dorik-nav--link-icon",
                        children: r.j.jsx(d.G, {
                            fixedWidth: !0,
                            icon: t.icon
                        })
                    }), r.j.jsx("span", {
                        className: "dorik-nav--link-text",
                        children: t.label
                    })]
                }), (null == (a = t.settings) ? void 0 : a.dropdown) && (null == (l = t.nested) ? void 0 : l.length) && r.j.jsx("ul", {
                    className: "dorik-nav--dropdown collapse",
                    children: t.nested.map(( (t, e) => r.j.jsx(Me, {
                        item: t
                    }, e)))
                })]
            })
        }
        function je({item: t}) {
            var e, n, s;
            const o = we({
                hrefType: null == (e = t.settings) ? void 0 : e.hrefType,
                noFollow: null == (n = t.settings) ? void 0 : n.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            })
              , {updateModalId: a} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                children: r.j.jsxs("a", {
                    className: `${r.p}-nav--btn ${r.p}-nav--btn-${t.id} ${he(t.label)} ${me(null == (s = t.settings) ? void 0 : s.hrefType)}`,
                    ...Le(t.data),
                    onClick: () => {
                        var e;
                        "popup" === (null == (e = t.settings) ? void 0 : e.hrefType) && a(t.url)
                    }
                    ,
                    ...o,
                    children: [t.icon && r.j.jsx("span", {
                        className: "dorik-nav--btn-icon",
                        children: (l = t.icon,
                        l ? r.j.jsx(d.G, {
                            fixedWidth: !0,
                            icon: l
                        }) : null)
                    }), r.j.jsx("span", {
                        className: "dorik-nav--btn-text",
                        children: t.label
                    })]
                })
            });
            var l
        }
        function Me({item: t}) {
            var e, n, i;
            const s = we({
                hrefType: null == (e = t.settings) ? void 0 : e.hrefType,
                noFollow: null == (n = t.settings) ? void 0 : n.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            });
            return r.j.jsx("li", {
                className: "dropdown-item",
                children: r.j.jsxs("a", {
                    ...s,
                    className: me(null == (i = t.settings) ? void 0 : i.hrefType),
                    children: [t.icon && r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx(d.G, {
                            fixedWidth: !0,
                            icon: t.icon,
                            className: "dropdown-icon"
                        }), r.j.jsx("span", {
                            className: "dropdown-icon-gap"
                        })]
                    }), r.j.jsx("span", {
                        className: "dropdown-text",
                        children: t.label
                    })]
                })
            })
        }
        function Ee({item: t, attrs: e, control: n={}, renderer: s, shouldType: o, className: a, wrapperClass: l, interactionDisabled: d, InteractiveComponent: u}) {
            var p, C;
            const {id: f, brand: h, btn: m, links: g, toggle: v, settings: y={}, media: w={}} = t
              , L = null == (p = null == v ? void 0 : v.icon) ? void 0 : p.icon
              , b = null != v && v.icon ? {} : {
                prefix: "fas",
                iconName: "bars",
                type: "font-awesome"
            }
              , {sticky: x} = y
              , j = s === r.B
              , {contentDocument: M, contentWindow: E} = V()
              , N = x ? "sticky-nav" : ""
              , k = ( () => {
                var t;
                return null != (t = null == m ? void 0 : m.items) && t.length ? m.items.map(( (t, e) => r.j.jsx(ke, {
                    item: t,
                    isBuilder: j,
                    InteractiveComponent: u,
                    shouldType: o
                }, e))) : null
            }
            )();
            return (0,
            i.useEffect)(( () => {
                if (s === r.B)
                    return;
                const t = M || document
                  , e = e => {
                    var n = e.target.closest("a")
                      , r = null == n ? void 0 : n.hash
                      , i = t.querySelector(".sticky-nav")
                      , s = t.querySelector(`.dorik-nav-${f}`)
                      , o = t.querySelector(".dorik-navbar--collapse.show");
                    if (r) {
                        var a = n.href.match(/(^https?:.+)#/)
                          , l = n.baseURI.match(/(^https?:.+)#?/);
                        if (a = a && a[1],
                        l = l && l[1],
                        a && l && l.includes(a)) {
                            let n, a = function(t, e=500) {
                                let n, r = 0;
                                const i = s => {
                                    clearTimeout(n),
                                    n = setTimeout(t, e);
                                    const o = s.timeStamp;
                                    r && o - r >= 100 && (clearTimeout(n),
                                    removeEventListener("scroll", i)),
                                    r = o
                                }
                                ;
                                return addEventListener("scroll", i),
                                () => {
                                    removeEventListener("scroll", i),
                                    clearTimeout(n)
                                }
                            }, l = function() {
                                n.scrollIntoView({
                                    block: "start",
                                    behavior: "smooth"
                                })
                            };
                            try {
                                n = t.querySelector(r)
                            } catch {
                                return
                            }
                            if (!n)
                                return;
                            e.preventDefault();
                            var c = (null == o ? void 0 : o.clientHeight) || 0
                              , d = (null == s ? void 0 : s.clientHeight) - c;
                            i && (n.style.scrollMarginTop = d + "px"),
                            l();
                            const u = a(( () => {
                                l(),
                                u()
                            }
                            ))
                        }
                    }
                }
                ;
                return t.addEventListener("click", e),
                () => t.removeEventListener("click", e)
            }
            ), [x, s]),
            (0,
            i.useEffect)(( () => {
                !function(t) {
                    const e = `.dorik-nav-${f}`
                      , n = t.querySelector(e)
                      , r = n.querySelector(".dorik-navbar--toggle")
                      , i = r.nextElementSibling
                      , s = t.body.clientWidth < (null != v && v["hamburger-tab"] ? 1024 : 768);
                    r && r.addEventListener("click", (function() {
                        i.classList.contains("show") ? u(i) : d(i)
                    }
                    ));
                    const o = n.querySelectorAll(".is-dropdown>a");
                    o.length && o.forEach((t => {
                        t.addEventListener("click", (function(t) {
                            var e;
                            t.preventDefault();
                            let n = null == (e = t.target.closest("a")) ? void 0 : e.nextElementSibling;
                            const r = null == n ? void 0 : n.classList.contains("show");
                            s && (o.forEach((t => {
                                var e;
                                let n = null == (e = t.closest("a")) ? void 0 : e.nextElementSibling;
                                n && n.classList.contains("show") && u(n)
                            }
                            )),
                            r ? u(n) : d(n))
                        }
                        ))
                    }
                    ));
                    const a = n.querySelectorAll(".dorik-nav--dropdown")
                      , l = n.querySelectorAll(".dorik-nav--btns")
                      , c = n.querySelectorAll("li:not(.is-dropdown) .dorik-nav--link");
                    function d(t) {
                        if (!t)
                            return;
                        t.classList.add("show");
                        const e = t.clientHeight + "px";
                        s && t.classList.add("collapsing"),
                        setTimeout(( () => {
                            t.style.height = e
                        }
                        ), 0),
                        setTimeout(( () => {
                            t.style.height = null,
                            t.classList.remove("collapsing")
                        }
                        ), 350)
                    }
                    function u(t) {
                        t && (t.style.height = t.clientHeight + "px",
                        s && t.classList.add("collapsing"),
                        setTimeout(( () => {
                            t.style.height = null
                        }
                        ), 0),
                        setTimeout(( () => {
                            t.classList.remove("show"),
                            t.classList.remove("collapsing")
                        }
                        ), 350))
                    }
                    [...l, ...a, ...c].forEach((t => {
                        null == t || t.addEventListener("click", ( () => {
                            u(i),
                            a.forEach((t => u(t)))
                        }
                        ))
                    }
                    ))
                }(M || document)
            }
            ), []),
            (0,
            i.useEffect)(( () => {
                if (!x || s === r.B)
                    return;
                const t = M || document
                  , e = E || window
                  , n = `.dorik-nav-${f}`;
                var i = t.querySelector(n);
                if (i) {
                    var o = 0
                      , a = !1;
                    t.addEventListener("scroll", (function() {
                        o = e.scrollY,
                        a || (e.requestAnimationFrame((function() {
                            (function(t) {
                                var e = i.parentNode
                                  , n = e.classList
                                  , r = t <= 50 && n.contains("sticky");
                                if (t > 50 && !n.contains("sticky")) {
                                    var s = e.clientHeight;
                                    e.style.top = "-" + s + "px",
                                    setTimeout(( () => {
                                        e.classList.add("sticky"),
                                        i.closest(".container-fluid") || i.classList.add("container"),
                                        e.style.top = null
                                    }
                                    ), 0)
                                } else
                                    r && (e.classList.remove("sticky"),
                                    i.classList.remove("container"))
                            }
                            )(o),
                            a = !1
                        }
                        )),
                        a = !0)
                    }
                    ))
                }
            }
            ), [x, s]),
            r.j.jsx("div", {
                className: `${r.p}-navbar--wrapper ${l} ${N}`,
                "data-testid": `navbar-${f}`,
                children: r.j.jsxs("div", {
                    className: `${r.p}-navbar ${a}`,
                    ...e,
                    ...n.props,
                    children: [( () => {
                        var t;
                        return null != h && h.logo ? r.j.jsx("div", {
                            className: `${r.p}-navbar--brand`,
                            children: r.j.jsx("a", {
                                href: d ? "#" : h.url,
                                onClick: t => d && t.preventDefault(),
                                children: r.j.jsx("img", {
                                    src: h.logo,
                                    alt: h.logoAlt,
                                    width: null == (t = h.style) ? void 0 : t.width
                                })
                            })
                        }) : null
                    }
                    )(), ( () => {
                        var t;
                        return r.j.jsxs("button", {
                            "aria-label": "Navbar Toggle",
                            className: `${r.p}-navbar--toggle`,
                            "data-target": `#${r.p}NavbarCollapse`,
                            children: [r.j.jsxs(r.j.Fragment, {
                                children: [r.j.jsx(c.I, {
                                    iconArgs: {
                                        ...L || b
                                    },
                                    icon: {
                                        stroke: null == (t = null == v ? void 0 : v.icon) ? void 0 : t.stroke
                                    }
                                }), " "]
                            }), null == v ? void 0 : v.text]
                        })
                    }
                    )(), r.j.jsx("div", {
                        className: `${r.p}-navbar--collapse collapse`,
                        id: `${r.p}NavbarCollapse`,
                        children: r.j.jsxs("div", {
                            className: `${r.p}-navbar--navs`,
                            children: [null != (C = null == g ? void 0 : g.items) && C.length ? r.j.jsx("ul", {
                                className: `${r.p}-nav--links normalize`,
                                children: g.items.map(( (t, e) => r.j.jsx(Ne, {
                                    link: t,
                                    isBuilder: j,
                                    InteractiveComponent: u,
                                    shouldType: o
                                }, e)))
                            }) : null, k && r.j.jsx("ul", {
                                className: `${r.p}-nav--btns normalize`,
                                children: k
                            })]
                        })
                    }), n.render && n.render()]
                })
            })
        }
        function Ne({link: t, isBuilder: e, InteractiveComponent: n, shouldType: s}) {
            var o, a, l, d, u, p, C, f;
            const h = null == (o = t.settings) ? void 0 : o.hrefType
              , m = we({
                hrefType: h,
                noFollow: null == (a = t.settings) ? void 0 : a.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            });
            null != (l = t.settings) && l.dropdown && (m.onClick = t => t.preventDefault());
            const {updateModalId: g} = (0,
            i.useContext)(R);
            return r.j.jsxs("li", {
                className: null != (d = t.settings) && d.dropdown ? "is-dropdown" : "",
                children: [r.j.jsxs("a", {
                    ...m,
                    onClick: e => {
                        "popup" === h && (e.preventDefault(),
                        g(t.url))
                    }
                    ,
                    className: `${r.p}-nav--link ${he(t.label)} ${r.p}-nav--link-${t.id}  ${me(null == (u = t.settings) ? void 0 : u.hrefType)}`,
                    ...Le(t.data),
                    children: [t.icon && r.j.jsx("span", {
                        className: "dorik-nav--link-icon",
                        children: r.j.jsx(c.I, {
                            iconArgs: null == (p = null == t ? void 0 : t.icon) ? void 0 : p.icon,
                            icon: t.icon
                        })
                    }), e ? r.j.jsx(n, {
                        className: "dorik-nav--btn-text",
                        as: "span",
                        typekey: `dorik-nav--btn-text-${t.id}`,
                        shouldType: s,
                        strings: [t.label]
                    }) : r.j.jsx("span", {
                        className: "dorik-nav--link-text",
                        children: t.label
                    })]
                }), null != (C = t.settings) && C.dropdown && null != (f = null == t ? void 0 : t.nested) && f.length ? r.j.jsx("ul", {
                    className: "dorik-nav--dropdown collapse",
                    children: t.nested.map(( (t, e) => r.j.jsx(_e, {
                        item: t
                    }, e)))
                }) : null]
            })
        }
        function ke({item: t, isBuilder: e, InteractiveComponent: n, shouldType: s}) {
            var o, a, l;
            const d = we({
                hrefType: null == (o = t.settings) ? void 0 : o.hrefType,
                noFollow: null == (a = t.settings) ? void 0 : a.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            })
              , {updateModalId: u} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                children: r.j.jsxs("a", {
                    ...d,
                    className: `${r.p}-nav--btn ${r.p}-nav--btn-${t.id} ${he(t.label)} ${me(null == (l = t.settings) ? void 0 : l.hrefType)}`,
                    ...Le(t.data),
                    ...t.htmlId && {
                        id: t.htmlId
                    },
                    onClick: () => {
                        var e;
                        "popup" === (null == (e = t.settings) ? void 0 : e.hrefType) && u(t.url)
                    }
                    ,
                    children: [t.icon && r.j.jsx("span", {
                        className: "dorik-nav--btn-icon",
                        children: (p = t.icon,
                        p ? r.j.jsx(c.I, {
                            iconArgs: null == p ? void 0 : p.icon,
                            icon: p
                        }) : null)
                    }), e ? r.j.jsx(n, {
                        className: "dorik-nav--btn-text",
                        as: "span",
                        typekey: `dorik-nav--btn-text-${t.id}`,
                        shouldType: s,
                        strings: [t.label]
                    }) : r.j.jsx("span", {
                        className: "dorik-nav--btn-text",
                        children: t.label
                    })]
                })
            });
            var p
        }
        function _e({item: t}) {
            var e, n, s;
            const o = null == (e = t.settings) ? void 0 : e.hrefType
              , a = we({
                hrefType: o,
                noFollow: null == (n = t.settings) ? void 0 : n.noFollow,
                hrefValue: t.url,
                hrefTarget: t.target
            })
              , {updateModalId: l} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                className: "dropdown-item",
                children: r.j.jsxs("a", {
                    ...a,
                    className: me(null == (s = t.settings) ? void 0 : s.hrefType),
                    onClick: () => {
                        "popup" === o && l(t.url)
                    }
                    ,
                    children: [t.icon && r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx(c.I, {
                            iconArgs: t.icon.icon,
                            icon: t.icon
                        }), r.j.jsx("span", {
                            className: "dropdown-icon-gap"
                        })]
                    }), r.j.jsx("span", {
                        className: "dropdown-text",
                        children: t.label
                    })]
                })
            })
        }
        const Se = t => {
            const {item: e} = t
              , {version: n} = e;
            return "2.0.0" === n ? r.j.jsx(Ee, {
                ...t
            }) : r.j.jsx(be, {
                ...t
            })
        }
        ;
        function Ae({item: t, className: e}) {
            const {tags: {items: n}} = t;
            return r.j.jsx("div", {
                className: e,
                children: r.j.jsx("ul", {
                    children: n.map(( (t, e) => r.j.jsx(Te, {
                        item: t
                    }, e)))
                })
            })
        }
        Se.migration = (t, e) => {
            var n, r, i, s;
            const {version: o} = t
              , a = null == (n = null == t ? void 0 : t.links) ? void 0 : n.items
              , l = null == (r = null == t ? void 0 : t.btn) ? void 0 : r.items;
            let c = (null == (i = null == t ? void 0 : t.links) ? void 0 : i.items) || []
              , d = (null == (s = null == t ? void 0 : t.btn) ? void 0 : s.items) || [];
            a.length > 0 && (c = a.map((t => {
                var e;
                const n = {
                    ...t
                };
                return null === t.icon || void 0 === t.icon ? n.icon = {
                    visible: "font-awesome",
                    icon: null
                } : n.icon = {
                    visible: "font-awesome",
                    icon: {
                        type: "font-awesome",
                        ...t.icon
                    }
                },
                (null == (e = null == n ? void 0 : n.nested) ? void 0 : e.length) > 0 && (n.nested = n.nested.map((t => {
                    const e = {
                        ...t
                    };
                    return null === t.icon || void 0 === t.icon ? e.icon = {
                        visible: "font-awesome",
                        icon: null
                    } : e.icon = {
                        visible: "font-awesome",
                        icon: {
                            type: "font-awesome",
                            ...t.icon
                        }
                    },
                    e
                }
                ))),
                n
            }
            ))),
            l.length > 0 && (d = l.map((t => {
                const e = {
                    ...t
                };
                return null === t.icon || void 0 === t.icon ? e.icon = {
                    visible: "font-awesome",
                    icon: null
                } : e.icon = {
                    visible: "font-awesome",
                    icon: {
                        type: "font-awesome",
                        ...e.icon
                    }
                },
                e
            }
            ))),
            o || e([{
                name: "version",
                value: "2.0.0"
            }, {
                name: "links/items",
                value: c
            }, {
                name: "btn/items",
                value: d
            }])
        }
        ;
        const Te = ({item: t, attrs: e={}}) => {
            const {id: n, label: i, settings: s={}, url: o, target: a} = t
              , l = s.hrefType && o ? "a" : "span"
              , c = s.hrefType
              , d = we({
                hrefType: c,
                hrefValue: o,
                hrefTarget: a,
                noFollow: s.noFollow
            });
            return o && (e = {
                ...e,
                ...d
            }),
            r.j.jsx("li", {
                children: r.j.jsx(l, {
                    className: `tag tag-${n}`,
                    ...e,
                    children: i
                })
            })
        }
        ;
        Ae.shouldRender = ({item: {tags: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Ze = ({item: t={}, icon: e=["far", "laptop-code"], control: n={}}) => {
            const {style: i, ...s} = n.props || {};
            return r.j.jsxs("div", {
                "data-testid": "empty-block-element",
                ...s,
                style: {
                    padding: "20px",
                    borderRadius: "5px",
                    color: "#fff",
                    background: "#484B5E",
                    fontStyle: "italic",
                    ...i
                },
                children: [r.j.jsxs("h3", {
                    style: {
                        margin: 0,
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "24px",
                        textTransform: "capitalize"
                    },
                    children: ["Element: ", t.name]
                }), n.render && n.render()]
            })
        }
        ;
        function Ie({item: t, attrs: e, className: n, renderer: i, isAdmin: s, control: o={}, permission: a={}}) {
            const {renderContent: l} = O()
              , {advanced: c={}} = t
              , d = i === r.B || i === r.P;
            if (s || d)
                return r.j.jsx(Ze, {
                    item: t,
                    control: o
                });
            if ($ && !d && c.js && a.render("code") && !document.getElementById(`script-${n}`)) {
                const t = document.createElement("script");
                t.setAttribute("id", `script-${n}`),
                t.innerHTML = l(c.js),
                document.body.appendChild(t)
            }
            return r.j.jsxs("div", {
                ...e,
                ...o.props,
                className: n,
                children: [r.j.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: l(c.html || "")
                    }
                }), o.render && o.render()]
            })
        }
        function Oe({className: t, wrapperClass: e, item: n, attrs: s, control: o={}}) {
            const {icon: a={}, settings: l={}, attr: d={}} = n
              , {icon: u} = a
              , p = d.href ? "a" : "span"
              , C = l.inlineIcon ? "el-ib" : ""
              , f = we({
                hrefType: l.hrefType,
                hrefValue: null == d ? void 0 : d.href,
                noFollow: l.noFollow,
                hrefTarget: d.target
            });
            d.href && (s = {
                ...s,
                ...f
            });
            const {updateModalId: h} = (0,
            i.useContext)(R);
            return r.j.jsxs("div", {
                className: `${e} ${C}`,
                ...o.props,
                children: [r.j.jsx(p, {
                    onClick: () => {
                        "popup" === l.hrefType && h(null == d ? void 0 : d.href)
                    }
                    ,
                    className: `dorik-icon ${t} ${me(l.hrefType)}`,
                    ...s,
                    children: u && r.j.jsx(c.I, {
                        iconArgs: u,
                        icon: a
                    })
                }), o.render && o.render()]
            })
        }
        Ie.shouldRender = ({item: t, permission: e}) => {
            const {advanced: n={}} = t
              , {html: r=""} = n;
            return e.render(t.type) && r.trim()
        }
        ,
        Oe.shouldRender = ({item: {icon: t={}}}) => {
            const {icon: e} = t;
            return "simple" !== (null == e ? void 0 : e.prefix) && ((null == e ? void 0 : e.prefix) || (null == e ? void 0 : e.iconName))
        }
        ;
        const $e = () => Math.random().toString(36).substring(2, 10)
          , Ve = (t=1) => {
            const [e,n] = (0,
            i.useState)([]);
            return (0,
            i.useEffect)(( () => {
                const e = Array.from({
                    length: t
                }, $e);
                n(e)
            }
            ), [t]),
            e
        }
        ;
        function Re({item: t, attrs: e, address: n, renderer: s, children: o, className: a, date: l={}, shouldType: c, control: d={}, InteractiveComponent: u}) {
            const {renderContent: p} = O()
              , [C] = Ve()
              , f = (null == t ? void 0 : t.date) || l;
            return s === r.B ? r.j.jsxs("div", {
                className: `dorik-text ${a}`,
                ...d.props,
                children: [r.j.jsx(u, {
                    ...e,
                    as: "span",
                    typekey: `${a}-text`,
                    inlineEditor: !0,
                    address: n,
                    shouldType: c,
                    strings: [p(o, f)]
                }), d.render && d.render()]
            }) : i.createElement("div", {
                key: C,
                className: `dorik-text ${a}`,
                dangerouslySetInnerHTML: {
                    __html: p(o, f)
                },
                ...e
            })
        }
        Re.shouldRender = ({item: t, isRenderable: e}) => e(t.content);
        var Pe = {
            exports: {}
        };
        var He, Be, Fe, Ue;
        function De() {
            if (Be)
                return He;
            Be = 1;
            return He = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        Pe.exports = function() {
            if (Ue)
                return Fe;
            Ue = 1;
            var t = De();
            function e() {}
            function n() {}
            return n.resetWarningCache = e,
            Fe = function() {
                function r(e, n, r, i, s, o) {
                    if (o !== t) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation",
                        a
                    }
                }
                function i() {
                    return r
                }
                r.isRequired = r;
                var s = {
                    array: r,
                    bigint: r,
                    bool: r,
                    func: r,
                    number: r,
                    object: r,
                    string: r,
                    symbol: r,
                    any: r,
                    arrayOf: i,
                    element: r,
                    elementType: r,
                    instanceOf: i,
                    node: r,
                    objectOf: i,
                    oneOf: i,
                    oneOfType: i,
                    shape: i,
                    exact: i,
                    checkPropTypes: n,
                    resetWarningCache: e
                };
                return s.PropTypes = s,
                s
            }
        }()();
        var ze = Pe.exports;
        const Ge = (0,
        r.g)(ze)
          , Ye = ({className: t, wrapperClass: e, attrs: n, control: i={}}) => r.j.jsxs("div", {
            className: e,
            ...i.props,
            children: [r.j.jsx("hr", {
                className: t,
                ...n
            }), i.render && i.render()]
        });
        Ye.propTypes = {
            attrs: Ge.any,
            className: Ge.string,
            wrapperClass: Ge.string
        },
        Ye.shouldRender = ({item: {style: t={}}}) => parseFloat(t.height);
        const Xe = ({src: t, onLoad: e, skip: n=!0, dep: r=[]}) => {
            const {contentDocument: s, contentWindow: o} = V()
              , [a,l] = (0,
            i.useState)(!1);
            return (0,
            i.useEffect)(( () => {
                const e = s || document
                  , r = e.querySelector(`script[src="${t}"]`);
                if (n && r)
                    return void l(!0);
                const i = () => {
                    l(!0)
                }
                  , o = e.createElement("script");
                return o.src = t,
                o.addEventListener("load", i),
                e.body.appendChild(o),
                () => {
                    o && (o.removeEventListener("load", i),
                    e.body.removeChild(o))
                }
            }
            ), []),
            (0,
            i.useEffect)(( () => {
                a && "function" == typeof e && e({
                    window: o || window,
                    document: s || document
                })
            }
            ), [a]),
            (0,
            i.useEffect)(( () => {
                r.length && e({
                    window: o || window,
                    document: s || document
                })
            }
            ), r),
            {
                setLoaded: l
            }
        }
          , qe = ({plugin: t, instantiator: e}) => {
            let n = 0;
            return ({window: r}) => {
                let i = setInterval(( () => {
                    n++,
                    (r[t] || n >= 10) && clearInterval(i),
                    r[t] && e(r[t])
                }
                ), 500)
            }
        }
        ;
        function We({className: t, wrapperClass: e, attrs: n, renderer: s, shouldType: o, InteractiveComponent: a, item: {tabs: {items: l, options: d}, icon: u}, control: p={}, address: C}) {
            var f;
            const h = (0,
            i.useRef)()
              , m = (0,
            i.useRef)()
              , g = Ve(l.length);
            (null == (f = m.current) ? void 0 : f.tabTriggersLength) > l.length && (m.current.destroy(),
            m.current = null),
            Xe({
                src: `${r.a}/js/a11y-accordion-tabs.min.js`,
                onLoad: qe({
                    plugin: "AccordionTabs",
                    instantiator(t) {
                        m.current && m.current.destroy(),
                        m.current = new t(...( (t, e) => [t, {
                            breakpoint: parseInt(e.breakpoint),
                            selectedTab: Number(e.selectedTab)
                        }])(h.current, d))
                    }
                }),
                dep: [l.length]
            });
            const {renderContent: v} = O()
              , y = s === r.B
              , w = l.map(( ({label: t, id: e, icon: n}, i) => (n = {
                ...u,
                ...n
            },
            r.j.jsx("li", {
                role: "presentation",
                children: r.j.jsxs("a", {
                    href: `#section${i + 1}`,
                    onClick: t => {
                        t.preventDefault()
                    }
                    ,
                    role: "tab",
                    "aria-controls": `section${i + 1}`,
                    "aria-selected": "true",
                    "data-panel-class": `panel-${e}`,
                    className: "tabs-trigger js-tabs-trigger",
                    children: [r.j.jsx(c.I, {
                        iconArgs: null == n ? void 0 : n.icon,
                        icon: n
                    }), t]
                })
            }, `tab-${e}`))))
              , L = l.map(( ({label: e, content: n, id: i}, s) => r.j.jsxs("section", {
                role: "tabpanel",
                "aria-labelledby": `tab${s + 1}`,
                className: `tabs-panel js-tabs-panel panel-${i}`,
                tabIndex: "0",
                children: [r.j.jsxs("div", {
                    className: `accordion-trigger js-accordion-trigger accordion-${i}`,
                    "aria-controls": `section${s + 1}`,
                    "aria-expanded": "true",
                    tabIndex: "0",
                    children: [e, r.j.jsxs("div", {
                        className: "accordion-trigger-icon",
                        children: [r.j.jsx("span", {
                            className: "label--open",
                            children: "Open"
                        }), r.j.jsx("span", {
                            className: "label--close",
                            children: "Close"
                        }), r.j.jsxs("svg", {
                            "aria-hidden": "true",
                            focusable: "false",
                            viewBox: "0 0 20 20",
                            children: [r.j.jsx("rect", {
                                className: "vert",
                                height: "18",
                                width: "2",
                                fill: "currentColor",
                                y: "1",
                                x: "9"
                            }), r.j.jsx("rect", {
                                height: "2",
                                width: "18",
                                fill: "currentColor",
                                y: "9",
                                x: "1"
                            })]
                        })]
                    })]
                }), y ? r.j.jsx(a, {
                    className: "content",
                    "aria-hidden": "true",
                    as: "div",
                    inlineEditor: !0,
                    address: C,
                    path: `tabs/items/${s}/content`,
                    typekey: `${t}-tab-${i}`,
                    shouldType: 0 === s && o,
                    strings: [(0,
                    r.s)(v(n))]
                }) : r.j.jsx("div", {
                    className: "content",
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        r.s)(v(n))
                    }
                }, g[s])]
            }, `panel-${i}`)));
            return r.j.jsxs("div", {
                className: `${t} ${e}`,
                ...n,
                ...p.props,
                children: [r.j.jsxs("div", {
                    className: "accordion-tabs dorik-tabs",
                    ref: h,
                    children: [r.j.jsx("ul", {
                        role: "tablist",
                        className: "tabs-tab-list",
                        children: w
                    }), L]
                }), p.render && p.render()]
            })
        }
        function Ke({item: t, attrs: e, className: n}) {
            var s;
            const {lists: o} = t
              , {renderContent: a} = O();
            if (null == (s = null == o ? void 0 : o.items) || !s.length)
                return r.j.jsx("p", {
                    children: "Add lists to preview"
                });
            const l = t => t ? r.j.jsx(d.G, {
                fixedWidth: !0,
                icon: t
            }) : null;
            return r.j.jsx("ul", {
                className: `dorik-list ${n}`,
                ...e,
                children: o.items.map(( (t={}, e) => r.j.jsxs(i.Fragment, {
                    children: [r.j.jsx("li", {
                        className: `dorik-list--item dorik-li-${t.id}`,
                        children: r.j.jsxs("div", {
                            className: "dorik-list--lists",
                            children: [t.icon ? r.j.jsx("span", {
                                className: "dorik-list--icon",
                                children: l(t.icon)
                            }) : o.defaultIcon ? r.j.jsx("span", {
                                className: "dorik-list--icon",
                                children: l(o.defaultIcon)
                            }) : null, t.content ? r.j.jsx("span", {
                                className: "dorik-list--text",
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    r.s)(a(t.content))
                                }
                            }) : r.j.jsx("span", {
                                className: "dorik-list--text",
                                children: "List Item"
                            })]
                        })
                    }), r.j.jsx("li", {
                        className: "dorik-list--gap"
                    })]
                }, e)))
            })
        }
        function Je({icon: t, iconProps: e, id: n}) {
            var i;
            let s = {
                ...t,
                size: null == (i = null == e ? void 0 : e.style) ? void 0 : i.fontSize
            };
            return null != s && s.icon ? r.j.jsx("span", {
                className: "dorik-list--icon",
                children: r.j.jsx(c.I, {
                    exClass: `icon_${n}`,
                    iconArgs: null == s ? void 0 : s.icon,
                    icon: s
                })
            }) : null
        }
        function Qe({item: t, renderer: e, attrs: n, shouldType: s, className: o, InteractiveComponent: a, control: l={}, address: c}) {
            const {lists: d={}} = t
              , {icon: u} = d
              , {renderContent: p} = O()
              , C = e === r.B;
            return r.j.jsxs("ul", {
                className: `dorik-list ${o}`,
                ...n,
                ...l.props,
                children: [l.render && l.render(), d.items.map(( (t={}, e) => {
                    var n;
                    return r.j.jsxs(i.Fragment, {
                        children: [r.j.jsx("li", {
                            className: `dorik-list--item dorik-li-${t.id}`,
                            children: r.j.jsxs("div", {
                                className: "dorik-list--lists",
                                children: [r.j.jsx(Je, {
                                    icon: null != (n = t.icon) && n.icon ? {
                                        ...t.icon
                                    } : {
                                        ...d.defaultIcon
                                    },
                                    iconProps: u,
                                    id: t.id
                                }), t.content ? r.j.jsx(r.j.Fragment, {
                                    children: C ? r.j.jsx(a, {
                                        as: "span",
                                        inlineEditor: !0,
                                        address: c,
                                        path: `lists/items/${e}/content`,
                                        className: "dorik-list--text",
                                        typekey: `${o}-list-${t.id}`,
                                        shouldType: s,
                                        strings: [(0,
                                        r.s)(p(t.content))]
                                    }) : r.j.jsx("span", {
                                        className: "dorik-list--text",
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            r.s)(p(t.content))
                                        }
                                    })
                                }) : r.j.jsx("span", {
                                    className: "dorik-list--text",
                                    children: "List Item"
                                })]
                            })
                        }), r.j.jsx("li", {
                            className: "dorik-list--gap"
                        })]
                    }, e)
                }
                ))]
            })
        }
        We.shouldRender = ({item: {tabs: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const tn = t => {
            const {item: e} = t
              , {version: n} = e;
            return "2.0.0" === n ? r.j.jsx(Qe, {
                ...t
            }) : r.j.jsx(Ke, {
                ...t
            })
        }
        ;
        function en() {
            return (0,
            i.useContext)(p)
        }
        function nn(t) {
            var e, n;
            let {className: s, item: o={}, renderer: a, wrapperClass: l, attrs: c={}, control: d={}} = t;
            s = H(o, s);
            const {wrapper: u={}, settings: {hrefType: p, noFollow: C}={}} = o
              , {target: f, src: h, ...m} = c
              , {attr: g={}} = u
              , v = en()
              , {renderContent: y} = O()
              , {updateModalId: w} = (0,
            i.useContext)(R)
              , L = we({
                hrefType: p,
                noFollow: C,
                hrefValue: g.href
            })
              , b = a === r.B || a === r.P;
            let x = "div"
              , j = {
                ...g
            };
            "link" === u.type || "img-file" === u.type ? (x = "a",
            "img-file" === u.type ? j.href = h : j = "popup" === p ? {
                href: g.href,
                onClick: t => {
                    t.preventDefault(),
                    w(g.href)
                }
            } : {
                ...j,
                ...L
            },
            "_blank" === f && (j.rel = "noreferrer")) : j = {};
            const M = b ? "/assets/images/image-placeholder.jpg" : ""
              , E = ( (t="") => {
                const e = y(t)
                  , n = /^https?:\/\//.test(e)
                  , r = /^{{|}}$/.test(t);
                if (e || !r || !b)
                    return n ? e : e && !n && v ? `${v.CDNDomain}/${e}` : t
            }
            )(null == (e = o.attr) ? void 0 : e.src) || M
              , N = y(null == (n = o.attr) ? void 0 : n.alt);
            return r.j.jsxs(x, {
                className: `dorik-wrapper ${l} ${me(p)}`,
                ...j,
                ...d.props,
                children: [r.j.jsx("img", {
                    ...m,
                    src: E,
                    alt: N,
                    loading: "lazy",
                    className: s
                }), d.render && d.render()]
            })
        }
        function rn() {
            return rn = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ,
            rn.apply(this, arguments)
        }
        tn.migration = (t, e) => {
            var n, r;
            const {version: i} = t
              , s = null == (n = null == t ? void 0 : t.lists) ? void 0 : n.items
              , o = null == (r = null == t ? void 0 : t.lists) ? void 0 : r.defaultIcon
              , a = s.map((t => {
                const e = {
                    ...t
                };
                return null === t.icon || void 0 === t.icon ? e.icon = {
                    visible: "font-awesome",
                    icon: null
                } : e.icon = {
                    visible: "font-awesome",
                    icon: {
                        type: "font-awesome",
                        ...t.icon
                    }
                },
                e
            }
            ))
              , l = {
                visible: "font-awesome",
                icon: {
                    type: "font-awesome",
                    ...o
                }
            };
            i || e([{
                name: "version",
                value: "2.0.0"
            }, {
                name: "lists/items",
                value: a
            }, {
                name: "lists/defaultIcon",
                value: l
            }])
        }
        ,
        tn.shouldRender = ({item: {lists: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ,
        nn.shouldRender = ({item: {attr: t={}}, renderer: e}) => !!e || t.src;
        var sn = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function(t) {},
            onComplete: function(t) {},
            preStringTyped: function(t, e) {},
            onStringTyped: function(t, e) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, e) {},
            onTypingResumed: function(t, e) {},
            onReset: function(t) {},
            onStop: function(t, e) {},
            onStart: function(t, e) {},
            onDestroy: function(t) {}
        }
          , on = new (function() {
            function t() {}
            var e = t.prototype;
            return e.load = function(t, e, n) {
                if (t.el = "string" == typeof n ? document.querySelector(n) : n,
                t.options = rn({}, sn, e),
                t.isInput = "input" === t.el.tagName.toLowerCase(),
                t.attr = t.options.attr,
                t.bindInputFocusEvents = t.options.bindInputFocusEvents,
                t.showCursor = !t.isInput && t.options.showCursor,
                t.cursorChar = t.options.cursorChar,
                t.cursorBlinking = !0,
                t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent,
                t.contentType = t.options.contentType,
                t.typeSpeed = t.options.typeSpeed,
                t.startDelay = t.options.startDelay,
                t.backSpeed = t.options.backSpeed,
                t.smartBackspace = t.options.smartBackspace,
                t.backDelay = t.options.backDelay,
                t.fadeOut = t.options.fadeOut,
                t.fadeOutClass = t.options.fadeOutClass,
                t.fadeOutDelay = t.options.fadeOutDelay,
                t.isPaused = !1,
                t.strings = t.options.strings.map((function(t) {
                    return t.trim()
                }
                )),
                t.stringsElement = "string" == typeof t.options.stringsElement ? document.querySelector(t.options.stringsElement) : t.options.stringsElement,
                t.stringsElement) {
                    t.strings = [],
                    t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                    var r = Array.prototype.slice.apply(t.stringsElement.children)
                      , i = r.length;
                    if (i)
                        for (var s = 0; s < i; s += 1)
                            t.strings.push(r[s].innerHTML.trim())
                }
                for (var o in t.strPos = 0,
                t.currentElContent = this.getCurrentElContent(t),
                t.currentElContent && t.currentElContent.length > 0 && (t.strPos = t.currentElContent.length - 1,
                t.strings.unshift(t.currentElContent)),
                t.sequence = [],
                t.strings)
                    t.sequence[o] = o;
                t.arrayPos = 0,
                t.stopNum = 0,
                t.loop = t.options.loop,
                t.loopCount = t.options.loopCount,
                t.curLoop = 0,
                t.shuffle = t.options.shuffle,
                t.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                },
                t.typingComplete = !1,
                t.autoInsertCss = t.options.autoInsertCss,
                t.autoInsertCss && (this.appendCursorAnimationCss(t),
                this.appendFadeOutAnimationCss(t))
            }
            ,
            e.getCurrentElContent = function(t) {
                return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
            }
            ,
            e.appendCursorAnimationCss = function(t) {
                var e = "data-typed-js-cursor-css";
                if (t.showCursor && !document.querySelector("[" + e + "]")) {
                    var n = document.createElement("style");
                    n.setAttribute(e, "true"),
                    n.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",
                    document.body.appendChild(n)
                }
            }
            ,
            e.appendFadeOutAnimationCss = function(t) {
                var e = "data-typed-fadeout-js-css";
                if (t.fadeOut && !document.querySelector("[" + e + "]")) {
                    var n = document.createElement("style");
                    n.setAttribute(e, "true"),
                    n.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",
                    document.body.appendChild(n)
                }
            }
            ,
            t
        }())
          , an = new (function() {
            function t() {}
            var e = t.prototype;
            return e.typeHtmlChars = function(t, e, n) {
                if ("html" !== n.contentType)
                    return e;
                var r = t.substring(e).charAt(0);
                if ("<" === r || "&" === r) {
                    var i;
                    for (i = "<" === r ? ">" : ";"; t.substring(e + 1).charAt(0) !== i && !(1 + ++e > t.length); )
                        ;
                    e++
                }
                return e
            }
            ,
            e.backSpaceHtmlChars = function(t, e, n) {
                if ("html" !== n.contentType)
                    return e;
                var r = t.substring(e).charAt(0);
                if (">" === r || ";" === r) {
                    var i;
                    for (i = ">" === r ? "<" : "&"; t.substring(e - 1).charAt(0) !== i && !(--e < 0); )
                        ;
                    e--
                }
                return e
            }
            ,
            t
        }())
          , ln = function() {
            function t(t, e) {
                on.load(this, e, t),
                this.begin()
            }
            var e = t.prototype;
            return e.toggle = function() {
                this.pause.status ? this.start() : this.stop()
            }
            ,
            e.stop = function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                this.pause.status = !0,
                this.options.onStop(this.arrayPos, this))
            }
            ,
            e.start = function() {
                this.typingComplete || this.pause.status && (this.pause.status = !1,
                this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                this.options.onStart(this.arrayPos, this))
            }
            ,
            e.destroy = function() {
                this.reset(!1),
                this.options.onDestroy(this)
            }
            ,
            e.reset = function(t) {
                void 0 === t && (t = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                this.cursor = null),
                this.strPos = 0,
                this.arrayPos = 0,
                this.curLoop = 0,
                t && (this.insertCursor(),
                this.options.onReset(this),
                this.begin())
            }
            ,
            e.begin = function() {
                var t = this;
                this.options.onBegin(this),
                this.typingComplete = !1,
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                this.timeout = setTimeout((function() {
                    0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos)
                }
                ), this.startDelay)
            }
            ,
            e.typewrite = function(t, e) {
                var n = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var r = this.humanizer(this.typeSpeed)
                  , i = 1;
                !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                    e = an.typeHtmlChars(t, e, n);
                    var r = 0
                      , s = t.substring(e);
                    if ("^" === s.charAt(0) && /^\^\d+/.test(s)) {
                        var o = 1;
                        o += (s = /\d+/.exec(s)[0]).length,
                        r = parseInt(s),
                        n.temporaryPause = !0,
                        n.options.onTypingPaused(n.arrayPos, n),
                        t = t.substring(0, e) + t.substring(e + o),
                        n.toggleBlinking(!0)
                    }
                    if ("`" === s.charAt(0)) {
                        for (; "`" !== t.substring(e + i).charAt(0) && (i++,
                        !(e + i > t.length)); )
                            ;
                        var a = t.substring(0, e)
                          , l = t.substring(a.length + 1, e + i)
                          , c = t.substring(e + i + 1);
                        t = a + l + c,
                        i--
                    }
                    n.timeout = setTimeout((function() {
                        n.toggleBlinking(!1),
                        e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, i),
                        n.temporaryPause && (n.temporaryPause = !1,
                        n.options.onTypingResumed(n.arrayPos, n))
                    }
                    ), r)
                }
                ), r) : this.setPauseStatus(t, e, !0)
            }
            ,
            e.keepTyping = function(t, e, n) {
                0 === e && (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
                var r = t.substring(0, e += n);
                this.replaceText(r),
                this.typewrite(t, e)
            }
            ,
            e.doneTyping = function(t, e) {
                var n = this;
                this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                this.arrayPos === this.strings.length - 1 && (this.complete(),
                !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                    n.backspace(t, e)
                }
                ), this.backDelay))
            }
            ,
            e.backspace = function(t, e) {
                var n = this;
                if (!0 !== this.pause.status) {
                    if (this.fadeOut)
                        return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var r = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout((function() {
                        e = an.backSpaceHtmlChars(t, e, n);
                        var r = t.substring(0, e);
                        if (n.replaceText(r),
                        n.smartBackspace) {
                            var i = n.strings[n.arrayPos + 1];
                            n.stopNum = i && r === i.substring(0, e) ? e : 0
                        }
                        e > n.stopNum ? (e--,
                        n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++,
                        n.arrayPos === n.strings.length ? (n.arrayPos = 0,
                        n.options.onLastStringBackspaced(),
                        n.shuffleStringsIfNeeded(),
                        n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e))
                    }
                    ), r)
                } else
                    this.setPauseStatus(t, e, !1)
            }
            ,
            e.complete = function() {
                this.options.onComplete(this),
                this.loop ? this.curLoop++ : this.typingComplete = !0
            }
            ,
            e.setPauseStatus = function(t, e, n) {
                this.pause.typewrite = n,
                this.pause.curString = t,
                this.pause.curStrPos = e
            }
            ,
            e.toggleBlinking = function(t) {
                this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t,
                t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }
            ,
            e.humanizer = function(t) {
                return Math.round(Math.random() * t / 2) + t
            }
            ,
            e.shuffleStringsIfNeeded = function() {
                this.shuffle && (this.sequence = this.sequence.sort((function() {
                    return Math.random() - .5
                }
                )))
            }
            ,
            e.initFadeOut = function() {
                var t = this;
                return this.el.className += " " + this.fadeOutClass,
                this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                setTimeout((function() {
                    t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0),
                    t.arrayPos = 0)
                }
                ), this.fadeOutDelay)
            }
            ,
            e.replaceText = function(t) {
                this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
            }
            ,
            e.bindFocusEvents = function() {
                var t = this;
                this.isInput && (this.el.addEventListener("focus", (function(e) {
                    t.stop()
                }
                )),
                this.el.addEventListener("blur", (function(e) {
                    t.el.value && 0 !== t.el.value.length || t.start()
                }
                )))
            }
            ,
            e.insertCursor = function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                this.cursor.className = "typed-cursor",
                this.cursor.setAttribute("aria-hidden", !0),
                this.cursor.innerHTML = this.cursorChar,
                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }
            ,
            t
        }();
        var cn = function() {
            this.__data__ = [],
            this.size = 0
        };
        var dn = function(t, e) {
            return t === e || t !== t && e !== e
        }
          , un = dn;
        var pn = function(t, e) {
            for (var n = t.length; n--; )
                if (un(t[n][0], e))
                    return n;
            return -1
        }
          , Cn = pn
          , fn = Array.prototype.splice;
        var hn = function(t) {
            var e = this.__data__
              , n = Cn(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : fn.call(e, n, 1),
            --this.size,
            !0)
        }
          , mn = pn;
        var gn = function(t) {
            var e = this.__data__
              , n = mn(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
          , vn = pn;
        var yn = function(t) {
            return vn(this.__data__, t) > -1
        }
          , wn = pn;
        var Ln = function(t, e) {
            var n = this.__data__
              , r = wn(n, t);
            return r < 0 ? (++this.size,
            n.push([t, e])) : n[r][1] = e,
            this
        }
          , bn = cn
          , xn = hn
          , jn = gn
          , Mn = yn
          , En = Ln;
        function Nn(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        Nn.prototype.clear = bn,
        Nn.prototype.delete = xn,
        Nn.prototype.get = jn,
        Nn.prototype.has = Mn,
        Nn.prototype.set = En;
        var kn = Nn
          , _n = kn;
        var Sn = function() {
            this.__data__ = new _n,
            this.size = 0
        };
        var An = function(t) {
            var e = this.__data__
              , n = e.delete(t);
            return this.size = e.size,
            n
        };
        var Tn = function(t) {
            return this.__data__.get(t)
        };
        var Zn = function(t) {
            return this.__data__.has(t)
        };
        var In = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
          , On = pt
          , $n = In;
        var Vn = function(t) {
            if (!$n(t))
                return !1;
            var e = On(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }
          , Rn = K["__core-js_shared__"]
          , Pn = function() {
            var t = /[^.]+$/.exec(Rn && Rn.keys && Rn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
        var Hn = function(t) {
            return !!Pn && Pn in t
        }
          , Bn = Function.prototype.toString;
        var Fn = function(t) {
            if (null != t) {
                try {
                    return Bn.call(t)
                } catch {}
                try {
                    return t + ""
                } catch {}
            }
            return ""
        }
          , Un = Vn
          , Dn = Hn
          , zn = In
          , Gn = Fn
          , Yn = /^\[object .+?Constructor\]$/
          , Xn = Function.prototype
          , qn = Object.prototype
          , Wn = Xn.toString
          , Kn = qn.hasOwnProperty
          , Jn = RegExp("^" + Wn.call(Kn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Qn = function(t) {
            return !(!zn(t) || Dn(t)) && (Un(t) ? Jn : Yn).test(Gn(t))
        };
        var tr = function(t, e) {
            return null == t ? void 0 : t[e]
        }
          , er = Qn
          , nr = tr;
        var rr = function(t, e) {
            var n = nr(t, e);
            return er(n) ? n : void 0
        }
          , ir = rr(K, "Map")
          , sr = rr(Object, "create")
          , or = sr;
        var ar = function() {
            this.__data__ = or ? or(null) : {},
            this.size = 0
        };
        var lr = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
            e
        }
          , cr = sr
          , dr = Object.prototype.hasOwnProperty;
        var ur = function(t) {
            var e = this.__data__;
            if (cr) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return dr.call(e, t) ? e[t] : void 0
        }
          , pr = sr
          , Cr = Object.prototype.hasOwnProperty;
        var fr = function(t) {
            var e = this.__data__;
            return pr ? void 0 !== e[t] : Cr.call(e, t)
        }
          , hr = sr;
        var mr = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
            n[t] = hr && void 0 === e ? "__lodash_hash_undefined__" : e,
            this
        }
          , gr = ar
          , vr = lr
          , yr = ur
          , wr = fr
          , Lr = mr;
        function br(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        br.prototype.clear = gr,
        br.prototype.delete = vr,
        br.prototype.get = yr,
        br.prototype.has = wr,
        br.prototype.set = Lr;
        var xr = br
          , jr = kn
          , Mr = ir;
        var Er = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
          , Nr = Er;
        var kr = function(t, e) {
            var n = t.__data__;
            return Nr(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
          , _r = kr;
        var Sr = function(t) {
            var e = _r(this, t).delete(t);
            return this.size -= e ? 1 : 0,
            e
        }
          , Ar = kr;
        var Tr = function(t) {
            return Ar(this, t).get(t)
        }
          , Zr = kr;
        var Ir = function(t) {
            return Zr(this, t).has(t)
        }
          , Or = kr;
        var $r = function(t, e) {
            var n = Or(this, t)
              , r = n.size;
            return n.set(t, e),
            this.size += n.size == r ? 0 : 1,
            this
        }
          , Vr = function() {
            this.size = 0,
            this.__data__ = {
                hash: new xr,
                map: new (Mr || jr),
                string: new xr
            }
        }
          , Rr = Sr
          , Pr = Tr
          , Hr = Ir
          , Br = $r;
        function Fr(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        Fr.prototype.clear = Vr,
        Fr.prototype.delete = Rr,
        Fr.prototype.get = Pr,
        Fr.prototype.has = Hr,
        Fr.prototype.set = Br;
        var Ur = Fr
          , Dr = kn
          , zr = ir
          , Gr = Ur;
        var Yr = function(t, e) {
            var n = this.__data__;
            if (n instanceof Dr) {
                var r = n.__data__;
                if (!zr || r.length < 199)
                    return r.push([t, e]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new Gr(r)
            }
            return n.set(t, e),
            this.size = n.size,
            this
        }
          , Xr = kn
          , qr = Sn
          , Wr = An
          , Kr = Tn
          , Jr = Zn
          , Qr = Yr;
        function ti(t) {
            var e = this.__data__ = new Xr(t);
            this.size = e.size
        }
        ti.prototype.clear = qr,
        ti.prototype.delete = Wr,
        ti.prototype.get = Kr,
        ti.prototype.has = Jr,
        ti.prototype.set = Qr;
        var ei = ti;
        var ni = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"),
            this
        };
        var ri = function(t) {
            return this.__data__.has(t)
        }
          , ii = Ur
          , si = ni
          , oi = ri;
        function ai(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.__data__ = new ii; ++e < n; )
                this.add(t[e])
        }
        ai.prototype.add = ai.prototype.push = si,
        ai.prototype.has = oi;
        var li = ai;
        var ci = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t))
                    return !0;
            return !1
        };
        var di = function(t, e) {
            return t.has(e)
        }
          , ui = li
          , pi = ci
          , Ci = di;
        var fi = function(t, e, n, r, i, s) {
            var o = 1 & n
              , a = t.length
              , l = e.length;
            if (a != l && !(o && l > a))
                return !1;
            var c = s.get(t)
              , d = s.get(e);
            if (c && d)
                return c == e && d == t;
            var u = -1
              , p = !0
              , C = 2 & n ? new ui : void 0;
            for (s.set(t, e),
            s.set(e, t); ++u < a; ) {
                var f = t[u]
                  , h = e[u];
                if (r)
                    var m = o ? r(h, f, u, e, t, s) : r(f, h, u, t, e, s);
                if (void 0 !== m) {
                    if (m)
                        continue;
                    p = !1;
                    break
                }
                if (C) {
                    if (!pi(e, (function(t, e) {
                        if (!Ci(C, e) && (f === t || i(f, t, n, r, s)))
                            return C.push(e)
                    }
                    ))) {
                        p = !1;
                        break
                    }
                } else if (f !== h && !i(f, h, n, r, s)) {
                    p = !1;
                    break
                }
            }
            return s.delete(t),
            s.delete(e),
            p
        };
        var hi = function(t) {
            var e = -1
              , n = Array(t.size);
            return t.forEach((function(t, r) {
                n[++e] = [r, t]
            }
            )),
            n
        };
        var mi = function(t) {
            var e = -1
              , n = Array(t.size);
            return t.forEach((function(t) {
                n[++e] = t
            }
            )),
            n
        }
          , gi = K.Uint8Array
          , vi = dn
          , yi = fi
          , wi = hi
          , Li = mi
          , bi = J ? J.prototype : void 0
          , xi = bi ? bi.valueOf : void 0;
        var ji = function(t, e, n, r, i, s, o) {
            switch (n) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                    return !1;
                t = t.buffer,
                e = e.buffer;
            case "[object ArrayBuffer]":
                return !(t.byteLength != e.byteLength || !s(new gi(t), new gi(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return vi(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var a = wi;
            case "[object Set]":
                var l = 1 & r;
                if (a || (a = Li),
                t.size != e.size && !l)
                    return !1;
                var c = o.get(t);
                if (c)
                    return c == e;
                r |= 2,
                o.set(t, e);
                var d = yi(a(t), a(e), r, i, s, o);
                return o.delete(t),
                d;
            case "[object Symbol]":
                if (xi)
                    return xi.call(t) == xi.call(e)
            }
            return !1
        };
        var Mi = function(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; )
                t[i + n] = e[n];
            return t
        }
          , Ei = Mi
          , Ni = tt;
        var ki = function(t, e, n) {
            var r = e(t);
            return Ni(t) ? r : Ei(r, n(t))
        };
        var _i = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, s = []; ++n < r; ) {
                var o = t[n];
                e(o, n, t) && (s[i++] = o)
            }
            return s
        };
        var Si = _i
          , Ai = function() {
            return []
        }
          , Ti = Object.prototype.propertyIsEnumerable
          , Zi = Object.getOwnPropertySymbols
          , Ii = Zi ? function(t) {
            return null == t ? [] : (t = Object(t),
            Si(Zi(t), (function(e) {
                return Ti.call(t, e)
            }
            )))
        }
        : Ai
          , Oi = Ii;
        var $i = function(t, e) {
            for (var n = -1, r = Array(t); ++n < t; )
                r[n] = e(n);
            return r
        }
          , Vi = pt
          , Ri = Ct;
        var Pi = function(t) {
            return Ri(t) && "[object Arguments]" == Vi(t)
        }
          , Hi = Pi
          , Bi = Ct
          , Fi = Object.prototype
          , Ui = Fi.hasOwnProperty
          , Di = Fi.propertyIsEnumerable
          , zi = Hi(function() {
            return arguments
        }()) ? Hi : function(t) {
            return Bi(t) && Ui.call(t, "callee") && !Di.call(t, "callee")
        }
          , Gi = zi
          , Yi = {
            exports: {}
        };
        var Xi = function() {
            return !1
        };
        !function(t, e) {
            var n = K
              , r = Xi
              , i = e && !e.nodeType && e
              , s = i && t && !t.nodeType && t
              , o = s && s.exports === i ? n.Buffer : void 0
              , a = (o ? o.isBuffer : void 0) || r;
            t.exports = a
        }(Yi, Yi.exports);
        var qi = Yi.exports
          , Wi = /^(?:0|[1-9]\d*)$/;
        var Ki = function(t, e) {
            var n = typeof t;
            return !!(e = e ?? 9007199254740991) && ("number" == n || "symbol" != n && Wi.test(t)) && t > -1 && t % 1 == 0 && t < e
        };
        var Ji = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
          , Qi = pt
          , ts = Ji
          , es = Ct
          , ns = {};
        ns["[object Float32Array]"] = ns["[object Float64Array]"] = ns["[object Int8Array]"] = ns["[object Int16Array]"] = ns["[object Int32Array]"] = ns["[object Uint8Array]"] = ns["[object Uint8ClampedArray]"] = ns["[object Uint16Array]"] = ns["[object Uint32Array]"] = !0,
        ns["[object Arguments]"] = ns["[object Array]"] = ns["[object ArrayBuffer]"] = ns["[object Boolean]"] = ns["[object DataView]"] = ns["[object Date]"] = ns["[object Error]"] = ns["[object Function]"] = ns["[object Map]"] = ns["[object Number]"] = ns["[object Object]"] = ns["[object RegExp]"] = ns["[object Set]"] = ns["[object String]"] = ns["[object WeakMap]"] = !1;
        var rs = function(t) {
            return es(t) && ts(t.length) && !!ns[Qi(t)]
        };
        var is = function(t) {
            return function(e) {
                return t(e)
            }
        }
          , ss = {
            exports: {}
        };
        !function(t, e) {
            var n = X
              , r = e && !e.nodeType && e
              , i = r && t && !t.nodeType && t
              , s = i && i.exports === r && n.process
              , o = function() {
                try {
                    return i && i.require && i.require("util").types || s && s.binding && s.binding("util")
                } catch {}
            }();
            t.exports = o
        }(ss, ss.exports);
        var os = ss.exports
          , as = rs
          , ls = is
          , cs = os && os.isTypedArray
          , ds = cs ? ls(cs) : as
          , us = $i
          , ps = Gi
          , Cs = tt
          , fs = qi
          , hs = Ki
          , ms = ds
          , gs = Object.prototype.hasOwnProperty;
        var vs = function(t, e) {
            var n = Cs(t)
              , r = !n && ps(t)
              , i = !n && !r && fs(t)
              , s = !n && !r && !i && ms(t)
              , o = n || r || i || s
              , a = o ? us(t.length, String) : []
              , l = a.length;
            for (var c in t)
                (e || gs.call(t, c)) && (!o || !("length" == c || i && ("offset" == c || "parent" == c) || s && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || hs(c, l))) && a.push(c);
            return a
        }
          , ys = Object.prototype;
        var ws = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || ys)
        };
        var Ls = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
          , bs = Ls(Object.keys, Object)
          , xs = ws
          , js = bs
          , Ms = Object.prototype.hasOwnProperty;
        var Es = function(t) {
            if (!xs(t))
                return js(t);
            var e = [];
            for (var n in Object(t))
                Ms.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
          , Ns = Vn
          , ks = Ji;
        var _s = function(t) {
            return null != t && ks(t.length) && !Ns(t)
        }
          , Ss = vs
          , As = Es
          , Ts = _s;
        var Zs = function(t) {
            return Ts(t) ? Ss(t) : As(t)
        }
          , Is = ki
          , Os = Oi
          , $s = Zs;
        var Vs = function(t) {
            return Is(t, $s, Os)
        }
          , Rs = Vs
          , Ps = Object.prototype.hasOwnProperty;
        var Hs = function(t, e, n, r, i, s) {
            var o = 1 & n
              , a = Rs(t)
              , l = a.length;
            if (l != Rs(e).length && !o)
                return !1;
            for (var c = l; c--; ) {
                var d = a[c];
                if (!(o ? d in e : Ps.call(e, d)))
                    return !1
            }
            var u = s.get(t)
              , p = s.get(e);
            if (u && p)
                return u == e && p == t;
            var C = !0;
            s.set(t, e),
            s.set(e, t);
            for (var f = o; ++c < l; ) {
                var h = t[d = a[c]]
                  , m = e[d];
                if (r)
                    var g = o ? r(m, h, d, e, t, s) : r(h, m, d, t, e, s);
                if (!(void 0 === g ? h === m || i(h, m, n, r, s) : g)) {
                    C = !1;
                    break
                }
                f || (f = "constructor" == d)
            }
            if (C && !f) {
                var v = t.constructor
                  , y = e.constructor;
                v != y && "constructor"in t && "constructor"in e && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y) && (C = !1)
            }
            return s.delete(t),
            s.delete(e),
            C
        }
          , Bs = rr(K, "DataView")
          , Fs = ir
          , Us = rr(K, "Promise")
          , Ds = rr(K, "Set")
          , zs = rr(K, "WeakMap")
          , Gs = pt
          , Ys = Fn
          , Xs = "[object Map]"
          , qs = "[object Promise]"
          , Ws = "[object Set]"
          , Ks = "[object WeakMap]"
          , Js = "[object DataView]"
          , Qs = Ys(Bs)
          , to = Ys(Fs)
          , eo = Ys(Us)
          , no = Ys(Ds)
          , ro = Ys(zs)
          , io = Gs;
        (Bs && io(new Bs(new ArrayBuffer(1))) != Js || Fs && io(new Fs) != Xs || Us && io(Us.resolve()) != qs || Ds && io(new Ds) != Ws || zs && io(new zs) != Ks) && (io = function(t) {
            var e = Gs(t)
              , n = "[object Object]" == e ? t.constructor : void 0
              , r = n ? Ys(n) : "";
            if (r)
                switch (r) {
                case Qs:
                    return Js;
                case to:
                    return Xs;
                case eo:
                    return qs;
                case no:
                    return Ws;
                case ro:
                    return Ks
                }
            return e
        }
        );
        var so = ei
          , oo = fi
          , ao = ji
          , lo = Hs
          , co = io
          , uo = tt
          , po = qi
          , Co = ds
          , fo = "[object Arguments]"
          , ho = "[object Array]"
          , mo = "[object Object]"
          , go = Object.prototype.hasOwnProperty;
        var vo = function(t, e, n, r, i, s) {
            var o = uo(t)
              , a = uo(e)
              , l = o ? ho : co(t)
              , c = a ? ho : co(e)
              , d = (l = l == fo ? mo : l) == mo
              , u = (c = c == fo ? mo : c) == mo
              , p = l == c;
            if (p && po(t)) {
                if (!po(e))
                    return !1;
                o = !0,
                d = !1
            }
            if (p && !d)
                return s || (s = new so),
                o || Co(t) ? oo(t, e, n, r, i, s) : ao(t, e, l, n, r, i, s);
            if (!(1 & n)) {
                var C = d && go.call(t, "__wrapped__")
                  , f = u && go.call(e, "__wrapped__");
                if (C || f) {
                    var h = C ? t.value() : t
                      , m = f ? e.value() : e;
                    return s || (s = new so),
                    i(h, m, n, r, s)
                }
            }
            return !!p && (s || (s = new so),
            lo(t, e, n, r, i, s))
        }
          , yo = vo
          , wo = Ct;
        var Lo = function t(e, n, r, i, s) {
            return e === n || (null == e || null == n || !wo(e) && !wo(n) ? e !== e && n !== n : yo(e, n, r, i, t, s))
        }
          , bo = Lo;
        var xo = function(t, e) {
            return bo(t, e)
        };
        const jo = (0,
        r.g)(xo);
        var Mo = function(t, e, n, r) {
            for (var i = t.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
                if (e(t[s], s, t))
                    return s;
            return -1
        };
        var Eo = function(t) {
            return t !== t
        };
        var No = function(t, e, n) {
            for (var r = n - 1, i = t.length; ++r < i; )
                if (t[r] === e)
                    return r;
            return -1
        }
          , ko = Mo
          , _o = Eo
          , So = No;
        var Ao = function(t, e, n) {
            return e === e ? So(t, e, n) : ko(t, _o, n)
        }
          , To = Ao;
        var Zo = function(t, e) {
            return !!(null == t ? 0 : t.length) && To(t, e, 0) > -1
        };
        var Io = function(t, e, n) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                if (n(e, t[r]))
                    return !0;
            return !1
        }
          , Oo = li
          , $o = Zo
          , Vo = Io
          , Ro = Q
          , Po = is
          , Ho = di;
        var Bo = function(t, e, n, r) {
            var i = -1
              , s = $o
              , o = !0
              , a = t.length
              , l = []
              , c = e.length;
            if (!a)
                return l;
            n && (e = Ro(e, Po(n))),
            r ? (s = Vo,
            o = !1) : e.length >= 200 && (s = Ho,
            o = !1,
            e = new Oo(e));
            t: for (; ++i < a; ) {
                var d = t[i]
                  , u = null == n ? d : n(d);
                if (d = r || 0 !== d ? d : 0,
                o && u === u) {
                    for (var p = c; p--; )
                        if (e[p] === u)
                            continue t;
                    l.push(d)
                } else
                    s(e, u, r) || l.push(d)
            }
            return l
        }
          , Fo = Gi
          , Uo = tt
          , Do = J ? J.isConcatSpreadable : void 0;
        var zo = function(t) {
            return Uo(t) || Fo(t) || !!(Do && t && t[Do])
        }
          , Go = Mi
          , Yo = zo;
        var Xo = function t(e, n, r, i, s) {
            var o = -1
              , a = e.length;
            for (r || (r = Yo),
            s || (s = []); ++o < a; ) {
                var l = e[o];
                n > 0 && r(l) ? n > 1 ? t(l, n - 1, r, i, s) : Go(s, l) : i || (s[s.length] = l)
            }
            return s
        };
        var qo = function(t) {
            return t
        };
        var Wo = function(t, e, n) {
            switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }
          , Ko = Wo
          , Jo = Math.max;
        var Qo = function(t, e, n) {
            return e = Jo(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var r = arguments, i = -1, s = Jo(r.length - e, 0), o = Array(s); ++i < s; )
                    o[i] = r[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e; )
                    a[i] = r[i];
                return a[e] = n(o),
                Ko(t, this, a)
            }
        };
        var ta = function(t) {
            return function() {
                return t
            }
        }
          , ea = rr
          , na = function() {
            try {
                var t = ea(Object, "defineProperty");
                return t({}, "", {}),
                t
            } catch {}
        }()
          , ra = ta
          , ia = na
          , sa = ia ? function(t, e) {
            return ia(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: ra(e),
                writable: !0
            })
        }
        : qo
          , oa = sa
          , aa = Date.now;
        var la = function(t) {
            var e = 0
              , n = 0;
            return function() {
                var r = aa()
                  , i = 16 - (r - n);
                if (n = r,
                i > 0) {
                    if (++e >= 800)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(void 0, arguments)
            }
        }
          , ca = la(oa)
          , da = qo
          , ua = Qo
          , pa = ca;
        var Ca = function(t, e) {
            return pa(ua(t, e, da), t + "")
        }
          , fa = _s
          , ha = Ct;
        var ma = function(t) {
            return ha(t) && fa(t)
        };
        var ga = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0
        }
          , va = Bo
          , ya = Xo
          , wa = ma
          , La = ga
          , ba = Ca((function(t, e) {
            var n = La(e);
            return wa(n) && (n = void 0),
            wa(t) ? va(t, ya(e, 1, wa, !0), void 0, n) : []
        }
        ))
          , xa = ba;
        const ja = (0,
        r.g)(xa);
        class Ma extends i.Component {
            constructor() {
                super(),
                this.rootElement = i.createRef()
            }
            componentDidMount() {
                const {items: t, typedOptions: e} = this.props;
                let n = this.rootElement.current.previousSibling;
                null != t && t.length && t.forEach((t => {
                    let e = document.createElement("span");
                    e.classList.add(t.id),
                    e.setAttribute("data-testid", "dynamic-text"),
                    e.innerHTML = (0,
                    r.s)(t.content) || (0,
                    r.s)(t.label),
                    n.appendChild(e)
                }
                )),
                this.constructTyped(n, e)
            }
            constructTyped(t, e={}) {
                this.typed && this.typed.destroy();
                const n = this.props.typedOptions;
                this.typed = new ln(this.rootElement.current,Object.assign({
                    stringsElement: t
                }, n, e))
            }
            shouldComponentUpdate(t) {
                if (this.props !== t) {
                    let e = this.rootElement.current.previousSibling;
                    const n = ja(t.items, this.props.items, jo)
                      , i = ja(this.props.items, t.items, jo)
                      , s = ja([t.typedOptions], [this.props.typedOptions], jo);
                    if (n.length && !i.length) {
                        let t = document.createElement("span");
                        t.classList.add(n[0].id),
                        t.innerText = n[0].content,
                        e.appendChild(t)
                    }
                    return [...e.children].forEach((t => {
                        n.length && i.length && t.classList.contains(n[0].id) && (t.innerHTML = (0,
                        r.s)(n[0].content)),
                        !n.length && i.length && t.classList.contains(i[0].id) && t.remove()
                    }
                    )),
                    (i.length || n.length || s.length) && this.constructTyped(e, s[0]),
                    !0
                }
                return !1
            }
            render() {
                return r.j.jsxs("span", {
                    className: "dorik-heading__dynamic",
                    "data-testid": "dynamic-text-wrapper",
                    children: [r.j.jsx("div", {}), r.j.jsx("span", {
                        ref: this.rootElement
                    })]
                })
            }
        }
        function Ea(t) {
            var e, n, s, o;
            const a = (0,
            i.useRef)()
              , l = (0,
            i.useRef)()
              , {Link: c="a", appName: d} = (0,
            i.useContext)(r.C)
              , {renderContent: u} = O()
              , {item: p, attrs: C, renderer: f, children: h, className: m, date: g={}, shouldType: v, control: y={}, wrapperClass: w, InteractiveComponent: L, isInlineEditorActive: b} = t
              , {titleType: x, wrapper: j={}, settings: M={}, dynamicText: E={}} = p
              , {items: N=[], options: k={}} = E
              , _ = (null == p ? void 0 : p.date) || g
              , {hrefType: S, noFollow: A} = M
              , T = null == (e = j.attr) ? void 0 : e.href
              , Z = "CMS" === d
              , I = f === r.B
              , [$] = Ve()
              , V = we({
                hrefType: S,
                hrefValue: T,
                noFollow: A,
                hrefTarget: null == (n = j.attr) ? void 0 : n.target
            });
            b && (V.href = "javascript:void(0)");
            let R = (0,
            r.s)(x)
              , P = null == (s = M.dynamicText) ? void 0 : s._enabled;
            const H = (0,
            i.useMemo)(( () => {
                let t = {};
                return Object.entries(k).forEach(( ([e,n]) => {
                    t[e] = "string" == typeof n ? +n : "cursorChar" === e ? n ? "|" : "" : n
                }
                )),
                t
            }
            ), [k]);
            Xe({
                src: "https://assets.dorik.com/common/typed.js@2.0.11",
                onLoad: qe({
                    plugin: "Typed",
                    instantiator(t) {
                        !P || !a.current || !l.current || new t(...( (t, e, n) => {
                            let {backSpeed: r, typeSpeed: i, cursorChar: s, ...o} = n;
                            return s = !0 === n.cursorChar ? "|" : "",
                            r = Number(r),
                            i = Number(i),
                            [t, {
                                stringsElement: e,
                                ...o,
                                cursorChar: s,
                                backSpeed: r,
                                typeSpeed: i
                            }]
                        }
                        )(a.current, l.current, k))
                    }
                })
            });
            const B = () => r.j.jsxs(R, {
                className: `dorik-heading ${m}`,
                ...C,
                children: [I ? r.j.jsx(L, {
                    as: "span",
                    typewriter: !0,
                    inlineEditor: !0,
                    address: t.address,
                    shouldType: v,
                    typekey: `${m}-heading`,
                    strings: [(0,
                    r.n)(u(h, _))]
                }) : r.j.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        r.n)(u(h, _))
                    }
                }, $), P && N.length > 0 && (f === r.B ? r.j.jsx(Ma, {
                    items: N,
                    typedOptions: H
                }) : r.j.jsxs("div", {
                    className: "dorik-heading__dynamic",
                    children: [r.j.jsx("div", {
                        className: "typed-strings",
                        ref: l,
                        children: N.map((t => r.j.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: (0,
                                r.s)(t.label) || t.content
                            }
                        }, t.id)))
                    }), r.j.jsx("span", {
                        className: "typed",
                        ref: a
                    })]
                }))]
            });
            let F = `dorik-wrapper ${w}`;
            return r.j.jsxs("div", {
                className: F,
                ...y.props,
                children: [null != (o = null == j ? void 0 : j.attr) && o.href ? r.j.jsx(c, {
                    ...V,
                    children: Z ? r.j.jsx("a", {
                        ...V,
                        className: F,
                        children: B()
                    }) : B()
                }) : B(), y.render && y.render()]
            })
        }
        function Na(t) {
            const {item: e={}} = t
              , {settings: n={}} = e;
            return "embed" !== n.type ? r.j.jsx(ka, {
                ...t
            }) : r.j.jsx(_a, {
                ...t
            })
        }
        function ka({className: t, wrapperClass: e, item: n, control: s={}}) {
            const {sources: o={}, attr: a={}} = n
              , l = Object.entries(o).filter(( ([t,e]) => e))
              , c = !!a.autoplay || null
              , d = void 0 === a.controls || a.controls
              , u = l.map(( ([t,e]) => e)).join("");
            return r.j.jsxs("div", {
                className: e,
                ...s.props,
                children: [(0,
                i.createElement)("video", {
                    ...a,
                    key: u,
                    controls: d,
                    playsInline: !0,
                    autoPlay: c,
                    className: t,
                    poster: l.length ? a.poster : "/assets/images/video-placeholder.jpg"
                }, l.map(( ([t,e]) => r.j.jsx("source", {
                    src: e,
                    type: `video/${t}`
                }, t))), "Your browser doesn't support HTML5 video tag."), s.render && s.render()]
            })
        }
        function _a(t) {
            var e;
            const {className: n, item: i={}, wrapperClass: s, control: o={}} = t
              , {attr: a={}, settings: l={}} = i;
            let c = function(t="") {
                if (/vimeo/.test(t)) {
                    const e = t.match(/vimeo\.com\/(\d+)/);
                    return e ? `https://player.vimeo.com/video/${e[1]}` : ""
                }
                if (/youtu(be)?\.(com|be)/.test(t)) {
                    const e = /(.*?)(^|\/|v=)([a-z0-9_-]{11})/i
                      , n = t.match(e);
                    return n ? `https://www.youtube.com/embed/${n[3]}` : ""
                }
                return t
            }(l.url);
            const d = function(t={}) {
                const e = {
                    fs: void 0 !== t.fullscreen ? t.fullscreen : 1,
                    muted: t.muted ? 1 : 0,
                    loop: t.loop ? 1 : 0,
                    autoplay: t.autoplay ? 1 : 0,
                    controls: void 0 !== t.controls ? t.controls : 1
                };
                return Object.entries(e).map(( ([t,e]) => `${t}=${Number(e)}`)).join("&")
            }(a);
            return c += c ? `?${d}` : "",
            r.j.jsxs("div", {
                className: `dorik-iframe ${n} ${s}`,
                ...o.props,
                style: {
                    ...null == (e = o.props) ? void 0 : e.style,
                    pointerEvents: "auto"
                },
                children: [c ? r.j.jsx("iframe", {
                    title: i.id,
                    src: c,
                    frameBorder: "0",
                    allow: Sa(a),
                    allowFullScreen: a.fullscreen
                }) : r.j.jsx("img", {
                    src: "/assets/images/video-placeholder.jpg",
                    alt: "video placeholder"
                }), o.render && o.render()]
            })
        }
        function Sa(t) {
            const e = {
                autoplay: t.autoplay,
                fullscreen: t.fullscreen
            };
            return Object.entries(e).filter(( ([t,e]) => e)).map(( ([t]) => t)).join(";")
        }
        function Aa({item: t, className: e, attrs: n}) {
            var i;
            const {links: s} = t;
            return null != (i = null == s ? void 0 : s.items) && i.length ? r.j.jsx("ul", {
                className: `dorik-list ${e}`,
                ...n,
                children: s.items.map(( (t, e) => r.j.jsx(Ta, {
                    link: t
                }, e)))
            }) : null
        }
        Ea.shouldRender = ({item: t, isRenderable: e}) => {
            var n;
            const {settings: r={}, dynamicText: i={}} = t;
            let s = null == (n = null == r ? void 0 : r.dynamicText) ? void 0 : n._enabled
              , o = i.items;
            return !(!s || !o.length) || e(t.content)
        }
        ,
        Na.shouldRender = ({item: t, renderer: e}) => {
            const {settings: n={}, sources: r={}} = t;
            return !!e || ("embed" === n.type ? n.url : Object.entries(r).filter(( ([t,e]) => e)).length)
        }
        ;
        const Ta = ({link: t}) => {
            const {settings: {hrefType: e, noFollow: n}={}} = t
              , s = we({
                hrefType: e,
                noFollow: n,
                hrefValue: t.url,
                hrefTarget: t.target
            })
              , {updateModalId: o} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                className: "dorik-list--item",
                children: r.j.jsxs("a", {
                    ...s,
                    onClick: () => {
                        "popup" === e && o(t.url)
                    }
                    ,
                    className: `dorik-list--link ${me(e)}`,
                    children: [(t => {
                        if (t)
                            return r.j.jsxs("span", {
                                className: "dorik-list--icon",
                                children: [r.j.jsx(d.G, {
                                    fixedWidth: !0,
                                    icon: t
                                }), " "]
                            })
                    }
                    )(t.icon), r.j.jsx("span", {
                        className: "dorik-list--text",
                        children: t.label
                    })]
                })
            })
        }
        ;
        function Za({item: t, shouldType: e, renderer: n, className: i, attrs: s, InteractiveComponent: o, control: a={}}) {
            const {data: l={}} = O()
              , {links: c} = t
              , {configuration: d={}} = t
              , u = l && l[null == d ? void 0 : d.selectedField] || []
              , p = n === r.B;
            return r.j.jsxs("ul", {
                className: `dorik-list ${i}`,
                ...s,
                ...a.props,
                children: ["dynamic" === c.linkType ? r.j.jsx(h, {
                    value: u,
                    children: r.j.jsx(Oa, {
                        ...t
                    })
                }) : r.j.jsx($a, {
                    isBuilder: p,
                    links: c,
                    shouldType: e,
                    InteractiveComponent: o
                }), a.render && a.render()]
            })
        }
        const Ia = ({configuration: t={}, icon: e}) => {
            const {label: n, selectedField: s, slug: o, target: a, noFollow: l} = t
              , {renderContent: c, data: d={}} = O();
            let {slugs: u={}} = en();
            const {Link: p} = (0,
            i.useContext)(r.C)
              , C = c(n)
              , f = "categories" === s && u.categorySlug || d._topicSlug;
            let h, m = "span";
            return o && (m = p,
            h = {
                target: a,
                href: `/${f}/${c(o)}`,
                ...l && {
                    rel: "nofollow"
                }
            }),
            r.j.jsx("li", {
                className: "dorik-list--item",
                children: r.j.jsx(m, {
                    ...h,
                    children: r.j.jsxs("a", {
                        className: "dorik-list--link",
                        children: [Va(e, "cms_link_id"), r.j.jsx("span", {
                            className: "dorik-list--text",
                            children: C
                        })]
                    })
                })
            })
        }
          , Oa = t => {
            const {data: e=[]} = O();
            return e.length ? e.map(( (e={}, n) => r.j.jsx(h, {
                value: e,
                children: r.j.jsx(Ia, {
                    ...t
                })
            }, n))) : r.j.jsx("span", {
                children: "No Data Found"
            })
        }
          , $a = ({links: t=[], ...e}) => {
            var n;
            return null != (n = null == t ? void 0 : t.items) && n.length ? t.items.map(( (t, n) => r.j.jsx(Ra, {
                link: t,
                ...e
            }, n))) : null
        }
          , Va = (t, e) => t ? r.j.jsx("span", {
            className: "dorik-list--icon",
            children: r.j.jsx(c.I, {
                exClass: `icon_${e}`,
                iconArgs: null == t ? void 0 : t.icon,
                icon: t
            })
        }) : null
          , Ra = ({link: t, InteractiveComponent: e, item: n, isBuilder: s, shouldType: o}) => {
            const {settings: {hrefType: a, noFollow: l}={}} = t
              , c = we({
                hrefType: a,
                noFollow: l,
                hrefValue: t.url,
                hrefTarget: t.target
            })
              , {updateModalId: d} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                className: "dorik-list--item",
                children: r.j.jsxs("a", {
                    ...c,
                    onClick: () => {
                        "popup" === a && d(t.url)
                    }
                    ,
                    className: `dorik-list--link ${me(a)}`,
                    children: [Va(t.icon, t.id), s ? r.j.jsx(e, {
                        as: "span",
                        typekey: `dorik-list--link-${t.id}`,
                        shouldType: o,
                        strings: [t.label]
                    }) : r.j.jsx("span", {
                        className: "dorik-list--text",
                        children: t.label
                    })]
                })
            })
        }
          , Pa = t => {
            const {item: e} = t
              , {version: n} = e;
            return "2.0.0" === n ? r.j.jsx(Za, {
                ...t
            }) : r.j.jsx(Aa, {
                ...t
            })
        }
        ;
        Pa.migration = (t, e) => {
            var n;
            const {version: r} = t
              , i = null == (n = null == t ? void 0 : t.links) ? void 0 : n.items
              , s = null == i ? void 0 : i.map((t => {
                const e = {
                    ...t
                };
                return null === t.icon || void 0 === t.icon ? e.icon = {
                    visible: "font-awesome",
                    icon: null
                } : e.icon = {
                    visible: "font-awesome",
                    icon: {
                        type: "font-awesome",
                        ...t.icon
                    }
                },
                e
            }
            ));
            r || e([{
                name: "version",
                value: "2.0.0"
            }, {
                name: "links/items",
                value: s
            }])
        }
        ,
        Pa.shouldRender = ({item: {links: t={}, configuration: e}}) => {
            var n;
            return "dynamic" === t.linkType ? null == e ? void 0 : e.label : null == (n = t.items) ? void 0 : n.length
        }
        ;
        function Ha({item: t, attrs: e, children: n, className: s, wrapperClass: o, renderer: a, shouldType: l, control: d={}, InteractiveComponent: u}) {
            const {Link: p="a", appName: C} = (0,
            i.useContext)(r.C)
              , f = "CMS" === C
              , {attr: h={}, icon: m={}, settings: g={}} = t
              , {icon: v} = m
              , y = "popup" === g.hrefType
              , w = "text-only" !== g.buttonType && m.icon
              , L = g.inlineButton ? "el-ib" : ""
              , b = g.hrefType
              , x = h.href
              , j = we({
                hrefType: b,
                hrefValue: x,
                noFollow: g.noFollow,
                hrefTarget: h.target
            })
              , M = ( ({href: t}) => {
                const e = /^https?:\/\//i.test(t)
                  , n = ["#/portal", "#/portal/signin", "#/portal/signup", "#/portal/signup/monthly", "#/portal/signup/yearly", "#/portal/signup/free", "#/portal/account", "#/portal/account/plans", "#/portal/account/profile"].some((e => t && t.includes(e)));
                return e && n
            }
            )(j)
              , {renderContent: E} = O()
              , {updateModalId: N} = (0,
            i.useContext)(R)
              , k = t => {
                if (!y)
                    return a === r.B && t.preventDefault();
                N(x)
            }
              , _ = a === r.B
              , S = () => r.j.jsxs("button", {
                className: `dorik-btn ${s} ${me(g.hrefType)}`,
                ...e,
                onClick: k,
                children: [w && v && r.j.jsx(c.I, {
                    iconArgs: v,
                    icon: m
                }), _ ? r.j.jsx(u, {
                    as: "span",
                    typekey: `${s}-button`,
                    shouldType: l,
                    strings: [E(n)]
                }) : E(n)]
            })
              , A = () => r.j.jsx("a", {
                ...j,
                children: S()
            });
            return r.j.jsxs("div", {
                className: `${o} ${L}`,
                ...d.props,
                children: [!y && h.href ? f && M ? r.j.jsx(p, {
                    ...j,
                    children: A()
                }) : A() : S(), d.render && d.render()]
            })
        }
        Ha.shouldRender = ({item: {content: t, icon: e={}}, isRenderable: n}) => {
            const {icon: r} = e;
            return n(t) || (null == r ? void 0 : r.prefix) || (null == r ? void 0 : r.iconName)
        }
        ;
        const Ba = {
            buttonText: {},
            icon: {}
        }
          , Fa = ({page: t, fetchPage: e, direction: n, isFetching: i, isDisabled: s, hasNextPage: o, isBuilder: a=!1, paginationSetting: l, isFetchingNextPage: d}) => {
            const {buttonText: u, icon: p={}, type: C} = l || Ba
              , f = () => r.j.jsxs("button", {
                onClick: () => e("load"),
                style: {
                    opacity: o ? 1 : .5
                },
                disabled: !a && !o,
                children: [d && (0,
                c.s)(), u.loadText || "Load More", " "]
            })
              , h = () => {
                var o, a;
                const l = (null == (o = p.nextIcon) ? void 0 : o.icon) || p.nextIcon
                  , d = (null == (a = p.prevIcon) ? void 0 : a.icon) || p.prevIcon;
                return r.j.jsxs(r.j.Fragment, {
                    children: [r.j.jsxs("button", {
                        disabled: t <= 1,
                        style: {
                            opacity: t <= 1 ? .5 : 1
                        },
                        onClick: () => e("prev"),
                        children: [r.j.jsx(c.I, {
                            exClass: "icon",
                            iconArgs: d
                        }), " ", i && (0,
                        c.s)(n, "prev"), u.prevText]
                    }), r.j.jsxs("button", {
                        disabled: s,
                        style: {
                            opacity: s ? .5 : 1
                        },
                        onClick: () => !s && e("next"),
                        children: [i && (0,
                        c.s)(n, "next"), u.nextText, " ", r.j.jsx(c.I, {
                            exClass: "icon",
                            iconArgs: l
                        })]
                    })]
                })
            }
            ;
            return r.j.jsx("div", {
                className: "button-section",
                children: "nextPrev" !== C ? r.j.jsx(f, {}) : r.j.jsx(h, {})
            })
        }
          , Ua = ({emptyDataSettings: t, className: e, control: n={}}) => {
            const {emptyDataText: i} = t || {};
            return r.j.jsxs("div", {
                className: e,
                ...n.props,
                children: [r.j.jsx("p", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    className: "empty-data-section",
                    children: void 0 === i ? " No Data Available" : i
                }), n.render && n.render()]
            })
        }
          , Da = "ARRAY"
          , {TEXT: za, LINK: Ga, EMAIL: Ya, IMAGE: Xa, RICH_TEXT: qa, MULTI_SELECT: Wa, SINGLE_SELECT: Ka, SINGLE_REFERENCE: Ja, MULTI_REFERENCE: Qa} = {
            DATE: "DATE",
            TEXT: "TEXT",
            LINK: "LINK",
            IMAGE: "IMAGE",
            EMAIL: "EMAIL",
            NUMBER: "NUMBER",
            RICH_TEXT: "RICH_TEXT",
            MULTI_SELECT: "MULTI_SELECT",
            SINGLE_SELECT: "SINGLE_SELECT",
            MULTI_REFERENCE: "MULTI_REFERENCE",
            SINGLE_REFERENCE: "SINGLE_REFERENCE"
        }
          , {IN: tl, NOT_IN: el, EQUAL_TO: nl, NOT_EQUAL_TO: rl, LIKE: il, NOT_LIKE: sl, EXISTS: ol, SET: al, NOT_SET: ll} = {
            SET: "$set",
            NOT_SET: "$nset",
            IN: "$in",
            NOT_IN: "$nin",
            EQUAL_TO: "$eq",
            LIKE: "$like",
            NOT_LIKE: "$nlike",
            LESS_THAN: "$lt",
            EXISTS: "$exists",
            GREATER_THAN: "$gt",
            BETWEEN: "$between",
            NOT_EQUAL_TO: "$neq",
            LESS_THAN_OR_EQUAL_TO: "$lte",
            GREATER_THAN_OR_EQUAL_TO: "$gte"
        }
          , cl = Object.freeze({
            ID_POSTFIX: "._id",
            TEXT_POSTFIX: "_text",
            KEYWORD_POSTFIX: "_keyword"
        })
          , dl = t => {
            switch (t) {
            case Ga:
            case Ya:
            case Xa:
            case qa:
            case Ka:
            case Ja:
                return za;
            case Wa:
            case Qa:
                return Da;
            default:
                return t
            }
        }
          , ul = t => {
            const {operator: e, type: n} = t.field
              , r = {
                ...t
            };
            if ([al, ll].includes(e)) {
                let i;
                i = [za, Ka, Ya].includes(n) ? {
                    operator: e === al ? rl : nl,
                    value: ""
                } : {
                    operator: ol,
                    value: e === al
                },
                r.field = {
                    ...t.field,
                    ...i
                }
            }
            return r
        }
        ;
        function pl(t, e) {
            var n;
            const {value: r, type: i} = e.field
              , s = ( ({type: t, operator: e, name: n}) => [za, Ja, Qa].includes(t) ? [Ja, Qa].includes(t) ? `${n}${cl.ID_POSTFIX}` : {
                [nl]: `${n}${cl.KEYWORD_POSTFIX}`,
                [rl]: `${n}${cl.KEYWORD_POSTFIX}`,
                [il]: `${n}${cl.TEXT_POSTFIX}`,
                [sl]: `${n}${cl.TEXT_POSTFIX}`
            }[e] || n : n)(e.field);
            if (void 0 === r)
                return t;
            const o = {
                ...e.field,
                type: dl(e.field.type)
            };
            return "__current" === r && (o.value = this.__current),
            "MULTI_REFERENCE" === i && null != (n = r.includes) && n.call(r, "__current") && (o.value = [this.__current]),
            t[s] ? t[s].push(o) : t[s] = [o],
            t
        }
        const Cl = ({type: t="AND", items: e=[], __current: n}={}) => {
            if (!e)
                return;
            const r = e.filter(( ({field: t}) => t)).map(ul).reduce(pl.bind({
                __current: n
            }), {});
            let i;
            return Object.entries(r).forEach(( ([e,n]) => {
                let[{type: r}] = n;
                const s = {}
                  , {eqConditions: o, neqConditions: a, restOfConditions: l} = (t => t.reduce(( (t, e) => ("$eq" === e.operator ? t.eqConditions.push(e) : "$neq" === e.operator ? t.neqConditions.push(e) : t.restOfConditions.push(e),
                t)), {
                    neqConditions: [],
                    eqConditions: [],
                    restOfConditions: []
                }))(n)
                  , c = {
                    [nl]: {
                        data: o,
                        replacer: tl
                    },
                    [rl]: {
                        data: a,
                        replacer: el
                    }
                };
                Object.entries(c).forEach(( ([t,{data: e, replacer: n}]) => {
                    e.length && (e.length > 1 ? (r = Da,
                    s[n] = e.map((t => t.value))) : s[t] = e[0].value)
                }
                )),
                l.forEach(( ({value: t, operator: e}) => {
                    if ([tl, el].includes(e) && s[e]) {
                        if (!Array.isArray(t))
                            return;
                        const n = [...new Set(s[e].concat(t))];
                        s[e] = n
                    } else
                        s[e] = t
                }
                ));
                const d = {
                    OR: {
                        $or: s
                    },
                    AND: s
                }[t];
                i || (i = {}),
                i[e] = {
                    type: r,
                    conditions: d
                }
            }
            )),
            i
        }
        ;
        const fl = ({handleChange: t, limitMin: e, limitMax: n, filterType: s, renderer: o, filterValues: a={}}) => {
            const [l,c] = (0,
            i.useState)(e)
              , [d,p] = (0,
            i.useState)(n)
              , [C,f] = (0,
            i.useState)(e)
              , [h,m] = (0,
            i.useState)(n)
              , g = t => {
                const r = Math.max(e, Math.min(t, n));
                if (r > d) {
                    const t = r;
                    p(t),
                    m(t)
                }
                c(r),
                f(r)
            }
              , v = t => {
                const r = Math.max(e, Math.min(t, n));
                if (r < l) {
                    const t = r;
                    c(t),
                    f(t)
                }
                p(r),
                m(r)
            }
              , y = (l - e) / (n - e) * 100
              , w = (d - e) / (n - e) * 100
              , L = (0,
            i.useCallback)((0,
            u.d)(( (e, n) => {
                t({
                    min: e,
                    max: n
                }, s)
            }
            ), 500), []);
            (0,
            i.useEffect)(( () => ("BUILDER" !== o && L(l, d),
            () => L.cancel())), [l, d, s, o]);
            const b = (0,
            i.useMemo)(( () => a[s]), []);
            return (0,
            i.useEffect)(( () => {
                b && (c(b.min),
                f(b.min),
                m(b.max),
                p(b.max))
            }
            ), [b]),
            r.j.jsxs("div", {
                className: "range-slider-container",
                children: [r.j.jsxs("div", {
                    className: "value-display",
                    children: [r.j.jsxs("div", {
                        className: "value-box",
                        children: [r.j.jsx("div", {
                            className: "range-input-number-label",
                            children: "Min"
                        }), r.j.jsx("input", {
                            type: "number",
                            value: C,
                            onChange: t => {
                                f(Number(t.target.value))
                            }
                            ,
                            onBlur: t => {
                                const n = Number(t.target.value);
                                isNaN(n) ? g(e) : g(n)
                            }
                            ,
                            min: e,
                            max: n
                        })]
                    }), r.j.jsxs("div", {
                        className: "value-box",
                        children: [r.j.jsx("div", {
                            className: "range-input-number-label",
                            children: "Max"
                        }), r.j.jsx("input", {
                            type: "number",
                            value: h,
                            onChange: t => {
                                m(Number(t.target.value))
                            }
                            ,
                            onBlur: t => {
                                const e = Number(t.target.value);
                                isNaN(e) ? v(n) : v(e)
                            }
                            ,
                            min: e,
                            max: n
                        })]
                    })]
                }), r.j.jsxs("div", {
                    className: "slider-container",
                    children: [r.j.jsx("div", {
                        className: "rail"
                    }), r.j.jsx("div", {
                        className: "track",
                        style: {
                            left: `${y}%`,
                            right: 100 - w + "%"
                        }
                    }), r.j.jsx("input", {
                        type: "range",
                        min: e,
                        max: n,
                        value: l,
                        onChange: t => {
                            const e = Number(t.target.value);
                            g(e)
                        }
                        ,
                        className: "range-input"
                    }), r.j.jsx("input", {
                        type: "range",
                        min: e,
                        max: n,
                        value: d,
                        onChange: t => {
                            const e = Number(t.target.value);
                            v(e)
                        }
                        ,
                        className: "range-input"
                    })]
                })]
            })
        }
        ;
        function hl({href: t, doc: e}) {
            (0,
            i.useEffect)(( () => {
                const n = t => {
                    const n = e || window.document;
                    if (n.head.querySelector(`link[href="${t}"]`))
                        return;
                    const r = n.createElement("link");
                    r.rel = "stylesheet",
                    r.href = t,
                    n.head.appendChild(r)
                }
                ;
                Array.isArray(t) ? t.map((t => n(t))) : n(t)
            }
            ), [e])
        }
        const ml = ({cmsId: t, renderer: e, filterType: n, filterValues: i, handleChange: s}) => {
            const {contentDocument: o} = V();
            hl({
                href: "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
                doc: o
            });
            const a = i[n]
              , l = null == a ? void 0 : a.map((t => new Date(t)));
            return Xe({
                src: "https://cdn.jsdelivr.net/npm/flatpickr",
                onLoad: ({window: r}) => {
                    "BUILDER" !== e && r.flatpickr && r.flatpickr(`#date-picker-${t}`, {
                        mode: "range",
                        defaultDate: l,
                        onOpen: (e, n, r) => {
                            r.calendarContainer.setAttribute("id", `date-range-wrap-${t}`)
                        }
                        ,
                        onChange: t => {
                            if (0 == t.length)
                                return s(null, n);
                            if (2 == t.length) {
                                const e = t.map((t => t.toLocaleDateString("en-CA")));
                                s(e, n)
                            }
                        }
                    })
                }
            }),
            r.j.jsx("div", {
                className: "custom-date-range",
                id: `date-range-wrap-${t}`,
                children: r.j.jsx("input", {
                    type: "text",
                    id: `date-picker-${t}`,
                    placeholder: "Select Date",
                    "data-input-type": "custom-date-picker"
                })
            })
        }
        ;
        function gl({direction: t, renderer: e, filterValues: n={}, updateFilterVals: i, ...s}) {
            const {cmsId: o, content: a, min: l, max: c, showAs: d="dropdown"} = s
              , u = (t, e) => {
                i({
                    [e]: t
                })
            }
            ;
            return "range" === d && "number" == typeof l && "number" == typeof c ? r.j.jsx("div", {
                className: "filter-content",
                "data-testid": `slider-${o}-${s.id}`,
                children: r.j.jsx(fl, {
                    handleChange: u,
                    limitMin: l,
                    limitMax: c,
                    label: !1,
                    filterType: a,
                    renderer: e,
                    filterValues: n
                }, `${l}-${c}`)
            }, o) : "dateRange" === d ? r.j.jsx("div", {
                className: "filter-content",
                "data-testid": `date-picker-${o}-${s.id}`,
                children: r.j.jsx(ml, {
                    cmsId: o,
                    filterType: a,
                    renderer: e,
                    filterValues: n,
                    handleChange: u
                })
            }, o) : null
        }
        function vl({sortValue: t={}, setSortValue: e, cmsId: n, sortableFields: s=[]}) {
            const {sortBy: o, order: a} = t
              , l = (0,
            i.useRef)();
            const d = t => {
                var e, n;
                null != (e = l.current) && e.contains(t.target) || null == (n = l.current) || n.classList.remove("show")
            }
            ;
            (0,
            i.useEffect)(( () => (window.addEventListener("click", d),
            () => window.removeEventListener("click", d))), []);
            const u = s.flatMap(( ({label: t, value: e}) => [{
                label: `${t} - (asc)`,
                value: e,
                order: "asc"
            }, {
                label: `${t} - (desc)`,
                value: e,
                order: "desc"
            }]));
            return r.j.jsx("div", {
                className: "custom-sort-field",
                children: r.j.jsxs("div", {
                    className: "dropdown",
                    children: [r.j.jsx("button", {
                        onClick: t => {
                            var e;
                            t.preventDefault(),
                            t.stopPropagation(),
                            null == (e = l.current) || e.classList.toggle("show"),
                            function(t) {
                                const e = t.getBoundingClientRect();
                                window.innerWidth - e.right < 0 ? (t.style.right = "0",
                                t.style.left = "auto") : (t.style.left = "0",
                                t.style.right = "auto")
                            }(l.current)
                        }
                        ,
                        "data-testid": `sort-btn-${n}`,
                        className: "dropdown-btn " + (o ? "active" : ""),
                        children: r.j.jsx(c.I, {
                            exClass: "sort-icon",
                            iconArgs: {
                                prefix: "fas",
                                iconName: "sort"
                            }
                        })
                    }), r.j.jsx("ul", {
                        ref: l,
                        className: "dropdown-content",
                        "data-testid": `sort-content-${n}`,
                        children: u.map(( (t, n) => {
                            const i = t.value === o && a === t.order;
                            return r.j.jsx("li", {
                                className: i ? "active" : "",
                                children: r.j.jsx("a", {
                                    href: "#",
                                    onClick: n => ( (t, {order: n, value: r}) => {
                                        var i;
                                        t.preventDefault(),
                                        e({
                                            sortBy: r,
                                            order: n,
                                            type: "DATE"
                                        }),
                                        null == (i = l.current) || i.classList.remove("show")
                                    }
                                    )(n, t),
                                    children: t.label
                                })
                            }, n)
                        }
                        ))
                    })]
                })
            })
        }
        function yl(t) {
            const {id: e, renderer: n, filterValues: s, settings: o={}, setSortValue: a, sortValue: l, updateFilterVals: c} = t
              , {filterSetting: {enableFilter: d, filterItems: u=[]}={}, sortSetting: {sortEnable: p, sortableFields: C=[]}={}} = o;
            return r.j.jsxs("div", {
                className: "cms-filter-section",
                children: [r.j.jsx("div", {
                    className: "cms-filter-wrap",
                    children: d && u.map((t => (0,
                    i.createElement)(gl, {
                        cmsId: e,
                        ...t,
                        key: t.id,
                        filterValues: s,
                        updateFilterVals: c,
                        direction: "item-flex",
                        renderer: n
                    })))
                }), r.j.jsx("div", {
                    className: "cms-sort-wrap",
                    children: p && r.j.jsx(vl, {
                        cmsId: e,
                        sortValue: l,
                        setSortValue: a,
                        sortableFields: C
                    })
                })]
            })
        }
        const wl = ({items: t=[], source: e}) => {
            if (!t)
                return;
            const n = t.filter(( ({field: t}) => t)).map(( ({field: {sortBy: t, order: e}}) => ({
                sortBy: t,
                order: e
            })));
            return "POST" === e ? n[0] : n[0] ? Object.keys(n[0]).map((t => `${t}=${n[0][t]}`)).join("&") : ""
        }
        ;
        const Ll = i.memo((t => {
            let {className: e, previewMapper: n, children: s, item: o, renderer: a} = t
              , {content: l, configuration: {connected: d, source: u, selectedCollection: p, topicSlug: C}, filter: f, sort: h, settings: m={}, paginationSetting: {renderPagination: v=!0, itemPerPage: y=10, type: w}, emptyDataSettings: L} = o;
            const [b,x] = (0,
            i.useState)(1);
            let {siteId: j, pageType: M, slugs: E={}, useCollectionItems: N, data: k={}} = en();
            const [_,S] = (0,
            i.useState)("next");
            let {slug: A} = k;
            A = C || (null == p ? void 0 : p.slug) || A;
            const {filterItems: T, updateFilterVals: Z, filterValues: I} = function({filter: t, settings: e={}, singleItem: n={}}) {
                const {filterSetting: r={}} = e
                  , {filterItems: s=[], conditionType: o="OR"} = r
                  , [a,l] = (0,
                i.useState)({})
                  , c = (0,
                i.useMemo)(( () => Cl({
                    ...t,
                    __current: n._id
                })), [t, n._id])
                  , d = (0,
                i.useMemo)(( () => {
                    if (!Array.isArray(s) || !a)
                        return;
                    const t = s.filter((t => a[t.content])).flatMap((t => {
                        const e = a[t.content];
                        if (!e)
                            return null;
                        const n = (e, n=[]) => e.map(( (e, r) => ({
                            operator: e,
                            value: n[r],
                            name: t.content,
                            type: t.supportedFieldType
                        })));
                        return "NUMBER" === t.supportedFieldType ? n(["$gte", "$lte"], [null == e ? void 0 : e.min, null == e ? void 0 : e.max]) : "DATE" === t.supportedFieldType && e.filter(Boolean).length >= 2 ? n(["$gte", "$lte"], e) : {
                            operator: "$like",
                            value: e,
                            name: t.content,
                            type: t.supportedFieldType
                        }
                    }
                    )).filter(Boolean).flatMap((t => Array.isArray(t) ? t.map((t => ({
                        field: t
                    }))) : {
                        field: t
                    }));
                    return Cl({
                        items: t,
                        type: o,
                        __current: n._id
                    })
                }
                ), [s, o, a, n._id])
                  , u = (0,
                i.useMemo)(( () => {
                    const t = {
                        ...d,
                        ...c
                    };
                    if (Object.keys(t).length)
                        return t
                }
                ), [d, c]);
                return {
                    filterValues: a,
                    updateFilterVals: t => {
                        l((e => {
                            const n = {
                                ...e
                            };
                            return Object.entries(t).forEach(( ([t,e]) => {
                                e ? n[t] = e : delete n[t]
                            }
                            )),
                            n
                        }
                        ))
                    }
                    ,
                    filterItems: u
                }
            }({
                filter: f,
                settings: m,
                singleItem: k
            })
              , {sortItems: O, sortValue: $, setSortValue: V} = function({sort: t, source: e}) {
                const [n,r] = (0,
                i.useState)({})
                  , s = (0,
                i.useMemo)(( () => wl({
                    ...t,
                    source: e
                })), [t, e])
                  , o = (0,
                i.useMemo)(( () => {
                    if (n.sortBy)
                        return wl({
                            items: [{
                                field: n
                            }],
                            source: e
                        })
                }
                ), [n, e]);
                return {
                    sortItems: s || o,
                    sortValue: n,
                    setSortValue: r
                }
            }({
                sort: h,
                source: u
            });
            let {data: R=[], isFetching: P, isLoading: H, hasNextPage: F, fetchNextPage: U, isFetchingNextPage: D} = N({
                siteId: j,
                pageType: M,
                type: u,
                slug: A,
                options: {
                    page: b,
                    type: w,
                    perPage: Number(y),
                    filter: T,
                    sort: O
                }
            })
              , z = [1, 2].map(( () => ({
                ...l[0],
                content: []
            })));
            const G = "POST" === p ? E.postSlug : null == p ? void 0 : p.slug
              , Y = v && (R && (null == R ? void 0 : R.length) || b > 1);
            let X;
            C && (X = k[null == p ? void 0 : p.slug] || []);
            let q = [];
            const W = X || R;
            W && (q = W.map((t => ({
                ...l[0],
                cmsData: {
                    ...t,
                    slug: X ? t.slug : `/${G}/${t.slug}`
                }
            }))));
            const K = {
                settings: m,
                renderer: a,
                sortValue: $,
                id: o.id,
                setSortValue: V,
                filterValues: I,
                updateFilterVals: Z
            }
              , J = d ? q : z;
            return a === r.B && null != n && n.cmsEmptyDataPreview ? r.j.jsx(Ua, {
                className: e,
                emptyDataSettings: L,
                control: t.control
            }) : d ? r.j.jsx(g, {
                value: C ? k : null,
                children: r.j.jsxs(B, {
                    ...t,
                    children: [r.j.jsx(yl, {
                        ...K
                    }), H ? r.j.jsx("div", {
                        style: {
                            width: "100%"
                        },
                        children: r.j.jsx(c.L, {
                            fontSize: "32px"
                        })
                    }) : r.j.jsxs(r.j.Fragment, {
                        children: [null != R && R.length ? i.Children.map(s, (t => i.cloneElement(t, {
                            content: J
                        }))) : r.j.jsx(Ua, {
                            className: e,
                            emptyDataSettings: L
                        }), Y && r.j.jsx(Fa, {
                            ...o,
                            page: b,
                            direction: _,
                            fetchPage: t => {
                                switch (t) {
                                case "load":
                                    return F ? U() : void 0;
                                case "prev":
                                    return x((t => Math.max(t - 1, 1))),
                                    void S(t);
                                default:
                                    return x((t => t + 1)),
                                    void S(t)
                                }
                            }
                            ,
                            isFetching: P,
                            hasNextPage: F,
                            isDisabled: R.length < Number(y),
                            isFetchingNextPage: D
                        })]
                    })]
                })
            }) : a === r.B ? r.j.jsxs("div", {
                className: `${e} dummy-column flex`,
                children: [r.j.jsx("button", {
                    size: "lg",
                    className: "connectBtn",
                    children: "Connect to Database"
                }), i.Children.map(s, (t => i.cloneElement(t, {
                    content: J
                })))]
            }) : null
        }
        ));
        function bl(t) {
            var e;
            const {className: n, item: i={}, control: s={}} = t
              , {attr: o={}} = i
              , {renderContent: a} = O()
              , l = a(null == o ? void 0 : o.src);
            return r.j.jsxs("div", {
                ...s.props,
                className: `dorik-iframe ${n}`,
                style: {
                    ...null == (e = s.props) ? void 0 : e.style,
                    pointerEvents: "auto"
                },
                children: [r.j.jsx("iframe", {
                    ...o,
                    src: l,
                    title: i.id,
                    frameBorder: "0",
                    allowFullScreen: !0
                }), s.render && s.render()]
            })
        }
        function xl(t) {
            if (!t)
                return "";
            const e = {
                mobile: "hidden-sm",
                tablet: "hidden-md",
                desktop: "hidden-lg"
            };
            return t.split("+").map((t => e[t])).join(" ")
        }
        bl.shouldRender = ({isRenderable: t, item: {attr: e={}}}) => {
            const n = t(null == e ? void 0 : e.src);
            return /^(https?:\/\/)/gi.test(n || "")
        }
        ;
        const jl = ({children: t, settings: e={}}) => {
            const {hrefType: n, attr: r} = e
              , {updateModalId: s} = (0,
            i.useContext)(R)
              , {href: o, target: a} = we({
                hrefType: n,
                hrefValue: null == r ? void 0 : r.href,
                hrefTarget: null == r ? void 0 : r.target
            })
              , l = "popup" === e.hrefType
              , c = me(e.hrefType);
            return t({
                href: o,
                target: a,
                extraClass: c,
                onClick: t => {
                    if (l)
                        return s(null == r ? void 0 : r.href);
                    "A" === t.target.tagName || t.target.closest("a") || window.open(o, a || "_self")
                }
            })
        }
        ;
        function Ml({className: t, children: e, item: n, renderer: i, attrs: s}) {
            var o;
            const {cmsData: a, singleField: l, settings: c} = n
              , {data: d} = O()
              , u = function(t) {
                var e, n, r, i;
                const {attr: s={}, media: o} = t
                  , a = null == (n = null == (e = null == o ? void 0 : o.tablet) ? void 0 : e.attr) ? void 0 : n.__class__columnSize
                  , l = null == (i = null == (r = null == o ? void 0 : o.mobile) ? void 0 : r.attr) ? void 0 : i.__class__columnSize
                  , c = {
                    [`col-lg-${s.__class__columnSize}`]: null != s.__class__columnSize,
                    [`col-md-${a}`]: null != a,
                    [`col-xs-${l}`]: null != l
                };
                return Object.entries(c).map(( ([t,e]) => e && t)).filter((t => t)).join(" ")
            }(n)
              , p = xl(null == c ? void 0 : c.hideOn)
              , C = i === r.B;
            t = H(n, t);
            let f = a || d;
            "nestedCol" === n.component_label && (f = l || f);
            const m = r.j.jsx("div", {
                className: `column-inner ${t}`,
                ...s,
                children: r.j.jsx(h, {
                    value: f,
                    children: e
                })
            });
            return (null == (o = null == c ? void 0 : c.attr) ? void 0 : o.href) && !C ? r.j.jsx("div", {
                className: `${u} ${p}`,
                children: r.j.jsx(h, {
                    value: f,
                    children: r.j.jsx(jl, {
                        settings: c,
                        children: ({href: n, target: i, extraClass: s, ...o}) => r.j.jsx("div", {
                            "data-href": n,
                            "data-target": i || "_self",
                            className: `column-inner linked-column ${t} ${s}`,
                            ...o,
                            children: e
                        })
                    })
                })
            }) : C ? m : r.j.jsx("div", {
                className: `${u} ${p}`,
                children: m
            })
        }
        function El({className: t, children: e, item: n, wrapperClass: i, attrs: s, renderer: o, shouldType: a, InteractiveComponent: l, control: d={}, address: u}) {
            const {icon: p={}} = n
              , {icon: C} = p
              , {renderContent: f} = O()
              , [h] = Ve()
              , m = o === r.B;
            return r.j.jsxs("div", {
                className: `${i}`,
                ...d.props,
                children: [r.j.jsxs("div", {
                    className: t,
                    ...s,
                    children: [r.j.jsx("span", {
                        children: C && r.j.jsx(c.I, {
                            iconArgs: C,
                            icon: p
                        })
                    }), m ? r.j.jsx(l, {
                        className: "icon_text",
                        "data-testid": "icon-text",
                        as: "span",
                        inlineEditor: !0,
                        address: u,
                        typekey: `${t}-textIcon`,
                        shouldType: a,
                        strings: [(0,
                        r.s)(f(e))]
                    }) : r.j.jsx("span", {
                        className: "icon_text",
                        "data-testid": "icon-text",
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            r.s)(f(e))
                        }
                    }, h)]
                }), d.render && d.render()]
            })
        }
        Ml.defaultProps = {
            className: ""
        },
        El.shouldRender = ({item: {content: t, icon: e={}}, isRenderable: n}) => {
            const {icon: r} = e;
            return n(t) || (null == r ? void 0 : r.prefix) || (null == r ? void 0 : r.iconName)
        }
        ;
        const Nl = ({post: t, CDNDomain: e, slugs: n={}}) => {
            const {Link: s="a"} = (0,
            i.useContext)(r.C)
              , {interactionProps: o} = ye()
              , {title: a, excerpt: l} = t
              , c = a.length > 70 ? `${a.substring(0, 70)}...` : a;
            return r.j.jsxs("div", {
                className: "post--container",
                children: [t.thumbnailImage && r.j.jsx("img", {
                    className: "post--image",
                    src: `${e}/${t.thumbnailImage}`
                }), r.j.jsxs("article", {
                    children: [t.categories && r.j.jsx("div", {
                        className: "categories--container",
                        children: t.categories.map((t => r.j.jsx(s, {
                            href: `/${n.categorySlug}/${t.slug}`,
                            children: r.j.jsx("a", {
                                className: "post--categories",
                                ...o,
                                children: t.name
                            })
                        }, t.id)))
                    }), r.j.jsx("h3", {
                        className: "post--heading",
                        title: a,
                        children: r.j.jsx(s, {
                            href: `/${n.postSlug}/${t.slug}`,
                            children: r.j.jsx("a", {
                                ...o,
                                children: c
                            })
                        })
                    }), l && r.j.jsx("div", {
                        className: "post--content",
                        children: l
                    }), r.j.jsxs("p", {
                        className: "post--footer",
                        children: ["On ", (0,
                        r.l)(t.createdAt)]
                    })]
                })]
            }, t.id)
        }
        ;
        function kl({className: t, children: e, control: n={}, item: i, attrs: s}) {
            var o, a, l, c, d, u;
            const {configuration: {globalWidth: p}={}} = i
              , [C] = t.split(" ")
              , f = H(i, t);
            return r.j.jsxs("div", {
                className: `${f} ${p ? "dorik-container--global-container-width" : ""}`,
                ...n.props,
                ...s,
                children: ["video" === (null == (o = i.style) ? void 0 : o.__backgroundType) && r.j.jsxs(r.j.Fragment, {
                    children: [(null == (a = null == i ? void 0 : i.sources) ? void 0 : a.mp4) && r.j.jsx("video", {
                        className: "video-bg",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        children: r.j.jsx("source", {
                            src: null == (l = null == i ? void 0 : i.sources) ? void 0 : l.mp4,
                            type: "video/mp4"
                        })
                    }, null == (c = null == i ? void 0 : i.sources) ? void 0 : c.mp4), "none" !== (null == (u = null == (d = i.video) ? void 0 : d.attr) ? void 0 : u.__class__overlayType) && r.j.jsx("div", {
                        className: `video-overlay ${C}--video-overlay`
                    })]
                }), e, n.render && n.render()]
            })
        }
        const _l = ({children: t}) => {
            const {data: e} = O();
            return r.j.jsx(h, {
                value: e,
                children: t
            })
        }
        ;
        const Sl = ({label: t, paragraph: e}) => {
            let n = e && "<p></p>\n" !== e ? e : "<p>Accordion Body</p>";
            return n = /^(<(ul|ol|p)>)/.test(n) ? n : `<p>${n}</p>`,
            {
                title: (null == t ? void 0 : t.trim()) || "Accordion Label",
                body: n
            }
        }
        ;
        function Al(t) {
            const {address: e, renderer: n, attrs: i, shouldType: s, item: o, InteractiveComponent: a, control: l={}} = t
              , c = H(o, t.className)
              , {accordions: d} = o
              , {onClick: u, ...p} = i
              , C = n === r.B
              , f = "dynamic" === (null == d ? void 0 : d.linkType);
            let h = d.items.map(( (t, n) => {
                const {id: i, isAdmin: o} = t
                  , {title: l, body: d} = Sl(t);
                return r.j.jsxs("details", {
                    children: [C ? r.j.jsx(a, {
                        as: "summary",
                        shouldType: s,
                        strings: [l || "Accordion Label"],
                        typekey: `${c}-${i}`
                    }) : r.j.jsx("summary", {
                        children: l
                    }), r.j.jsx(a, {
                        as: "div",
                        inlineEditor: !0,
                        onClick: u,
                        address: e,
                        className: "details-content",
                        path: `accordions/items/${n}/paragraph`,
                        shouldType: !1,
                        dangerouslySetInnerHTML: {
                            __html: o ? (0,
                            r.s)(d) : d
                        }
                    })]
                }, i)
            }
            ));
            return r.j.jsxs("div", {
                className: c,
                ...p,
                ...l.props,
                children: [l.render && l.render(), f ? r.j.jsx(Zl, {
                    name: o.name,
                    renderer: n,
                    control: l,
                    configuration: o.configuration
                }) : h]
            })
        }
        Al.shouldRender = ({item: {accordions: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Tl = ({name: t, control: e, renderer: n, activeIdx: i, isBuilder: s, setActiveIdx: o, configuration: a={}}) => {
            const {data: l=[]} = O()
              , {content: c={}} = a;
            return !l.length && n ? r.j.jsx(Ze, {
                control: e,
                item: {
                    name: t
                }
            }) : l.length || n ? l.map(( (t, e) => {
                const {id: n} = t
                  , {title: a, body: l} = Sl({
                    label: Z(null == c ? void 0 : c.label, t),
                    paragraph: Z(null == c ? void 0 : c.paragraph, t)
                })
                  , d = s && {
                    open: e === i,
                    onClick: () => o((t => t === e ? void 0 : e))
                };
                return r.j.jsxs("details", {
                    ...d,
                    children: [r.j.jsx("summary", {
                        children: a
                    }), r.j.jsx("div", {
                        className: "details-content",
                        dangerouslySetInnerHTML: {
                            __html: l
                        }
                    })]
                }, n)
            }
            )) : null
        }
          , Zl = t => {
            const {renderer: e, configuration: n={}} = t
              , [s,o] = (0,
            i.useState)()
              , a = e === r.B
              , {data: l={}} = O()
              , c = l && l[null == n ? void 0 : n.selectedField] || []
              , d = {
                ...t,
                isBuilder: a,
                activeIdx: s,
                setActiveIdx: o
            };
            return r.j.jsx(h, {
                value: c,
                children: r.j.jsx(Tl, {
                    ...d
                })
            })
        }
          , Il = {
            Facebook: {
                brand: {
                    circle: '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#2077F2"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M73.0618 127.86C70.1016 128.283 67.0761 128.502 64 128.502C60.1436 128.502 56.3668 128.158 52.6982 127.499V83.5H36V64.8125H52.6982V50.3906C52.6982 34.1406 62.4727 25 77.3382 25C84.4655 25 92 26.4219 92 26.4219V42.4688H83.6509C75.5055 42.4688 73.0618 47.3438 73.0618 52.625V64.8125H91.1855L88.3345 83.5H73.0618V127.86Z" fill="white"/>\n            </svg>',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#2077F2"/>\n            <path d="M88.3345 82.9375L91.1855 64.4297H73.0618V52.3594C73.0618 47.1289 75.5055 42.3008 83.6509 42.3008H92V26.4082C92 26.4082 84.4655 25 77.3382 25C62.4727 25 52.6982 34.0527 52.6982 50.1465V64.4297H36V82.9375H52.6982V128H73.0618V82.9375H88.3345Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 95.3667 22.7424 121.641 52.6982 127.001V83.5H36V64.8125H52.6982V50.3906C52.6982 34.1406 62.4727 25 77.3382 25C84.4655 25 92 26.4219 92 26.4219V42.4688H83.6509C75.5055 42.4688 73.0618 47.3438 73.0618 52.625V64.8125H91.1855L88.3345 83.5H73.0618V127.361C104.117 122.94 128 96.144 128 64C128 28.7919 99.3462 0 64 0Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H73.0618V83.375H88.3345L91.1855 65.0469H73.0618V53.0938C73.0618 47.9141 75.5055 43.1328 83.6509 43.1328H92V27.3945C92 27.3945 84.4655 26 77.3382 26C62.4727 26 52.6982 34.9648 52.6982 50.9023V65.0469H36V83.375H52.6982V128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 94.0568 101.899 118.952 73.0618 123.32V83.2163H88.3345L91.1855 64.6194H73.0618V52.491C73.0618 47.2354 75.5055 42.384 83.6509 42.384H92V26.415C92 26.415 84.4655 25 77.3382 25C62.4727 25 52.6982 34.0963 52.6982 50.2675V64.6194H36V83.2163H52.6982V122.937C24.9642 117.651 4 93.2737 4 64C4 30.8629 30.8629 4 64 4ZM63.1728 127.995C28.2078 127.552 0 99.0701 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64C128 98.9234 100.028 127.314 65.2655 127.988C64.8447 127.996 64.4228 128 64 128C63.7239 128 63.4481 127.998 63.1728 127.995Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H73.0618V83.375H88.3345L91.1855 65.0469H73.0618V53.0938C73.0618 47.9141 75.5055 43.1328 83.6509 43.1328H92V27.3945C92 27.3945 84.4655 26 77.3382 26C62.4727 26 52.6982 34.9648 52.6982 50.9023V65.0469H36V83.375H52.6982V124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM52.6982 128H9.14286C4.0934 128 0 123.907 0 118.857V9.14286C0 4.0934 4.0934 0 9.14286 0H118.857C123.907 0 128 4.0934 128 9.14286V118.857C128 123.907 123.907 128 118.857 128H73.0618H52.6982Z" />\n                </svg>\n                '
                    }
                }
            },
            Messenger: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="url(#paint0_radial)"/>\n            <path d="M64 26C42.5484 26 26 41.7823 26 62.9274C26 73.9597 30.4435 83.6129 37.9516 90.2016C39.1774 91.4274 38.871 92.0403 39.1774 99.0887C39.1774 100.774 40.5565 102 42.2419 102C42.5484 102 43.0081 102 43.4677 101.847C51.4355 98.3226 51.5887 98.0161 52.9677 98.3226C76.4113 104.758 102 89.7419 102 62.9274C102 41.7823 85.4516 26 64 26ZM86.8306 54.5L75.6452 72.121C74.7258 73.6532 72.5806 74.879 70.8952 74.879C69.8226 74.879 68.2903 74.2661 67.371 73.6532L58.4839 67.0645C58.1774 66.7581 57.5645 66.6048 57.1048 66.6048C56.7984 66.6048 56.1855 66.7581 55.7258 67.0645L43.7742 76.1048C42.0887 77.3306 40.0968 75.3387 41.1694 73.6532L52.3548 56.0323C53.2742 54.5 55.4194 53.4274 57.1048 53.4274C58.1774 53.4274 59.7097 53.8871 60.629 54.5L69.5161 61.0887C69.8226 61.3952 70.4355 61.5484 70.8952 61.5484C71.3548 61.5484 71.9677 61.3952 72.2742 61.0887L84.2258 52.0484C85.9113 50.8226 87.9032 52.8145 86.8306 54.5Z" fill="white"/>\n            <defs>\n            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.6367 127.815) scale(139.468 140.015)">\n            <stop stop-color="#0099FF"/>\n            <stop offset="0.609754" stop-color="#A033FF"/>\n            <stop offset="0.934823" stop-color="#FF5280"/>\n            <stop offset="1" stop-color="#FF7061"/>\n            </radialGradient>\n            </defs>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="url(#paint0_radial)"/>\n            <path d="M64 26C42.5484 26 26 41.7823 26 62.9274C26 73.9597 30.4435 83.6129 37.9516 90.2016C39.1774 91.4274 38.871 92.0403 39.1774 99.0887C39.1774 100.774 40.5565 102 42.2419 102C42.5484 102 43.0081 102 43.4677 101.847C51.4355 98.3226 51.5887 98.0161 52.9677 98.3226C76.4113 104.758 102 89.7419 102 62.9274C102 41.7823 85.4516 26 64 26ZM86.8306 54.5L75.6452 72.121C74.7258 73.6532 72.5806 74.879 70.8952 74.879C69.8226 74.879 68.2903 74.2661 67.371 73.6532L58.4839 67.0645C58.1774 66.7581 57.5645 66.6048 57.1048 66.6048C56.7984 66.6048 56.1855 66.7581 55.7258 67.0645L43.7742 76.1048C42.0887 77.3306 40.0968 75.3387 41.1694 73.6532L52.3548 56.0323C53.2742 54.5 55.4194 53.4274 57.1048 53.4274C58.1774 53.4274 59.7097 53.8871 60.629 54.5L69.5161 61.0887C69.8226 61.3952 70.4355 61.5484 70.8952 61.5484C71.3548 61.5484 71.9677 61.3952 72.2742 61.0887L84.2258 52.0484C85.9113 50.8226 87.9032 52.8145 86.8306 54.5Z" fill="white"/>\n            <defs>\n            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.6367 127.315) scale(139.468)">\n            <stop stop-color="#0099FF"/>\n            <stop offset="0.609754" stop-color="#A033FF"/>\n            <stop offset="0.934823" stop-color="#FF5280"/>\n            <stop offset="1" stop-color="#FF7061"/>\n            </radialGradient>\n            </defs>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM26 62.9274C26 41.7823 42.5484 26 64 26C85.4516 26 102 41.7823 102 62.9274C102 89.7419 76.4113 104.758 52.9677 98.3226C51.87 98.0786 51.549 98.2231 47.445 100.07C46.3933 100.543 45.0931 101.128 43.4677 101.847C43.0081 102 42.5484 102 42.2419 102C40.5565 102 39.1774 100.774 39.1774 99.0887C39.1115 97.5736 39.074 96.3558 39.0434 95.3654C38.9319 91.7485 38.9139 91.1639 37.9516 90.2016C30.4435 83.6129 26 73.9597 26 62.9274ZM75.6452 72.121L86.8306 54.5C87.9032 52.8145 85.9113 50.8226 84.2258 52.0484L72.2742 61.0887C71.9677 61.3952 71.3548 61.5484 70.8952 61.5484C70.4355 61.5484 69.8226 61.3952 69.5161 61.0887L60.629 54.5C59.7097 53.8871 58.1774 53.4274 57.1048 53.4274C55.4194 53.4274 53.2742 54.5 52.3548 56.0323L41.1694 73.6532C40.0968 75.3387 42.0887 77.3306 43.7742 76.1048L55.7258 67.0645C56.1855 66.7581 56.7984 66.6048 57.1048 66.6048C57.5645 66.6048 58.1774 66.7581 58.4839 67.0645L67.371 73.6532C68.2903 74.2661 69.8226 74.879 70.8952 74.879C72.5806 74.879 74.7258 73.6532 75.6452 72.121Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM26 62.9274C26 41.7823 42.5484 26 64 26C85.4516 26 102 41.7823 102 62.9274C102 89.7419 76.4113 104.758 52.9677 98.3226C51.87 98.0786 51.549 98.2231 47.445 100.07C46.3933 100.543 45.0931 101.128 43.4677 101.847C43.0081 102 42.5484 102 42.2419 102C40.5565 102 39.1774 100.774 39.1774 99.0887C39.1115 97.5736 39.074 96.3558 39.0434 95.3654C38.9319 91.7485 38.9139 91.1639 37.9516 90.2016C30.4435 83.6129 26 73.9597 26 62.9274ZM75.6452 72.121L86.8306 54.5C87.9032 52.8145 85.9113 50.8226 84.2258 52.0484L72.2742 61.0887C71.9677 61.3952 71.3548 61.5484 70.8952 61.5484C70.4355 61.5484 69.8226 61.3952 69.5161 61.0887L60.629 54.5C59.7097 53.8871 58.1774 53.4274 57.1048 53.4274C55.4194 53.4274 53.2742 54.5 52.3548 56.0323L41.1694 73.6532C40.0968 75.3387 42.0887 77.3306 43.7742 76.1048L55.7258 67.0645C56.1855 66.7581 56.7984 66.6048 57.1048 66.6048C57.5645 66.6048 58.1774 66.7581 58.4839 67.0645L67.371 73.6532C68.2903 74.2661 69.8226 74.879 70.8952 74.879C72.5806 74.879 74.7258 73.6532 75.6452 72.121Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM26 62.9274C26 41.7823 42.5484 26 64 26C85.4516 26 102 41.7823 102 62.9274C102 89.7419 76.4113 104.758 52.9677 98.3226C51.87 98.0786 51.549 98.2231 47.445 100.07C46.3933 100.543 45.0931 101.128 43.4677 101.847C43.0081 102 42.5484 102 42.2419 102C40.5565 102 39.1774 100.774 39.1774 99.0887C39.1115 97.5736 39.074 96.3558 39.0434 95.3654C38.9319 91.7485 38.9139 91.1639 37.9516 90.2016C30.4435 83.6129 26 73.9597 26 62.9274ZM75.6452 72.121L86.8306 54.5C87.9032 52.8145 85.9113 50.8226 84.2258 52.0484L72.2742 61.0887C71.9677 61.3952 71.3548 61.5484 70.8952 61.5484C70.4355 61.5484 69.8226 61.3952 69.5161 61.0887L60.629 54.5C59.7097 53.8871 58.1774 53.4274 57.1048 53.4274C55.4194 53.4274 53.2742 54.5 52.3548 56.0323L41.1694 73.6532C40.0968 75.3387 42.0887 77.3306 43.7742 76.1048L55.7258 67.0645C56.1855 66.7581 56.7984 66.6048 57.1048 66.6048C57.5645 66.6048 58.1774 66.7581 58.4839 67.0645L67.371 73.6532C68.2903 74.2661 69.8226 74.879 70.8952 74.879C72.5806 74.879 74.7258 73.6532 75.6452 72.121Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM26 62.9274C26 41.7823 42.5484 26 64 26C85.4516 26 102 41.7823 102 62.9274C102 89.7419 76.4113 104.758 52.9677 98.3226C51.87 98.0786 51.549 98.2231 47.445 100.07C46.3933 100.543 45.0931 101.128 43.4677 101.847C43.0081 102 42.5484 102 42.2419 102C40.5565 102 39.1774 100.774 39.1774 99.0887C39.1115 97.5736 39.074 96.3558 39.0434 95.3654C38.9319 91.7485 38.9139 91.1639 37.9516 90.2016C30.4435 83.6129 26 73.9597 26 62.9274ZM75.6452 72.121L86.8306 54.5C87.9032 52.8145 85.9113 50.8226 84.2258 52.0484L72.2742 61.0887C71.9677 61.3952 71.3548 61.5484 70.8952 61.5484C70.4355 61.5484 69.8226 61.3952 69.5161 61.0887L60.629 54.5C59.7097 53.8871 58.1774 53.4274 57.1048 53.4274C55.4194 53.4274 53.2742 54.5 52.3548 56.0323L41.1694 73.6532C40.0968 75.3387 42.0887 77.3306 43.7742 76.1048L55.7258 67.0645C56.1855 66.7581 56.7984 66.6048 57.1048 66.6048C57.5645 66.6048 58.1774 66.7581 58.4839 67.0645L67.371 73.6532C68.2903 74.2661 69.8226 74.879 70.8952 74.879C72.5806 74.879 74.7258 73.6532 75.6452 72.121Z" />\n                </svg>\n                '
                    }
                }
            },
            Pinterest: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#E71F27"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8617 125.243C42.6024 124.823 41.3604 124.365 40.1371 123.869C39.8653 121.214 39.6562 118.599 39.6562 115.883C39.6562 106.282 43.2056 93.2861 46.2023 82.3134C47.0951 79.0445 47.9388 75.9552 48.625 73.1888C46.9167 69.9203 46.4896 66.2432 46.4896 62.7705C46.4896 46.428 66.5625 43.9767 66.5625 57.4592C66.5625 61.4685 65.1023 65.3744 63.6516 69.2549C62.2196 73.0853 60.7969 76.891 60.7969 80.7471C60.7969 85.8542 65.4948 89.5312 70.8333 89.5312C85.5677 89.5312 90.0521 69.3074 90.0521 58.4806C90.0521 43.9767 79.375 36.0097 64.6406 36.0097C47.7708 36.0097 34.7448 47.6537 34.7448 63.9962C34.7448 69.3778 37.0833 72.9884 38.601 75.3317C39.3301 76.4574 39.8698 77.2906 39.8698 77.8872C39.8698 79.5215 38.5885 85.037 36.4531 85.037C31.3281 85.037 23 76.8658 23 62.5662C23 39.8911 44.5677 26 66.5625 26C86.6354 26 105 39.2782 105 59.502C105 78.5001 94.75 99.7452 72.1146 99.7452C66.5625 99.7452 59.9427 97.0896 57.1667 92.3911C56.6293 94.4942 56.1561 96.3942 55.7236 98.131C52.6085 110.64 51.6002 114.689 43.8617 125.243Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#E71F27"/>\n            <path d="M66.5625 26C44.5677 26 23 39.8911 23 62.5662C23 76.8658 31.3281 85.037 36.4531 85.037C38.5885 85.037 39.8698 79.5215 39.8698 77.8872C39.8698 76.0487 34.7448 71.9631 34.7448 63.9962C34.7448 47.6537 47.7708 36.0097 64.6406 36.0097C79.375 36.0097 90.0521 43.9767 90.0521 58.4806C90.0521 69.3074 85.5677 89.5312 70.8333 89.5312C65.4948 89.5312 60.7969 85.8542 60.7969 80.7471C60.7969 72.9845 66.5625 65.4261 66.5625 57.4592C66.5625 43.9767 46.4896 46.428 46.4896 62.7705C46.4896 66.2432 46.9167 69.9203 48.625 73.1888C45.6354 85.2413 39.6562 103.422 39.6562 115.883C39.6562 119.765 40.0833 123.442 40.5104 127.323C41.151 128.14 40.9375 128.14 42.0052 127.732C52.6823 113.636 52.4687 110.776 57.1667 92.3911C59.9427 97.0896 66.5625 99.7452 72.1146 99.7452C94.75 99.7452 105 78.5001 105 59.502C105 39.2782 86.6354 26 66.5625 26Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 90.7868 16.5859 113.86 40.0862 123.365C39.8396 120.882 39.6562 118.427 39.6562 115.883C39.6562 106.283 43.2052 93.2876 46.2018 82.3153L46.2023 82.3134C47.0951 79.0445 47.9388 75.9552 48.625 73.1888C46.9167 69.9203 46.4896 66.2432 46.4896 62.7705C46.4896 46.428 66.5625 43.9767 66.5625 57.4592C66.5625 61.4685 65.1023 65.3744 63.6516 69.2549C62.2196 73.0853 60.7969 76.891 60.7969 80.7471C60.7969 85.8542 65.4948 89.5312 70.8333 89.5312C85.5677 89.5312 90.0521 69.3074 90.0521 58.4806C90.0521 43.9767 79.375 36.0097 64.6406 36.0097C47.7708 36.0097 34.7448 47.6537 34.7448 63.9962C34.7448 69.3778 37.0833 72.9884 38.601 75.3317L38.6013 75.3322C39.3303 76.4576 39.8698 77.2907 39.8698 77.8872C39.8698 79.5215 38.5885 85.037 36.4531 85.037C31.3281 85.037 23 76.8658 23 62.5662C23 39.8911 44.5677 26 66.5625 26C86.6354 26 105 39.2782 105 59.502C105 78.5001 94.75 99.7452 72.1146 99.7452C66.5625 99.7452 59.9427 97.0896 57.1667 92.3911C56.6293 94.4942 56.1561 96.3942 55.7236 98.131L55.7236 98.1311C52.6475 110.483 51.6258 114.586 44.1496 124.849C50.3989 126.894 57.0708 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM23 62.5662C23 39.8911 44.5677 26 66.5625 26C86.6354 26 105 39.2782 105 59.502C105 78.5001 94.75 99.7452 72.1146 99.7452C66.5625 99.7452 59.9427 97.0896 57.1667 92.3911C56.6292 94.4944 56.156 96.3945 55.7235 98.1315C52.375 111.577 51.4608 115.249 42.0052 127.732C41.4674 127.938 41.2547 128.04 41.0941 127.986C40.9359 127.933 40.8283 127.728 40.5104 127.323C40.49 127.138 40.4697 126.954 40.4494 126.77C40.0436 123.091 39.6562 119.58 39.6562 115.883C39.6562 106.282 43.2056 93.2861 46.2023 82.3135C47.0951 79.0446 47.9388 75.9553 48.625 73.1888C46.9167 69.9203 46.4896 66.2432 46.4896 62.7705C46.4896 46.428 66.5625 43.9767 66.5625 57.4592C66.5625 61.4685 65.1023 65.3744 63.6516 69.2549C62.2196 73.0853 60.7969 76.891 60.7969 80.7471C60.7969 85.8542 65.4948 89.5312 70.8333 89.5312C85.5677 89.5312 90.0521 69.3074 90.0521 58.4806C90.0521 43.9767 79.375 36.0097 64.6406 36.0097C47.7708 36.0097 34.7448 47.6537 34.7448 63.9962C34.7448 69.3779 37.0833 72.9885 38.6011 75.3317C39.3301 76.4574 39.8698 77.2906 39.8698 77.8872C39.8698 79.5215 38.5885 85.037 36.4531 85.037C31.3281 85.037 23 76.8658 23 62.5662Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C57.7266 124 51.678 123.037 45.9941 121.251C51.8234 112.793 52.9206 108.387 55.7236 97.1311L55.7236 97.131C56.1561 95.3942 56.6293 93.4942 57.1667 91.3911C59.9427 96.0896 66.5625 98.7452 72.1146 98.7452C94.75 98.7452 105 77.5001 105 58.502C105 38.2782 86.6354 25 66.5625 25C44.5677 25 23 38.8911 23 61.5662C23 75.8658 31.3281 84.037 36.4531 84.037C38.5885 84.037 39.8698 78.5215 39.8698 76.8872C39.8698 76.2907 39.3303 75.4576 38.6013 74.3322L38.601 74.3317C37.0833 71.9884 34.7448 68.3778 34.7448 62.9962C34.7448 46.6537 47.7708 35.0097 64.6406 35.0097C79.375 35.0097 90.0521 42.9767 90.0521 57.4806C90.0521 68.3074 85.5677 88.5312 70.8333 88.5312C65.4948 88.5312 60.7969 84.8542 60.7969 79.7471C60.7969 75.891 62.2196 72.0853 63.6516 68.2549C65.1023 64.3744 66.5625 60.4685 66.5625 56.4592C66.5625 42.9767 46.4896 45.428 46.4896 61.7705C46.4896 65.2432 46.9167 68.9203 48.625 72.1888C47.9388 74.9552 47.0951 78.0445 46.2023 81.3134L46.2018 81.3153C43.2052 92.2876 39.6562 105.283 39.6562 114.883C39.6562 116.247 39.709 117.586 39.796 118.918C18.7141 109.613 4 88.5248 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H44.7639C51.6847 114.35 52.7338 110.137 55.7235 98.1315C56.156 96.3945 56.6292 94.4944 57.1667 92.3911C59.9427 97.0896 66.5625 99.7452 72.1146 99.7452C94.75 99.7452 105 78.5001 105 59.502C105 39.2782 86.6354 26 66.5625 26C44.5677 26 23 39.8911 23 62.5662C23 76.8658 31.3281 85.037 36.4531 85.037C38.5885 85.037 39.8698 79.5215 39.8698 77.8872C39.8698 77.2906 39.3301 76.4574 38.6011 75.3317C37.0833 72.9885 34.7448 69.3779 34.7448 63.9962C34.7448 47.6537 47.7708 36.0097 64.6406 36.0097C79.375 36.0097 90.0521 43.9767 90.0521 58.4806C90.0521 69.3074 85.5677 89.5312 70.8333 89.5312C65.4948 89.5312 60.7969 85.8542 60.7969 80.7471C60.7969 76.891 62.2196 73.0853 63.6516 69.2549C65.1023 65.3744 66.5625 61.4685 66.5625 57.4592C66.5625 43.9767 46.4896 46.428 46.4896 62.7705C46.4896 66.2432 46.9167 69.9203 48.625 73.1888C47.9388 75.9553 47.0951 79.0446 46.2023 82.3135C43.2056 93.2861 39.6562 106.282 39.6562 115.883C39.6562 118.643 39.8721 121.3 40.1505 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0Z" />\n                </svg>\n                '
                    }
                }
            },
            Slack: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#4A154B"/>\n            <path d="M41.9663 74.0225C41.9622 76.1385 41.1204 78.1668 39.625 79.664C38.1296 81.1611 36.1023 82.0053 33.9863 82.012C31.8692 82.007 29.8403 81.1635 28.3436 79.6662C26.8468 78.1689 26.0042 76.1396 26 74.0225C26.0059 71.9068 26.8494 69.8795 28.346 68.384C29.8426 66.8886 31.8706 66.0467 33.9863 66.0425H41.9663V74.0225ZM45.9912 74.0225C45.997 71.9073 46.8401 69.8805 48.336 68.3851C49.832 66.8898 51.8592 66.0475 53.9743 66.0425C56.0895 66.0475 58.1167 66.8898 59.6126 68.3851C61.1086 69.8805 61.9516 71.9073 61.9575 74.0225V94.0137C61.9525 96.1297 61.1099 98.1577 59.6139 99.6542C58.118 101.151 56.0903 101.994 53.9743 102C51.8583 101.994 49.8307 101.151 48.3347 99.6542C46.8388 98.1577 45.9962 96.1297 45.9912 94.0137V74.0225ZM53.9743 41.9663C51.8594 41.9605 49.8327 41.118 48.337 39.6228C46.8412 38.1276 45.9979 36.1013 45.9912 33.9863C45.9962 31.8703 46.8388 29.8424 48.3347 28.3458C49.8307 26.8492 51.8583 26.0059 53.9743 26C56.0903 26.0059 58.118 26.8492 59.6139 28.3458C61.1099 29.8424 61.9525 31.8703 61.9575 33.9863V41.9663H53.9743ZM53.9743 45.9912C56.0898 45.997 58.117 46.84 59.6128 48.3358C61.1087 49.8317 61.9516 51.8589 61.9575 53.9743C61.9516 56.0898 61.1087 58.117 59.6128 59.6128C58.117 61.1087 56.0898 61.9516 53.9743 61.9575H33.9863C31.8703 61.9525 29.8424 61.1099 28.3458 59.6139C26.8492 58.118 26.0059 56.0903 26 53.9743C26.0059 51.8583 26.8492 49.8307 28.3458 48.3347C29.8424 46.8388 31.8703 45.9962 33.9863 45.9912H53.9743ZM86.0273 53.9743C86.0332 51.8583 86.8766 49.8307 88.3731 48.3347C89.8697 46.8388 91.8977 45.9962 94.0137 45.9912C96.1297 45.9962 98.1577 46.8388 99.6542 48.3347C101.151 49.8307 101.994 51.8583 102 53.9743C101.994 56.0903 101.151 58.118 99.6542 59.6139C98.1577 61.1099 96.1297 61.9525 94.0137 61.9575H86.0273V53.9743ZM82.012 53.9743C82.0061 56.0909 81.1623 58.119 79.6651 59.6151C78.1678 61.1111 76.1391 61.9533 74.0225 61.9575C71.9073 61.9516 69.8805 61.1086 68.3851 59.6126C66.8898 58.1167 66.0475 56.0895 66.0425 53.9743V33.9863C66.0467 31.8706 66.8886 29.8426 68.384 28.346C69.8795 26.8494 71.9068 26.0059 74.0225 26C76.1396 26.0042 78.1689 26.8468 79.6662 28.3436C81.1635 29.8403 82.007 31.8692 82.012 33.9863V53.9743ZM74.0225 86.0273C76.1396 86.0315 78.1689 86.8742 79.6662 88.3709C81.1635 89.8676 82.007 91.8966 82.012 94.0137C82.007 96.1308 81.1635 98.1597 79.6662 99.6564C78.1689 101.153 76.1396 101.996 74.0225 102C71.9068 101.994 69.8795 101.151 68.384 99.654C66.8886 98.1574 66.0467 96.1294 66.0425 94.0137V86.0273H74.0225ZM74.0225 82.012C71.9062 82.0061 69.8785 81.1622 68.3829 79.6649C66.8874 78.1676 66.0458 76.1388 66.0425 74.0225C66.0475 71.9076 66.8899 69.8808 68.3853 68.3853C69.8808 66.8899 71.9076 66.0475 74.0225 66.0425H94.0137C96.1294 66.0467 98.1574 66.8886 99.654 68.384C101.151 69.8795 101.994 71.9068 102 74.0225C101.996 76.1396 101.153 78.1689 99.6564 79.6662C98.1597 81.1635 96.1308 82.007 94.0137 82.012H74.0225Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#4A154B"/>\n            <path d="M41.9663 74.0225C41.9622 76.1385 41.1204 78.1668 39.625 79.664C38.1296 81.1611 36.1023 82.0053 33.9863 82.012C31.8692 82.007 29.8403 81.1635 28.3436 79.6662C26.8468 78.1689 26.0042 76.1396 26 74.0225C26.0059 71.9068 26.8494 69.8795 28.346 68.384C29.8426 66.8886 31.8706 66.0467 33.9863 66.0425H41.9663V74.0225ZM45.9912 74.0225C45.997 71.9073 46.8401 69.8805 48.336 68.3851C49.832 66.8898 51.8592 66.0475 53.9743 66.0425C56.0895 66.0475 58.1167 66.8898 59.6126 68.3851C61.1086 69.8805 61.9516 71.9073 61.9575 74.0225V94.0137C61.9525 96.1297 61.1099 98.1577 59.6139 99.6542C58.118 101.151 56.0903 101.994 53.9743 102C51.8583 101.994 49.8307 101.151 48.3347 99.6542C46.8388 98.1577 45.9962 96.1297 45.9912 94.0137V74.0225ZM53.9743 41.9663C51.8594 41.9605 49.8327 41.118 48.337 39.6228C46.8412 38.1276 45.9979 36.1013 45.9912 33.9863C45.9962 31.8703 46.8388 29.8424 48.3347 28.3458C49.8307 26.8492 51.8583 26.0059 53.9743 26C56.0903 26.0059 58.118 26.8492 59.6139 28.3458C61.1099 29.8424 61.9525 31.8703 61.9575 33.9863V41.9663H53.9743ZM53.9743 45.9912C56.0898 45.997 58.117 46.84 59.6128 48.3358C61.1087 49.8317 61.9516 51.8589 61.9575 53.9743C61.9516 56.0898 61.1087 58.117 59.6128 59.6128C58.117 61.1087 56.0898 61.9516 53.9743 61.9575H33.9863C31.8703 61.9525 29.8424 61.1099 28.3458 59.6139C26.8492 58.118 26.0059 56.0903 26 53.9743C26.0059 51.8583 26.8492 49.8307 28.3458 48.3347C29.8424 46.8388 31.8703 45.9962 33.9863 45.9912H53.9743ZM86.0273 53.9743C86.0332 51.8583 86.8766 49.8307 88.3731 48.3347C89.8697 46.8388 91.8977 45.9962 94.0137 45.9912C96.1297 45.9962 98.1577 46.8388 99.6542 48.3347C101.151 49.8307 101.994 51.8583 102 53.9743C101.994 56.0903 101.151 58.118 99.6542 59.6139C98.1577 61.1099 96.1297 61.9525 94.0137 61.9575H86.0273V53.9743ZM82.012 53.9743C82.0061 56.0909 81.1623 58.119 79.6651 59.6151C78.1678 61.1111 76.1391 61.9533 74.0225 61.9575C71.9073 61.9516 69.8805 61.1086 68.3851 59.6126C66.8898 58.1167 66.0475 56.0895 66.0425 53.9743V33.9863C66.0467 31.8706 66.8886 29.8426 68.384 28.346C69.8795 26.8494 71.9068 26.0059 74.0225 26C76.1396 26.0042 78.1689 26.8468 79.6662 28.3436C81.1635 29.8403 82.007 31.8692 82.012 33.9863V53.9743ZM74.0225 86.0273C76.1396 86.0315 78.1689 86.8742 79.6662 88.3709C81.1635 89.8676 82.007 91.8966 82.012 94.0137C82.007 96.1308 81.1635 98.1597 79.6662 99.6564C78.1689 101.153 76.1396 101.996 74.0225 102C71.9068 101.994 69.8795 101.151 68.384 99.654C66.8886 98.1574 66.0467 96.1294 66.0425 94.0137V86.0273H74.0225ZM74.0225 82.012C71.9062 82.0061 69.8785 81.1622 68.3829 79.6649C66.8874 78.1676 66.0458 76.1388 66.0425 74.0225C66.0475 71.9076 66.8899 69.8808 68.3853 68.3853C69.8808 66.8899 71.9076 66.0475 74.0225 66.0425H94.0137C96.1294 66.0467 98.1574 66.8886 99.654 68.384C101.151 69.8795 101.994 71.9068 102 74.0225C101.996 76.1396 101.153 78.1689 99.6564 79.6662C98.1597 81.1635 96.1308 82.007 94.0137 82.012H74.0225Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM39.625 79.664C41.1204 78.1668 41.9622 76.1385 41.9663 74.0225V66.0425H33.9863C31.8706 66.0467 29.8426 66.8886 28.346 68.384C26.8494 69.8795 26.0059 71.9068 26 74.0225C26.0042 76.1396 26.8468 78.1689 28.3436 79.6662C29.8403 81.1635 31.8692 82.007 33.9863 82.012C36.1023 82.0053 38.1296 81.1611 39.625 79.664ZM48.336 68.3851C46.8401 69.8805 45.997 71.9073 45.9912 74.0225V94.0137C45.9962 96.1297 46.8388 98.1577 48.3347 99.6542C49.8307 101.151 51.8583 101.994 53.9743 102C56.0903 101.994 58.118 101.151 59.6139 99.6542C61.1099 98.1577 61.9525 96.1297 61.9575 94.0137V74.0225C61.9516 71.9073 61.1086 69.8805 59.6126 68.3851C58.1167 66.8898 56.0895 66.0475 53.9743 66.0425C51.8592 66.0475 49.832 66.8898 48.336 68.3851ZM48.337 39.6228C49.8327 41.118 51.8594 41.9605 53.9743 41.9663H61.9575V33.9863C61.9525 31.8703 61.1099 29.8424 59.6139 28.3458C58.118 26.8492 56.0903 26.0059 53.9743 26C51.8583 26.0059 49.8307 26.8492 48.3347 28.3458C46.8388 29.8424 45.9962 31.8703 45.9912 33.9863C45.9979 36.1013 46.8412 38.1276 48.337 39.6228ZM59.6128 48.3358C58.117 46.84 56.0898 45.997 53.9743 45.9912H33.9863C31.8703 45.9962 29.8424 46.8388 28.3458 48.3347C26.8492 49.8307 26.0059 51.8583 26 53.9743C26.0059 56.0903 26.8492 58.118 28.3458 59.6139C29.8424 61.1099 31.8703 61.9525 33.9863 61.9575H53.9743C56.0898 61.9517 58.117 61.1087 59.6128 59.6128C61.1087 58.117 61.9517 56.0898 61.9575 53.9743C61.9517 51.8589 61.1087 49.8317 59.6128 48.3358ZM88.3731 48.3347C86.8766 49.8307 86.0332 51.8583 86.0273 53.9743V61.9575H94.0137C96.1297 61.9525 98.1577 61.1099 99.6542 59.6139C101.151 58.118 101.994 56.0903 102 53.9743C101.994 51.8583 101.151 49.8307 99.6542 48.3347C98.1577 46.8388 96.1297 45.9962 94.0137 45.9912C91.8977 45.9962 89.8697 46.8388 88.3731 48.3347ZM79.6651 59.6151C81.1623 58.119 82.0061 56.0909 82.012 53.9743V33.9863C82.007 31.8692 81.1635 29.8403 79.6662 28.3436C78.1689 26.8468 76.1396 26.0042 74.0225 26C71.9068 26.0059 69.8795 26.8494 68.384 28.346C66.8886 29.8426 66.0467 31.8706 66.0425 33.9863V53.9743C66.0475 56.0895 66.8898 58.1167 68.3851 59.6126C69.8805 61.1086 71.9073 61.9516 74.0225 61.9575C76.1391 61.9533 78.1678 61.1111 79.6651 59.6151ZM79.6662 88.3709C78.1689 86.8742 76.1396 86.0315 74.0225 86.0273H66.0425V94.0137C66.0467 96.1294 66.8886 98.1574 68.384 99.654C69.8795 101.151 71.9068 101.994 74.0225 102C76.1396 101.996 78.1689 101.153 79.6662 99.6564C81.1635 98.1597 82.007 96.1308 82.012 94.0137C82.007 91.8966 81.1635 89.8676 79.6662 88.3709ZM68.3829 79.6649C69.8784 81.1622 71.9062 82.0061 74.0225 82.012H94.0137C96.1308 82.007 98.1597 81.1635 99.6564 79.6662C101.153 78.1689 101.996 76.1396 102 74.0225C101.994 71.9068 101.151 69.8795 99.654 68.384C98.1574 66.8886 96.1294 66.0467 94.0137 66.0425H74.0225C71.9076 66.0475 69.8808 66.8899 68.3853 68.3853C66.8899 69.8808 66.0475 71.9076 66.0425 74.0225C66.0458 76.1388 66.8874 78.1676 68.3829 79.6649Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM39.625 79.664C41.1204 78.1668 41.9622 76.1385 41.9663 74.0225V66.0425H33.9863C31.8706 66.0467 29.8426 66.8886 28.346 68.384C26.8494 69.8795 26.0059 71.9068 26 74.0225C26.0042 76.1396 26.8468 78.1689 28.3436 79.6662C29.8403 81.1635 31.8692 82.007 33.9863 82.012C36.1023 82.0053 38.1296 81.1611 39.625 79.664ZM48.336 68.3851C46.8401 69.8805 45.997 71.9073 45.9912 74.0225V94.0137C45.9962 96.1297 46.8388 98.1577 48.3347 99.6542C49.8307 101.151 51.8583 101.994 53.9743 102C56.0903 101.994 58.118 101.151 59.6139 99.6542C61.1099 98.1577 61.9525 96.1297 61.9575 94.0137V74.0225C61.9516 71.9073 61.1086 69.8805 59.6126 68.3851C58.1167 66.8898 56.0895 66.0475 53.9743 66.0425C51.8592 66.0475 49.832 66.8898 48.336 68.3851ZM48.337 39.6228C49.8327 41.118 51.8594 41.9605 53.9743 41.9663H61.9575V33.9863C61.9525 31.8703 61.1099 29.8424 59.6139 28.3458C58.118 26.8492 56.0903 26.0059 53.9743 26C51.8583 26.0059 49.8307 26.8492 48.3347 28.3458C46.8388 29.8424 45.9962 31.8703 45.9912 33.9863C45.9979 36.1013 46.8412 38.1276 48.337 39.6228ZM59.6128 48.3358C58.117 46.84 56.0898 45.997 53.9743 45.9912H33.9863C31.8703 45.9962 29.8424 46.8388 28.3458 48.3347C26.8492 49.8307 26.0059 51.8583 26 53.9743C26.0059 56.0903 26.8492 58.118 28.3458 59.6139C29.8424 61.1099 31.8703 61.9525 33.9863 61.9575H53.9743C56.0898 61.9516 58.117 61.1087 59.6128 59.6128C61.1087 58.117 61.9516 56.0898 61.9575 53.9743C61.9516 51.8589 61.1087 49.8317 59.6128 48.3358ZM88.3731 48.3347C86.8766 49.8307 86.0332 51.8583 86.0273 53.9743V61.9575H94.0137C96.1297 61.9525 98.1577 61.1099 99.6542 59.6139C101.151 58.118 101.994 56.0903 102 53.9743C101.994 51.8583 101.151 49.8307 99.6542 48.3347C98.1577 46.8388 96.1297 45.9962 94.0137 45.9912C91.8977 45.9962 89.8697 46.8388 88.3731 48.3347ZM79.6651 59.6151C81.1623 58.119 82.0061 56.0909 82.012 53.9743V33.9863C82.007 31.8692 81.1635 29.8403 79.6662 28.3436C78.1689 26.8468 76.1396 26.0042 74.0225 26C71.9068 26.0059 69.8795 26.8494 68.384 28.346C66.8886 29.8426 66.0467 31.8706 66.0425 33.9863V53.9743C66.0475 56.0895 66.8898 58.1167 68.3851 59.6126C69.8805 61.1086 71.9073 61.9516 74.0225 61.9575C76.1391 61.9533 78.1678 61.1111 79.6651 59.6151ZM79.6662 88.3709C78.1689 86.8742 76.1396 86.0315 74.0225 86.0273H66.0425V94.0137C66.0467 96.1294 66.8886 98.1574 68.384 99.654C69.8795 101.151 71.9068 101.994 74.0225 102C76.1396 101.996 78.1689 101.153 79.6662 99.6564C81.1635 98.1597 82.007 96.1308 82.012 94.0137C82.007 91.8966 81.1635 89.8676 79.6662 88.3709ZM68.3829 79.6649C69.8785 81.1622 71.9062 82.0061 74.0225 82.012H94.0137C96.1308 82.007 98.1597 81.1635 99.6564 79.6662C101.153 78.1689 101.996 76.1396 102 74.0225C101.994 71.9068 101.151 69.8795 99.654 68.384C98.1574 66.8886 96.1294 66.0467 94.0137 66.0425H74.0225C71.9076 66.0475 69.8808 66.8899 68.3853 68.3853C66.8899 69.8808 66.0475 71.9076 66.0425 74.0225C66.0458 76.1388 66.8874 78.1676 68.3829 79.6649Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM39.625 79.664C41.1204 78.1668 41.9622 76.1385 41.9663 74.0225V66.0425H33.9863C31.8706 66.0467 29.8426 66.8886 28.346 68.384C26.8494 69.8795 26.0059 71.9068 26 74.0225C26.0042 76.1396 26.8468 78.1689 28.3436 79.6662C29.8403 81.1635 31.8692 82.007 33.9863 82.012C36.1023 82.0053 38.1296 81.1611 39.625 79.664ZM48.336 68.3851C46.8401 69.8805 45.997 71.9073 45.9912 74.0225V94.0137C45.9962 96.1297 46.8388 98.1577 48.3347 99.6542C49.8307 101.151 51.8583 101.994 53.9743 102C56.0903 101.994 58.118 101.151 59.6139 99.6542C61.1099 98.1577 61.9525 96.1297 61.9575 94.0137V74.0225C61.9516 71.9073 61.1086 69.8805 59.6126 68.3851C58.1167 66.8898 56.0895 66.0475 53.9743 66.0425C51.8592 66.0475 49.832 66.8898 48.336 68.3851ZM48.337 39.6228C49.8327 41.118 51.8594 41.9605 53.9743 41.9663H61.9575V33.9863C61.9525 31.8703 61.1099 29.8424 59.6139 28.3458C58.118 26.8492 56.0903 26.0059 53.9743 26C51.8583 26.0059 49.8307 26.8492 48.3347 28.3458C46.8388 29.8424 45.9962 31.8703 45.9912 33.9863C45.9979 36.1013 46.8412 38.1276 48.337 39.6228ZM59.6128 48.3358C58.117 46.84 56.0898 45.997 53.9743 45.9912H33.9863C31.8703 45.9962 29.8424 46.8388 28.3458 48.3347C26.8492 49.8307 26.0059 51.8583 26 53.9743C26.0059 56.0903 26.8492 58.118 28.3458 59.6139C29.8424 61.1099 31.8703 61.9525 33.9863 61.9575H53.9743C56.0898 61.9516 58.117 61.1087 59.6128 59.6128C61.1087 58.117 61.9516 56.0898 61.9575 53.9743C61.9516 51.8589 61.1087 49.8317 59.6128 48.3358ZM88.3731 48.3347C86.8766 49.8307 86.0332 51.8583 86.0273 53.9743V61.9575H94.0137C96.1297 61.9525 98.1577 61.1099 99.6542 59.6139C101.151 58.118 101.994 56.0903 102 53.9743C101.994 51.8583 101.151 49.8307 99.6542 48.3347C98.1577 46.8388 96.1297 45.9962 94.0137 45.9912C91.8977 45.9962 89.8697 46.8388 88.3731 48.3347ZM79.6651 59.6151C81.1623 58.119 82.0061 56.0909 82.012 53.9743V33.9863C82.007 31.8692 81.1635 29.8403 79.6662 28.3436C78.1689 26.8468 76.1396 26.0042 74.0225 26C71.9068 26.0059 69.8795 26.8494 68.384 28.346C66.8886 29.8426 66.0467 31.8706 66.0425 33.9863V53.9743C66.0475 56.0895 66.8898 58.1167 68.3851 59.6126C69.8805 61.1086 71.9073 61.9516 74.0225 61.9575C76.1391 61.9533 78.1678 61.1111 79.6651 59.6151ZM79.6662 88.3709C78.1689 86.8742 76.1396 86.0315 74.0225 86.0273H66.0425V94.0137C66.0467 96.1294 66.8886 98.1574 68.384 99.654C69.8795 101.151 71.9068 101.994 74.0225 102C76.1396 101.996 78.1689 101.153 79.6662 99.6564C81.1635 98.1597 82.007 96.1308 82.012 94.0137C82.007 91.8966 81.1635 89.8676 79.6662 88.3709ZM68.3829 79.6649C69.8785 81.1622 71.9062 82.0061 74.0225 82.012H94.0137C96.1308 82.007 98.1597 81.1635 99.6564 79.6662C101.153 78.1689 101.996 76.1396 102 74.0225C101.994 71.9068 101.151 69.8795 99.654 68.384C98.1574 66.8886 96.1294 66.0467 94.0137 66.0425H74.0225C71.9076 66.0475 69.8808 66.8899 68.3853 68.3853C66.8899 69.8808 66.0475 71.9076 66.0425 74.0225C66.0458 76.1388 66.8874 78.1676 68.3829 79.6649Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM39.625 79.664C41.1204 78.1668 41.9622 76.1385 41.9663 74.0225V66.0425H33.9863C31.8706 66.0467 29.8426 66.8886 28.346 68.384C26.8494 69.8795 26.0059 71.9068 26 74.0225C26.0042 76.1396 26.8468 78.1689 28.3436 79.6662C29.8403 81.1635 31.8692 82.007 33.9863 82.012C36.1023 82.0053 38.1296 81.1611 39.625 79.664ZM48.336 68.3851C46.8401 69.8805 45.997 71.9073 45.9912 74.0225V94.0137C45.9962 96.1297 46.8388 98.1577 48.3347 99.6542C49.8307 101.151 51.8583 101.994 53.9743 102C56.0903 101.994 58.118 101.151 59.6139 99.6542C61.1099 98.1577 61.9525 96.1297 61.9575 94.0137V74.0225C61.9516 71.9073 61.1086 69.8805 59.6126 68.3851C58.1167 66.8898 56.0895 66.0475 53.9743 66.0425C51.8592 66.0475 49.832 66.8898 48.336 68.3851ZM48.337 39.6228C49.8327 41.118 51.8594 41.9605 53.9743 41.9663H61.9575V33.9863C61.9525 31.8703 61.1099 29.8424 59.6139 28.3458C58.118 26.8492 56.0903 26.0059 53.9743 26C51.8583 26.0059 49.8307 26.8492 48.3347 28.3458C46.8388 29.8424 45.9962 31.8703 45.9912 33.9863C45.9979 36.1013 46.8412 38.1276 48.337 39.6228ZM59.6128 48.3358C58.117 46.84 56.0898 45.997 53.9743 45.9912H33.9863C31.8703 45.9962 29.8424 46.8388 28.3458 48.3347C26.8492 49.8307 26.0059 51.8583 26 53.9743C26.0059 56.0903 26.8492 58.118 28.3458 59.6139C29.8424 61.1099 31.8703 61.9525 33.9863 61.9575H53.9743C56.0898 61.9516 58.117 61.1087 59.6128 59.6128C61.1087 58.117 61.9516 56.0898 61.9575 53.9743C61.9516 51.8589 61.1087 49.8317 59.6128 48.3358ZM88.3731 48.3347C86.8766 49.8307 86.0332 51.8583 86.0273 53.9743V61.9575H94.0137C96.1297 61.9525 98.1577 61.1099 99.6542 59.6139C101.151 58.118 101.994 56.0903 102 53.9743C101.994 51.8583 101.151 49.8307 99.6542 48.3347C98.1577 46.8388 96.1297 45.9962 94.0137 45.9912C91.8977 45.9962 89.8697 46.8388 88.3731 48.3347ZM79.6651 59.6151C81.1623 58.119 82.0061 56.0909 82.012 53.9743V33.9863C82.007 31.8692 81.1635 29.8403 79.6662 28.3436C78.1689 26.8468 76.1396 26.0042 74.0225 26C71.9068 26.0059 69.8795 26.8494 68.384 28.346C66.8886 29.8426 66.0467 31.8706 66.0425 33.9863V53.9743C66.0475 56.0895 66.8898 58.1167 68.3851 59.6126C69.8805 61.1086 71.9073 61.9516 74.0225 61.9575C76.1391 61.9533 78.1678 61.1111 79.6651 59.6151ZM79.6662 88.3709C78.1689 86.8742 76.1396 86.0315 74.0225 86.0273H66.0425V94.0137C66.0467 96.1294 66.8886 98.1574 68.384 99.654C69.8795 101.151 71.9068 101.994 74.0225 102C76.1396 101.996 78.1689 101.153 79.6662 99.6564C81.1635 98.1597 82.007 96.1308 82.012 94.0137C82.007 91.8966 81.1635 89.8676 79.6662 88.3709ZM68.3829 79.6649C69.8785 81.1622 71.9062 82.0061 74.0225 82.012H94.0137C96.1308 82.007 98.1597 81.1635 99.6564 79.6662C101.153 78.1689 101.996 76.1396 102 74.0225C101.994 71.9068 101.151 69.8795 99.654 68.384C98.1574 66.8886 96.1294 66.0467 94.0137 66.0425H74.0225C71.9076 66.0475 69.8808 66.8899 68.3853 68.3853C66.8899 69.8808 66.0475 71.9076 66.0425 74.0225C66.0458 76.1388 66.8874 78.1676 68.3829 79.6649Z" />\n                </svg>\n                '
                    }
                }
            },
            "Sound Cloud": {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#FF3300"/>\n            <path d="M24.3083 64.8606C24.1213 64.8606 23.9637 65.0365 23.938 65.2431L23.0837 73.4817L23.938 81.533C23.9637 81.7548 24.1213 81.9078 24.3083 81.9078C24.4917 81.9078 24.6383 81.7548 24.6713 81.533L25.6063 73.4817L24.6163 65.2431C24.6163 65.0251 24.4513 64.8606 24.2863 64.8606H24.3083ZM20.99 68.0275C20.77 68.0275 20.6563 68.1691 20.6087 68.3871L20 73.4817L20.605 78.4846C20.605 78.695 20.77 78.8441 20.935 78.8441C21.1 78.8441 21.2613 78.672 21.3163 78.4464L22.0863 73.4014L21.3163 68.2991C21.3163 68.0658 21.155 67.9549 20.9863 67.9549L20.99 68.0275ZM27.6963 63.2542C27.4727 63.2542 27.2563 63.4263 27.2563 63.6519L26.4863 73.455L27.3113 82.8564C27.3113 83.0859 27.4763 83.3154 27.7477 83.3154C27.9713 83.3154 28.1327 83.082 28.1913 82.8564L29.1227 73.3938L28.1913 63.6481C28.1327 63.4186 27.9677 63.1891 27.7477 63.1891L27.6963 63.2542ZM31.2127 62.8487C30.9377 62.8487 30.7177 63.0782 30.6627 63.3651L29.955 73.4626L30.725 83.193C30.7837 83.4875 31 83.7208 31.2713 83.7208C31.5463 83.7208 31.7663 83.4875 31.8213 83.1471L32.7013 73.4626L31.8213 63.4301C31.8213 63.1432 31.6013 62.9137 31.3263 62.9137L31.2127 62.8487V62.8487ZM35.4477 64.2257C35.4293 63.8814 35.1727 63.6558 34.8647 63.6558C34.5347 63.6558 34.2853 63.8853 34.2633 64.2257L33.4677 73.52L34.201 83.323C34.201 83.6672 34.476 83.9235 34.784 83.9235C35.0553 83.9235 35.3267 83.6634 35.3267 83.3192L36.159 73.5162L35.3267 64.1683L35.4477 64.2257V64.2257ZM38.414 57.689C38.0437 57.689 37.754 58.0333 37.754 58.3813L36.984 73.5162L37.6697 83.3192C37.6697 83.6634 37.963 83.9465 38.3297 83.9465C38.6743 83.9465 38.9677 83.6022 38.9897 83.258L39.756 73.455L38.9897 58.2628C38.9603 57.865 38.667 57.5743 38.3297 57.5743L38.414 57.689ZM41.846 54.0784C41.461 54.0784 41.131 54.4226 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4767 54.4226 42.1503 54.0784 41.7653 54.0784H41.846ZM45.3917 52.3611C44.948 52.3611 44.618 52.7015 44.5667 53.1605L43.9617 73.3364L44.5667 82.9749C44.618 83.4301 44.948 83.8355 45.3917 83.8355C45.828 83.8355 46.2167 83.4339 46.2167 82.9749L46.9317 73.3364L46.213 53.1605C46.213 52.7015 45.828 52.2999 45.388 52.2999L45.3917 52.3611ZM49.953 52.472C49.953 51.9556 49.568 51.554 49.073 51.554C48.6367 51.554 48.193 51.9556 48.193 52.472L47.6467 73.2828L48.193 82.8564C48.2517 83.3727 48.6367 83.7743 49.1317 83.7743C49.6267 83.7743 50.0117 83.3727 50.0117 82.8564L50.613 73.2828L50.0117 52.4146L49.953 52.472V52.472ZM52.6993 51.9595C52.2043 51.9595 51.7643 52.4146 51.7643 52.931L51.2143 73.2867L51.7643 82.7455C51.7643 83.3192 52.2043 83.7208 52.6993 83.7208C53.1943 83.7208 53.6343 83.2618 53.6343 82.6881L54.1843 73.2255L53.5793 52.9271C53.5793 52.3611 53.1393 51.8944 52.5857 51.8944L52.6993 51.9595ZM56.2707 52.5294C55.6693 52.5294 55.2293 53.0457 55.2293 53.6194L54.8517 73.2905L55.3467 82.7531C55.3467 83.323 55.783 83.8126 56.388 83.8126C56.9343 83.8126 57.3817 83.3536 57.4293 82.7225L57.873 73.3785L57.378 53.826C57.334 53.1987 56.883 52.7359 56.333 52.7359L56.2707 52.5294ZM60.6743 49.1214C60.5093 49.0105 60.2893 48.9531 60.0693 48.9531C59.8493 48.9531 59.633 49.0105 59.4643 49.1214C59.1343 49.328 58.918 49.6952 58.918 50.0968V50.3301L58.5367 73.4626L58.9583 82.8296V82.8602C58.9877 83.0897 59.0683 83.3766 59.2297 83.5487C59.4423 83.782 59.7503 83.9465 60.0877 83.9465C60.381 83.9465 60.667 83.7782 60.854 83.6022C61.0667 83.3727 61.1877 83.0859 61.1877 82.7416L61.2427 81.8237L61.6717 73.3976L61.1767 50.1197C61.1767 49.7219 60.953 49.3815 60.6817 49.2056L60.6743 49.1214V49.1214ZM64.363 47.0293C64.198 46.8571 64.033 46.7959 63.813 46.7959C63.5417 46.7959 63.2667 46.8571 63.0467 47.0293C62.7717 47.2626 62.6103 47.603 62.6103 47.9472V48.0581L62.108 73.3364L62.3867 77.9836L62.6103 82.516C62.6103 83.1432 63.153 83.717 63.813 83.717C64.4767 83.717 65.023 83.1432 65.023 82.4586L65.573 73.2255L65.023 47.8401C65.023 47.3811 64.7517 46.9948 64.418 46.7806L64.363 47.0293ZM97.176 61.227C95.691 61.227 94.261 61.5559 92.9997 62.1144C92.1197 51.9633 83.9797 44 73.977 44C71.5607 44 69.192 44.5164 67.0507 45.3731C66.2257 45.7173 66.0607 46.0616 66.0057 46.7462V82.5772C66.0643 83.2656 66.5557 83.8394 67.2157 83.8967H97.2273C103.164 83.9579 108 78.9704 108 72.7206C108 66.4708 103.164 61.4297 97.2273 61.4297" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#FF3300"/>\n            <path d="M24.3083 64.8606C24.1213 64.8606 23.9637 65.0365 23.938 65.2431L23.0837 73.4817L23.938 81.533C23.9637 81.7548 24.1213 81.9078 24.3083 81.9078C24.4917 81.9078 24.6383 81.7548 24.6713 81.533L25.6063 73.4817L24.6163 65.2431C24.6163 65.0251 24.4513 64.8606 24.2863 64.8606H24.3083ZM20.99 68.0275C20.77 68.0275 20.6563 68.1691 20.6087 68.3871L20 73.4817L20.605 78.4846C20.605 78.695 20.77 78.8441 20.935 78.8441C21.1 78.8441 21.2613 78.672 21.3163 78.4464L22.0863 73.4014L21.3163 68.2991C21.3163 68.0658 21.155 67.9549 20.9863 67.9549L20.99 68.0275ZM27.6963 63.2542C27.4727 63.2542 27.2563 63.4263 27.2563 63.6519L26.4863 73.455L27.3113 82.8564C27.3113 83.0859 27.4763 83.3154 27.7477 83.3154C27.9713 83.3154 28.1327 83.082 28.1913 82.8564L29.1227 73.3938L28.1913 63.6481C28.1327 63.4186 27.9677 63.1891 27.7477 63.1891L27.6963 63.2542ZM31.2127 62.8487C30.9377 62.8487 30.7177 63.0782 30.6627 63.3651L29.955 73.4626L30.725 83.193C30.7837 83.4875 31 83.7208 31.2713 83.7208C31.5463 83.7208 31.7663 83.4875 31.8213 83.1471L32.7013 73.4626L31.8213 63.4301C31.8213 63.1432 31.6013 62.9137 31.3263 62.9137L31.2127 62.8487V62.8487ZM35.4477 64.2257C35.4293 63.8814 35.1727 63.6558 34.8647 63.6558C34.5347 63.6558 34.2853 63.8853 34.2633 64.2257L33.4677 73.52L34.201 83.323C34.201 83.6672 34.476 83.9235 34.784 83.9235C35.0553 83.9235 35.3267 83.6634 35.3267 83.3192L36.159 73.5162L35.3267 64.1683L35.4477 64.2257V64.2257ZM38.414 57.689C38.0437 57.689 37.754 58.0333 37.754 58.3813L36.984 73.5162L37.6697 83.3192C37.6697 83.6634 37.963 83.9465 38.3297 83.9465C38.6743 83.9465 38.9677 83.6022 38.9897 83.258L39.756 73.455L38.9897 58.2628C38.9603 57.865 38.667 57.5743 38.3297 57.5743L38.414 57.689ZM41.846 54.0784C41.461 54.0784 41.131 54.4226 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4767 54.4226 42.1503 54.0784 41.7653 54.0784H41.846ZM45.3917 52.3611C44.948 52.3611 44.618 52.7015 44.5667 53.1605L43.9617 73.3364L44.5667 82.9749C44.618 83.4301 44.948 83.8355 45.3917 83.8355C45.828 83.8355 46.2167 83.4339 46.2167 82.9749L46.9317 73.3364L46.213 53.1605C46.213 52.7015 45.828 52.2999 45.388 52.2999L45.3917 52.3611ZM49.953 52.472C49.953 51.9556 49.568 51.554 49.073 51.554C48.6367 51.554 48.193 51.9556 48.193 52.472L47.6467 73.2828L48.193 82.8564C48.2517 83.3727 48.6367 83.7743 49.1317 83.7743C49.6267 83.7743 50.0117 83.3727 50.0117 82.8564L50.613 73.2828L50.0117 52.4146L49.953 52.472V52.472ZM52.6993 51.9595C52.2043 51.9595 51.7643 52.4146 51.7643 52.931L51.2143 73.2867L51.7643 82.7455C51.7643 83.3192 52.2043 83.7208 52.6993 83.7208C53.1943 83.7208 53.6343 83.2618 53.6343 82.6881L54.1843 73.2255L53.5793 52.9271C53.5793 52.3611 53.1393 51.8944 52.5857 51.8944L52.6993 51.9595ZM56.2707 52.5294C55.6693 52.5294 55.2293 53.0457 55.2293 53.6194L54.8517 73.2905L55.3467 82.7531C55.3467 83.323 55.783 83.8126 56.388 83.8126C56.9343 83.8126 57.3817 83.3536 57.4293 82.7225L57.873 73.3785L57.378 53.826C57.334 53.1987 56.883 52.7359 56.333 52.7359L56.2707 52.5294ZM60.6743 49.1214C60.5093 49.0105 60.2893 48.9531 60.0693 48.9531C59.8493 48.9531 59.633 49.0105 59.4643 49.1214C59.1343 49.328 58.918 49.6952 58.918 50.0968V50.3301L58.5367 73.4626L58.9583 82.8296V82.8602C58.9877 83.0897 59.0683 83.3766 59.2297 83.5487C59.4423 83.782 59.7503 83.9465 60.0877 83.9465C60.381 83.9465 60.667 83.7782 60.854 83.6022C61.0667 83.3727 61.1877 83.0859 61.1877 82.7416L61.2427 81.8237L61.6717 73.3976L61.1767 50.1197C61.1767 49.7219 60.953 49.3815 60.6817 49.2056L60.6743 49.1214V49.1214ZM64.363 47.0293C64.198 46.8571 64.033 46.7959 63.813 46.7959C63.5417 46.7959 63.2667 46.8571 63.0467 47.0293C62.7717 47.2626 62.6103 47.603 62.6103 47.9472V48.0581L62.108 73.3364L62.3867 77.9836L62.6103 82.516C62.6103 83.1432 63.153 83.717 63.813 83.717C64.4767 83.717 65.023 83.1432 65.023 82.4586L65.573 73.2255L65.023 47.8401C65.023 47.3811 64.7517 46.9948 64.418 46.7806L64.363 47.0293ZM97.176 61.227C95.691 61.227 94.261 61.5559 92.9997 62.1144C92.1197 51.9633 83.9797 44 73.977 44C71.5607 44 69.192 44.5164 67.0507 45.3731C66.2257 45.7173 66.0607 46.0616 66.0057 46.7462V82.5772C66.0643 83.2656 66.5557 83.8394 67.2157 83.8967H97.2273C103.164 83.9579 108 78.9704 108 72.7206C108 66.4708 103.164 61.4297 97.2273 61.4297" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM23.938 65.2431C23.9632 65.0407 24.1149 64.8678 24.2968 64.8608C24.4582 64.8676 24.6163 65.0297 24.6163 65.2431L25.6063 73.4817L24.6713 81.533C24.6383 81.7548 24.4917 81.9078 24.3083 81.9078C24.1213 81.9078 23.9637 81.7548 23.938 81.533L23.0837 73.4817L23.938 65.2431ZM24.2968 64.8608C24.3006 64.8607 24.3045 64.8606 24.3083 64.8606H24.2863C24.2898 64.8606 24.2933 64.8607 24.2968 64.8608ZM20.6087 68.3871C20.6563 68.1691 20.77 68.0275 20.99 68.0275L20.9863 67.9549C21.155 67.9549 21.3163 68.0658 21.3163 68.2991L22.0863 73.4014L21.3163 78.4464C21.2613 78.672 21.1 78.8441 20.935 78.8441C20.77 78.8441 20.605 78.695 20.605 78.4846L20 73.4817L20.6087 68.3871ZM27.2563 63.6519C27.2563 63.4263 27.4727 63.2542 27.6963 63.2542L27.7477 63.1891C27.9677 63.1891 28.1327 63.4186 28.1913 63.6481L29.1227 73.3938L28.1913 82.8564C28.1327 83.082 27.9713 83.3154 27.7477 83.3154C27.4763 83.3154 27.3113 83.0859 27.3113 82.8564L26.4863 73.455L27.2563 63.6519ZM30.6627 63.3651C30.7177 63.0782 30.9377 62.8487 31.2127 62.8487L31.3263 62.9137C31.6013 62.9137 31.8213 63.1432 31.8213 63.4301L32.7013 73.4626L31.8213 83.1471C31.7663 83.4875 31.5463 83.7208 31.2713 83.7208C31 83.7208 30.7837 83.4875 30.725 83.193L29.955 73.4626L30.6627 63.3651ZM34.8647 63.6558C35.1727 63.6558 35.4293 63.8814 35.4477 64.2257L35.3267 64.1683L36.159 73.5162L35.3267 83.3192C35.3267 83.6634 35.0553 83.9235 34.784 83.9235C34.476 83.9235 34.201 83.6672 34.201 83.323L33.4677 73.52L34.2633 64.2257C34.2853 63.8853 34.5347 63.6558 34.8647 63.6558ZM37.754 58.3813C37.754 58.0333 38.0437 57.689 38.414 57.689L38.3297 57.5743C38.667 57.5743 38.9603 57.865 38.9897 58.2628L39.756 73.455L38.9897 83.258C38.9677 83.6022 38.6743 83.9465 38.3297 83.9465C37.963 83.9465 37.6697 83.6634 37.6697 83.3192L36.984 73.5162L37.754 58.3813ZM41.8056 54.0797C41.819 54.0788 41.8325 54.0784 41.846 54.0784H41.7653C41.7788 54.0784 41.7923 54.0788 41.8056 54.0797ZM41.8056 54.0797C41.4382 54.1027 41.13 54.4366 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4788 54.4387 42.1729 54.1027 41.8056 54.0797ZM44.5667 53.1605C44.618 52.7015 44.948 52.3611 45.3917 52.3611L45.388 52.2999C45.828 52.2999 46.213 52.7015 46.213 53.1605L46.9317 73.3364L46.2167 82.9749C46.2167 83.4339 45.828 83.8355 45.3917 83.8355C44.948 83.8355 44.618 83.4301 44.5667 82.9749L43.9617 73.3364L44.5667 53.1605ZM49.073 51.554C49.568 51.554 49.953 51.9556 49.953 52.472L50.0117 52.4146L50.613 73.2828L50.0117 82.8564C50.0117 83.3727 49.6267 83.7743 49.1317 83.7743C48.6367 83.7743 48.2517 83.3727 48.193 82.8564L47.6467 73.2828L48.193 52.472C48.193 51.9556 48.6367 51.554 49.073 51.554ZM51.7643 52.931C51.7643 52.4146 52.2043 51.9595 52.6993 51.9595L52.5857 51.8944C53.1393 51.8944 53.5793 52.3611 53.5793 52.9271L54.1843 73.2255L53.6343 82.6881C53.6343 83.2618 53.1943 83.7208 52.6993 83.7208C52.2043 83.7208 51.7643 83.3192 51.7643 82.7455L51.2143 73.2867L51.7643 52.931ZM55.2293 53.6194C55.2293 53.0457 55.6693 52.5294 56.2707 52.5294L56.333 52.7359C56.883 52.7359 57.334 53.1987 57.378 53.826L57.873 73.3785L57.4293 82.7225C57.3817 83.3536 56.9343 83.8126 56.388 83.8126C55.783 83.8126 55.3467 83.323 55.3467 82.7531L54.8517 73.2905L55.2293 53.6194ZM60.0693 48.9531C60.2893 48.9531 60.5093 49.0105 60.6743 49.1214L60.6817 49.2056C60.953 49.3815 61.1767 49.7219 61.1767 50.1197L61.6717 73.3976L61.2427 81.8237L61.1877 82.7416C61.1877 83.0859 61.0667 83.3727 60.854 83.6022C60.667 83.7782 60.381 83.9465 60.0877 83.9465C59.7503 83.9465 59.4423 83.782 59.2297 83.5487C59.0683 83.3766 58.9877 83.0897 58.9583 82.8602V82.8296L58.5367 73.4626L58.918 50.3301V50.0968C58.918 49.6952 59.1343 49.328 59.4643 49.1214C59.633 49.0105 59.8493 48.9531 60.0693 48.9531ZM63.813 46.7959C64.033 46.7959 64.198 46.8571 64.363 47.0293L64.418 46.7806C64.7517 46.9948 65.023 47.3811 65.023 47.8401L65.573 73.2255L65.023 82.4586C65.023 83.1432 64.4767 83.717 63.813 83.717C63.153 83.717 62.6103 83.1432 62.6103 82.516L62.3867 77.9836L62.108 73.3364L62.6103 48.0581V47.9472C62.6103 47.603 62.7717 47.2626 63.0467 47.0293C63.2667 46.8571 63.5417 46.7959 63.813 46.7959ZM92.9997 62.1144C94.261 61.5559 95.691 61.227 97.176 61.227L97.2273 61.4297C103.164 61.4297 108 66.4708 108 72.7206C108 78.9704 103.164 83.9579 97.2273 83.8967H67.2157C66.5557 83.8394 66.0643 83.2656 66.0057 82.5772V46.7462C66.0607 46.0616 66.2257 45.7173 67.0507 45.3731C69.192 44.5164 71.5607 44 73.977 44C83.9797 44 92.1197 51.9633 92.9997 62.1144Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM23.938 65.2431C23.9632 65.0407 24.1149 64.8678 24.2968 64.8608C24.4582 64.8676 24.6163 65.0297 24.6163 65.2431L25.6063 73.4817L24.6713 81.533C24.6383 81.7548 24.4917 81.9078 24.3083 81.9078C24.1213 81.9078 23.9637 81.7548 23.938 81.533L23.0837 73.4817L23.938 65.2431ZM24.2968 64.8608C24.3006 64.8607 24.3045 64.8606 24.3083 64.8606H24.2863C24.2898 64.8606 24.2933 64.8607 24.2968 64.8608ZM20.6087 68.3871C20.6563 68.1691 20.77 68.0275 20.99 68.0275L20.9863 67.9549C21.155 67.9549 21.3163 68.0658 21.3163 68.2991L22.0863 73.4014L21.3163 78.4464C21.2613 78.672 21.1 78.8441 20.935 78.8441C20.77 78.8441 20.605 78.695 20.605 78.4846L20 73.4817L20.6087 68.3871ZM27.2563 63.6519C27.2563 63.4263 27.4727 63.2542 27.6963 63.2542L27.7477 63.1891C27.9677 63.1891 28.1327 63.4186 28.1913 63.6481L29.1227 73.3938L28.1913 82.8564C28.1327 83.082 27.9713 83.3154 27.7477 83.3154C27.4763 83.3154 27.3113 83.0859 27.3113 82.8564L26.4863 73.455L27.2563 63.6519ZM30.6627 63.3651C30.7177 63.0782 30.9377 62.8487 31.2127 62.8487L31.3263 62.9137C31.6013 62.9137 31.8213 63.1432 31.8213 63.4301L32.7013 73.4626L31.8213 83.1471C31.7663 83.4875 31.5463 83.7208 31.2713 83.7208C31 83.7208 30.7837 83.4875 30.725 83.193L29.955 73.4626L30.6627 63.3651ZM34.8647 63.6558C35.1727 63.6558 35.4293 63.8814 35.4477 64.2257L35.3267 64.1683L36.159 73.5162L35.3267 83.3192C35.3267 83.6634 35.0553 83.9235 34.784 83.9235C34.476 83.9235 34.201 83.6672 34.201 83.323L33.4677 73.52L34.2633 64.2257C34.2853 63.8853 34.5347 63.6558 34.8647 63.6558ZM37.754 58.3813C37.754 58.0333 38.0437 57.689 38.414 57.689L38.3297 57.5743C38.667 57.5743 38.9603 57.865 38.9897 58.2628L39.756 73.455L38.9897 83.258C38.9677 83.6022 38.6743 83.9465 38.3297 83.9465C37.963 83.9465 37.6697 83.6634 37.6697 83.3192L36.984 73.5162L37.754 58.3813ZM41.8056 54.0797C41.819 54.0788 41.8325 54.0784 41.846 54.0784H41.7653C41.7788 54.0784 41.7923 54.0788 41.8056 54.0797ZM41.8056 54.0797C41.4382 54.1027 41.13 54.4366 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4788 54.4387 42.1729 54.1027 41.8056 54.0797ZM44.5667 53.1605C44.618 52.7015 44.948 52.3611 45.3917 52.3611L45.388 52.2999C45.828 52.2999 46.213 52.7015 46.213 53.1605L46.9317 73.3364L46.2167 82.9749C46.2167 83.4339 45.828 83.8355 45.3917 83.8355C44.948 83.8355 44.618 83.4301 44.5667 82.9749L43.9617 73.3364L44.5667 53.1605ZM49.073 51.554C49.568 51.554 49.953 51.9556 49.953 52.472L50.0117 52.4146L50.613 73.2828L50.0117 82.8564C50.0117 83.3727 49.6267 83.7743 49.1317 83.7743C48.6367 83.7743 48.2517 83.3727 48.193 82.8564L47.6467 73.2828L48.193 52.472C48.193 51.9556 48.6367 51.554 49.073 51.554ZM51.7643 52.931C51.7643 52.4146 52.2043 51.9595 52.6993 51.9595L52.5857 51.8944C53.1393 51.8944 53.5793 52.3611 53.5793 52.9271L54.1843 73.2255L53.6343 82.6881C53.6343 83.2618 53.1943 83.7208 52.6993 83.7208C52.2043 83.7208 51.7643 83.3192 51.7643 82.7455L51.2143 73.2867L51.7643 52.931ZM55.2293 53.6194C55.2293 53.0457 55.6693 52.5294 56.2707 52.5294L56.333 52.7359C56.883 52.7359 57.334 53.1987 57.378 53.826L57.873 73.3785L57.4293 82.7225C57.3817 83.3536 56.9343 83.8126 56.388 83.8126C55.783 83.8126 55.3467 83.323 55.3467 82.7531L54.8517 73.2905L55.2293 53.6194ZM60.0693 48.9531C60.2893 48.9531 60.5093 49.0105 60.6743 49.1214L60.6817 49.2056C60.953 49.3815 61.1767 49.7219 61.1767 50.1197L61.6717 73.3976L61.2427 81.8237L61.1877 82.7416C61.1877 83.0859 61.0667 83.3727 60.854 83.6022C60.667 83.7782 60.381 83.9465 60.0877 83.9465C59.7503 83.9465 59.4423 83.782 59.2297 83.5487C59.0683 83.3766 58.9877 83.0897 58.9583 82.8602V82.8296L58.5367 73.4626L58.918 50.3301V50.0968C58.918 49.6952 59.1343 49.328 59.4643 49.1214C59.633 49.0105 59.8493 48.9531 60.0693 48.9531ZM63.813 46.7959C64.033 46.7959 64.198 46.8571 64.363 47.0293L64.418 46.7806C64.7517 46.9948 65.023 47.3811 65.023 47.8401L65.573 73.2255L65.023 82.4586C65.023 83.1432 64.4767 83.717 63.813 83.717C63.153 83.717 62.6103 83.1432 62.6103 82.516L62.3867 77.9836L62.108 73.3364L62.6103 48.0581V47.9472C62.6103 47.603 62.7717 47.2626 63.0467 47.0293C63.2667 46.8571 63.5417 46.7959 63.813 46.7959ZM92.9997 62.1144C94.261 61.5559 95.691 61.227 97.176 61.227L97.2273 61.4297C103.164 61.4297 108 66.4708 108 72.7206C108 78.9704 103.164 83.9579 97.2273 83.8967H67.2157C66.5557 83.8394 66.0643 83.2656 66.0057 82.5772V46.7462C66.0607 46.0616 66.2257 45.7173 67.0507 45.3731C69.192 44.5164 71.5607 44 73.977 44C83.9797 44 92.1197 51.9633 92.9997 62.1144Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM23.938 65.2431C23.9632 65.0407 24.1149 64.8678 24.2968 64.8608C24.4582 64.8676 24.6163 65.0297 24.6163 65.2431L25.6063 73.4817L24.6713 81.533C24.6383 81.7548 24.4917 81.9078 24.3083 81.9078C24.1213 81.9078 23.9637 81.7548 23.938 81.533L23.0837 73.4817L23.938 65.2431ZM24.2968 64.8608C24.3006 64.8607 24.3045 64.8606 24.3083 64.8606H24.2863C24.2898 64.8606 24.2933 64.8607 24.2968 64.8608ZM20.6087 68.3871C20.6563 68.1691 20.77 68.0275 20.99 68.0275L20.9863 67.9549C21.155 67.9549 21.3163 68.0658 21.3163 68.2991L22.0863 73.4014L21.3163 78.4464C21.2613 78.672 21.1 78.8441 20.935 78.8441C20.77 78.8441 20.605 78.695 20.605 78.4846L20 73.4817L20.6087 68.3871ZM27.2563 63.6519C27.2563 63.4263 27.4727 63.2542 27.6963 63.2542L27.7477 63.1891C27.9677 63.1891 28.1327 63.4186 28.1913 63.6481L29.1227 73.3938L28.1913 82.8564C28.1327 83.082 27.9713 83.3154 27.7477 83.3154C27.4763 83.3154 27.3113 83.0859 27.3113 82.8564L26.4863 73.455L27.2563 63.6519ZM30.6627 63.3651C30.7177 63.0782 30.9377 62.8487 31.2127 62.8487L31.3263 62.9137C31.6013 62.9137 31.8213 63.1432 31.8213 63.4301L32.7013 73.4626L31.8213 83.1471C31.7663 83.4875 31.5463 83.7208 31.2713 83.7208C31 83.7208 30.7837 83.4875 30.725 83.193L29.955 73.4626L30.6627 63.3651ZM34.8647 63.6558C35.1727 63.6558 35.4293 63.8814 35.4477 64.2257L35.3267 64.1683L36.159 73.5162L35.3267 83.3192C35.3267 83.6634 35.0553 83.9235 34.784 83.9235C34.476 83.9235 34.201 83.6672 34.201 83.323L33.4677 73.52L34.2633 64.2257C34.2853 63.8853 34.5347 63.6558 34.8647 63.6558ZM37.754 58.3813C37.754 58.0333 38.0437 57.689 38.414 57.689L38.3297 57.5743C38.667 57.5743 38.9603 57.865 38.9897 58.2628L39.756 73.455L38.9897 83.258C38.9677 83.6022 38.6743 83.9465 38.3297 83.9465C37.963 83.9465 37.6697 83.6634 37.6697 83.3192L36.984 73.5162L37.754 58.3813ZM41.8056 54.0797C41.819 54.0788 41.8325 54.0784 41.846 54.0784H41.7653C41.7788 54.0784 41.7923 54.0788 41.8056 54.0797ZM41.8056 54.0797C41.4382 54.1027 41.13 54.4366 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4788 54.4387 42.1729 54.1027 41.8056 54.0797ZM44.5667 53.1605C44.618 52.7015 44.948 52.3611 45.3917 52.3611L45.388 52.2999C45.828 52.2999 46.213 52.7015 46.213 53.1605L46.9317 73.3364L46.2167 82.9749C46.2167 83.4339 45.828 83.8355 45.3917 83.8355C44.948 83.8355 44.618 83.4301 44.5667 82.9749L43.9617 73.3364L44.5667 53.1605ZM49.073 51.554C49.568 51.554 49.953 51.9556 49.953 52.472L50.0117 52.4146L50.613 73.2828L50.0117 82.8564C50.0117 83.3727 49.6267 83.7743 49.1317 83.7743C48.6367 83.7743 48.2517 83.3727 48.193 82.8564L47.6467 73.2828L48.193 52.472C48.193 51.9556 48.6367 51.554 49.073 51.554ZM51.7643 52.931C51.7643 52.4146 52.2043 51.9595 52.6993 51.9595L52.5857 51.8944C53.1393 51.8944 53.5793 52.3611 53.5793 52.9271L54.1843 73.2255L53.6343 82.6881C53.6343 83.2618 53.1943 83.7208 52.6993 83.7208C52.2043 83.7208 51.7643 83.3192 51.7643 82.7455L51.2143 73.2867L51.7643 52.931ZM55.2293 53.6194C55.2293 53.0457 55.6693 52.5294 56.2707 52.5294L56.333 52.7359C56.883 52.7359 57.334 53.1987 57.378 53.826L57.873 73.3785L57.4293 82.7225C57.3817 83.3536 56.9343 83.8126 56.388 83.8126C55.783 83.8126 55.3467 83.323 55.3467 82.7531L54.8517 73.2905L55.2293 53.6194ZM60.0693 48.9531C60.2893 48.9531 60.5093 49.0105 60.6743 49.1214L60.6817 49.2056C60.953 49.3815 61.1767 49.7219 61.1767 50.1197L61.6717 73.3976L61.2427 81.8237L61.1877 82.7416C61.1877 83.0859 61.0667 83.3727 60.854 83.6022C60.667 83.7782 60.381 83.9465 60.0877 83.9465C59.7503 83.9465 59.4423 83.782 59.2297 83.5487C59.0683 83.3766 58.9877 83.0897 58.9583 82.8602V82.8296L58.5367 73.4626L58.918 50.3301V50.0968C58.918 49.6952 59.1343 49.328 59.4643 49.1214C59.633 49.0105 59.8493 48.9531 60.0693 48.9531ZM63.813 46.7959C64.033 46.7959 64.198 46.8571 64.363 47.0293L64.418 46.7806C64.7517 46.9948 65.023 47.3811 65.023 47.8401L65.573 73.2255L65.023 82.4586C65.023 83.1432 64.4767 83.717 63.813 83.717C63.153 83.717 62.6103 83.1432 62.6103 82.516L62.3867 77.9836L62.108 73.3364L62.6103 48.0581V47.9472C62.6103 47.603 62.7717 47.2626 63.0467 47.0293C63.2667 46.8571 63.5417 46.7959 63.813 46.7959ZM92.9997 62.1144C94.261 61.5559 95.691 61.227 97.176 61.227L97.2273 61.4297C103.164 61.4297 108 66.4708 108 72.7206C108 78.9704 103.164 83.9579 97.2273 83.8967H67.2157C66.5557 83.8394 66.0643 83.2656 66.0057 82.5772V46.7462C66.0607 46.0616 66.2257 45.7173 67.0507 45.3731C69.192 44.5164 71.5607 44 73.977 44C83.9797 44 92.1197 51.9633 92.9997 62.1144Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM23.938 65.2431C23.9632 65.0407 24.1149 64.8678 24.2968 64.8608C24.4582 64.8676 24.6163 65.0297 24.6163 65.2431L25.6063 73.4817L24.6713 81.533C24.6383 81.7548 24.4917 81.9078 24.3083 81.9078C24.1213 81.9078 23.9637 81.7548 23.938 81.533L23.0837 73.4817L23.938 65.2431ZM24.2968 64.8608C24.3006 64.8607 24.3045 64.8606 24.3083 64.8606H24.2863C24.2898 64.8606 24.2933 64.8607 24.2968 64.8608ZM20.6087 68.3871C20.6563 68.1691 20.77 68.0275 20.99 68.0275L20.9863 67.9549C21.155 67.9549 21.3163 68.0658 21.3163 68.2991L22.0863 73.4014L21.3163 78.4464C21.2613 78.672 21.1 78.8441 20.935 78.8441C20.77 78.8441 20.605 78.695 20.605 78.4846L20 73.4817L20.6087 68.3871ZM27.2563 63.6519C27.2563 63.4263 27.4727 63.2542 27.6963 63.2542L27.7477 63.1891C27.9677 63.1891 28.1327 63.4186 28.1913 63.6481L29.1227 73.3938L28.1913 82.8564C28.1327 83.082 27.9713 83.3154 27.7477 83.3154C27.4763 83.3154 27.3113 83.0859 27.3113 82.8564L26.4863 73.455L27.2563 63.6519ZM30.6627 63.3651C30.7177 63.0782 30.9377 62.8487 31.2127 62.8487L31.3263 62.9137C31.6013 62.9137 31.8213 63.1432 31.8213 63.4301L32.7013 73.4626L31.8213 83.1471C31.7663 83.4875 31.5463 83.7208 31.2713 83.7208C31 83.7208 30.7837 83.4875 30.725 83.193L29.955 73.4626L30.6627 63.3651ZM34.8647 63.6558C35.1727 63.6558 35.4293 63.8814 35.4477 64.2257L35.3267 64.1683L36.159 73.5162L35.3267 83.3192C35.3267 83.6634 35.0553 83.9235 34.784 83.9235C34.476 83.9235 34.201 83.6672 34.201 83.323L33.4677 73.52L34.2633 64.2257C34.2853 63.8853 34.5347 63.6558 34.8647 63.6558ZM37.754 58.3813C37.754 58.0333 38.0437 57.689 38.414 57.689L38.3297 57.5743C38.667 57.5743 38.9603 57.865 38.9897 58.2628L39.756 73.455L38.9897 83.258C38.9677 83.6022 38.6743 83.9465 38.3297 83.9465C37.963 83.9465 37.6697 83.6634 37.6697 83.3192L36.984 73.5162L37.754 58.3813ZM41.8056 54.0797C41.819 54.0788 41.8325 54.0784 41.846 54.0784H41.7653C41.7788 54.0784 41.7923 54.0788 41.8056 54.0797ZM41.8056 54.0797C41.4382 54.1027 41.13 54.4366 41.1017 54.8204L40.4417 73.455L41.0467 83.2006C41.0467 83.6596 41.3767 84 41.7617 84C42.143 84 42.473 83.6596 42.5317 83.2006L43.2393 73.455L42.5353 54.8816C42.4788 54.4387 42.1729 54.1027 41.8056 54.0797ZM44.5667 53.1605C44.618 52.7015 44.948 52.3611 45.3917 52.3611L45.388 52.2999C45.828 52.2999 46.213 52.7015 46.213 53.1605L46.9317 73.3364L46.2167 82.9749C46.2167 83.4339 45.828 83.8355 45.3917 83.8355C44.948 83.8355 44.618 83.4301 44.5667 82.9749L43.9617 73.3364L44.5667 53.1605ZM49.073 51.554C49.568 51.554 49.953 51.9556 49.953 52.472L50.0117 52.4146L50.613 73.2828L50.0117 82.8564C50.0117 83.3727 49.6267 83.7743 49.1317 83.7743C48.6367 83.7743 48.2517 83.3727 48.193 82.8564L47.6467 73.2828L48.193 52.472C48.193 51.9556 48.6367 51.554 49.073 51.554ZM51.7643 52.931C51.7643 52.4146 52.2043 51.9595 52.6993 51.9595L52.5857 51.8944C53.1393 51.8944 53.5793 52.3611 53.5793 52.9271L54.1843 73.2255L53.6343 82.6881C53.6343 83.2618 53.1943 83.7208 52.6993 83.7208C52.2043 83.7208 51.7643 83.3192 51.7643 82.7455L51.2143 73.2867L51.7643 52.931ZM55.2293 53.6194C55.2293 53.0457 55.6693 52.5294 56.2707 52.5294L56.333 52.7359C56.883 52.7359 57.334 53.1987 57.378 53.826L57.873 73.3785L57.4293 82.7225C57.3817 83.3536 56.9343 83.8126 56.388 83.8126C55.783 83.8126 55.3467 83.323 55.3467 82.7531L54.8517 73.2905L55.2293 53.6194ZM60.0693 48.9531C60.2893 48.9531 60.5093 49.0105 60.6743 49.1214L60.6817 49.2056C60.953 49.3815 61.1767 49.7219 61.1767 50.1197L61.6717 73.3976L61.2427 81.8237L61.1877 82.7416C61.1877 83.0859 61.0667 83.3727 60.854 83.6022C60.667 83.7782 60.381 83.9465 60.0877 83.9465C59.7503 83.9465 59.4423 83.782 59.2297 83.5487C59.0683 83.3766 58.9877 83.0897 58.9583 82.8602V82.8296L58.5367 73.4626L58.918 50.3301V50.0968C58.918 49.6952 59.1343 49.328 59.4643 49.1214C59.633 49.0105 59.8493 48.9531 60.0693 48.9531ZM63.813 46.7959C64.033 46.7959 64.198 46.8571 64.363 47.0293L64.418 46.7806C64.7517 46.9948 65.023 47.3811 65.023 47.8401L65.573 73.2255L65.023 82.4586C65.023 83.1432 64.4767 83.717 63.813 83.717C63.153 83.717 62.6103 83.1432 62.6103 82.516L62.3867 77.9836L62.108 73.3364L62.6103 48.0581V47.9472C62.6103 47.603 62.7717 47.2626 63.0467 47.0293C63.2667 46.8571 63.5417 46.7959 63.813 46.7959ZM92.9997 62.1144C94.261 61.5559 95.691 61.227 97.176 61.227L97.2273 61.4297C103.164 61.4297 108 66.4708 108 72.7206C108 78.9704 103.164 83.9579 97.2273 83.8967H67.2157C66.5557 83.8394 66.0643 83.2656 66.0057 82.5772V46.7462C66.0607 46.0616 66.2257 45.7173 67.0507 45.3731C69.192 44.5164 71.5607 44 73.977 44C83.9797 44 92.1197 51.9633 92.9997 62.1144Z" />\n                </svg>\n                '
                    }
                }
            },
            Twitch: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#9146FF"/>\n            <path d="M62.6654 40.9277H68.0008V57.2138H62.6623L62.6654 40.9277ZM77.3339 40.9277H82.6661V57.2138H77.3339V40.9277ZM45.3339 26L32 39.5723V88.4277H48V102L61.3339 88.4277H71.9984L96 64V26H45.3339ZM90.6646 61.2862L80 72.1415H69.3323L59.9992 81.6415V72.1415H48V31.4277H90.6646V61.2862Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#9146FF"/>\n            <path d="M62.6654 40.9277H68.0008V57.2138H62.6623L62.6654 40.9277ZM77.3339 40.9277H82.6661V57.2138H77.3339V40.9277ZM45.3339 26L32 39.5723V88.4277H48V102L61.3339 88.4277H71.9984L96 64V26H45.3339ZM90.6646 61.2862L80 72.1415H69.3323L59.9992 81.6415V72.1415H48V31.4277H90.6646V61.2862Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM68.0008 40.9277H62.6654L62.6623 57.2138H68.0008V40.9277ZM82.6661 40.9277H77.3339V57.2138H82.6661V40.9277ZM32 39.5723L45.3339 26H96V64L71.9984 88.4277H61.3339L48 102V88.4277H32V39.5723ZM80 72.1415L90.6646 61.2862V31.4277H48V72.1415H59.9992V81.6415L69.3323 72.1415H80Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM68.0008 40.9277H62.6654L62.6623 57.2138H68.0008V40.9277ZM82.6661 40.9277H77.3339V57.2138H82.6661V40.9277ZM32 39.5723L45.3339 26H96V64L71.9984 88.4277H61.3339L48 102V88.4277H32V39.5723ZM80 72.1415L90.6646 61.2862V31.4277H48V72.1415H59.9992V81.6415L69.3323 72.1415H80Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM68.0008 40.9277H62.6654L62.6623 57.2138H68.0008V40.9277ZM82.6661 40.9277H77.3339V57.2138H82.6661V40.9277ZM32 39.5723L45.3339 26H96V64L71.9984 88.4277H61.3339L48 102V88.4277H32V39.5723ZM80 72.1415L90.6646 61.2862V31.4277H48V72.1415H59.9992V81.6415L69.3323 72.1415H80Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM68.0008 40.9277H62.6654L62.6623 57.2138H68.0008V40.9277ZM82.6661 40.9277H77.3339V57.2138H82.6661V40.9277ZM32 39.5723L45.3339 26H96V64L71.9984 88.4277H61.3339L48 102V88.4277H32V39.5723ZM80 72.1415L90.6646 61.2862V31.4277H48V72.1415H59.9992V81.6415L69.3323 72.1415H80Z" />\n                </svg>\n                '
                    }
                }
            },
            Twitter: {
                brand: {
                    circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="256" height="256" rx="128" fill="black"/>\n            <mask id="mask0_2001_46" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><rect width="256" height="256" rx="128" fill="white"/></mask>\n            <g mask="url(#mask0_2001_46)"></g>\n            <path d="M173.029 57H197.191L144.417 117.303L206.5 199.373H157.902L119.81 149.611L76.2767 199.373H52.0802L108.516 134.86L49 57H98.8305L133.226 102.484L173.029 57ZM164.541 184.93H177.923L91.5407 70.6897H77.1666L164.541 184.93Z" fill="#E7E9EA"/>\n            </svg>',
                    square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="256" height="256" fill="black"/>\n            <mask id="mask0_2001_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><rect width="256" height="256" fill="white"/></mask>\n            <g mask="url(#mask0_2001_4)"></g>\n            <path d="M173.029 57H197.191L144.417 117.303L206.5 199.373H157.902L119.81 149.611L76.2767 199.373H52.0802L108.516 134.86L49 57H98.8305L133.226 102.484L173.029 57ZM164.541 184.93H177.923L91.5407 70.6897H77.1666L164.541 184.93Z" fill="#E7E9EA"/>\n            </svg>'
                },
                custom: {
                    filled: {
                        circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C57.3076 0 0 57.3076 0 128C0 198.692 57.3076 256 128 256C198.692 256 256 198.692 256 128C256 57.3076 198.692 0 128 0ZM197.188 57H173.038L133.243 102.501L98.8356 57.0066H49L108.548 134.856L52.1106 199.37H76.2738L119.836 149.597L157.898 199.37H206.5L144.425 117.313L197.188 57ZM177.947 184.918H164.566L77.2056 70.6969H91.5644L177.947 184.918Z"/>\n                </svg>',
                        square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V246C0 251.523 4.47715 256 10 256H246C251.523 256 256 251.523 256 246V10C256 4.47715 251.523 0 246 0H10ZM197.188 57H173.038L133.243 102.501L98.8356 57.0066H49L108.548 134.856L52.1106 199.37H76.2738L119.836 149.597L157.898 199.37H206.5L144.425 117.313L197.188 57ZM177.947 184.918H164.566L77.2056 70.6969H91.5644L177.947 184.918Z"/>\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="264" height="264" viewBox="0 0 264 264" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M132 0C59.0984 0 0 59.0984 0 132C0 204.902 59.0984 264 132 264C204.902 264 264 204.902 264 132C264 59.0984 204.902 0 132 0ZM8 132C8 63.5167 63.5167 8 132 8C200.483 8 256 63.5167 256 132C256 200.483 200.483 256 132 256C63.5167 256 8 200.483 8 132ZM201.188 61H177.038L137.243 106.501L102.836 61.0066H53L112.548 138.856L56.1106 203.37H80.2738L123.836 153.597L161.898 203.37H210.5L148.425 121.313L201.188 61ZM181.947 188.918H168.566L81.2056 74.6969H95.5644L181.947 188.918Z"/>\n                </svg>\n                ',
                        square: '<svg width="265" height="265" viewBox="0 0 265 265" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 0.5C4.52944 0.5 0.5 4.52944 0.5 9.5V255.5C0.5 260.471 4.52944 264.5 9.5 264.5H255.5C260.471 264.5 264.5 260.471 264.5 255.5V9.5C264.5 4.52944 260.471 0.5 255.5 0.5H9.5ZM8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H255.5C256.052 8.5 256.5 8.94772 256.5 9.5V255.5C256.5 256.052 256.052 256.5 255.5 256.5H9.5C8.94772 256.5 8.5 256.052 8.5 255.5V9.5ZM201.688 61.5H177.538L137.743 107.001L103.336 61.5066H53.5L113.048 139.356L56.6106 203.87H80.7738L124.336 154.097L162.398 203.87H211L148.925 121.813L201.688 61.5ZM182.447 189.418H169.066L81.7056 75.1969H96.0644L182.447 189.418Z"/>\n                </svg>\n                '
                    }
                }
            },
            Whatsapp: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#25D366"/>\n            <path d="M90.4643 37.1964C83.5089 30.0714 74.0089 26 63.8304 26C43.1339 26 26.1696 42.9643 26.1696 63.6607C26.1696 70.4464 28.0357 76.8929 31.2589 82.4911L26 102L45.8482 96.9107C51.4464 99.7946 57.5536 101.491 63.8304 101.491C84.6964 101.491 102 84.5268 102 63.8304C102 53.6518 97.5893 44.3214 90.4643 37.1964ZM63.8304 95.0446C58.2321 95.0446 52.8036 93.5179 47.8839 90.6339L46.8661 89.9554L34.9911 93.1786L38.2143 81.6429L37.3661 80.4554C34.3125 75.3661 32.6161 69.5982 32.6161 63.6607C32.6161 46.5268 46.6964 32.4464 64 32.4464C72.3125 32.4464 80.1161 35.6696 86.0536 41.6071C91.9911 47.5446 95.5536 55.3482 95.5536 63.8304C95.5536 80.9643 81.1339 95.0446 63.8304 95.0446ZM81.1339 71.6339C80.1161 71.125 75.5357 68.9196 74.6875 68.5804C73.8393 68.2411 73.1607 68.0714 72.4821 69.0893C71.9732 69.9375 70.1071 72.1429 69.5982 72.8214C68.9196 73.3304 68.4107 73.5 67.5625 72.9911C61.9643 70.2768 58.4018 68.0714 54.6696 61.7946C53.6518 60.0982 55.6875 60.2679 57.3839 56.7054C57.7232 56.0268 57.5536 55.5179 57.3839 55.0089C57.2143 54.5 55.1786 49.9196 54.5 48.0536C53.6518 46.1875 52.9732 46.3571 52.2946 46.3571C51.7857 46.3571 51.1071 46.3571 50.5982 46.3571C49.9196 46.3571 48.9018 46.5268 48.0536 47.5446C47.2054 48.5625 44.8304 50.7679 44.8304 55.3482C44.8304 60.0982 48.0536 64.5089 48.5625 65.1875C49.0714 65.6964 55.1786 75.1964 64.6786 79.2679C70.6161 81.9821 72.9911 82.1518 76.0446 81.6429C77.7411 81.4732 81.4732 79.4375 82.3214 77.2321C83.1696 75.0268 83.1696 73.1607 82.8304 72.8214C82.6607 72.3125 81.9821 72.1429 81.1339 71.6339Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#25D366"/>\n            <path d="M90.4643 37.1964C83.5089 30.0714 74.0089 26 63.8304 26C43.1339 26 26.1696 42.9643 26.1696 63.6607C26.1696 70.4464 28.0357 76.8929 31.2589 82.4911L26 102L45.8482 96.9107C51.4464 99.7946 57.5536 101.491 63.8304 101.491C84.6964 101.491 102 84.5268 102 63.8304C102 53.6518 97.5893 44.3214 90.4643 37.1964ZM63.8304 95.0446C58.2321 95.0446 52.8036 93.5179 47.8839 90.6339L46.8661 89.9554L34.9911 93.1786L38.2143 81.6429L37.3661 80.4554C34.3125 75.3661 32.6161 69.5982 32.6161 63.6607C32.6161 46.5268 46.6964 32.4464 64 32.4464C72.3125 32.4464 80.1161 35.6696 86.0536 41.6071C91.9911 47.5446 95.5536 55.3482 95.5536 63.8304C95.5536 80.9643 81.1339 95.0446 63.8304 95.0446ZM81.1339 71.6339C80.1161 71.125 75.5357 68.9196 74.6875 68.5804C73.8393 68.2411 73.1607 68.0714 72.4821 69.0893C71.9732 69.9375 70.1071 72.1429 69.5982 72.8214C68.9196 73.3304 68.4107 73.5 67.5625 72.9911C61.9643 70.2768 58.4018 68.0714 54.6696 61.7946C53.6518 60.0982 55.6875 60.2679 57.3839 56.7054C57.7232 56.0268 57.5536 55.5179 57.3839 55.0089C57.2143 54.5 55.1786 49.9196 54.5 48.0536C53.6518 46.1875 52.9732 46.3571 52.2946 46.3571C51.7857 46.3571 51.1071 46.3571 50.5982 46.3571C49.9196 46.3571 48.9018 46.5268 48.0536 47.5446C47.2054 48.5625 44.8304 50.7679 44.8304 55.3482C44.8304 60.0982 48.0536 64.5089 48.5625 65.1875C49.0714 65.6964 55.1786 75.1964 64.6786 79.2679C70.6161 81.9821 72.9911 82.1518 76.0446 81.6429C77.7411 81.4732 81.4732 79.4375 82.3214 77.2321C83.1696 75.0268 83.1696 73.1607 82.8304 72.8214C82.6607 72.3125 81.9821 72.1429 81.1339 71.6339Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM63.8304 26C74.0089 26 83.5089 30.0714 90.4643 37.1964C97.5893 44.3214 102 53.6518 102 63.8304C102 84.5268 84.6964 101.491 63.8304 101.491C57.5536 101.491 51.4464 99.7946 45.8482 96.9107L26 102L31.2589 82.4911C28.0357 76.8929 26.1696 70.4464 26.1696 63.6607C26.1696 42.9643 43.1339 26 63.8304 26ZM47.8839 90.6339C52.8036 93.5179 58.2321 95.0446 63.8304 95.0446C81.1339 95.0446 95.5536 80.9643 95.5536 63.8304C95.5536 55.3482 91.9911 47.5446 86.0536 41.6071C80.1161 35.6696 72.3125 32.4464 64 32.4464C46.6964 32.4464 32.6161 46.5268 32.6161 63.6607C32.6161 69.5982 34.3125 75.3661 37.3661 80.4554L38.2143 81.6429L34.9911 93.1786L46.8661 89.9554L47.8839 90.6339ZM74.6875 68.5804C75.5357 68.9196 80.1161 71.125 81.1339 71.6339C81.3853 71.7847 81.6217 71.9058 81.8345 72.0147C82.3396 72.2732 82.711 72.4633 82.8304 72.8214C83.1696 73.1607 83.1696 75.0268 82.3214 77.2321C81.4732 79.4375 77.7411 81.4732 76.0446 81.6429C72.9911 82.1518 70.6161 81.9821 64.6786 79.2679C56.3653 75.705 50.6501 67.985 49.011 65.771C48.777 65.4549 48.6261 65.2511 48.5625 65.1875C48.0536 64.5089 44.8304 60.0982 44.8304 55.3482C44.8304 51.2146 46.7647 49.0153 47.7655 47.8774C47.8736 47.7544 47.9709 47.6439 48.0536 47.5446C48.9018 46.5268 49.9196 46.3571 50.5982 46.3571H52.2946C52.3467 46.3571 52.3988 46.3561 52.451 46.3551C53.0784 46.3431 53.7169 46.3308 54.5 48.0536C54.9153 49.1956 55.839 51.3544 56.5321 52.9743C56.9714 54.0012 57.3181 54.8115 57.3839 55.0089C57.5536 55.5179 57.7232 56.0268 57.3839 56.7054C56.6195 58.3106 55.7863 59.1581 55.1945 59.7599C54.4729 60.4938 54.1104 60.8626 54.6696 61.7946C58.4018 68.0714 61.9643 70.2768 67.5625 72.9911C68.4107 73.5 68.9196 73.3304 69.5982 72.8214C69.7616 72.6036 70.0649 72.2283 70.4182 71.7912C71.1654 70.8667 72.1366 69.6652 72.4821 69.0893C73.1607 68.0714 73.8393 68.2411 74.6875 68.5804Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM63.8304 26C74.0089 26 83.5089 30.0714 90.4643 37.1964C97.5893 44.3214 102 53.6518 102 63.8304C102 84.5268 84.6964 101.491 63.8304 101.491C57.5536 101.491 51.4464 99.7946 45.8482 96.9107L26 102L31.2589 82.4911C28.0357 76.8929 26.1696 70.4464 26.1696 63.6607C26.1696 42.9643 43.1339 26 63.8304 26ZM47.8839 90.6339C52.8036 93.5179 58.2321 95.0446 63.8304 95.0446C81.1339 95.0446 95.5536 80.9643 95.5536 63.8304C95.5536 55.3482 91.9911 47.5446 86.0536 41.6071C80.1161 35.6696 72.3125 32.4464 64 32.4464C46.6964 32.4464 32.6161 46.5268 32.6161 63.6607C32.6161 69.5982 34.3125 75.3661 37.3661 80.4554L38.2143 81.6429L34.9911 93.1786L46.8661 89.9554L47.8839 90.6339ZM74.6875 68.5804C75.5357 68.9196 80.1161 71.125 81.1339 71.6339C81.3853 71.7847 81.6217 71.9058 81.8345 72.0147C82.3396 72.2732 82.711 72.4633 82.8304 72.8214C83.1696 73.1607 83.1696 75.0268 82.3214 77.2321C81.4732 79.4375 77.7411 81.4732 76.0446 81.6429C72.9911 82.1518 70.6161 81.9821 64.6786 79.2679C56.3653 75.705 50.6501 67.985 49.011 65.771C48.777 65.4549 48.6261 65.2511 48.5625 65.1875C48.0536 64.5089 44.8304 60.0982 44.8304 55.3482C44.8304 51.2146 46.7647 49.0153 47.7655 47.8774C47.8736 47.7544 47.9709 47.6439 48.0536 47.5446C48.9018 46.5268 49.9196 46.3571 50.5982 46.3571H52.2946C52.3467 46.3571 52.3988 46.3561 52.451 46.3551C53.0784 46.3431 53.7169 46.3308 54.5 48.0536C54.9153 49.1956 55.839 51.3544 56.5321 52.9743C56.9714 54.0012 57.3181 54.8115 57.3839 55.0089C57.5536 55.5179 57.7232 56.0268 57.3839 56.7054C56.6195 58.3106 55.7863 59.1581 55.1945 59.7599C54.4729 60.4938 54.1104 60.8626 54.6696 61.7946C58.4018 68.0714 61.9643 70.2768 67.5625 72.9911C68.4107 73.5 68.9196 73.3304 69.5982 72.8214C69.7616 72.6036 70.0649 72.2283 70.4182 71.7912C71.1654 70.8667 72.1366 69.6652 72.4821 69.0893C73.1607 68.0714 73.8393 68.2411 74.6875 68.5804Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM63.8304 26C74.0089 26 83.5089 30.0714 90.4643 37.1964C97.5893 44.3214 102 53.6518 102 63.8304C102 84.5268 84.6964 101.491 63.8304 101.491C57.5536 101.491 51.4464 99.7946 45.8482 96.9107L26 102L31.2589 82.4911C28.0357 76.8929 26.1696 70.4464 26.1696 63.6607C26.1696 42.9643 43.1339 26 63.8304 26ZM47.8839 90.6339C52.8036 93.5179 58.2321 95.0446 63.8304 95.0446C81.1339 95.0446 95.5536 80.9643 95.5536 63.8304C95.5536 55.3482 91.9911 47.5446 86.0536 41.6071C80.1161 35.6696 72.3125 32.4464 64 32.4464C46.6964 32.4464 32.6161 46.5268 32.6161 63.6607C32.6161 69.5982 34.3125 75.3661 37.3661 80.4554L38.2143 81.6429L34.9911 93.1786L46.8661 89.9554L47.8839 90.6339ZM74.6875 68.5804C75.5357 68.9196 80.1161 71.125 81.1339 71.6339C81.3853 71.7847 81.6217 71.9058 81.8345 72.0147C82.3396 72.2732 82.711 72.4633 82.8304 72.8214C83.1696 73.1607 83.1696 75.0268 82.3214 77.2321C81.4732 79.4375 77.7411 81.4732 76.0446 81.6429C72.9911 82.1518 70.6161 81.9821 64.6786 79.2679C56.3653 75.705 50.6501 67.985 49.011 65.771C48.777 65.4549 48.6261 65.2511 48.5625 65.1875C48.0536 64.5089 44.8304 60.0982 44.8304 55.3482C44.8304 51.2146 46.7647 49.0153 47.7655 47.8774C47.8736 47.7544 47.9709 47.6439 48.0536 47.5446C48.9018 46.5268 49.9196 46.3571 50.5982 46.3571H52.2946C52.3467 46.3571 52.3988 46.3561 52.451 46.3551C53.0784 46.3431 53.7169 46.3308 54.5 48.0536C54.9153 49.1956 55.839 51.3544 56.5321 52.9743C56.9714 54.0012 57.3181 54.8115 57.3839 55.0089C57.5536 55.5179 57.7232 56.0268 57.3839 56.7054C56.6195 58.3106 55.7863 59.1581 55.1945 59.7599C54.4729 60.4938 54.1104 60.8626 54.6696 61.7946C58.4018 68.0714 61.9643 70.2768 67.5625 72.9911C68.4107 73.5 68.9196 73.3304 69.5982 72.8214C69.7616 72.6036 70.0649 72.2283 70.4182 71.7912C71.1654 70.8667 72.1366 69.6652 72.4821 69.0893C73.1607 68.0714 73.8393 68.2411 74.6875 68.5804Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM63.8304 26C74.0089 26 83.5089 30.0714 90.4643 37.1964C97.5893 44.3214 102 53.6518 102 63.8304C102 84.5268 84.6964 101.491 63.8304 101.491C57.5536 101.491 51.4464 99.7946 45.8482 96.9107L26 102L31.2589 82.4911C28.0357 76.8929 26.1696 70.4464 26.1696 63.6607C26.1696 42.9643 43.1339 26 63.8304 26ZM47.8839 90.6339C52.8036 93.5179 58.2321 95.0446 63.8304 95.0446C81.1339 95.0446 95.5536 80.9643 95.5536 63.8304C95.5536 55.3482 91.9911 47.5446 86.0536 41.6071C80.1161 35.6696 72.3125 32.4464 64 32.4464C46.6964 32.4464 32.6161 46.5268 32.6161 63.6607C32.6161 69.5982 34.3125 75.3661 37.3661 80.4554L38.2143 81.6429L34.9911 93.1786L46.8661 89.9554L47.8839 90.6339ZM74.6875 68.5804C75.5357 68.9196 80.1161 71.125 81.1339 71.6339C81.3853 71.7847 81.6217 71.9058 81.8345 72.0147C82.3396 72.2732 82.711 72.4633 82.8304 72.8214C83.1696 73.1607 83.1696 75.0268 82.3214 77.2321C81.4732 79.4375 77.7411 81.4732 76.0446 81.6429C72.9911 82.1518 70.6161 81.9821 64.6786 79.2679C56.3653 75.705 50.6501 67.985 49.011 65.771C48.777 65.4549 48.6261 65.2511 48.5625 65.1875C48.0536 64.5089 44.8304 60.0982 44.8304 55.3482C44.8304 51.2146 46.7647 49.0153 47.7655 47.8774C47.8736 47.7544 47.9709 47.6439 48.0536 47.5446C48.9018 46.5268 49.9196 46.3571 50.5982 46.3571H52.2946C52.3467 46.3571 52.3988 46.3561 52.451 46.3551C53.0784 46.3431 53.7169 46.3308 54.5 48.0536C54.9153 49.1956 55.839 51.3544 56.5321 52.9743C56.9714 54.0012 57.3181 54.8115 57.3839 55.0089C57.5536 55.5179 57.7232 56.0268 57.3839 56.7054C56.6195 58.3106 55.7863 59.1581 55.1945 59.7599C54.4729 60.4938 54.1104 60.8626 54.6696 61.7946C58.4018 68.0714 61.9643 70.2768 67.5625 72.9911C68.4107 73.5 68.9196 73.3304 69.5982 72.8214C69.7616 72.6036 70.0649 72.2283 70.4182 71.7912C71.1654 70.8667 72.1366 69.6652 72.4821 69.0893C73.1607 68.0714 73.8393 68.2411 74.6875 68.5804Z" />\n                </svg>\n                '
                    }
                }
            },
            Youtube: {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#FF0000"/>\n            <path d="M106.069 42.849C105.104 38.974 102.048 35.9062 98.3474 34.9375C91.4296 33 64.0804 33 64.0804 33C64.0804 33 36.5704 33 29.6527 34.9375C25.9525 35.9062 22.8958 38.974 21.9305 42.849C20 49.6302 20 64.1615 20 64.1615C20 64.1615 20 78.5312 21.9305 85.474C22.8958 89.349 25.9525 92.2552 29.6527 93.224C36.5704 95 64.0804 95 64.0804 95C64.0804 95 91.4296 95 98.3474 93.224C102.048 92.2552 105.104 89.349 106.069 85.474C108 78.5312 108 64.1615 108 64.1615C108 64.1615 108 49.6302 106.069 42.849ZM55.0713 77.2396V51.0833L77.9159 64.1615L55.0713 77.2396Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#FF0000"/>\n            <path d="M106.069 42.849C105.104 38.974 102.048 35.9062 98.3474 34.9375C91.4296 33 64.0804 33 64.0804 33C64.0804 33 36.5704 33 29.6527 34.9375C25.9525 35.9062 22.8958 38.974 21.9305 42.849C20 49.6302 20 64.1615 20 64.1615C20 64.1615 20 78.5312 21.9305 85.474C22.8958 89.349 25.9525 92.2552 29.6527 93.224C36.5704 95 64.0804 95 64.0804 95C64.0804 95 91.4296 95 98.3474 93.224C102.048 92.2552 105.104 89.349 106.069 85.474C108 78.5312 108 64.1615 108 64.1615C108 64.1615 108 49.6302 106.069 42.849ZM55.0713 77.2396V51.0833L77.9159 64.1615L55.0713 77.2396Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM98.3474 34.9375C102.048 35.9062 105.104 38.974 106.069 42.849C108 49.6302 108 64.1615 108 64.1615C108 64.1615 108 78.5312 106.069 85.474C105.104 89.349 102.048 92.2552 98.3474 93.224C91.4296 95 64.0804 95 64.0804 95C64.0804 95 36.5704 95 29.6527 93.224C25.9525 92.2552 22.8958 89.349 21.9305 85.474C20 78.5312 20 64.1615 20 64.1615C20 64.1615 20 49.6302 21.9305 42.849C22.8958 38.974 25.9525 35.9062 29.6527 34.9375C36.5704 33 64.0804 33 64.0804 33C64.0804 33 91.4296 33 98.3474 34.9375ZM55.0713 51.0833V77.2396L77.9159 64.1615L55.0713 51.0833Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM98.3474 34.9375C102.048 35.9062 105.104 38.974 106.069 42.849C108 49.6302 108 64.1615 108 64.1615C108 64.1615 108 78.5312 106.069 85.474C105.104 89.349 102.048 92.2552 98.3474 93.224C91.4296 95 64.0804 95 64.0804 95C64.0804 95 36.5704 95 29.6527 93.224C25.9525 92.2552 22.8958 89.349 21.9305 85.474C20 78.5312 20 64.1615 20 64.1615C20 64.1615 20 49.6302 21.9305 42.849C22.8958 38.974 25.9525 35.9062 29.6527 34.9375C36.5704 33 64.0804 33 64.0804 33C64.0804 33 91.4296 33 98.3474 34.9375ZM55.0713 51.0833V77.2396L77.9159 64.1615L55.0713 51.0833Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM98.3474 34.9375C102.048 35.9062 105.104 38.974 106.069 42.849C108 49.6302 108 64.1615 108 64.1615C108 64.1615 108 78.5312 106.069 85.474C105.104 89.349 102.048 92.2552 98.3474 93.224C91.4296 95 64.0804 95 64.0804 95C64.0804 95 36.5704 95 29.6527 93.224C25.9525 92.2552 22.8958 89.349 21.9305 85.474C20 78.5312 20 64.1615 20 64.1615C20 64.1615 20 49.6302 21.9305 42.849C22.8958 38.974 25.9525 35.9062 29.6527 34.9375C36.5704 33 64.0804 33 64.0804 33C64.0804 33 91.4296 33 98.3474 34.9375ZM55.0713 51.0833V77.2396L77.9159 64.1615L55.0713 51.0833Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM98.3474 34.9375C102.048 35.9062 105.104 38.974 106.069 42.849C108 49.6302 108 64.1615 108 64.1615C108 64.1615 108 78.5312 106.069 85.474C105.104 89.349 102.048 92.2552 98.3474 93.224C91.4296 95 64.0804 95 64.0804 95C64.0804 95 36.5704 95 29.6527 93.224C25.9525 92.2552 22.8958 89.349 21.9305 85.474C20 78.5312 20 64.1615 20 64.1615C20 64.1615 20 49.6302 21.9305 42.849C22.8958 38.974 25.9525 35.9062 29.6527 34.9375C36.5704 33 64.0804 33 64.0804 33C64.0804 33 91.4296 33 98.3474 34.9375ZM55.0713 51.0833V77.2396L77.9159 64.1615L55.0713 51.0833Z" />\n                </svg>\n                '
                    }
                }
            },
            LinkedIn: {
                brand: {
                    circle: '\n        <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#1B66C2"/>\n        <path d="M42.9643 102V51.1633H27.1875V102H42.9643ZM34.9911 44.3624C40.0804 44.3624 44.1518 40.1119 44.1518 35.0112C44.1518 30.0805 40.0804 26 34.9911 26C30.0714 26 26 30.0805 26 35.0112C26 40.1119 30.0714 44.3624 34.9911 44.3624ZM101.83 102H102V74.1163C102 60.5145 98.9464 49.9732 83 49.9732C75.3661 49.9732 70.2768 54.2237 68.0714 58.1342H67.9018V51.1633H52.8036V102H68.5804V76.8367C68.5804 70.2058 69.7679 63.915 77.9107 63.915C86.0536 63.915 86.2232 71.396 86.2232 77.3468V102H101.83Z" fill="white"/>\n        </svg>\n        ',
                    square: '\n        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect width="128" height="128" rx="10" fill="#1B66C2"/>\n        <path d="M42.9643 102V51.1633H27.1875V102H42.9643ZM34.9911 44.3624C40.0804 44.3624 44.1518 40.1119 44.1518 35.0112C44.1518 30.0805 40.0804 26 34.9911 26C30.0714 26 26 30.0805 26 35.0112C26 40.1119 30.0714 44.3624 34.9911 44.3624ZM101.83 102H102V74.1163C102 60.5145 98.9464 49.9732 83 49.9732C75.3661 49.9732 70.2768 54.2237 68.0714 58.1342H67.9018V51.1633H52.8036V102H68.5804V76.8367C68.5804 70.2058 69.7679 63.915 77.9107 63.915C86.0536 63.915 86.2232 71.396 86.2232 77.3468V102H101.83Z" fill="white"/>\n        </svg>\n        '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z" />\n                </svg>\n                '
                    }
                }
            },
            "Apple Podcast": {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="url(#paint0_linear)"/>\n            <path d="M61.5822 101.194C58.6877 100.151 58.0668 98.7318 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C67.9565 68.9071 70.8607 70.3455 71.9279 72.8766C72.7299 74.7683 72.4292 80.7535 71.0482 90.4178C70.1104 97.1694 69.5929 98.8753 68.2993 100.023C66.5206 101.612 63.998 102.052 61.6048 101.198L61.5822 101.194ZM49.2185 91.2789C39.2253 86.3212 32.8219 77.9322 30.4934 66.7708C29.9112 63.8907 29.8142 57.0184 30.364 54.3764C31.8193 47.2823 34.6006 41.7343 39.2253 36.8287C45.8874 29.7444 54.4576 26 63.998 26C73.4414 26 81.9793 29.6759 88.4797 36.5482C93.4278 41.7343 96.2091 47.2236 97.632 54.4547C98.1171 56.8618 98.1171 63.4243 97.6644 66.1315C96.1767 74.6901 91.455 82.4854 84.5665 87.7237C82.1086 89.5959 76.0933 92.864 75.1231 92.864C74.7674 92.864 74.735 92.4922 74.8967 90.9886C75.1878 88.575 75.4789 88.0727 76.8372 87.4986C79.004 86.5853 82.6908 83.9369 84.9546 81.6472C88.8678 77.7332 91.7461 72.6124 93.072 67.2307C93.9129 63.8711 93.8159 56.4019 92.878 52.9446C89.935 41.9528 81.0414 33.4072 70.1427 31.1241C66.9733 30.4717 61.2167 30.4717 58.015 31.1241C46.987 33.4072 37.867 42.3768 35.0857 53.6621C34.3419 56.7281 34.3419 64.1973 35.0857 67.2633C36.9291 74.7325 41.7155 81.582 47.9895 85.659C49.2185 86.4744 50.7061 87.3225 51.3206 87.5834C52.6789 88.1705 52.9699 88.6598 53.2287 91.0734C53.3904 92.5411 53.358 92.9652 53.0023 92.9652C52.7759 92.9652 51.1265 92.2476 49.3802 91.3996L49.2185 91.2789ZM49.3478 78.0104C45.9844 75.3033 43.0091 70.5021 41.7802 65.7923C41.0363 62.9481 41.0363 57.5403 41.8125 54.7026C43.85 47.0442 49.4448 41.108 57.2065 38.3193C59.8584 37.3734 65.7444 37.1614 69.0108 37.8888C80.2652 40.4165 88.2533 51.7834 86.701 63.059C86.0865 67.6025 84.5342 71.3338 81.7852 74.801C80.4269 76.5525 77.1282 79.4912 76.5461 79.4912C76.4491 79.4912 76.3521 78.3823 76.3521 77.0319V74.5661L78.0338 72.5439C84.3725 64.8855 83.9197 54.1873 76.9989 47.1682C74.3146 44.4349 71.2099 42.8302 67.1997 42.0898C64.6125 41.607 64.0627 41.607 61.3461 42.0572C57.2227 42.7356 54.0275 44.3468 51.1912 47.178C44.238 54.1253 43.7853 64.879 50.124 72.5439L51.7928 74.5661V77.045C51.7928 78.4149 51.686 79.5239 51.5534 79.5239C51.4241 79.5239 50.4862 78.8715 49.4837 78.0561L49.3478 78.0104ZM60.5699 64.6931C57.6916 63.3428 56.1393 60.7954 56.107 57.475C56.107 54.4906 57.7563 51.8878 60.6023 50.3646C62.4133 49.4057 65.615 49.4057 67.4261 50.3711C69.3989 51.4051 71.0159 53.411 71.6304 55.505C73.5061 61.937 66.747 67.5731 60.6346 64.6931H60.5699Z" fill="white"/>\n            <path d="M64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.3314 68.9636 49.6895 64.5091 49.6895C60.0545 49.6895 56.4434 53.3314 56.4434 57.824C56.4434 62.3166 60.0545 65.9586 64.5091 65.9586Z" fill="white"/>\n            <path d="M65.2821 69.1094C65.8416 69.1844 66.9541 69.3312 67.9826 69.6639C69.0174 69.99 69.9553 70.5021 70.6862 71.0272C71.3977 71.5491 71.9151 72.0905 72.2385 72.7494C72.5619 73.4082 72.7236 74.191 72.8207 75.4729C72.8854 76.758 72.8854 78.5388 72.5943 81.8657C72.3032 85.1828 71.7211 90.046 71.2683 93.1609C70.8156 96.2921 70.4922 97.662 70.0717 98.6731C69.6513 99.7168 69.1015 100.402 68.4871 100.891C67.8726 101.38 67.1611 101.674 66.482 101.837C65.8028 102 65.1883 102 64.6062 102C64.0241 102 63.4743 102 62.7305 101.837C61.9866 101.674 61.0164 101.38 60.3049 100.793C59.5611 100.206 59.076 99.358 58.6879 98.2491C58.2998 97.1401 58.0088 95.8028 57.6207 93.1282C57.2326 90.4537 56.7152 86.4745 56.3918 83.4411C56.0683 80.4078 55.939 78.3203 55.9131 76.9178C55.8808 75.5153 55.9455 74.8205 56.1072 74.1454C56.2689 73.493 56.5276 72.8733 56.8833 72.3515C57.2391 71.8296 57.7048 71.373 58.1769 71.0142C58.6394 70.6554 59.1148 70.3945 59.684 70.1922C60.2467 69.9639 60.9226 69.7682 61.7538 69.6051C62.5946 69.4421 63.5649 69.279 64.0629 69.2137C64.5609 69.1387 64.5609 69.1387 65.1172 69.2137L65.2821 69.1094Z" fill="white"/>\n            <defs>\n            <linearGradient id="paint0_linear" x1="64" y1="0" x2="64" y2="128.502" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#D56DFB"/>\n            <stop offset="0.5" stop-color="#B150E2"/>\n            <stop offset="1" stop-color="#872EC4"/>\n            </linearGradient>\n            </defs>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="url(#paint0_linear)"/>\n            <path d="M61.5822 101.194C58.6877 100.151 58.0668 98.7318 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C67.9565 68.9071 70.8607 70.3455 71.9279 72.8766C72.7299 74.7683 72.4292 80.7535 71.0482 90.4178C70.1104 97.1694 69.5929 98.8753 68.2993 100.023C66.5206 101.612 63.998 102.052 61.6048 101.198L61.5822 101.194ZM49.2185 91.2789C39.2253 86.3212 32.8219 77.9322 30.4934 66.7708C29.9112 63.8907 29.8142 57.0184 30.364 54.3764C31.8193 47.2823 34.6006 41.7343 39.2253 36.8287C45.8874 29.7444 54.4576 26 63.998 26C73.4414 26 81.9793 29.6759 88.4797 36.5482C93.4278 41.7343 96.2091 47.2236 97.632 54.4547C98.1171 56.8618 98.1171 63.4243 97.6644 66.1315C96.1767 74.6901 91.455 82.4854 84.5665 87.7237C82.1086 89.5959 76.0933 92.864 75.1231 92.864C74.7674 92.864 74.735 92.4922 74.8967 90.9886C75.1878 88.575 75.4789 88.0727 76.8372 87.4986C79.004 86.5853 82.6908 83.9369 84.9546 81.6472C88.8678 77.7332 91.7461 72.6124 93.072 67.2307C93.9129 63.8711 93.8159 56.4019 92.878 52.9446C89.935 41.9528 81.0414 33.4072 70.1427 31.1241C66.9733 30.4717 61.2167 30.4717 58.015 31.1241C46.987 33.4072 37.867 42.3768 35.0857 53.6621C34.3419 56.7281 34.3419 64.1973 35.0857 67.2633C36.9291 74.7325 41.7155 81.582 47.9895 85.659C49.2185 86.4744 50.7061 87.3225 51.3206 87.5834C52.6789 88.1705 52.9699 88.6598 53.2287 91.0734C53.3904 92.5411 53.358 92.9652 53.0023 92.9652C52.7759 92.9652 51.1265 92.2476 49.3802 91.3996L49.2185 91.2789ZM49.3478 78.0104C45.9844 75.3033 43.0091 70.5021 41.7802 65.7923C41.0363 62.9481 41.0363 57.5403 41.8125 54.7026C43.85 47.0442 49.4448 41.108 57.2065 38.3193C59.8584 37.3734 65.7444 37.1614 69.0108 37.8888C80.2652 40.4165 88.2533 51.7834 86.701 63.059C86.0865 67.6025 84.5342 71.3338 81.7852 74.801C80.4269 76.5525 77.1282 79.4912 76.5461 79.4912C76.4491 79.4912 76.3521 78.3823 76.3521 77.0319V74.5661L78.0338 72.5439C84.3725 64.8855 83.9197 54.1873 76.9989 47.1682C74.3146 44.4349 71.2099 42.8302 67.1997 42.0898C64.6125 41.607 64.0627 41.607 61.3461 42.0572C57.2227 42.7356 54.0275 44.3468 51.1912 47.178C44.238 54.1253 43.7853 64.879 50.124 72.5439L51.7928 74.5661V77.045C51.7928 78.4149 51.686 79.5239 51.5534 79.5239C51.4241 79.5239 50.4862 78.8715 49.4837 78.0561L49.3478 78.0104ZM60.5699 64.6931C57.6916 63.3428 56.1393 60.7954 56.107 57.475C56.107 54.4906 57.7563 51.8878 60.6023 50.3646C62.4133 49.4057 65.615 49.4057 67.4261 50.3711C69.3989 51.4051 71.0159 53.411 71.6304 55.505C73.5061 61.937 66.747 67.5731 60.6346 64.6931H60.5699Z" fill="white"/>\n            <path d="M64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.3314 68.9636 49.6895 64.5091 49.6895C60.0545 49.6895 56.4434 53.3314 56.4434 57.824C56.4434 62.3166 60.0545 65.9586 64.5091 65.9586Z" fill="white"/>\n            <path d="M65.2821 69.1094C65.8416 69.1844 66.9541 69.3312 67.9826 69.6639C69.0174 69.99 69.9553 70.5021 70.6862 71.0272C71.3977 71.5491 71.9151 72.0905 72.2385 72.7494C72.5619 73.4082 72.7236 74.191 72.8207 75.4729C72.8854 76.758 72.8854 78.5388 72.5943 81.8657C72.3032 85.1828 71.7211 90.046 71.2683 93.1609C70.8156 96.2921 70.4922 97.662 70.0717 98.6731C69.6513 99.7168 69.1015 100.402 68.4871 100.891C67.8726 101.38 67.1611 101.674 66.482 101.837C65.8028 102 65.1883 102 64.6062 102C64.0241 102 63.4743 102 62.7305 101.837C61.9866 101.674 61.0164 101.38 60.3049 100.793C59.5611 100.206 59.076 99.358 58.6879 98.2491C58.2998 97.1401 58.0088 95.8028 57.6207 93.1282C57.2326 90.4537 56.7152 86.4745 56.3918 83.4411C56.0683 80.4078 55.939 78.3203 55.9131 76.9178C55.8808 75.5153 55.9455 74.8205 56.1072 74.1454C56.2689 73.493 56.5276 72.8733 56.8833 72.3515C57.2391 71.8296 57.7048 71.373 58.1769 71.0142C58.6394 70.6554 59.1148 70.3945 59.684 70.1922C60.2467 69.9639 60.9226 69.7682 61.7538 69.6051C62.5946 69.4421 63.5649 69.279 64.0629 69.2137C64.5609 69.1387 64.5609 69.1387 65.1172 69.2137L65.2821 69.1094Z" fill="white"/>\n            <defs>\n            <linearGradient id="paint0_linear" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#D56DFB"/>\n            <stop offset="0.5" stop-color="#B150E2"/>\n            <stop offset="1" stop-color="#872EC4"/>\n            </linearGradient>\n            </defs>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM59.5984 100.062C58.2886 98.7854 57.7291 96.3664 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C66.7169 68.9122 68.9529 69.5928 70.4257 70.8464C70.5152 70.9063 70.6022 70.9667 70.6864 71.0272C71.3979 71.5491 71.9153 72.0905 72.2387 72.7494C72.5621 73.4082 72.7238 74.191 72.8209 75.4729C72.8856 76.758 72.8856 78.5388 72.5945 81.8657C72.3034 85.1828 71.7213 90.046 71.2685 93.1609C70.8158 96.2921 70.4924 97.662 70.0719 98.6731C69.6515 99.7168 69.1017 100.402 68.4873 100.891C67.8728 101.38 67.1613 101.674 66.4822 101.837C65.803 102 65.1885 102 64.6064 102C64.0243 102 63.4745 102 62.7307 101.837C61.9868 101.674 61.0166 101.38 60.3051 100.793C60.0389 100.583 59.8058 100.339 59.5984 100.062ZM30.4934 66.7708C32.8219 77.9322 39.2253 86.3212 49.2185 91.2789L49.3802 91.3996C51.1265 92.2476 52.7759 92.9652 53.0023 92.9652C53.358 92.9652 53.3904 92.5411 53.2287 91.0734C52.9699 88.6598 52.6789 88.1705 51.3206 87.5834C50.7061 87.3225 49.2185 86.4744 47.9895 85.659C41.7155 81.582 36.9291 74.7325 35.0857 67.2633C34.3419 64.1973 34.3419 56.7281 35.0857 53.6621C37.867 42.3768 46.987 33.4072 58.015 31.1241C61.2167 30.4717 66.9733 30.4717 70.1427 31.1241C81.0414 33.4072 89.935 41.9528 92.878 52.9446C93.8159 56.4019 93.9129 63.8711 93.072 67.2307C91.7461 72.6124 88.8678 77.7332 84.9546 81.6472C82.6908 83.9369 79.004 86.5853 76.8372 87.4986C75.4789 88.0727 75.1878 88.575 74.8967 90.9886C74.735 92.4922 74.7674 92.864 75.1231 92.864C76.0933 92.864 82.1086 89.5959 84.5665 87.7237C91.455 82.4854 96.1767 74.6901 97.6644 66.1315C98.1171 63.4243 98.1171 56.8618 97.632 54.4547C96.2091 47.2236 93.4278 41.7343 88.4797 36.5482C81.9793 29.6759 73.4414 26 63.998 26C54.4576 26 45.8874 29.7444 39.2253 36.8287C34.6006 41.7343 31.8193 47.2823 30.364 54.3764C29.8142 57.0184 29.9112 63.8907 30.4934 66.7708ZM41.7802 65.7923C43.0091 70.5021 45.9844 75.3033 49.3478 78.0104L49.4837 78.0561C50.4862 78.8715 51.4241 79.5239 51.5534 79.5239C51.686 79.5239 51.7928 78.4149 51.7928 77.045V74.5661L50.124 72.5439C43.7853 64.879 44.238 54.1253 51.1912 47.178C54.0275 44.3468 57.2227 42.7356 61.3461 42.0572C64.0627 41.607 64.6125 41.607 67.1997 42.0898C71.2099 42.8302 74.3146 44.4349 76.9989 47.1682C83.9197 54.1873 84.3725 64.8855 78.0338 72.5439L76.3521 74.5661V77.0319C76.3521 78.3823 76.4491 79.4912 76.5461 79.4912C77.1282 79.4912 80.4269 76.5525 81.7852 74.801C84.5342 71.3338 86.0865 67.6025 86.701 63.059C88.2533 51.7834 80.2652 40.4165 69.0108 37.8888C65.7444 37.1614 59.8584 37.3734 57.2065 38.3193C49.4448 41.108 43.85 47.0442 41.8125 54.7026C41.0363 57.5403 41.0363 62.9481 41.7802 65.7923ZM56.107 57.475C56.1322 60.0582 57.0773 62.1735 58.851 63.6213C60.3069 65.0668 62.3047 65.9586 64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.5556 69.3149 50.055 65.1692 49.7164C63.5713 49.5198 61.7885 49.7365 60.6023 50.3646C57.7563 51.8878 56.107 54.4906 56.107 57.475Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM59.5984 100.062C58.2886 98.7853 57.7291 96.3664 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C66.7169 68.9122 68.953 69.5928 70.4257 70.8465C70.5153 70.9064 70.6022 70.9667 70.6864 71.0272C71.3979 71.5491 71.9153 72.0905 72.2387 72.7494C72.5621 73.4082 72.7238 74.191 72.8209 75.4729C72.8856 76.758 72.8856 78.5388 72.5945 81.8657C72.3034 85.1828 71.7213 90.046 71.2685 93.1609C70.8158 96.2921 70.4924 97.662 70.0719 98.6731C69.6515 99.7168 69.1017 100.402 68.4873 100.891C67.8728 101.38 67.1613 101.674 66.4822 101.837C65.803 102 65.1885 102 64.6064 102C64.0243 102 63.4745 102 62.7307 101.837C61.9868 101.674 61.0166 101.38 60.3051 100.793C60.0389 100.583 59.8058 100.339 59.5984 100.062ZM30.4934 66.7708C32.8219 77.9322 39.2253 86.3212 49.2185 91.2789L49.3802 91.3996C51.1265 92.2476 52.7759 92.9652 53.0023 92.9652C53.358 92.9652 53.3904 92.5411 53.2287 91.0734C52.9699 88.6598 52.6789 88.1705 51.3206 87.5834C50.7061 87.3225 49.2185 86.4744 47.9895 85.659C41.7155 81.582 36.9291 74.7325 35.0857 67.2633C34.3419 64.1973 34.3419 56.7281 35.0857 53.6621C37.867 42.3768 46.987 33.4072 58.015 31.1241C61.2167 30.4717 66.9733 30.4717 70.1427 31.1241C81.0414 33.4072 89.935 41.9528 92.878 52.9446C93.8159 56.4019 93.9129 63.8711 93.072 67.2307C91.7461 72.6124 88.8678 77.7332 84.9546 81.6472C82.6908 83.9369 79.004 86.5853 76.8372 87.4986C75.4789 88.0727 75.1878 88.575 74.8967 90.9886C74.735 92.4922 74.7674 92.864 75.1231 92.864C76.0933 92.864 82.1086 89.5959 84.5665 87.7237C91.455 82.4854 96.1767 74.6901 97.6644 66.1315C98.1171 63.4243 98.1171 56.8618 97.632 54.4547C96.2091 47.2236 93.4278 41.7343 88.4797 36.5482C81.9793 29.6759 73.4414 26 63.998 26C54.4576 26 45.8874 29.7444 39.2253 36.8287C34.6006 41.7343 31.8193 47.2823 30.364 54.3764C29.8142 57.0184 29.9112 63.8907 30.4934 66.7708ZM41.7802 65.7923C43.0091 70.5021 45.9844 75.3033 49.3478 78.0104L49.4837 78.0561C50.4862 78.8715 51.4241 79.5239 51.5534 79.5239C51.686 79.5239 51.7928 78.4149 51.7928 77.045V74.5661L50.124 72.5439C43.7853 64.879 44.238 54.1253 51.1912 47.178C54.0275 44.3468 57.2227 42.7356 61.3461 42.0572C64.0627 41.607 64.6125 41.607 67.1997 42.0898C71.2099 42.8302 74.3146 44.4349 76.9989 47.1682C83.9197 54.1873 84.3725 64.8855 78.0338 72.5439L76.3521 74.5661V77.0319C76.3521 78.3823 76.4491 79.4912 76.5461 79.4912C77.1282 79.4912 80.4269 76.5525 81.7852 74.801C84.5342 71.3338 86.0865 67.6025 86.701 63.059C88.2533 51.7834 80.2652 40.4165 69.0108 37.8888C65.7444 37.1614 59.8584 37.3734 57.2065 38.3193C49.4448 41.108 43.85 47.0442 41.8125 54.7026C41.0363 57.5403 41.0363 62.9481 41.7802 65.7923ZM56.107 57.475C56.1322 60.0582 57.0772 62.1735 58.8509 63.6213C60.3068 65.0667 62.3047 65.9586 64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.5557 69.3151 50.0553 65.1695 49.7164C63.5716 49.5198 61.7886 49.7365 60.6023 50.3646C57.7563 51.8878 56.107 54.4906 56.107 57.475Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM59.5985 100.062C58.2886 98.7855 57.7292 96.3665 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C66.7168 68.9122 68.9528 69.5927 70.4256 70.8463C70.5152 70.9063 70.6022 70.9666 70.6864 71.0272C71.3979 71.5491 71.9153 72.0905 72.2387 72.7494C72.5621 73.4082 72.7238 74.191 72.8209 75.4729C72.8856 76.758 72.8856 78.5388 72.5945 81.8657C72.3034 85.1828 71.7213 90.046 71.2685 93.1609C70.8158 96.2921 70.4924 97.662 70.0719 98.6731C69.6515 99.7168 69.1017 100.402 68.4873 100.891C67.8728 101.38 67.1613 101.674 66.4822 101.837C65.803 102 65.1885 102 64.6064 102C64.0243 102 63.4745 102 62.7307 101.837C61.9868 101.674 61.0166 101.38 60.3051 100.793C60.0389 100.583 59.8058 100.339 59.5985 100.062ZM30.4934 66.7708C32.8219 77.9322 39.2253 86.3212 49.2185 91.2789L49.3802 91.3996C51.1265 92.2476 52.7759 92.9652 53.0023 92.9652C53.358 92.9652 53.3904 92.5411 53.2287 91.0734C52.9699 88.6598 52.6789 88.1705 51.3206 87.5834C50.7061 87.3225 49.2185 86.4744 47.9895 85.659C41.7155 81.582 36.9291 74.7325 35.0857 67.2633C34.3419 64.1973 34.3419 56.7281 35.0857 53.6621C37.867 42.3768 46.987 33.4072 58.015 31.1241C61.2167 30.4717 66.9733 30.4717 70.1427 31.1241C81.0414 33.4072 89.935 41.9528 92.878 52.9446C93.8159 56.4019 93.9129 63.8711 93.072 67.2307C91.7461 72.6124 88.8678 77.7332 84.9546 81.6472C82.6908 83.9369 79.004 86.5853 76.8372 87.4986C75.4789 88.0727 75.1878 88.575 74.8967 90.9886C74.735 92.4922 74.7674 92.864 75.1231 92.864C76.0933 92.864 82.1086 89.5959 84.5665 87.7237C91.455 82.4854 96.1767 74.6901 97.6644 66.1315C98.1171 63.4243 98.1171 56.8618 97.632 54.4547C96.2091 47.2236 93.4278 41.7343 88.4797 36.5482C81.9793 29.6759 73.4414 26 63.998 26C54.4576 26 45.8874 29.7444 39.2253 36.8287C34.6006 41.7343 31.8193 47.2823 30.364 54.3764C29.8142 57.0184 29.9112 63.8907 30.4934 66.7708ZM41.7802 65.7923C43.0091 70.5021 45.9844 75.3033 49.3478 78.0104L49.4837 78.0561C50.4862 78.8715 51.4241 79.5239 51.5534 79.5239C51.686 79.5239 51.7928 78.4149 51.7928 77.045V74.5661L50.124 72.5439C43.7853 64.879 44.238 54.1253 51.1912 47.178C54.0275 44.3468 57.2227 42.7356 61.3461 42.0572C64.0627 41.607 64.6125 41.607 67.1997 42.0898C71.2099 42.8302 74.3146 44.4349 76.9989 47.1682C83.9197 54.1873 84.3725 64.8855 78.0338 72.5439L76.3521 74.5661V77.0319C76.3521 78.3823 76.4491 79.4912 76.5461 79.4912C77.1282 79.4912 80.4269 76.5525 81.7852 74.801C84.5342 71.3338 86.0865 67.6025 86.701 63.059C88.2533 51.7834 80.2652 40.4165 69.0108 37.8888C65.7444 37.1614 59.8584 37.3734 57.2065 38.3193C49.4448 41.108 43.85 47.0442 41.8125 54.7026C41.0363 57.5403 41.0363 62.9481 41.7802 65.7923ZM56.107 57.475C56.1322 60.0583 57.0774 62.1738 58.8513 63.6215C60.3071 65.0668 62.3048 65.9586 64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.5551 69.3143 50.0544 65.1681 49.7162C63.5705 49.5199 61.7882 49.7367 60.6023 50.3646C57.7563 51.8878 56.107 54.4906 56.107 57.475Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM59.5985 100.062C58.2886 98.7855 57.7292 96.3665 56.8799 90.4178C55.499 80.7535 55.1982 74.7716 55.997 72.8766C57.0578 70.3651 59.9361 68.9398 63.9624 68.9235C66.7168 68.9122 68.9528 69.5927 70.4256 70.8463C70.5152 70.9063 70.6022 70.9666 70.6864 71.0272C71.3979 71.5491 71.9153 72.0905 72.2387 72.7494C72.5621 73.4082 72.7238 74.191 72.8209 75.4729C72.8856 76.758 72.8856 78.5388 72.5945 81.8657C72.3034 85.1828 71.7213 90.046 71.2685 93.1609C70.8158 96.2921 70.4924 97.662 70.0719 98.6731C69.6515 99.7168 69.1017 100.402 68.4873 100.891C67.8728 101.38 67.1613 101.674 66.4822 101.837C65.803 102 65.1885 102 64.6064 102C64.0243 102 63.4745 102 62.7307 101.837C61.9868 101.674 61.0166 101.38 60.3051 100.793C60.0389 100.583 59.8058 100.339 59.5985 100.062ZM30.4934 66.7708C32.8219 77.9322 39.2253 86.3212 49.2185 91.2789L49.3802 91.3996C51.1265 92.2476 52.7759 92.9652 53.0023 92.9652C53.358 92.9652 53.3904 92.5411 53.2287 91.0734C52.9699 88.6598 52.6789 88.1705 51.3206 87.5834C50.7061 87.3225 49.2185 86.4744 47.9895 85.659C41.7155 81.582 36.9291 74.7325 35.0857 67.2633C34.3419 64.1973 34.3419 56.7281 35.0857 53.6621C37.867 42.3768 46.987 33.4072 58.015 31.1241C61.2167 30.4717 66.9733 30.4717 70.1427 31.1241C81.0414 33.4072 89.935 41.9528 92.878 52.9446C93.8159 56.4019 93.9129 63.8711 93.072 67.2307C91.7461 72.6124 88.8678 77.7332 84.9546 81.6472C82.6908 83.9369 79.004 86.5853 76.8372 87.4986C75.4789 88.0727 75.1878 88.575 74.8967 90.9886C74.735 92.4922 74.7674 92.864 75.1231 92.864C76.0933 92.864 82.1086 89.5959 84.5665 87.7237C91.455 82.4854 96.1767 74.6901 97.6644 66.1315C98.1171 63.4243 98.1171 56.8618 97.632 54.4547C96.2091 47.2236 93.4278 41.7343 88.4797 36.5482C81.9793 29.6759 73.4414 26 63.998 26C54.4576 26 45.8874 29.7444 39.2253 36.8287C34.6006 41.7343 31.8193 47.2823 30.364 54.3764C29.8142 57.0184 29.9112 63.8907 30.4934 66.7708ZM41.7802 65.7923C43.0091 70.5021 45.9844 75.3033 49.3478 78.0104L49.4837 78.0561C50.4862 78.8715 51.4241 79.5239 51.5534 79.5239C51.686 79.5239 51.7928 78.4149 51.7928 77.045V74.5661L50.124 72.5439C43.7853 64.879 44.238 54.1253 51.1912 47.178C54.0275 44.3468 57.2227 42.7356 61.3461 42.0572C64.0627 41.607 64.6125 41.607 67.1997 42.0898C71.2099 42.8302 74.3146 44.4349 76.9989 47.1682C83.9197 54.1873 84.3725 64.8855 78.0338 72.5439L76.3521 74.5661V77.0319C76.3521 78.3823 76.4491 79.4912 76.5461 79.4912C77.1282 79.4912 80.4269 76.5525 81.7852 74.801C84.5342 71.3338 86.0865 67.6025 86.701 63.059C88.2533 51.7834 80.2652 40.4165 69.0108 37.8888C65.7444 37.1614 59.8584 37.3734 57.2065 38.3193C49.4448 41.108 43.85 47.0442 41.8125 54.7026C41.0363 57.5403 41.0363 62.9481 41.7802 65.7923ZM56.107 57.475C56.1322 60.0583 57.0774 62.1738 58.8513 63.6215C60.3071 65.0668 62.3048 65.9586 64.5091 65.9586C68.9636 65.9586 72.5747 62.3166 72.5747 57.824C72.5747 53.5551 69.3143 50.0544 65.1681 49.7162C63.5705 49.5199 61.7882 49.7367 60.6023 50.3646C57.7563 51.8878 56.107 54.4906 56.107 57.475Z" />\n                </svg>\n                '
                    }
                }
            },
            "Google Podcast": {
                brand: {
                    circle: '\n            <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#4285F4"/>\n            <path d="M36.001 57.808C33.7871 57.808 32 59.5947 32 61.808V66.1547C32 66.6799 32.1035 67.2001 32.3046 67.6854C32.5056 68.1707 32.8003 68.6116 33.1719 68.9831C33.5434 69.3545 33.9845 69.6492 34.4699 69.8502C34.9553 70.0512 35.4756 70.1547 36.001 70.1547C36.5264 70.1547 37.0467 70.0512 37.5321 69.8502C38.0175 69.6492 38.4586 69.3545 38.8301 68.9831C39.2017 68.6116 39.4964 68.1707 39.6974 67.6854C39.8985 67.2001 40.002 66.6799 40.002 66.1547V61.808C40.002 59.5947 38.2149 57.808 36.001 57.808ZM91.999 57.808C89.7851 57.808 87.998 59.5947 87.998 61.808V66.1547C87.998 67.2155 88.4195 68.2329 89.1699 68.9831C89.9202 69.7332 90.9379 70.1547 91.999 70.1547C93.0601 70.1547 94.0778 69.7332 94.8281 68.9831C95.5785 68.2329 96 67.2155 96 66.1547V61.808C96 59.5947 94.2129 57.808 91.999 57.808ZM49.8098 70.8987C47.5959 70.8987 45.8088 72.6853 45.8088 74.8987V79.2453C45.8088 80.3062 46.2303 81.3236 46.9807 82.0737C47.731 82.8239 48.7487 83.2453 49.8098 83.2453C50.8709 83.2453 51.8886 82.8239 52.6389 82.0737C53.3893 81.3236 53.8108 80.3062 53.8108 79.2453V74.9253C53.8108 72.712 52.0237 70.9253 49.8098 70.9253V70.8987ZM49.8098 44.72C47.5959 44.72 45.8088 46.5067 45.8088 48.72V63.0053C45.8088 64.0662 46.2303 65.0836 46.9807 65.8337C47.731 66.5839 48.7487 67.0053 49.8098 67.0053C50.8709 67.0053 51.8886 66.5839 52.6389 65.8337C53.3893 65.0836 53.8108 64.0662 53.8108 63.0053V48.688C53.8108 46.4747 52.0237 44.688 49.8098 44.688V44.72ZM78.1849 44.72C75.971 44.72 74.1839 46.5067 74.1839 48.72V53.0933C74.1839 54.1542 74.6054 55.1716 75.3557 55.9218C76.1061 56.6719 77.1238 57.0933 78.1849 57.0933C79.246 57.0933 80.2637 56.6719 81.014 55.9218C81.7643 55.1716 82.1859 54.1542 82.1859 53.0933V48.72C82.1859 46.5067 80.3988 44.72 78.1849 44.72ZM64 32C61.7861 32 59.999 33.7867 59.999 36V40.3467C59.999 41.4075 60.4205 42.4249 61.1709 43.1751C61.9212 43.9252 62.9389 44.3467 64 44.3467C65.0611 44.3467 66.0788 43.9252 66.8291 43.1751C67.5795 42.4249 68.001 41.4075 68.001 40.3467V36C68.001 33.7867 66.2139 32.0027 64 32.0027V32ZM64 83.6133C61.7861 83.6133 59.999 85.4 59.999 87.6133V91.9866C59.9972 92.5119 60.099 93.0324 60.2985 93.5184C60.4979 94.0044 60.7911 94.4463 61.1614 94.819C61.5317 95.1917 61.9718 95.4878 62.4566 95.6904C62.9413 95.893 63.4612 95.9982 63.9867 96C64.5121 96.0017 65.0327 95.9 65.5188 95.7006C66.0049 95.5012 66.4469 95.208 66.8197 94.8378C67.1925 94.4676 67.4887 94.0277 67.6913 93.543C67.894 93.0584 67.9992 92.5386 68.001 92.0133V87.64C68.001 85.4533 66.2139 83.64 64 83.64V83.6133ZM78.1875 61.0613C75.9737 61.0613 74.1865 62.8747 74.1865 65.0613V79.2693C74.1865 80.3302 74.6081 81.3476 75.3584 82.0977C76.1087 82.8479 77.1264 83.2693 78.1875 83.2693C79.2487 83.2693 80.2663 82.8479 81.0167 82.0977C81.767 81.3476 82.1885 80.3302 82.1885 79.2693V65.0587C82.1885 62.8453 80.4014 61.0587 78.1875 61.0587V61.0613ZM64 48.3413C61.7861 48.3413 59.999 50.1547 59.999 52.3413V75.616C59.999 76.6769 60.4205 77.6943 61.1709 78.4444C61.9212 79.1946 62.9389 79.616 64 79.616C65.0611 79.616 66.0788 79.1946 66.8291 78.4444C67.5795 77.6943 68.001 76.6769 68.001 75.616V52.368C68.001 50.1547 66.2139 48.368 64 48.368V48.3413Z" fill="white"/>\n            </svg>\n            ',
                    square: '\n            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#4285F4"/>\n            <path d="M36.001 57.808C33.7871 57.808 32 59.5947 32 61.808V66.1547C32 66.6799 32.1035 67.2001 32.3046 67.6854C32.5056 68.1707 32.8003 68.6116 33.1719 68.9831C33.5434 69.3545 33.9845 69.6492 34.4699 69.8502C34.9553 70.0512 35.4756 70.1547 36.001 70.1547C36.5264 70.1547 37.0467 70.0512 37.5321 69.8502C38.0175 69.6492 38.4586 69.3545 38.8301 68.9831C39.2017 68.6116 39.4964 68.1707 39.6974 67.6854C39.8985 67.2001 40.002 66.6799 40.002 66.1547V61.808C40.002 59.5947 38.2149 57.808 36.001 57.808ZM91.999 57.808C89.7851 57.808 87.998 59.5947 87.998 61.808V66.1547C87.998 67.2155 88.4195 68.2329 89.1699 68.9831C89.9202 69.7332 90.9379 70.1547 91.999 70.1547C93.0601 70.1547 94.0778 69.7332 94.8281 68.9831C95.5785 68.2329 96 67.2155 96 66.1547V61.808C96 59.5947 94.2129 57.808 91.999 57.808ZM49.8098 70.8987C47.5959 70.8987 45.8088 72.6853 45.8088 74.8987V79.2453C45.8088 80.3062 46.2303 81.3236 46.9807 82.0737C47.731 82.8239 48.7487 83.2453 49.8098 83.2453C50.8709 83.2453 51.8886 82.8239 52.6389 82.0737C53.3893 81.3236 53.8108 80.3062 53.8108 79.2453V74.9253C53.8108 72.712 52.0237 70.9253 49.8098 70.9253V70.8987ZM49.8098 44.72C47.5959 44.72 45.8088 46.5067 45.8088 48.72V63.0053C45.8088 64.0662 46.2303 65.0836 46.9807 65.8337C47.731 66.5839 48.7487 67.0053 49.8098 67.0053C50.8709 67.0053 51.8886 66.5839 52.6389 65.8337C53.3893 65.0836 53.8108 64.0662 53.8108 63.0053V48.688C53.8108 46.4747 52.0237 44.688 49.8098 44.688V44.72ZM78.1849 44.72C75.971 44.72 74.1839 46.5067 74.1839 48.72V53.0933C74.1839 54.1542 74.6054 55.1716 75.3557 55.9218C76.1061 56.6719 77.1238 57.0933 78.1849 57.0933C79.246 57.0933 80.2637 56.6719 81.014 55.9218C81.7643 55.1716 82.1859 54.1542 82.1859 53.0933V48.72C82.1859 46.5067 80.3988 44.72 78.1849 44.72ZM64 32C61.7861 32 59.999 33.7867 59.999 36V40.3467C59.999 41.4075 60.4205 42.4249 61.1709 43.1751C61.9212 43.9252 62.9389 44.3467 64 44.3467C65.0611 44.3467 66.0788 43.9252 66.8291 43.1751C67.5795 42.4249 68.001 41.4075 68.001 40.3467V36C68.001 33.7867 66.2139 32.0027 64 32.0027V32ZM64 83.6133C61.7861 83.6133 59.999 85.4 59.999 87.6133V91.9866C59.9972 92.5119 60.099 93.0324 60.2985 93.5184C60.4979 94.0044 60.7911 94.4463 61.1614 94.819C61.5317 95.1917 61.9718 95.4878 62.4566 95.6904C62.9413 95.893 63.4612 95.9982 63.9867 96C64.5121 96.0017 65.0327 95.9 65.5188 95.7006C66.0049 95.5012 66.4469 95.208 66.8197 94.8378C67.1925 94.4676 67.4887 94.0277 67.6913 93.543C67.894 93.0584 67.9992 92.5386 68.001 92.0133V87.64C68.001 85.4533 66.2139 83.64 64 83.64V83.6133ZM78.1875 61.0613C75.9737 61.0613 74.1865 62.8747 74.1865 65.0613V79.2693C74.1865 80.3302 74.6081 81.3476 75.3584 82.0977C76.1087 82.8479 77.1264 83.2693 78.1875 83.2693C79.2487 83.2693 80.2663 82.8479 81.0167 82.0977C81.767 81.3476 82.1885 80.3302 82.1885 79.2693V65.0587C82.1885 62.8453 80.4014 61.0587 78.1875 61.0587V61.0613ZM64 48.3413C61.7861 48.3413 59.999 50.1547 59.999 52.3413V75.616C59.999 76.6769 60.4205 77.6943 61.1709 78.4444C61.9212 79.1946 62.9389 79.616 64 79.616C65.0611 79.616 66.0788 79.1946 66.8291 78.4444C67.5795 77.6943 68.001 76.6769 68.001 75.616V52.368C68.001 50.1547 66.2139 48.368 64 48.368V48.3413Z" fill="white"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM32 61.808C32 59.5947 33.7871 57.808 36.001 57.808C38.2149 57.808 40.002 59.5947 40.002 61.808V66.1547C40.002 66.6799 39.8985 67.2001 39.6974 67.6854C39.4964 68.1707 39.2017 68.6116 38.8301 68.9831C38.4586 69.3545 38.0175 69.6492 37.5321 69.8502C37.0467 70.0512 36.5264 70.1547 36.001 70.1547C35.4756 70.1547 34.9553 70.0512 34.4699 69.8502C33.9845 69.6492 33.5434 69.3545 33.1719 68.9831C32.8003 68.6116 32.5056 68.1707 32.3046 67.6854C32.1035 67.2001 32 66.6799 32 66.1547V61.808ZM87.998 61.808C87.998 59.5947 89.7851 57.808 91.999 57.808C94.2129 57.808 96 59.5947 96 61.808V66.1547C96 67.2155 95.5785 68.2329 94.8281 68.9831C94.0778 69.7332 93.0601 70.1547 91.999 70.1547C90.9379 70.1547 89.9202 69.7332 89.1699 68.9831C88.4195 68.2329 87.998 67.2155 87.998 66.1547V61.808ZM45.8088 74.8987C45.8088 72.6853 47.5959 70.8987 49.8098 70.8987V70.9253C52.0237 70.9253 53.8108 72.712 53.8108 74.9253V79.2453C53.8108 80.3062 53.3893 81.3236 52.6389 82.0737C51.8886 82.8239 50.8709 83.2453 49.8098 83.2453C48.7487 83.2453 47.731 82.8239 46.9807 82.0737C46.2303 81.3236 45.8088 80.3062 45.8088 79.2453V74.8987ZM45.8088 48.72C45.8088 46.5067 47.5959 44.72 49.8098 44.72V44.688C52.0237 44.688 53.8108 46.4747 53.8108 48.688V63.0053C53.8108 64.0662 53.3893 65.0836 52.6389 65.8337C51.8886 66.5839 50.8709 67.0053 49.8098 67.0053C48.7487 67.0053 47.731 66.5839 46.9807 65.8337C46.2303 65.0836 45.8088 64.0662 45.8088 63.0053V48.72ZM74.1839 48.72C74.1839 46.5067 75.971 44.72 78.1849 44.72C80.3988 44.72 82.1859 46.5067 82.1859 48.72V53.0933C82.1859 54.1542 81.7643 55.1716 81.014 55.9218C80.2637 56.6719 79.246 57.0933 78.1849 57.0933C77.1238 57.0933 76.1061 56.6719 75.3557 55.9218C74.6054 55.1716 74.1839 54.1542 74.1839 53.0933V48.72ZM59.999 36C59.999 33.7867 61.7861 32 64 32V32.0027C66.2139 32.0027 68.001 33.7867 68.001 36V40.3467C68.001 41.4075 67.5795 42.4249 66.8291 43.1751C66.0788 43.9252 65.0611 44.3467 64 44.3467C62.9389 44.3467 61.9212 43.9252 61.1709 43.1751C60.4205 42.4249 59.999 41.4075 59.999 40.3467V36ZM59.999 87.6133C59.999 85.4 61.7861 83.6133 64 83.6133V83.64C66.2139 83.64 68.001 85.4533 68.001 87.64V92.0133C67.9992 92.5386 67.894 93.0584 67.6913 93.543C67.4887 94.0277 67.1925 94.4676 66.8197 94.8378C66.4469 95.208 66.0049 95.5012 65.5188 95.7006C65.0327 95.9 64.5121 96.0017 63.9867 96C63.4612 95.9982 62.9413 95.893 62.4566 95.6904C61.9718 95.4878 61.5317 95.1917 61.1614 94.819C60.7911 94.4463 60.4979 94.0044 60.2985 93.5184C60.099 93.0324 59.9972 92.5119 59.999 91.9866V87.6133ZM74.1865 65.0613C74.1865 62.8747 75.9737 61.0613 78.1875 61.0613V61.0587C80.4014 61.0587 82.1885 62.8453 82.1885 65.0587V79.2693C82.1885 80.3302 81.767 81.3476 81.0167 82.0977C80.2663 82.8479 79.2487 83.2693 78.1875 83.2693C77.1264 83.2693 76.1087 82.8479 75.3584 82.0977C74.6081 81.3476 74.1865 80.3302 74.1865 79.2693V65.0613ZM59.999 52.3413C59.999 50.1547 61.7861 48.3413 64 48.3413V48.368C66.2139 48.368 68.001 50.1547 68.001 52.368V75.616C68.001 76.6769 67.5795 77.6943 66.8291 78.4444C66.0788 79.1946 65.0611 79.616 64 79.616C62.9389 79.616 61.9212 79.1946 61.1709 78.4444C60.4205 77.6943 59.999 76.6769 59.999 75.616V52.3413Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM32 61.808C32 59.5947 33.7871 57.808 36.001 57.808C38.2149 57.808 40.002 59.5947 40.002 61.808V66.1547C40.002 66.6799 39.8985 67.2001 39.6974 67.6854C39.4964 68.1707 39.2017 68.6116 38.8301 68.9831C38.4586 69.3545 38.0175 69.6492 37.5321 69.8502C37.0467 70.0512 36.5264 70.1547 36.001 70.1547C35.4756 70.1547 34.9553 70.0512 34.4699 69.8502C33.9845 69.6492 33.5434 69.3545 33.1719 68.9831C32.8003 68.6116 32.5056 68.1707 32.3046 67.6854C32.1035 67.2001 32 66.6799 32 66.1547V61.808ZM87.998 61.808C87.998 59.5947 89.7851 57.808 91.999 57.808C94.2129 57.808 96 59.5947 96 61.808V66.1547C96 67.2155 95.5785 68.2329 94.8281 68.9831C94.0778 69.7332 93.0601 70.1547 91.999 70.1547C90.9379 70.1547 89.9202 69.7332 89.1699 68.9831C88.4195 68.2329 87.998 67.2155 87.998 66.1547V61.808ZM45.8088 74.8987C45.8088 72.6853 47.5959 70.8987 49.8098 70.8987V70.9253C52.0237 70.9253 53.8108 72.712 53.8108 74.9253V79.2453C53.8108 80.3062 53.3893 81.3236 52.6389 82.0737C51.8886 82.8239 50.8709 83.2453 49.8098 83.2453C48.7487 83.2453 47.731 82.8239 46.9807 82.0737C46.2303 81.3236 45.8088 80.3062 45.8088 79.2453V74.8987ZM45.8088 48.72C45.8088 46.5067 47.5959 44.72 49.8098 44.72V44.688C52.0237 44.688 53.8108 46.4747 53.8108 48.688V63.0053C53.8108 64.0662 53.3893 65.0836 52.6389 65.8337C51.8886 66.5839 50.8709 67.0053 49.8098 67.0053C48.7487 67.0053 47.731 66.5839 46.9807 65.8337C46.2303 65.0836 45.8088 64.0662 45.8088 63.0053V48.72ZM74.1839 48.72C74.1839 46.5067 75.971 44.72 78.1849 44.72C80.3988 44.72 82.1859 46.5067 82.1859 48.72V53.0933C82.1859 54.1542 81.7643 55.1716 81.014 55.9218C80.2637 56.6719 79.246 57.0933 78.1849 57.0933C77.1238 57.0933 76.1061 56.6719 75.3557 55.9218C74.6054 55.1716 74.1839 54.1542 74.1839 53.0933V48.72ZM59.999 36C59.999 33.7867 61.7861 32 64 32V32.0027C66.2139 32.0027 68.001 33.7867 68.001 36V40.3467C68.001 41.4075 67.5795 42.4249 66.8291 43.1751C66.0788 43.9252 65.0611 44.3467 64 44.3467C62.9389 44.3467 61.9212 43.9252 61.1709 43.1751C60.4205 42.4249 59.999 41.4075 59.999 40.3467V36ZM59.999 87.6133C59.999 85.4 61.7861 83.6133 64 83.6133V83.64C66.2139 83.64 68.001 85.4533 68.001 87.64V92.0133C67.9992 92.5386 67.894 93.0584 67.6913 93.543C67.4887 94.0277 67.1925 94.4676 66.8197 94.8378C66.4469 95.208 66.0049 95.5012 65.5188 95.7006C65.0327 95.9 64.5121 96.0017 63.9867 96C63.4612 95.9982 62.9413 95.893 62.4566 95.6904C61.9718 95.4878 61.5317 95.1917 61.1614 94.819C60.7911 94.4463 60.4979 94.0044 60.2985 93.5184C60.099 93.0324 59.9972 92.5119 59.999 91.9866V87.6133ZM74.1865 65.0613C74.1865 62.8747 75.9737 61.0613 78.1875 61.0613V61.0587C80.4014 61.0587 82.1885 62.8453 82.1885 65.0587V79.2693C82.1885 80.3302 81.767 81.3476 81.0167 82.0977C80.2663 82.8479 79.2487 83.2693 78.1875 83.2693C77.1264 83.2693 76.1087 82.8479 75.3584 82.0977C74.6081 81.3476 74.1865 80.3302 74.1865 79.2693V65.0613ZM59.999 52.3413C59.999 50.1547 61.7861 48.3413 64 48.3413V48.368C66.2139 48.368 68.001 50.1547 68.001 52.368V75.616C68.001 76.6769 67.5795 77.6943 66.8291 78.4444C66.0788 79.1946 65.0611 79.616 64 79.616C62.9389 79.616 61.9212 79.1946 61.1709 78.4444C60.4205 77.6943 59.999 76.6769 59.999 75.616V52.3413Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM32 61.808C32 59.5947 33.7871 57.808 36.001 57.808C38.2149 57.808 40.002 59.5947 40.002 61.808V66.1547C40.002 66.6799 39.8985 67.2001 39.6974 67.6854C39.4964 68.1707 39.2017 68.6116 38.8301 68.9831C38.4586 69.3545 38.0175 69.6492 37.5321 69.8502C37.0467 70.0512 36.5264 70.1547 36.001 70.1547C35.4756 70.1547 34.9553 70.0512 34.4699 69.8502C33.9845 69.6492 33.5434 69.3545 33.1719 68.9831C32.8003 68.6116 32.5056 68.1707 32.3046 67.6854C32.1035 67.2001 32 66.6799 32 66.1547V61.808ZM87.998 61.808C87.998 59.5947 89.7851 57.808 91.999 57.808C94.2129 57.808 96 59.5947 96 61.808V66.1547C96 67.2155 95.5785 68.2329 94.8281 68.9831C94.0778 69.7332 93.0601 70.1547 91.999 70.1547C90.9379 70.1547 89.9202 69.7332 89.1699 68.9831C88.4195 68.2329 87.998 67.2155 87.998 66.1547V61.808ZM45.8088 74.8987C45.8088 72.6853 47.5959 70.8987 49.8098 70.8987V70.9253C52.0237 70.9253 53.8108 72.712 53.8108 74.9253V79.2453C53.8108 80.3062 53.3893 81.3236 52.6389 82.0737C51.8886 82.8239 50.8709 83.2453 49.8098 83.2453C48.7487 83.2453 47.731 82.8239 46.9807 82.0737C46.2303 81.3236 45.8088 80.3062 45.8088 79.2453V74.8987ZM45.8088 48.72C45.8088 46.5067 47.5959 44.72 49.8098 44.72V44.688C52.0237 44.688 53.8108 46.4747 53.8108 48.688V63.0053C53.8108 64.0662 53.3893 65.0836 52.6389 65.8337C51.8886 66.5839 50.8709 67.0053 49.8098 67.0053C48.7487 67.0053 47.731 66.5839 46.9807 65.8337C46.2303 65.0836 45.8088 64.0662 45.8088 63.0053V48.72ZM74.1839 48.72C74.1839 46.5067 75.971 44.72 78.1849 44.72C80.3988 44.72 82.1859 46.5067 82.1859 48.72V53.0933C82.1859 54.1542 81.7643 55.1716 81.014 55.9218C80.2637 56.6719 79.246 57.0933 78.1849 57.0933C77.1238 57.0933 76.1061 56.6719 75.3557 55.9218C74.6054 55.1716 74.1839 54.1542 74.1839 53.0933V48.72ZM59.999 36C59.999 33.7867 61.7861 32 64 32V32.0027C66.2139 32.0027 68.001 33.7867 68.001 36V40.3467C68.001 41.4075 67.5795 42.4249 66.8291 43.1751C66.0788 43.9252 65.0611 44.3467 64 44.3467C62.9389 44.3467 61.9212 43.9252 61.1709 43.1751C60.4205 42.4249 59.999 41.4075 59.999 40.3467V36ZM59.999 87.6133C59.999 85.4 61.7861 83.6133 64 83.6133V83.64C66.2139 83.64 68.001 85.4533 68.001 87.64V92.0133C67.9992 92.5386 67.894 93.0584 67.6913 93.543C67.4887 94.0277 67.1925 94.4676 66.8197 94.8378C66.4469 95.208 66.0049 95.5012 65.5188 95.7006C65.0327 95.9 64.5121 96.0017 63.9867 96C63.4612 95.9982 62.9413 95.893 62.4566 95.6904C61.9718 95.4878 61.5317 95.1917 61.1614 94.819C60.7911 94.4463 60.4979 94.0044 60.2985 93.5184C60.099 93.0324 59.9972 92.5119 59.999 91.9866V87.6133ZM74.1865 65.0613C74.1865 62.8747 75.9737 61.0613 78.1875 61.0613V61.0587C80.4014 61.0587 82.1885 62.8453 82.1885 65.0587V79.2693C82.1885 80.3302 81.767 81.3476 81.0167 82.0977C80.2663 82.8479 79.2487 83.2693 78.1875 83.2693C77.1264 83.2693 76.1087 82.8479 75.3584 82.0977C74.6081 81.3476 74.1865 80.3302 74.1865 79.2693V65.0613ZM59.999 52.3413C59.999 50.1547 61.7861 48.3413 64 48.3413V48.368C66.2139 48.368 68.001 50.1547 68.001 52.368V75.616C68.001 76.6769 67.5795 77.6943 66.8291 78.4444C66.0788 79.1946 65.0611 79.616 64 79.616C62.9389 79.616 61.9212 79.1946 61.1709 78.4444C60.4205 77.6943 59.999 76.6769 59.999 75.616V52.3413Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM32 61.808C32 59.5947 33.7871 57.808 36.001 57.808C38.2149 57.808 40.002 59.5947 40.002 61.808V66.1547C40.002 66.6799 39.8985 67.2001 39.6974 67.6854C39.4964 68.1707 39.2017 68.6116 38.8301 68.9831C38.4586 69.3545 38.0175 69.6492 37.5321 69.8502C37.0467 70.0512 36.5264 70.1547 36.001 70.1547C35.4756 70.1547 34.9553 70.0512 34.4699 69.8502C33.9845 69.6492 33.5434 69.3545 33.1719 68.9831C32.8003 68.6116 32.5056 68.1707 32.3046 67.6854C32.1035 67.2001 32 66.6799 32 66.1547V61.808ZM87.998 61.808C87.998 59.5947 89.7851 57.808 91.999 57.808C94.2129 57.808 96 59.5947 96 61.808V66.1547C96 67.2155 95.5785 68.2329 94.8281 68.9831C94.0778 69.7332 93.0601 70.1547 91.999 70.1547C90.9379 70.1547 89.9202 69.7332 89.1699 68.9831C88.4195 68.2329 87.998 67.2155 87.998 66.1547V61.808ZM45.8088 74.8987C45.8088 72.6853 47.5959 70.8987 49.8098 70.8987V70.9253C52.0237 70.9253 53.8108 72.712 53.8108 74.9253V79.2453C53.8108 80.3062 53.3893 81.3236 52.6389 82.0737C51.8886 82.8239 50.8709 83.2453 49.8098 83.2453C48.7487 83.2453 47.731 82.8239 46.9807 82.0737C46.2303 81.3236 45.8088 80.3062 45.8088 79.2453V74.8987ZM45.8088 48.72C45.8088 46.5067 47.5959 44.72 49.8098 44.72V44.688C52.0237 44.688 53.8108 46.4747 53.8108 48.688V63.0053C53.8108 64.0662 53.3893 65.0836 52.6389 65.8337C51.8886 66.5839 50.8709 67.0053 49.8098 67.0053C48.7487 67.0053 47.731 66.5839 46.9807 65.8337C46.2303 65.0836 45.8088 64.0662 45.8088 63.0053V48.72ZM74.1839 48.72C74.1839 46.5067 75.971 44.72 78.1849 44.72C80.3988 44.72 82.1859 46.5067 82.1859 48.72V53.0933C82.1859 54.1542 81.7643 55.1716 81.014 55.9218C80.2637 56.6719 79.246 57.0933 78.1849 57.0933C77.1238 57.0933 76.1061 56.6719 75.3557 55.9218C74.6054 55.1716 74.1839 54.1542 74.1839 53.0933V48.72ZM59.999 36C59.999 33.7867 61.7861 32 64 32V32.0027C66.2139 32.0027 68.001 33.7867 68.001 36V40.3467C68.001 41.4075 67.5795 42.4249 66.8291 43.1751C66.0788 43.9252 65.0611 44.3467 64 44.3467C62.9389 44.3467 61.9212 43.9252 61.1709 43.1751C60.4205 42.4249 59.999 41.4075 59.999 40.3467V36ZM59.999 87.6133C59.999 85.4 61.7861 83.6133 64 83.6133V83.64C66.2139 83.64 68.001 85.4533 68.001 87.64V92.0133C67.9992 92.5386 67.894 93.0584 67.6913 93.543C67.4887 94.0277 67.1925 94.4676 66.8197 94.8378C66.4469 95.208 66.0049 95.5012 65.5188 95.7006C65.0327 95.9 64.5121 96.0017 63.9867 96C63.4612 95.9982 62.9413 95.893 62.4566 95.6904C61.9718 95.4878 61.5317 95.1917 61.1614 94.819C60.7911 94.4463 60.4979 94.0044 60.2985 93.5184C60.099 93.0324 59.9972 92.5119 59.999 91.9866V87.6133ZM74.1865 65.0613C74.1865 62.8747 75.9737 61.0613 78.1875 61.0613V61.0587C80.4014 61.0587 82.1885 62.8453 82.1885 65.0587V79.2693C82.1885 80.3302 81.767 81.3476 81.0167 82.0977C80.2663 82.8479 79.2487 83.2693 78.1875 83.2693C77.1264 83.2693 76.1087 82.8479 75.3584 82.0977C74.6081 81.3476 74.1865 80.3302 74.1865 79.2693V65.0613ZM59.999 52.3413C59.999 50.1547 61.7861 48.3413 64 48.3413V48.368C66.2139 48.368 68.001 50.1547 68.001 52.368V75.616C68.001 76.6769 67.5795 77.6943 66.8291 78.4444C66.0788 79.1946 65.0611 79.616 64 79.616C62.9389 79.616 61.9212 79.1946 61.1709 78.4444C60.4205 77.6943 59.999 76.6769 59.999 75.616V52.3413Z" />\n                </svg>\n                '
                    }
                }
            },
            Instagram: {
                brand: {
                    circle: '\n    <svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="#E11B7E"/>\n    <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="url(#paint0_linear)"/>\n    <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="url(#paint1_radial)"/>\n    <path d="M0 64.251C0 28.9048 28.6538 0 64 0C99.3462 0 128 28.9048 128 64.251C128 99.5972 99.3462 128.502 64 128.502C28.6538 128.502 0 99.5972 0 64.251Z" fill="url(#paint2_radial)"/>\n    <path d="M64.0848 44.4062C53.2277 44.4062 44.5759 53.2277 44.5759 63.9152C44.5759 74.7723 53.2277 83.4241 64.0848 83.4241C74.7723 83.4241 83.5938 74.7723 83.5938 63.9152C83.5938 53.2277 74.7723 44.4062 64.0848 44.4062ZM64.0848 76.6384C57.1295 76.6384 51.3616 71.0402 51.3616 63.9152C51.3616 56.9598 56.9598 51.3616 64.0848 51.3616C71.0402 51.3616 76.6384 56.9598 76.6384 63.9152C76.6384 71.0402 71.0402 76.6384 64.0848 76.6384ZM88.8527 43.7277C88.8527 41.183 86.817 39.1473 84.2723 39.1473C81.7277 39.1473 79.692 41.183 79.692 43.7277C79.692 46.2723 81.7277 48.308 84.2723 48.308C86.817 48.308 88.8527 46.2723 88.8527 43.7277ZM101.746 48.308C101.406 42.2009 100.049 36.7723 95.6384 32.3616C91.2277 27.9509 85.7991 26.5938 79.692 26.2545C73.4152 25.9152 54.5848 25.9152 48.308 26.2545C42.2009 26.5938 36.942 27.9509 32.3616 32.3616C27.9509 36.7723 26.5938 42.2009 26.2545 48.308C25.9152 54.5848 25.9152 73.4152 26.2545 79.692C26.5938 85.7991 27.9509 91.058 32.3616 95.6384C36.942 100.049 42.2009 101.406 48.308 101.746C54.5848 102.085 73.4152 102.085 79.692 101.746C85.7991 101.406 91.2277 100.049 95.6384 95.6384C100.049 91.058 101.406 85.7991 101.746 79.692C102.085 73.4152 102.085 54.5848 101.746 48.308ZM93.6027 86.308C92.4152 89.7009 89.7009 92.2455 86.4777 93.6027C81.3884 95.6384 69.5134 95.1295 64.0848 95.1295C58.4866 95.1295 46.6116 95.6384 41.692 93.6027C38.2991 92.2455 35.7545 89.7009 34.3973 86.308C32.3616 81.3884 32.8705 69.5134 32.8705 63.9152C32.8705 58.4866 32.3616 46.6116 34.3973 41.5223C35.7545 38.2991 38.2991 35.7545 41.692 34.3973C46.6116 32.3616 58.4866 32.8705 64.0848 32.8705C69.5134 32.8705 81.3884 32.3616 86.4777 34.3973C89.7009 35.5848 92.2455 38.2991 93.6027 41.5223C95.6384 46.6116 95.1295 58.4866 95.1295 63.9152C95.1295 69.5134 95.6384 81.3884 93.6027 86.308Z" fill="white"/>\n    <defs>\n    <linearGradient id="paint0_linear" x1="14.0625" y1="-6.30702e-07" x2="56.4161" y2="115.03" gradientUnits="userSpaceOnUse">\n    <stop offset="0.04" stop-color="#4263DF"/>\n    <stop offset="1" stop-color="#D53585" stop-opacity="0"/>\n    </linearGradient>\n    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.1875 128.502) rotate(-36.2255) scale(118.384 118.525)">\n    <stop offset="0.13" stop-color="#FFAD05"/>\n    <stop offset="1" stop-color="#FF3F00" stop-opacity="0"/>\n    </radialGradient>\n    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.5625 128.502) rotate(-40.7121) scale(80.228 80.2754)">\n    <stop offset="0.01" stop-color="#FDDB86"/>\n    <stop offset="1" stop-color="#F06942" stop-opacity="0"/>\n    </radialGradient>\n    </defs>\n    </svg>\n    ',
                    square: '\n    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect width="128" height="128" rx="10" fill="#E11B7E"/>\n    <rect width="128" height="128" rx="10" fill="url(#paint0_linear)"/>\n    <rect width="128" height="128" rx="10" fill="url(#paint1_radial)"/>\n    <rect width="128" height="128" rx="10" fill="url(#paint2_radial)"/>\n    <path d="M64.0848 44.4062C53.2277 44.4062 44.5759 53.2277 44.5759 63.9152C44.5759 74.7723 53.2277 83.4241 64.0848 83.4241C74.7723 83.4241 83.5938 74.7723 83.5938 63.9152C83.5938 53.2277 74.7723 44.4062 64.0848 44.4062ZM64.0848 76.6384C57.1295 76.6384 51.3616 71.0402 51.3616 63.9152C51.3616 56.9598 56.9598 51.3616 64.0848 51.3616C71.0402 51.3616 76.6384 56.9598 76.6384 63.9152C76.6384 71.0402 71.0402 76.6384 64.0848 76.6384ZM88.8527 43.7277C88.8527 41.183 86.817 39.1473 84.2723 39.1473C81.7277 39.1473 79.692 41.183 79.692 43.7277C79.692 46.2723 81.7277 48.308 84.2723 48.308C86.817 48.308 88.8527 46.2723 88.8527 43.7277ZM101.746 48.308C101.406 42.2009 100.049 36.7723 95.6384 32.3616C91.2277 27.9509 85.7991 26.5938 79.692 26.2545C73.4152 25.9152 54.5848 25.9152 48.308 26.2545C42.2009 26.5938 36.942 27.9509 32.3616 32.3616C27.9509 36.7723 26.5938 42.2009 26.2545 48.308C25.9152 54.5848 25.9152 73.4152 26.2545 79.692C26.5938 85.7991 27.9509 91.058 32.3616 95.6384C36.942 100.049 42.2009 101.406 48.308 101.746C54.5848 102.085 73.4152 102.085 79.692 101.746C85.7991 101.406 91.2277 100.049 95.6384 95.6384C100.049 91.058 101.406 85.7991 101.746 79.692C102.085 73.4152 102.085 54.5848 101.746 48.308ZM93.6027 86.308C92.4152 89.7009 89.7009 92.2455 86.4777 93.6027C81.3884 95.6384 69.5134 95.1295 64.0848 95.1295C58.4866 95.1295 46.6116 95.6384 41.692 93.6027C38.2991 92.2455 35.7545 89.7009 34.3973 86.308C32.3616 81.3884 32.8705 69.5134 32.8705 63.9152C32.8705 58.4866 32.3616 46.6116 34.3973 41.5223C35.7545 38.2991 38.2991 35.7545 41.692 34.3973C46.6116 32.3616 58.4866 32.8705 64.0848 32.8705C69.5134 32.8705 81.3884 32.3616 86.4777 34.3973C89.7009 35.5848 92.2455 38.2991 93.6027 41.5223C95.6384 46.6116 95.1295 58.4866 95.1295 63.9152C95.1295 69.5134 95.6384 81.3884 93.6027 86.308Z" fill="white"/>\n    <defs>\n    <linearGradient id="paint0_linear" x1="14.0625" y1="-6.28238e-07" x2="56.125" y2="114.687" gradientUnits="userSpaceOnUse">\n    <stop offset="0.04" stop-color="#4263DF"/>\n    <stop offset="1" stop-color="#D53585" stop-opacity="0"/>\n    </linearGradient>\n    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.1875 128) rotate(-36.1187) scale(118.223)">\n    <stop offset="0.13" stop-color="#FFAD05"/>\n    <stop offset="1" stop-color="#FF3F00" stop-opacity="0"/>\n    </radialGradient>\n    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.5625 128) rotate(-40.6013) scale(80.0948)">\n    <stop offset="0.01" stop-color="#FDDB86"/>\n    <stop offset="1" stop-color="#F06942" stop-opacity="0"/>\n    </radialGradient>\n    </defs>\n    </svg>\n    '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.7919 0 64C0 99.2081 28.6538 128 64 128C99.3462 128 128 99.2081 128 64C128 28.7919 99.3462 0 64 0ZM44.5759 63.9152C44.5759 53.2277 53.2277 44.4062 64.0848 44.4062C74.7723 44.4062 83.5938 53.2277 83.5938 63.9152C83.5938 74.7723 74.7723 83.4241 64.0848 83.4241C53.2277 83.4241 44.5759 74.7723 44.5759 63.9152ZM51.3616 63.9152C51.3616 71.0402 57.1295 76.6384 64.0848 76.6384C71.0402 76.6384 76.6384 71.0402 76.6384 63.9152C76.6384 56.9598 71.0402 51.3616 64.0848 51.3616C56.9598 51.3616 51.3616 56.9598 51.3616 63.9152ZM84.2723 39.1473C86.817 39.1473 88.8527 41.183 88.8527 43.7277C88.8527 46.2723 86.817 48.308 84.2723 48.308C81.7277 48.308 79.692 46.2723 79.692 43.7277C79.692 41.183 81.7277 39.1473 84.2723 39.1473ZM95.6384 32.3616C100.049 36.7723 101.406 42.2009 101.746 48.308C102.085 54.5848 102.085 73.4152 101.746 79.692C101.406 85.7991 100.049 91.058 95.6384 95.6384C91.2277 100.049 85.7991 101.406 79.692 101.746C73.4152 102.085 54.5848 102.085 48.308 101.746C42.2009 101.406 36.942 100.049 32.3616 95.6384C27.9509 91.058 26.5938 85.7991 26.2545 79.692C25.9152 73.4152 25.9152 54.5848 26.2545 48.308C26.5938 42.2009 27.9509 36.7723 32.3616 32.3616C36.942 27.9509 42.2009 26.5938 48.308 26.2545C54.5848 25.9152 73.4152 25.9152 79.692 26.2545C85.7991 26.5938 91.2277 27.9509 95.6384 32.3616ZM86.4777 93.6027C89.7009 92.2455 92.4152 89.7009 93.6027 86.308C95.3325 82.1275 95.225 72.9247 95.1536 66.8187C95.141 65.7391 95.1295 64.7563 95.1295 63.9152C95.1295 63.1049 95.1408 62.1511 95.1533 61.0976C95.2247 55.0929 95.3345 45.852 93.6027 41.5223C92.2455 38.2991 89.7009 35.5848 86.4777 34.3973C82.148 32.6654 72.9071 32.7753 66.9024 32.8466C65.8489 32.8592 64.895 32.8705 64.0848 32.8705C63.2437 32.8705 62.2609 32.859 61.1813 32.8464C55.0753 32.775 45.8724 32.6674 41.692 34.3973C38.2991 35.7545 35.7545 38.2991 34.3973 41.5223C32.6654 45.852 32.7752 55.0929 32.8466 61.0976C32.8591 62.1511 32.8705 63.1049 32.8705 63.9152C32.8705 64.7563 32.859 65.7391 32.8464 66.8187C32.775 72.9247 32.6674 82.1275 34.3973 86.308C35.7545 89.7009 38.2991 92.2455 41.692 93.6027C45.8724 95.3326 55.0753 95.225 61.1813 95.1536C62.2609 95.141 63.2437 95.1295 64.0848 95.1295C64.895 95.1295 65.8489 95.1408 66.9024 95.1534C72.907 95.2247 82.148 95.3346 86.4777 93.6027Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM44.5759 63.9152C44.5759 53.2277 53.2277 44.4062 64.0848 44.4062C74.7723 44.4062 83.5938 53.2277 83.5938 63.9152C83.5938 74.7723 74.7723 83.4241 64.0848 83.4241C53.2277 83.4241 44.5759 74.7723 44.5759 63.9152ZM51.3616 63.9152C51.3616 71.0402 57.1295 76.6384 64.0848 76.6384C71.0402 76.6384 76.6384 71.0402 76.6384 63.9152C76.6384 56.9598 71.0402 51.3616 64.0848 51.3616C56.9598 51.3616 51.3616 56.9598 51.3616 63.9152ZM84.2723 39.1473C86.817 39.1473 88.8527 41.183 88.8527 43.7277C88.8527 46.2723 86.817 48.308 84.2723 48.308C81.7277 48.308 79.692 46.2723 79.692 43.7277C79.692 41.183 81.7277 39.1473 84.2723 39.1473ZM95.6384 32.3616C100.049 36.7723 101.406 42.2009 101.746 48.308C102.085 54.5848 102.085 73.4152 101.746 79.692C101.406 85.7991 100.049 91.058 95.6384 95.6384C91.2277 100.049 85.7991 101.406 79.692 101.746C73.4152 102.085 54.5848 102.085 48.308 101.746C42.2009 101.406 36.942 100.049 32.3616 95.6384C27.9509 91.058 26.5938 85.7991 26.2545 79.692C25.9152 73.4152 25.9152 54.5848 26.2545 48.308C26.5938 42.2009 27.9509 36.7723 32.3616 32.3616C36.942 27.9509 42.2009 26.5938 48.308 26.2545C54.5848 25.9152 73.4152 25.9152 79.692 26.2545C85.7991 26.5938 91.2277 27.9509 95.6384 32.3616ZM86.4777 93.6027C89.7009 92.2455 92.4152 89.7009 93.6027 86.308C95.3325 82.1275 95.225 72.9247 95.1536 66.8187C95.141 65.7391 95.1295 64.7563 95.1295 63.9152C95.1295 63.105 95.1408 62.1511 95.1533 61.0976C95.2247 55.0929 95.3345 45.852 93.6027 41.5223C92.2455 38.2991 89.7009 35.5848 86.4777 34.3973C82.148 32.6654 72.9071 32.7753 66.9024 32.8466C65.8489 32.8592 64.895 32.8705 64.0848 32.8705C63.2437 32.8705 62.2609 32.859 61.1813 32.8464C55.0753 32.775 45.8724 32.6675 41.692 34.3973C38.2991 35.7545 35.7545 38.2991 34.3973 41.5223C32.6654 45.852 32.7752 55.0929 32.8466 61.0976C32.8591 62.1511 32.8705 63.105 32.8705 63.9152C32.8705 64.7563 32.859 65.7391 32.8464 66.8187C32.775 72.9247 32.6674 82.1275 34.3973 86.308C35.7545 89.7009 38.2991 92.2455 41.692 93.6027C45.8724 95.3326 55.0753 95.225 61.1813 95.1536C62.2609 95.141 63.2437 95.1295 64.0848 95.1295C64.895 95.1295 65.8489 95.1408 66.9024 95.1534C72.907 95.2247 82.148 95.3346 86.4777 93.6027Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM44.5759 63.9152C44.5759 53.2277 53.2277 44.4062 64.0848 44.4062C74.7723 44.4062 83.5938 53.2277 83.5938 63.9152C83.5938 74.7723 74.7723 83.4241 64.0848 83.4241C53.2277 83.4241 44.5759 74.7723 44.5759 63.9152ZM51.3616 63.9152C51.3616 71.0402 57.1295 76.6384 64.0848 76.6384C71.0402 76.6384 76.6384 71.0402 76.6384 63.9152C76.6384 56.9598 71.0402 51.3616 64.0848 51.3616C56.9598 51.3616 51.3616 56.9598 51.3616 63.9152ZM84.2723 39.1473C86.817 39.1473 88.8527 41.183 88.8527 43.7277C88.8527 46.2723 86.817 48.308 84.2723 48.308C81.7277 48.308 79.692 46.2723 79.692 43.7277C79.692 41.183 81.7277 39.1473 84.2723 39.1473ZM95.6384 32.3616C100.049 36.7723 101.406 42.2009 101.746 48.308C102.085 54.5848 102.085 73.4152 101.746 79.692C101.406 85.7991 100.049 91.058 95.6384 95.6384C91.2277 100.049 85.7991 101.406 79.692 101.746C73.4152 102.085 54.5848 102.085 48.308 101.746C42.2009 101.406 36.942 100.049 32.3616 95.6384C27.9509 91.058 26.5938 85.7991 26.2545 79.692C25.9152 73.4152 25.9152 54.5848 26.2545 48.308C26.5938 42.2009 27.9509 36.7723 32.3616 32.3616C36.942 27.9509 42.2009 26.5938 48.308 26.2545C54.5848 25.9152 73.4152 25.9152 79.692 26.2545C85.7991 26.5938 91.2277 27.9509 95.6384 32.3616ZM86.4777 93.6027C89.7009 92.2455 92.4152 89.7009 93.6027 86.308C95.3325 82.1275 95.225 72.9247 95.1536 66.8186C95.141 65.7391 95.1295 64.7563 95.1295 63.9152C95.1295 63.1049 95.1408 62.1511 95.1533 61.0976C95.2247 55.0929 95.3345 45.852 93.6027 41.5223C92.2455 38.2991 89.7009 35.5848 86.4777 34.3973C82.148 32.6654 72.9071 32.7752 66.9024 32.8466C65.8489 32.8591 64.895 32.8705 64.0848 32.8705C63.2437 32.8705 62.2609 32.859 61.1813 32.8464C55.0753 32.775 45.8724 32.6674 41.692 34.3973C38.2991 35.7545 35.7545 38.2991 34.3973 41.5223C32.6654 45.852 32.7752 55.0929 32.8466 61.0976C32.8591 62.1511 32.8705 63.1049 32.8705 63.9152C32.8705 64.7563 32.859 65.7391 32.8464 66.8186C32.775 72.9247 32.6674 82.1275 34.3973 86.308C35.7545 89.7009 38.2991 92.2455 41.692 93.6027C45.8724 95.3325 55.0753 95.225 61.1813 95.1536C62.2609 95.141 63.2437 95.1295 64.0848 95.1295C64.895 95.1295 65.8489 95.1408 66.9024 95.1533C72.907 95.2247 82.148 95.3345 86.4777 93.6027Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14286 4H118.857C121.697 4 124 6.30253 124 9.14286V118.857C124 121.697 121.697 124 118.857 124H9.14286C6.30253 124 4 121.697 4 118.857V9.14286C4 6.30254 6.30254 4 9.14286 4ZM118.857 0H9.14286C4.0934 0 0 4.0934 0 9.14286V118.857C0 123.907 4.0934 128 9.14286 128H118.857C123.907 128 128 123.907 128 118.857V9.14286C128 4.0934 123.907 0 118.857 0ZM44.5759 63.9152C44.5759 53.2277 53.2277 44.4062 64.0849 44.4062C74.7724 44.4062 83.5938 53.2277 83.5938 63.9152C83.5938 74.7723 74.7724 83.4241 64.0849 83.4241C53.2277 83.4241 44.5759 74.7723 44.5759 63.9152ZM51.3617 63.9152C51.3617 71.0402 57.1295 76.6384 64.0849 76.6384C71.0402 76.6384 76.6384 71.0402 76.6384 63.9152C76.6384 56.9598 71.0402 51.3616 64.0849 51.3616C56.9599 51.3616 51.3617 56.9598 51.3617 63.9152ZM84.2724 39.1473C86.817 39.1473 88.8527 41.183 88.8527 43.7277C88.8527 46.2723 86.817 48.308 84.2724 48.308C81.7277 48.308 79.692 46.2723 79.692 43.7277C79.692 41.183 81.7277 39.1473 84.2724 39.1473ZM95.6384 32.3616C100.049 36.7723 101.406 42.2009 101.746 48.308C102.085 54.5848 102.085 73.4152 101.746 79.692C101.406 85.7991 100.049 91.058 95.6384 95.6384C91.2277 100.049 85.7992 101.406 79.692 101.746C73.4152 102.085 54.5849 102.085 48.3081 101.746C42.2009 101.406 36.942 100.049 32.3617 95.6384C27.9509 91.058 26.5938 85.7991 26.2545 79.692C25.9152 73.4152 25.9152 54.5848 26.2545 48.308C26.5938 42.2009 27.9509 36.7723 32.3617 32.3616C36.942 27.9509 42.2009 26.5938 48.3081 26.2545C54.5849 25.9152 73.4152 25.9152 79.692 26.2545C85.7992 26.5938 91.2277 27.9509 95.6384 32.3616ZM86.4777 93.6027C89.7009 92.2455 92.4152 89.7009 93.6027 86.308C95.3325 82.1275 95.225 72.9247 95.1536 66.8186C95.141 65.7391 95.1295 64.7563 95.1295 63.9152C95.1295 63.1049 95.1408 62.1511 95.1533 61.0976C95.2247 55.0929 95.3345 45.852 93.6027 41.5223C92.2456 38.2991 89.7009 35.5848 86.4777 34.3973C82.148 32.6654 72.907 32.7752 66.9024 32.8466C65.849 32.8591 64.8951 32.8705 64.0849 32.8705C63.2438 32.8705 62.261 32.859 61.1814 32.8464C55.0754 32.775 45.8725 32.6674 41.692 34.3973C38.2992 35.7545 35.7545 38.2991 34.3974 41.5223C32.6655 45.852 32.7753 55.0929 32.8467 61.0976C32.8592 62.1511 32.8706 63.1049 32.8706 63.9152C32.8706 64.7563 32.8591 65.7391 32.8465 66.8187C32.7751 72.9247 32.6675 82.1275 34.3974 86.308C35.7545 89.7009 38.2992 92.2455 41.692 93.6027C45.8725 95.3325 55.0754 95.225 61.1814 95.1536C62.261 95.141 63.2438 95.1295 64.0849 95.1295C64.8951 95.1295 65.8489 95.1408 66.9024 95.1533C72.907 95.2247 82.148 95.3345 86.4777 93.6027Z" />\n                </svg>\n                '
                    }
                }
            },
            Telegram: {
                brand: {
                    circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="64" fill="url(#paint0_linear)"/>\n            <path d="M101.782 37.8045C102.801 33.0312 100.084 31.156 97.0287 32.3493L29.4619 58.432C24.8782 60.3072 25.048 62.8643 28.7828 64.0577L45.9292 69.3424L85.9939 44.1121C87.8613 42.7483 89.7288 43.6007 88.2009 44.794L55.7756 74.1157L54.5872 92.0156C56.4547 92.0156 57.1337 91.3337 58.1523 90.3108L66.4708 82.128L83.9567 95.0841C87.1823 96.9593 89.559 95.9365 90.4078 92.186L101.782 37.8045Z" fill="white"/>\n            <defs>\n            <linearGradient id="paint0_linear" x1="82.5704" y1="19.921" x2="50.5554" y2="94.6198" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#37AEE2"/>\n            <stop offset="1" stop-color="#1E96C8"/>\n            </linearGradient>\n            </defs>\n            </svg>\n            ',
                    square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="url(#paint0_linear)"/>\n            <path d="M101.782 37.8045C102.801 33.0312 100.084 31.156 97.0287 32.3493L29.4619 58.432C24.8782 60.3072 25.048 62.8643 28.7828 64.0577L45.9292 69.3424L85.9939 44.1121C87.8613 42.7483 89.7288 43.6007 88.2009 44.794L55.7756 74.1157L54.5872 92.0156C56.4547 92.0156 57.1337 91.3337 58.1523 90.3108L66.4708 82.128L83.9567 95.0841C87.1823 96.9593 89.559 95.9365 90.4078 92.186L101.782 37.8045Z" fill="white"/>\n            <defs>\n            <linearGradient id="paint0_linear" x1="82.5704" y1="19.921" x2="50.5554" y2="94.6198" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#37AEE2"/>\n            <stop offset="1" stop-color="#1E96C8"/>\n            </linearGradient>\n            </defs>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM97.0287 32.3493C100.084 31.156 102.801 33.0312 101.782 37.8045L90.4078 92.186C89.559 95.9365 87.1823 96.9593 83.9567 95.0841L66.4708 82.128L58.1523 90.3108C57.1337 91.3337 56.4547 92.0156 54.5872 92.0156L55.7756 74.1157L88.2009 44.794C89.7288 43.6007 87.8613 42.7483 85.9939 44.1121L45.9292 69.3424L28.7828 64.0577C25.048 62.8643 24.8782 60.3072 29.4619 58.432L97.0287 32.3493Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128"  fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V118C0 123.523 4.47715 128 10 128H118C123.523 128 128 123.523 128 118V10C128 4.47715 123.523 0 118 0H10ZM97.0287 32.3493C100.084 31.156 102.801 33.0312 101.782 37.8045L90.4078 92.186C89.559 95.9365 87.1823 96.9593 83.9567 95.0841L66.4708 82.128L58.1523 90.3108C57.1337 91.3337 56.4547 92.0156 54.5872 92.0156L55.7756 74.1157L88.2009 44.794C89.7288 43.6007 87.8613 42.7483 85.9939 44.1121L45.9292 69.3424L28.7828 64.0577C25.048 62.8643 24.8782 60.3072 29.4619 58.432L97.0287 32.3493Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128"  fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM97.0287 32.3493C100.084 31.156 102.801 33.0312 101.782 37.8045L90.4078 92.186C89.559 95.9365 87.1823 96.9593 83.9567 95.0841L66.4708 82.128L58.1523 90.3108C57.1337 91.3337 56.4547 92.0156 54.5872 92.0156L55.7756 74.1157L88.2009 44.794C89.7288 43.6007 87.8613 42.7483 85.9939 44.1121L45.9292 69.3424L28.7828 64.0577C25.048 62.8643 24.8782 60.3072 29.4619 58.432L97.0287 32.3493Z"/>\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128"  fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H118C121.314 4 124 6.68629 124 10V118C124 121.314 121.314 124 118 124H10C6.68629 124 4 121.314 4 118V10C4 6.68629 6.68629 4 10 4ZM0 10C0 4.47715 4.47715 0 10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10ZM97.0287 32.3493C100.084 31.156 102.801 33.0312 101.782 37.8045L90.4078 92.186C89.559 95.9365 87.1823 96.9593 83.9567 95.0841L66.4708 82.128L58.1523 90.3108C57.1337 91.3337 56.4547 92.0156 54.5872 92.0156L55.7756 74.1157L88.2009 44.794C89.7288 43.6007 87.8613 42.7483 85.9939 44.1121L45.9292 69.3424L28.7828 64.0577C25.048 62.8643 24.8782 60.3072 29.4619 58.432L97.0287 32.3493Z" />\n                </svg>\n                '
                    }
                }
            },
            Tiktok: {
                brand: {
                    circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="64" fill="#010101"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.3962 53.4342C85.3576 56.9401 91.4359 59.0031 98.0002 59.0031V46.5153C96.7578 46.5158 95.5187 46.3876 94.3033 46.1328V55.9626C87.7394 55.9626 81.6619 53.8996 76.6993 50.3938V75.8773C76.6993 88.6256 66.2453 98.9593 53.3501 98.9593C48.5388 98.9593 44.0667 97.5214 40.3516 95.0553C44.5916 99.3409 50.5045 102 57.0462 102C69.9423 102 80.3967 91.666 80.3967 78.9173V53.4342H80.3962ZM84.9568 40.8357C82.4213 38.0975 80.7566 34.5584 80.3962 30.6459V29.0398H76.8928C77.7746 34.0123 80.7825 38.2607 84.9568 40.8357ZM48.5076 85.2731C47.0911 83.4369 46.3254 81.1905 46.3288 78.881C46.3288 73.0503 51.1106 68.323 57.0099 68.323C58.1092 68.3223 59.202 68.4891 60.2499 68.8176V56.051C59.0255 55.8851 57.7898 55.8148 56.5543 55.8407V65.7776C55.5059 65.4491 54.4127 65.2823 53.3129 65.283C47.4137 65.283 42.6323 70.0103 42.6323 75.8414C42.6323 79.9643 45.0223 83.5343 48.5076 85.2731Z" fill="#EE1D52"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.6995 50.3938C81.6621 53.8996 87.7396 55.9626 94.3035 55.9626V46.1328C90.6396 45.3616 87.396 43.4686 84.957 40.8357C80.7827 38.2607 77.7748 34.0123 76.893 29.0398H67.6907V78.9169C67.6699 84.7314 62.8962 89.4394 57.0097 89.4394C53.5407 89.4394 50.4589 87.8051 48.5073 85.2731C45.0221 83.5343 42.6321 79.9643 42.6321 75.8414C42.6321 70.0103 47.4134 65.2831 53.3127 65.2831C54.4429 65.2831 55.5322 65.457 56.5541 65.7776V55.8407C43.8855 56.0994 33.6968 66.3323 33.6968 78.9173C33.6968 85.1995 36.2341 90.8948 40.3518 95.0558C44.0669 97.5218 48.539 98.9598 53.3503 98.9598C66.2455 98.9598 76.6995 88.6256 76.6995 75.8778V50.3938Z" fill="white"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M94.3032 46.133V43.4751C90.999 43.48 87.7601 42.5653 84.9567 40.8355C87.4382 43.5212 90.7058 45.3732 94.3032 46.133ZM76.8928 29.04C76.8085 28.5648 76.744 28.0865 76.6992 27.6061V26H63.9931V75.8775C63.9727 81.6916 59.1995 86.3996 53.3124 86.3996C51.5839 86.3996 49.9523 85.9943 48.507 85.2733C50.4587 87.8053 53.5405 89.4396 57.0094 89.4396C62.8955 89.4396 67.6696 84.7316 67.6905 78.9171V29.04H76.8928ZM56.5542 55.8409V53.0112C55.4925 52.8676 54.4221 52.7958 53.3505 52.7964C40.454 52.7964 30 63.1306 30 75.8775C30 83.8694 34.1086 90.9125 40.352 95.0555C36.2343 90.8946 33.697 85.1993 33.697 78.9171C33.697 66.3325 43.8853 56.0996 56.5542 55.8409Z" fill="#69C9D0"/>\n            </svg>\n            ',
                    square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="128" height="128" rx="10" fill="#010101"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.3962 53.4342C85.3576 56.9401 91.4359 59.0031 98.0002 59.0031V46.5153C96.7578 46.5158 95.5187 46.3876 94.3033 46.1328V55.9626C87.7394 55.9626 81.6619 53.8996 76.6993 50.3938V75.8773C76.6993 88.6256 66.2453 98.9593 53.3501 98.9593C48.5388 98.9593 44.0667 97.5214 40.3516 95.0553C44.5916 99.3409 50.5045 102 57.0462 102C69.9423 102 80.3967 91.666 80.3967 78.9173V53.4342H80.3962ZM84.9568 40.8357C82.4213 38.0975 80.7566 34.5584 80.3962 30.6459V29.0398H76.8928C77.7746 34.0123 80.7825 38.2607 84.9568 40.8357ZM48.5076 85.2731C47.0911 83.4369 46.3254 81.1905 46.3288 78.881C46.3288 73.0503 51.1106 68.323 57.0099 68.323C58.1092 68.3223 59.202 68.4891 60.2499 68.8176V56.051C59.0255 55.8851 57.7898 55.8148 56.5543 55.8407V65.7776C55.5059 65.4491 54.4127 65.2823 53.3129 65.283C47.4137 65.283 42.6323 70.0103 42.6323 75.8414C42.6323 79.9643 45.0223 83.5343 48.5076 85.2731Z" fill="#EE1D52"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.6995 50.3938C81.6621 53.8996 87.7396 55.9626 94.3035 55.9626V46.1328C90.6396 45.3616 87.396 43.4686 84.957 40.8357C80.7827 38.2607 77.7748 34.0123 76.893 29.0398H67.6907V78.9169C67.6699 84.7314 62.8962 89.4394 57.0097 89.4394C53.5407 89.4394 50.4589 87.8051 48.5073 85.2731C45.0221 83.5343 42.6321 79.9643 42.6321 75.8414C42.6321 70.0103 47.4134 65.2831 53.3127 65.2831C54.4429 65.2831 55.5322 65.457 56.5541 65.7776V55.8407C43.8855 56.0994 33.6968 66.3323 33.6968 78.9173C33.6968 85.1995 36.2341 90.8948 40.3518 95.0558C44.0669 97.5218 48.539 98.9598 53.3503 98.9598C66.2455 98.9598 76.6995 88.6256 76.6995 75.8778V50.3938Z" fill="white"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M94.3032 46.133V43.4751C90.999 43.48 87.7601 42.5653 84.9567 40.8355C87.4382 43.5212 90.7058 45.3732 94.3032 46.133ZM76.8928 29.04C76.8085 28.5648 76.744 28.0865 76.6992 27.6061V26H63.9931V75.8775C63.9727 81.6916 59.1995 86.3996 53.3124 86.3996C51.5839 86.3996 49.9523 85.9943 48.507 85.2733C50.4587 87.8053 53.5405 89.4396 57.0094 89.4396C62.8955 89.4396 67.6696 84.7316 67.6905 78.9171V29.04H76.8928ZM56.5542 55.8409V53.0112C55.4925 52.8676 54.4221 52.7958 53.3505 52.7964C40.454 52.7964 30 63.1306 30 75.8775C30 83.8694 34.1086 90.9125 40.352 95.0555C36.2343 90.8946 33.697 85.1993 33.697 78.9171C33.697 66.3325 43.8853 56.0996 56.5542 55.8409Z" fill="#69C9D0"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM73.0982 26.0177C70.6267 26.0215 68.1507 26.0253 65.6632 26.0633C65.6039 34.0188 65.6064 41.9742 65.6088 49.9374C65.6103 54.7165 65.6118 59.4983 65.5999 64.2845C65.5916 65.7764 65.5942 67.2661 65.5968 68.7547C65.6042 72.922 65.6116 77.0812 65.3783 81.2576C65.3485 82.4204 64.7576 83.4428 64.1866 84.4306C64.1511 84.4919 64.1157 84.5532 64.0806 84.6143C62.2447 87.6226 58.8578 89.6809 55.3126 89.7125C49.9948 90.1875 44.9936 85.8176 44.2339 80.6243C44.229 80.3587 44.2203 80.0916 44.2115 79.8238C44.1639 78.3673 44.1156 76.8902 44.6771 75.526C45.4684 73.2777 46.9878 71.2828 48.9819 69.9845C51.7358 68.0845 55.4076 67.7995 58.5412 68.8128C58.5412 66.8042 58.5761 64.7957 58.611 62.7871C58.6575 60.1091 58.704 57.431 58.6678 54.753C51.7991 53.4547 44.4555 55.6396 39.2011 60.1996C34.5797 64.1262 31.6043 69.8895 31.0345 75.906C30.9712 77.4577 31.0029 79.041 31.0662 80.6243C31.7309 88.0342 36.2257 94.9375 42.6196 98.7057C46.4813 100.986 51.0077 102.221 55.5342 101.967C62.9094 101.841 70.0947 97.8824 74.2413 91.8025C76.8052 88.1609 78.2612 83.7593 78.5145 79.326C78.5738 73.5669 78.5713 67.7955 78.5689 62.0194C78.5674 58.5534 78.5659 55.0857 78.5778 51.618C80.2237 52.6947 81.9014 53.7397 83.7056 54.563C87.8522 56.5263 92.4419 57.4763 97 57.6346V44.8731C92.1254 44.3348 87.1242 42.7198 83.579 39.2048C80.0338 35.7849 78.2929 30.8449 78.0397 26C76.3932 26.0127 74.7467 26.0152 73.0982 26.0177Z" />\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V118C0 123.523 4.47715 128 10 128H118C123.523 128 128 123.523 128 118V10C128 4.47715 123.523 0 118 0H10ZM73.0982 26.0177C70.6267 26.0215 68.1507 26.0253 65.6632 26.0633C65.6039 34.0191 65.6063 41.9749 65.6088 49.9384C65.6103 54.7171 65.6118 59.4986 65.5999 64.2845C65.5916 65.7764 65.5942 67.2661 65.5968 68.7547C65.6042 72.922 65.6116 77.0812 65.3783 81.2576C65.3485 82.4204 64.7576 83.4428 64.1866 84.4305C64.1511 84.4919 64.1157 84.5531 64.0806 84.6143C62.2447 87.6226 58.8578 89.6809 55.3126 89.7125C49.9948 90.1875 44.9936 85.8176 44.2339 80.6243C44.229 80.3587 44.2203 80.0916 44.2115 79.8238C44.1639 78.3673 44.1156 76.8902 44.6771 75.526C45.4684 73.2777 46.9878 71.2828 48.9819 69.9845C51.7358 68.0845 55.4076 67.7995 58.5412 68.8128C58.5412 66.8042 58.5761 64.7957 58.611 62.7871C58.6575 60.1091 58.704 57.431 58.6678 54.753C51.7991 53.4547 44.4555 55.6396 39.2011 60.1996C34.5797 64.1262 31.6043 69.8895 31.0345 75.906C30.9712 77.4577 31.0029 79.041 31.0662 80.6243C31.7309 88.0342 36.2257 94.9375 42.6196 98.7057C46.4813 100.986 51.0077 102.221 55.5342 101.967C62.9094 101.841 70.0947 97.8824 74.2413 91.8025C76.8052 88.1609 78.2612 83.7593 78.5145 79.326C78.5738 73.5669 78.5713 67.7954 78.5689 62.0193C78.5674 58.5533 78.5659 55.0857 78.5778 51.618C80.2237 52.6947 81.9014 53.7397 83.7056 54.563C87.8522 56.5263 92.4419 57.4763 97 57.6346V44.8731C92.1254 44.3348 87.1242 42.7198 83.579 39.2048C80.0338 35.7849 78.2929 30.8449 78.0397 26C76.3932 26.0127 74.7467 26.0152 73.0982 26.0177Z" />\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124ZM0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64ZM73.0982 26.0177C70.6267 26.0215 68.1507 26.0253 65.6632 26.0633C65.6039 34.0188 65.6064 41.9742 65.6088 49.9374C65.6103 54.7165 65.6118 59.4983 65.5999 64.2845C65.5916 65.7764 65.5942 67.2661 65.5968 68.7547C65.6042 72.922 65.6116 77.0812 65.3783 81.2576C65.3485 82.4204 64.7576 83.4428 64.1866 84.4306C64.1511 84.4919 64.1157 84.5532 64.0806 84.6143C62.2447 87.6226 58.8578 89.6809 55.3126 89.7125C49.9948 90.1875 44.9936 85.8176 44.2339 80.6243C44.229 80.3587 44.2203 80.0916 44.2115 79.8238C44.1639 78.3673 44.1156 76.8902 44.6771 75.526C45.4684 73.2777 46.9878 71.2828 48.9819 69.9845C51.7358 68.0845 55.4076 67.7995 58.5412 68.8128C58.5412 66.8042 58.5761 64.7957 58.611 62.7871C58.6575 60.1091 58.704 57.431 58.6678 54.753C51.7991 53.4547 44.4555 55.6396 39.2011 60.1996C34.5797 64.1262 31.6043 69.8895 31.0345 75.906C30.9712 77.4577 31.0029 79.041 31.0662 80.6243C31.7309 88.0342 36.2257 94.9375 42.6196 98.7057C46.4813 100.986 51.0077 102.221 55.5342 101.967C62.9094 101.841 70.0947 97.8824 74.2413 91.8025C76.8052 88.1609 78.2612 83.7593 78.5145 79.326C78.5738 73.5666 78.5713 67.7949 78.5689 62.0185C78.5674 58.5528 78.5659 55.0854 78.5778 51.618C80.2237 52.6947 81.9014 53.7397 83.7056 54.563C87.8522 56.5263 92.4419 57.4763 97 57.6346V44.8731C92.1254 44.3348 87.1242 42.7198 83.579 39.2048C80.0338 35.7849 78.2929 30.8449 78.0397 26C76.3932 26.0127 74.7467 26.0152 73.0982 26.0177Z"/>\n                </svg>\n                ',
                        square: '<svg width="128" height="128" viewBox="0 0 128 128" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H118C121.314 4 124 6.68629 124 10V118C124 121.314 121.314 124 118 124H10C6.68629 124 4 121.314 4 118V10C4 6.68629 6.68629 4 10 4ZM0 10C0 4.47715 4.47715 0 10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10ZM73.0982 26.0177C70.6267 26.0215 68.1507 26.0253 65.6632 26.0633C65.6039 34.0188 65.6064 41.9742 65.6088 49.9374C65.6103 54.7165 65.6118 59.4983 65.5999 64.2845C65.5916 65.7764 65.5942 67.2661 65.5968 68.7547C65.6042 72.922 65.6116 77.0812 65.3783 81.2576C65.3485 82.4204 64.7576 83.4428 64.1866 84.4306C64.1511 84.4919 64.1157 84.5532 64.0806 84.6143C62.2447 87.6226 58.8578 89.6809 55.3126 89.7125C49.9948 90.1875 44.9936 85.8176 44.2339 80.6243C44.229 80.3587 44.2203 80.0916 44.2115 79.8238C44.1639 78.3673 44.1156 76.8902 44.6771 75.526C45.4684 73.2777 46.9878 71.2828 48.9819 69.9845C51.7358 68.0845 55.4076 67.7995 58.5412 68.8128C58.5412 66.8042 58.5761 64.7957 58.611 62.7871C58.6575 60.1091 58.704 57.431 58.6678 54.753C51.7991 53.4547 44.4555 55.6396 39.2011 60.1996C34.5797 64.1262 31.6043 69.8895 31.0345 75.906C30.9712 77.4577 31.0029 79.041 31.0662 80.6243C31.7309 88.0342 36.2257 94.9375 42.6196 98.7057C46.4813 100.986 51.0077 102.221 55.5342 101.967C62.9094 101.841 70.0947 97.8824 74.2413 91.8025C76.8052 88.1609 78.2612 83.7593 78.5145 79.326C78.5738 73.5666 78.5713 67.7949 78.5689 62.0185C78.5674 58.5528 78.5659 55.0854 78.5778 51.618C80.2237 52.6947 81.9014 53.7397 83.7056 54.563C87.8522 56.5263 92.4419 57.4763 97 57.6346V44.8731C92.1254 44.3348 87.1242 42.7198 83.579 39.2048C80.0338 35.7849 78.2929 30.8449 78.0397 26C76.3932 26.0127 74.7467 26.0152 73.0982 26.0177Z" />\n                </svg>\n                '
                    }
                }
            },
            "Trip Advisor": {
                brand: {
                    circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C57.3076 0 0 57.3076 0 128C0 198.692 57.3076 256 128 256C198.692 256 256 198.692 256 128C256 57.3076 198.692 0 128 0ZM77.6191 92.4416C92.7588 82.145 110.267 77 127.789 77C145.682 76.992 163.162 82.3728 177.953 92.4416H206.5L193.618 106.453C197.669 110.137 200.904 114.628 203.115 119.637C205.327 124.646 206.467 130.062 206.461 135.538C206.457 145.978 202.307 155.99 194.923 163.371C187.539 170.753 177.526 174.899 167.086 174.899C157.172 174.909 147.624 171.162 140.363 164.413L127.75 178.128L115.137 164.399C107.872 171.156 98.316 174.908 88.3947 174.899C80.4544 174.901 72.6994 172.501 66.1484 168.014C59.5974 163.527 54.5568 157.163 51.6889 149.759C48.8209 142.355 48.2596 134.256 50.0789 126.527C51.8981 118.798 56.0127 111.8 61.8822 106.453L49 92.4416H77.6191ZM157.307 95.7884C147.851 91.8509 137.797 89.8625 127.75 89.8625C117.604 89.8667 107.558 91.885 98.1925 95.7884C115.006 102.22 127.75 117.254 127.75 134.783C127.75 117.261 140.501 102.22 157.307 95.7884ZM98.5817 110.935C95.35 109.596 91.8862 108.907 88.3881 108.907C81.3235 108.907 74.5482 111.713 69.5528 116.709C64.5574 121.704 61.7509 128.479 61.7509 135.544C61.7509 142.609 64.5574 149.384 69.5528 154.379C74.5482 159.375 81.3235 162.181 88.3881 162.181C91.8862 162.181 95.35 161.492 98.5817 160.154C101.814 158.815 104.75 156.853 107.223 154.379C109.697 151.906 111.659 148.969 112.998 145.738C114.336 142.506 115.025 139.042 115.025 135.544C115.025 132.046 114.336 128.582 112.998 125.35C111.659 122.119 109.697 119.182 107.223 116.709C104.75 114.235 101.814 112.273 98.5817 110.935ZM177.276 110.943C174.045 109.606 170.582 108.919 167.086 108.92C160.024 108.923 153.252 111.73 148.26 116.726C143.268 121.721 140.466 128.495 140.468 135.557C140.471 142.619 143.279 149.391 148.274 154.383C153.27 159.374 160.043 162.177 167.105 162.175C170.602 162.173 174.064 161.483 177.294 160.144C180.524 158.805 183.459 156.842 185.931 154.369C188.402 151.895 190.363 148.959 191.7 145.728C193.037 142.497 193.724 139.034 193.723 135.538C193.722 132.041 193.031 128.579 191.692 125.348C190.353 122.118 188.39 119.184 185.917 116.712C183.443 114.24 180.507 112.28 177.276 110.943ZM78.5134 125.676C81.1323 123.057 84.6844 121.586 88.3881 121.586C92.0919 121.586 95.6439 123.057 98.2629 125.676C100.882 128.295 102.353 131.847 102.353 135.551C102.353 139.254 100.882 142.806 98.2629 145.425C95.6439 148.044 92.0919 149.516 88.3881 149.516C84.6844 149.516 81.1323 148.044 78.5134 145.425C75.8944 142.806 74.4231 139.254 74.4231 135.551C74.4231 131.847 75.8944 128.295 78.5134 125.676ZM157.211 125.676C159.83 123.057 163.382 121.586 167.086 121.586C170.789 121.586 174.341 123.057 176.96 125.676C179.579 128.295 181.051 131.847 181.051 135.551C181.051 139.254 179.579 142.806 176.96 145.425C174.341 148.044 170.789 149.516 167.086 149.516C163.382 149.516 159.83 148.044 157.211 145.425C154.592 142.806 153.121 139.254 153.121 135.551C153.121 131.847 154.592 128.295 157.211 125.676Z" fill="#70DDA6"/>\n            </svg>\n            ',
                    square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V246C0 251.523 4.47715 256 10 256H246C251.523 256 256 251.523 256 246V10C256 4.47715 251.523 0 246 0H10ZM77.6191 93.4416C92.7588 83.145 110.267 78 127.789 78C145.682 77.992 163.162 83.3728 177.953 93.4416H206.5L193.618 107.453C197.669 111.137 200.904 115.628 203.115 120.637C205.327 125.646 206.467 131.062 206.461 136.538C206.457 146.978 202.307 156.99 194.923 164.371C187.539 171.753 177.526 175.899 167.086 175.899C157.172 175.909 147.624 172.162 140.363 165.413L127.75 179.128L115.137 165.399C107.872 172.156 98.316 175.908 88.3947 175.899C80.4544 175.901 72.6994 173.501 66.1484 169.014C59.5974 164.527 54.5568 158.163 51.6889 150.759C48.8209 143.355 48.2596 135.256 50.0789 127.527C51.8981 119.798 56.0127 112.8 61.8822 107.453L49 93.4416H77.6191ZM157.307 96.7884C147.851 92.8509 137.797 90.8625 127.75 90.8625C117.604 90.8667 107.558 92.885 98.1925 96.7884C115.006 103.22 127.75 118.254 127.75 135.783C127.75 118.261 140.501 103.22 157.307 96.7884ZM98.5817 111.935C95.35 110.596 91.8862 109.907 88.3881 109.907C81.3235 109.907 74.5482 112.713 69.5528 117.709C64.5574 122.704 61.7509 129.479 61.7509 136.544C61.7509 143.609 64.5574 150.384 69.5528 155.379C74.5482 160.375 81.3235 163.181 88.3881 163.181C91.8862 163.181 95.35 162.492 98.5817 161.154C101.814 159.815 104.75 157.853 107.223 155.379C109.697 152.906 111.659 149.969 112.998 146.738C114.336 143.506 115.025 140.042 115.025 136.544C115.025 133.046 114.336 129.582 112.998 126.35C111.659 123.119 109.697 120.182 107.223 117.709C104.75 115.235 101.814 113.273 98.5817 111.935ZM177.276 111.943C174.045 110.606 170.582 109.919 167.086 109.92C160.024 109.923 153.252 112.73 148.26 117.726C143.268 122.721 140.466 129.495 140.468 136.557C140.471 143.619 143.279 150.391 148.274 155.383C153.27 160.374 160.043 163.177 167.105 163.175C170.602 163.173 174.064 162.483 177.294 161.144C180.524 159.805 183.459 157.842 185.931 155.369C188.402 152.895 190.363 149.959 191.7 146.728C193.037 143.497 193.724 140.034 193.723 136.538C193.722 133.041 193.031 129.579 191.692 126.348C190.353 123.118 188.39 120.184 185.917 117.712C183.443 115.24 180.507 113.28 177.276 111.943ZM78.5134 126.676C81.1323 124.057 84.6844 122.586 88.3881 122.586C92.0919 122.586 95.6439 124.057 98.2629 126.676C100.882 129.295 102.353 132.847 102.353 136.551C102.353 140.254 100.882 143.806 98.2629 146.425C95.6439 149.044 92.0919 150.516 88.3881 150.516C84.6844 150.516 81.1323 149.044 78.5134 146.425C75.8944 143.806 74.4231 140.254 74.4231 136.551C74.4231 132.847 75.8944 129.295 78.5134 126.676ZM157.211 126.676C159.83 124.057 163.382 122.586 167.086 122.586C170.789 122.586 174.341 124.057 176.96 126.676C179.579 129.295 181.051 132.847 181.051 136.551C181.051 140.254 179.579 143.806 176.96 146.425C174.341 149.044 170.789 150.516 167.086 150.516C163.382 150.516 159.83 149.044 157.211 146.425C154.592 143.806 153.121 140.254 153.121 136.551C153.121 132.847 154.592 129.295 157.211 126.676Z" fill="#70DDA6"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C57.3076 0 0 57.3076 0 128C0 198.692 57.3076 256 128 256C198.692 256 256 198.692 256 128C256 57.3076 198.692 0 128 0ZM77.6191 92.4416C92.7588 82.145 110.267 77 127.789 77C145.682 76.992 163.162 82.3728 177.953 92.4416H206.5L193.618 106.453C197.669 110.137 200.904 114.628 203.115 119.637C205.327 124.646 206.467 130.062 206.461 135.538C206.457 145.978 202.307 155.99 194.923 163.371C187.539 170.753 177.526 174.899 167.086 174.899C157.172 174.909 147.624 171.162 140.363 164.413L127.75 178.128L115.137 164.399C107.872 171.156 98.316 174.908 88.3947 174.899C80.4544 174.901 72.6994 172.501 66.1484 168.014C59.5974 163.527 54.5568 157.163 51.6889 149.759C48.8209 142.355 48.2596 134.256 50.0789 126.527C51.8981 118.798 56.0127 111.8 61.8822 106.453L49 92.4416H77.6191ZM157.307 95.7884C147.851 91.8509 137.797 89.8625 127.75 89.8625C117.604 89.8667 107.558 91.885 98.1925 95.7884C115.006 102.22 127.75 117.254 127.75 134.783C127.75 117.261 140.501 102.22 157.307 95.7884ZM98.5817 110.935C95.35 109.596 91.8862 108.907 88.3881 108.907C81.3235 108.907 74.5482 111.713 69.5528 116.709C64.5574 121.704 61.7509 128.479 61.7509 135.544C61.7509 142.609 64.5574 149.384 69.5528 154.379C74.5482 159.375 81.3235 162.181 88.3881 162.181C91.8862 162.181 95.35 161.492 98.5817 160.154C101.814 158.815 104.75 156.853 107.223 154.379C109.697 151.906 111.659 148.969 112.998 145.738C114.336 142.506 115.025 139.042 115.025 135.544C115.025 132.046 114.336 128.582 112.998 125.35C111.659 122.119 109.697 119.182 107.223 116.709C104.75 114.235 101.814 112.273 98.5817 110.935ZM177.276 110.943C174.045 109.606 170.582 108.919 167.086 108.92C160.024 108.923 153.252 111.73 148.26 116.726C143.268 121.721 140.466 128.495 140.468 135.557C140.471 142.619 143.279 149.391 148.274 154.383C153.27 159.374 160.043 162.177 167.105 162.175C170.602 162.173 174.064 161.483 177.294 160.144C180.524 158.805 183.459 156.842 185.931 154.369C188.402 151.895 190.363 148.959 191.7 145.728C193.037 142.497 193.724 139.034 193.723 135.538C193.722 132.041 193.031 128.579 191.692 125.348C190.353 122.118 188.39 119.184 185.917 116.712C183.443 114.24 180.507 112.28 177.276 110.943ZM78.5134 125.676C81.1323 123.057 84.6844 121.586 88.3881 121.586C92.0919 121.586 95.6439 123.057 98.2629 125.676C100.882 128.295 102.353 131.847 102.353 135.551C102.353 139.254 100.882 142.806 98.2629 145.425C95.6439 148.044 92.0919 149.516 88.3881 149.516C84.6844 149.516 81.1323 148.044 78.5134 145.425C75.8944 142.806 74.4231 139.254 74.4231 135.551C74.4231 131.847 75.8944 128.295 78.5134 125.676ZM157.211 125.676C159.83 123.057 163.382 121.586 167.086 121.586C170.789 121.586 174.341 123.057 176.96 125.676C179.579 128.295 181.051 131.847 181.051 135.551C181.051 139.254 179.579 142.806 176.96 145.425C174.341 148.044 170.789 149.516 167.086 149.516C163.382 149.516 159.83 148.044 157.211 145.425C154.592 142.806 153.121 139.254 153.121 135.551C153.121 131.847 154.592 128.295 157.211 125.676Z"/>\n                </svg>\n                ',
                        square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V246C0 251.523 4.47715 256 10 256H246C251.523 256 256 251.523 256 246V10C256 4.47715 251.523 0 246 0H10ZM77.6191 93.4416C92.7588 83.145 110.267 78 127.789 78C145.682 77.992 163.162 83.3728 177.953 93.4416H206.5L193.618 107.453C197.669 111.137 200.904 115.628 203.115 120.637C205.327 125.646 206.467 131.062 206.461 136.538C206.457 146.978 202.307 156.99 194.923 164.371C187.539 171.753 177.526 175.899 167.086 175.899C157.172 175.909 147.624 172.162 140.363 165.413L127.75 179.128L115.137 165.399C107.872 172.156 98.316 175.908 88.3947 175.899C80.4544 175.901 72.6994 173.501 66.1484 169.014C59.5974 164.527 54.5568 158.163 51.6889 150.759C48.8209 143.355 48.2596 135.256 50.0789 127.527C51.8981 119.798 56.0127 112.8 61.8822 107.453L49 93.4416H77.6191ZM157.307 96.7884C147.851 92.8509 137.797 90.8625 127.75 90.8625C117.604 90.8667 107.558 92.885 98.1925 96.7884C115.006 103.22 127.75 118.254 127.75 135.783C127.75 118.261 140.501 103.22 157.307 96.7884ZM98.5817 111.935C95.35 110.596 91.8862 109.907 88.3881 109.907C81.3235 109.907 74.5482 112.713 69.5528 117.709C64.5573 122.704 61.7509 129.479 61.7509 136.544C61.7509 143.609 64.5573 150.384 69.5528 155.379C74.5482 160.375 81.3235 163.181 88.3881 163.181C91.8862 163.181 95.35 162.492 98.5817 161.154C101.814 159.815 104.75 157.853 107.223 155.379C109.697 152.906 111.659 149.969 112.998 146.738C114.336 143.506 115.025 140.042 115.025 136.544C115.025 133.046 114.336 129.582 112.998 126.35C111.659 123.119 109.697 120.182 107.223 117.709C104.75 115.235 101.814 113.273 98.5817 111.935ZM177.276 111.943C174.045 110.606 170.582 109.919 167.086 109.92C160.024 109.923 153.252 112.73 148.26 117.726C143.268 122.721 140.466 129.495 140.468 136.557C140.471 143.619 143.279 150.391 148.274 155.383C153.27 160.374 160.043 163.177 167.105 163.175C170.602 163.173 174.064 162.483 177.294 161.144C180.524 159.805 183.459 157.842 185.931 155.369C188.402 152.895 190.363 149.959 191.7 146.728C193.037 143.497 193.724 140.034 193.723 136.538C193.722 133.041 193.031 129.578 191.692 126.348C190.353 123.118 188.39 120.184 185.917 117.712C183.443 115.24 180.507 113.28 177.276 111.943ZM78.5134 126.676C81.1323 124.057 84.6844 122.586 88.3881 122.586C92.0919 122.586 95.6439 124.057 98.2629 126.676C100.882 129.295 102.353 132.847 102.353 136.551C102.353 140.254 100.882 143.806 98.2629 146.425C95.6439 149.044 92.0919 150.516 88.3881 150.516C84.6844 150.516 81.1323 149.044 78.5134 146.425C75.8944 143.806 74.4231 140.254 74.4231 136.551C74.4231 132.847 75.8944 129.295 78.5134 126.676ZM157.211 126.676C159.83 124.057 163.382 122.586 167.086 122.586C170.789 122.586 174.341 124.057 176.96 126.676C179.579 129.295 181.051 132.847 181.051 136.551C181.051 140.254 179.579 143.806 176.96 146.425C174.341 149.044 170.789 150.516 167.086 150.516C163.382 150.516 159.83 149.044 157.211 146.425C154.592 143.806 153.121 140.254 153.121 136.551C153.121 132.847 154.592 129.295 157.211 126.676Z"/>\n                </svg>\n                '
                    },
                    outline: {
                        circle: '<svg width="264" height="264" viewBox="0 0 264 264" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M132 0C59.0984 0 0 59.0984 0 132C0 204.902 59.0984 264 132 264C204.902 264 264 204.902 264 132C264 59.0984 204.902 0 132 0ZM8 132C8 63.5167 63.5167 8 132 8C200.483 8 256 63.5167 256 132C256 200.483 200.483 256 132 256C63.5167 256 8 200.483 8 132ZM82.6191 96.4416C97.7588 86.145 115.267 81 132.789 81C150.682 80.992 168.162 86.3728 182.953 96.4416H211.5L198.618 110.453C202.669 114.137 205.904 118.628 208.115 123.637C210.327 128.646 211.467 134.062 211.461 139.538C211.457 149.978 207.307 159.99 199.923 167.371C192.539 174.753 182.526 178.899 172.086 178.899C162.172 178.909 152.624 175.162 145.363 168.413L132.75 182.128L120.137 168.399C112.872 175.156 103.316 178.908 93.3947 178.899C85.4544 178.901 77.6994 176.501 71.1484 172.014C64.5974 167.527 59.5568 161.163 56.6889 153.759C53.8209 146.355 53.2596 138.256 55.0789 130.527C56.8981 122.798 61.0127 115.8 66.8822 110.453L54 96.4416H82.6191ZM162.307 99.7885C152.851 95.851 142.797 93.8625 132.75 93.8625C122.604 93.8667 112.558 95.885 103.192 99.7885C120.006 106.22 132.75 121.254 132.75 138.783C132.75 121.261 145.501 106.22 162.307 99.7885ZM103.582 114.935C100.35 113.596 96.8862 112.907 93.3881 112.907C86.3235 112.907 79.5482 115.713 74.5528 120.709C69.5574 125.704 66.7509 132.479 66.7509 139.544C66.7509 146.609 69.5574 153.384 74.5528 158.379C79.5482 163.375 86.3235 166.181 93.3881 166.181C96.8862 166.181 100.35 165.492 103.582 164.154C106.814 162.815 109.75 160.853 112.223 158.379C114.697 155.906 116.659 152.969 117.998 149.738C119.336 146.506 120.025 143.042 120.025 139.544C120.025 136.046 119.336 132.582 117.998 129.35C116.659 126.119 114.697 123.182 112.223 120.709C109.75 118.235 106.814 116.273 103.582 114.935ZM182.276 114.943C179.045 113.606 175.582 112.919 172.086 112.92C165.024 112.923 158.252 115.73 153.26 120.726C148.268 125.721 145.466 132.495 145.468 139.557C145.471 146.619 148.279 153.391 153.274 158.383C158.27 163.374 165.043 166.177 172.105 166.175C175.602 166.173 179.064 165.483 182.294 164.144C185.524 162.805 188.459 160.842 190.931 158.369C193.402 155.895 195.363 152.959 196.7 149.728C198.037 146.497 198.724 143.034 198.723 139.538C198.722 136.041 198.031 132.579 196.692 129.348C195.353 126.118 193.39 123.184 190.917 120.712C188.443 118.24 185.507 116.28 182.276 114.943ZM83.5134 129.676C86.1323 127.057 89.6844 125.586 93.3881 125.586C97.0919 125.586 100.644 127.057 103.263 129.676C105.882 132.295 107.353 135.847 107.353 139.551C107.353 143.254 105.882 146.806 103.263 149.425C100.644 152.044 97.0919 153.516 93.3881 153.516C89.6844 153.516 86.1323 152.044 83.5134 149.425C80.8944 146.806 79.4231 143.254 79.4231 139.551C79.4231 135.847 80.8944 132.295 83.5134 129.676ZM162.211 129.676C164.83 127.057 168.382 125.586 172.086 125.586C175.789 125.586 179.341 127.057 181.96 129.676C184.579 132.295 186.051 135.847 186.051 139.551C186.051 143.254 184.579 146.806 181.96 149.425C179.341 152.044 175.789 153.516 172.086 153.516C168.382 153.516 164.83 152.044 162.211 149.425C159.592 146.806 158.121 143.254 158.121 139.551C158.121 135.847 159.592 132.295 162.211 129.676Z"/>\n                </svg>\n                ',
                        square: '<svg width="264" height="264" viewBox="0 0 264 264" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9V255C0 259.971 4.02944 264 9 264H255C259.971 264 264 259.971 264 255V9C264 4.02944 259.971 0 255 0H9ZM8 9C8 8.44772 8.44772 8 9 8H255C255.552 8 256 8.44772 256 9V255C256 255.552 255.552 256 255 256H9C8.44772 256 8 255.552 8 255V9ZM81.6191 96.4416C96.7588 86.145 114.267 81 131.789 81C149.682 80.992 167.162 86.3728 181.953 96.4416H210.5L197.618 110.453C201.669 114.137 204.904 118.628 207.115 123.637C209.327 128.646 210.467 134.062 210.461 139.538C210.457 149.978 206.307 159.99 198.923 167.371C191.539 174.753 181.526 178.899 171.086 178.899C161.172 178.909 151.624 175.162 144.363 168.413L131.75 182.128L119.137 168.399C111.872 175.156 102.316 178.908 92.3947 178.899C84.4544 178.901 76.6994 176.501 70.1484 172.014C63.5974 167.527 58.5568 161.163 55.6889 153.759C52.8209 146.355 52.2596 138.256 54.0789 130.527C55.8981 122.798 60.0127 115.8 65.8822 110.453L53 96.4416H81.6191ZM161.307 99.7884C151.851 95.8509 141.797 93.8625 131.75 93.8625C121.604 93.8667 111.558 95.885 102.192 99.7884C119.006 106.22 131.75 121.254 131.75 138.783C131.75 121.261 144.501 106.22 161.307 99.7884ZM102.582 114.935C99.35 113.596 95.8862 112.907 92.3881 112.907C85.3235 112.907 78.5482 115.713 73.5528 120.709C68.5574 125.704 65.7509 132.479 65.7509 139.544C65.7509 146.609 68.5574 153.384 73.5528 158.379C78.5482 163.375 85.3235 166.181 92.3881 166.181C95.8862 166.181 99.35 165.492 102.582 164.154C105.814 162.815 108.75 160.853 111.223 158.379C113.697 155.906 115.659 152.969 116.998 149.738C118.336 146.506 119.025 143.042 119.025 139.544C119.025 136.046 118.336 132.582 116.998 129.35C115.659 126.119 113.697 123.182 111.223 120.709C108.75 118.235 105.814 116.273 102.582 114.935ZM181.276 114.943C178.045 113.606 174.582 112.919 171.086 112.92C164.024 112.923 157.252 115.73 152.26 120.726C147.268 125.721 144.466 132.495 144.468 139.557C144.471 146.619 147.279 153.391 152.274 158.383C157.27 163.374 164.043 166.177 171.105 166.175C174.602 166.173 178.064 165.483 181.294 164.144C184.524 162.805 187.459 160.842 189.931 158.369C192.402 155.895 194.363 152.959 195.7 149.728C197.037 146.497 197.724 143.034 197.723 139.538C197.722 136.041 197.031 132.579 195.692 129.348C194.353 126.118 192.39 123.184 189.917 120.712C187.443 118.24 184.507 116.28 181.276 114.943ZM82.5134 129.676C85.1323 127.057 88.6844 125.586 92.3881 125.586C96.0919 125.586 99.6439 127.057 102.263 129.676C104.882 132.295 106.353 135.847 106.353 139.551C106.353 143.254 104.882 146.806 102.263 149.425C99.6439 152.044 96.0919 153.516 92.3881 153.516C88.6844 153.516 85.1323 152.044 82.5134 149.425C79.8944 146.806 78.4231 143.254 78.4231 139.551C78.4231 135.847 79.8944 132.295 82.5134 129.676ZM161.211 129.676C163.83 127.057 167.382 125.586 171.086 125.586C174.789 125.586 178.341 127.057 180.96 129.676C183.579 132.295 185.051 135.847 185.051 139.551C185.051 143.254 183.579 146.806 180.96 149.425C178.341 152.044 174.789 153.516 171.086 153.516C167.382 153.516 163.83 152.044 161.211 149.425C158.592 146.806 157.121 143.254 157.121 139.551C157.121 135.847 158.592 132.295 161.211 129.676Z"/>\n                </svg>\n                '
                    }
                }
            },
            Snapchat: {
                brand: {
                    circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="256" height="256" rx="128" fill="#FEFB53"/>\n            <mask id="mask0_2001_376" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><rect width="256" height="256" rx="128" fill="white"/></mask>\n            <g mask="url(#mask0_2001_376)"></g>\n            <mask id="path-3-inside-1_2001_376" fill="white">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M200.383 157.556C202.752 158.887 204.829 160.477 205.932 163.463C207.166 166.806 206.419 170.571 203.401 173.784L203.368 173.816C202.163 175.154 200.735 176.274 199.149 177.127C196.003 178.85 192.656 180.18 189.185 181.086C188.515 181.26 187.879 181.545 187.303 181.93C186.689 182.47 186.437 183.138 186.126 183.965C185.895 184.58 185.631 185.282 185.161 186.084C184.34 187.526 183.209 188.767 181.851 189.719C178.642 191.933 175.02 192.085 171.206 192.245L171.076 192.251C167.603 192.381 163.611 192.543 159.1 194.036C157.337 194.634 155.451 195.782 153.296 197.094L153.095 197.216C147.643 200.559 140.178 205.135 127.748 205.135C115.318 205.135 107.885 200.592 102.433 197.216C100.194 195.821 98.2463 194.62 96.3639 194.003C91.8526 192.51 87.8931 192.348 84.3879 192.218C80.5258 192.088 76.8583 191.926 73.6128 189.687C72.4635 188.893 71.4728 187.891 70.6919 186.733C69.9553 185.652 69.6122 184.73 69.3228 183.951C69.0129 183.118 68.7646 182.45 68.1604 181.93C67.5542 181.529 66.8849 181.233 66.1806 181.054C62.7552 180.149 59.4529 178.83 56.3467 177.127C54.8516 176.33 53.4931 175.3 52.3223 174.076C49.1417 170.798 48.2978 166.903 49.5636 163.496C50.9613 159.686 54.0021 158.121 57.1617 156.496C57.7439 156.196 58.33 155.895 58.9107 155.576C66.0508 151.682 71.6655 146.846 75.5926 141.102C76.7058 139.481 77.6724 137.765 78.4811 135.974C78.8706 134.935 78.8706 134.351 78.6109 133.832C78.3338 133.403 77.9688 133.038 77.5399 132.761C76.7904 132.267 76.029 131.774 75.3575 131.34C74.9241 131.059 74.5281 130.802 74.197 130.586C73.4451 130.085 72.7613 129.636 72.1638 129.245C71.5232 128.825 70.9818 128.47 70.5621 128.184C67.5437 126.042 65.4017 123.803 64.071 121.271C63.1496 119.525 62.6147 117.601 62.5027 115.63C62.3907 113.659 62.7042 111.687 63.4219 109.847C65.4341 104.557 70.4322 101.279 76.5013 101.279C77.7773 101.274 79.0502 101.405 80.2986 101.669C80.6556 101.733 80.9801 101.798 81.3047 101.896C81.2722 98.2932 81.3372 94.4635 81.6617 90.6987C82.7976 77.457 87.4387 70.5116 92.2745 64.9943C95.3712 61.5172 99.0233 58.5779 103.082 56.2963C110.417 52.1096 118.693 50 127.748 50C136.803 50 145.111 52.1096 152.446 56.2963C156.48 58.5863 160.11 61.525 163.189 64.9943C168.025 70.5441 172.666 77.457 173.802 90.6987C174.126 94.4635 174.224 98.2608 174.159 101.896C174.321 101.863 174.491 101.823 174.662 101.782C174.832 101.742 175.003 101.701 175.165 101.669C176.413 101.405 177.686 101.274 178.962 101.279C185.031 101.279 190.029 104.557 192.042 109.847C192.754 111.689 193.062 113.662 192.945 115.634C192.827 117.605 192.287 119.528 191.36 121.271C190.029 123.803 187.92 126.075 184.869 128.184C184.26 128.616 183.353 129.206 182.227 129.939C181.912 130.144 181.581 130.36 181.234 130.586C180.836 130.851 180.344 131.17 179.808 131.518C179.163 131.937 178.452 132.397 177.761 132.858C177.384 133.114 177.063 133.446 176.82 133.832C176.56 134.351 176.528 134.903 176.885 135.876C177.711 137.703 178.699 139.452 179.838 141.102C183.863 146.976 189.64 151.909 197.04 155.836C197.754 156.226 198.468 156.583 199.182 156.94C199.519 157.062 199.885 157.271 200.307 157.513L200.383 157.556Z"/></mask>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M200.383 157.556C202.752 158.887 204.829 160.477 205.932 163.463C207.166 166.806 206.419 170.571 203.401 173.784L203.368 173.816C202.163 175.154 200.735 176.274 199.149 177.127C196.003 178.85 192.656 180.18 189.185 181.086C188.515 181.26 187.879 181.545 187.303 181.93C186.689 182.47 186.437 183.138 186.126 183.965C185.895 184.58 185.631 185.282 185.161 186.084C184.34 187.526 183.209 188.767 181.851 189.719C178.642 191.933 175.02 192.085 171.206 192.245L171.076 192.251C167.603 192.381 163.611 192.543 159.1 194.036C157.337 194.634 155.451 195.782 153.296 197.094L153.095 197.216C147.643 200.559 140.178 205.135 127.748 205.135C115.318 205.135 107.885 200.592 102.433 197.216C100.194 195.821 98.2463 194.62 96.3639 194.003C91.8526 192.51 87.8931 192.348 84.3879 192.218C80.5258 192.088 76.8583 191.926 73.6128 189.687C72.4635 188.893 71.4728 187.891 70.6919 186.733C69.9553 185.652 69.6122 184.73 69.3228 183.951C69.0129 183.118 68.7646 182.45 68.1604 181.93C67.5542 181.529 66.8849 181.233 66.1806 181.054C62.7552 180.149 59.4529 178.83 56.3467 177.127C54.8516 176.33 53.4931 175.3 52.3223 174.076C49.1417 170.798 48.2978 166.903 49.5636 163.496C50.9613 159.686 54.0021 158.121 57.1617 156.496C57.7439 156.196 58.33 155.895 58.9107 155.576C66.0508 151.682 71.6655 146.846 75.5926 141.102C76.7058 139.481 77.6724 137.765 78.4811 135.974C78.8706 134.935 78.8706 134.351 78.6109 133.832C78.3338 133.403 77.9688 133.038 77.5399 132.761C76.7904 132.267 76.029 131.774 75.3575 131.34C74.9241 131.059 74.5281 130.802 74.197 130.586C73.4451 130.085 72.7613 129.636 72.1638 129.245C71.5232 128.825 70.9818 128.47 70.5621 128.184C67.5437 126.042 65.4017 123.803 64.071 121.271C63.1496 119.525 62.6147 117.601 62.5027 115.63C62.3907 113.659 62.7042 111.687 63.4219 109.847C65.4341 104.557 70.4322 101.279 76.5013 101.279C77.7773 101.274 79.0502 101.405 80.2986 101.669C80.6556 101.733 80.9801 101.798 81.3047 101.896C81.2722 98.2932 81.3372 94.4635 81.6617 90.6987C82.7976 77.457 87.4387 70.5116 92.2745 64.9943C95.3712 61.5172 99.0233 58.5779 103.082 56.2963C110.417 52.1096 118.693 50 127.748 50C136.803 50 145.111 52.1096 152.446 56.2963C156.48 58.5863 160.11 61.525 163.189 64.9943C168.025 70.5441 172.666 77.457 173.802 90.6987C174.126 94.4635 174.224 98.2608 174.159 101.896C174.321 101.863 174.491 101.823 174.662 101.782C174.832 101.742 175.003 101.701 175.165 101.669C176.413 101.405 177.686 101.274 178.962 101.279C185.031 101.279 190.029 104.557 192.042 109.847C192.754 111.689 193.062 113.662 192.945 115.634C192.827 117.605 192.287 119.528 191.36 121.271C190.029 123.803 187.92 126.075 184.869 128.184C184.26 128.616 183.353 129.206 182.227 129.939C181.912 130.144 181.581 130.36 181.234 130.586C180.836 130.851 180.344 131.17 179.808 131.518C179.163 131.937 178.452 132.397 177.761 132.858C177.384 133.114 177.063 133.446 176.82 133.832C176.56 134.351 176.528 134.903 176.885 135.876C177.711 137.703 178.699 139.452 179.838 141.102C183.863 146.976 189.64 151.909 197.04 155.836C197.754 156.226 198.468 156.583 199.182 156.94C199.519 157.062 199.885 157.271 200.307 157.513L200.383 157.556Z" fill="white"/>\n            <path d="M205.932 163.463L213.438 160.694L213.436 160.69L205.932 163.463ZM200.383 157.556L196.411 164.501L196.438 164.516L196.465 164.531L200.383 157.556ZM203.401 173.784L209.058 179.44L209.146 179.352L209.232 179.261L203.401 173.784ZM203.368 173.816L197.711 168.16L197.565 168.306L197.426 168.46L203.368 173.816ZM199.149 177.127L195.36 170.081L195.333 170.095L195.307 170.11L199.149 177.127ZM189.185 181.086L191.191 188.831L191.199 188.829L191.207 188.826L189.185 181.086ZM187.303 181.93L182.856 175.28L182.418 175.573L182.022 175.921L187.303 181.93ZM186.126 183.965L178.638 181.15L178.638 181.15L186.126 183.965ZM185.161 186.084L178.259 182.039L178.235 182.081L178.211 182.123L185.161 186.084ZM181.851 189.719L186.394 196.304L186.418 196.287L186.443 196.27L181.851 189.719ZM171.206 192.245L170.871 184.252L170.87 184.252L171.206 192.245ZM171.076 192.251L171.374 200.245L171.393 200.244L171.411 200.244L171.076 192.251ZM159.1 194.036L156.586 186.441L156.558 186.45L156.529 186.46L159.1 194.036ZM153.296 197.094L157.456 203.928L157.456 203.927L153.296 197.094ZM153.095 197.216L148.935 190.383L148.925 190.39L148.914 190.396L153.095 197.216ZM102.433 197.216L98.2018 204.006L98.212 204.012L98.2221 204.019L102.433 197.216ZM96.3639 194.003L93.8504 201.598L93.8619 201.602L93.8734 201.606L96.3639 194.003ZM84.3879 192.218L84.684 184.224L84.6704 184.223L84.6567 184.223L84.3879 192.218ZM73.6128 189.687L69.067 196.27L69.0694 196.271L73.6128 189.687ZM70.6919 186.733L77.3247 182.261L77.3142 182.245L77.3037 182.23L70.6919 186.733ZM69.3228 183.951L76.8211 181.163L76.8211 181.163L69.3228 183.951ZM68.1604 181.93L73.3805 175.868L72.9961 175.537L72.573 175.257L68.1604 181.93ZM66.1806 181.054L64.1381 188.789L64.173 188.798L64.2079 188.807L66.1806 181.054ZM56.3467 177.127L60.1941 170.113L60.1513 170.089L60.1083 170.066L56.3467 177.127ZM52.3223 174.076L58.1042 168.547L58.0841 168.526L58.0638 168.505L52.3223 174.076ZM49.5636 163.496L57.063 166.281L57.0685 166.266L57.074 166.251L49.5636 163.496ZM57.1617 156.496L60.822 163.609L60.822 163.609L57.1617 156.496ZM58.9107 155.576L55.0799 148.553L55.0734 148.557L55.067 148.56L58.9107 155.576ZM75.5926 141.102L68.999 136.571L68.9936 136.579L68.9883 136.587L75.5926 141.102ZM78.4811 135.974L85.7728 139.265L85.8801 139.027L85.9717 138.783L78.4811 135.974ZM78.6109 133.832L85.7664 130.254L85.5695 129.86L85.3305 129.49L78.6109 133.832ZM77.5399 132.761L73.143 139.444L73.1707 139.462L73.1986 139.48L77.5399 132.761ZM75.3575 131.34L71.0092 138.055L71.0092 138.055L75.3575 131.34ZM74.197 130.586L69.7594 137.242L69.7891 137.262L69.819 137.282L74.197 130.586ZM72.1638 129.245L76.55 122.554L76.55 122.554L72.1638 129.245ZM70.5621 128.184L65.9321 134.708L65.9974 134.755L66.0636 134.8L70.5621 128.184ZM64.071 121.271L71.1524 117.549L71.1464 117.538L64.071 121.271ZM62.5027 115.63L70.4899 115.176L70.4899 115.176L62.5027 115.63ZM63.4219 109.847L70.8747 112.755L70.8871 112.723L70.8993 112.691L63.4219 109.847ZM76.5013 101.279V109.279H76.5172L76.533 109.279L76.5013 101.279ZM80.2986 101.669L78.6437 109.496L78.7553 109.519L78.8675 109.539L80.2986 101.669ZM81.3047 101.896L79.0059 109.558L89.4022 112.677L89.3044 101.824L81.3047 101.896ZM81.6617 90.6987L89.6321 91.3858L89.6324 91.3825L81.6617 90.6987ZM92.2745 64.9943L86.3003 59.6737L86.2792 59.6974L86.2583 59.7212L92.2745 64.9943ZM103.082 56.2963L107.002 63.2699L107.025 63.2571L107.048 63.2441L103.082 56.2963ZM152.446 56.2963L148.481 63.2441L148.489 63.2488L148.497 63.2534L152.446 56.2963ZM163.189 64.9943L169.22 59.7387L169.196 59.7112L169.172 59.6838L163.189 64.9943ZM173.802 90.6987L165.831 91.3825L165.831 91.3858L173.802 90.6987ZM174.159 101.896L166.16 101.753L165.983 111.689L175.728 109.74L174.159 101.896ZM174.662 101.782L176.515 109.565L176.515 109.565L174.662 101.782ZM175.165 101.669L176.734 109.513L176.777 109.505L176.82 109.496L175.165 101.669ZM178.962 101.279L178.931 109.279L178.946 109.279H178.962V101.279ZM192.042 109.847L184.564 112.691L184.572 112.713L184.581 112.735L192.042 109.847ZM192.945 115.634L200.931 116.11L200.931 116.11L192.945 115.634ZM191.36 121.271L184.295 117.517L184.287 117.533L184.279 117.549L191.36 121.271ZM184.869 128.184L180.319 121.604L180.282 121.63L180.245 121.656L184.869 128.184ZM182.227 129.939L186.591 136.644L186.591 136.644L182.227 129.939ZM181.234 130.586L176.86 123.888L176.828 123.909L176.796 123.93L181.234 130.586ZM179.808 131.518L184.161 138.23L184.161 138.23L179.808 131.518ZM177.761 132.858L173.324 126.202L173.296 126.22L173.268 126.239L177.761 132.858ZM176.82 133.832L170.053 129.565L169.842 129.9L169.665 130.254L176.82 133.832ZM176.885 135.876L169.374 138.63L169.475 138.905L169.595 139.171L176.885 135.876ZM179.838 141.102L186.438 136.58L186.43 136.568L186.421 136.555L179.838 141.102ZM197.04 155.836L200.87 148.813L200.83 148.791L200.79 148.77L197.04 155.836ZM199.182 156.94L195.604 164.095L196.015 164.301L196.448 164.458L199.182 156.94ZM200.307 157.513L196.335 164.457L196.335 164.457L200.307 157.513ZM213.436 160.69C211.371 155.102 207.357 152.298 204.3 150.581L196.465 164.531C197.368 165.039 197.791 165.366 198.024 165.594C198.19 165.757 198.31 165.915 198.428 166.236L213.436 160.69ZM209.232 179.261C214.077 174.103 215.84 167.206 213.438 160.694L198.427 166.232C198.51 166.458 198.52 166.642 198.469 166.859C198.415 167.091 198.23 167.604 197.57 168.306L209.232 179.261ZM209.026 179.472L209.058 179.44L197.743 168.128L197.711 168.16L209.026 179.472ZM202.938 184.173C205.334 182.884 207.489 181.193 209.31 179.173L197.426 168.46C196.836 169.115 196.137 169.663 195.36 170.081L202.938 184.173ZM191.207 188.826C195.312 187.754 199.27 186.181 202.992 184.143L195.307 170.11C192.735 171.518 190 172.605 187.164 173.346L191.207 188.826ZM191.751 188.58C191.579 188.694 191.39 188.779 191.191 188.831L187.18 173.342C185.64 173.74 184.178 174.396 182.856 175.28L191.751 188.58ZM193.615 186.781C193.701 186.551 193.733 186.469 193.756 186.411C193.774 186.367 193.746 186.442 193.675 186.576C193.599 186.719 193.471 186.938 193.279 187.192C193.083 187.45 192.85 187.705 192.584 187.939L182.022 175.921C179.675 177.984 178.844 180.603 178.638 181.15L193.615 186.781ZM192.063 190.13C192.911 188.684 193.377 187.413 193.615 186.781L178.638 181.15C178.414 181.746 178.352 181.88 178.259 182.039L192.063 190.13ZM186.443 196.27C188.769 194.639 190.705 192.514 192.112 190.045L178.211 182.123C177.974 182.538 177.649 182.895 177.259 183.168L186.443 196.27ZM171.542 200.238C174.982 200.094 180.99 200.033 186.394 196.304L177.307 183.135C176.293 183.834 175.059 184.077 170.871 184.252L171.542 200.238ZM171.411 200.244L171.542 200.238L170.87 184.252L170.74 184.258L171.411 200.244ZM161.613 201.631C164.942 200.529 167.917 200.374 171.374 200.245L170.777 184.256C167.289 184.387 162.28 184.557 156.586 186.441L161.613 201.631ZM157.456 203.927C159.861 202.463 160.922 201.865 161.67 201.612L156.529 186.46C153.751 187.403 151.042 189.101 149.135 190.261L157.456 203.927ZM157.255 204.05L157.456 203.928L149.136 190.261L148.935 190.383L157.255 204.05ZM127.748 213.135C142.483 213.135 151.537 207.556 157.277 204.037L148.914 190.396C143.749 193.563 137.874 197.135 127.748 197.135V213.135ZM98.2221 204.019C104.001 207.596 113.018 213.135 127.748 213.135V197.135C117.618 197.135 111.77 193.588 106.644 190.414L98.2221 204.019ZM93.8734 201.606C94.6537 201.861 95.7371 202.47 98.2018 204.006L106.664 190.427C104.65 189.172 101.839 187.379 98.8544 186.401L93.8734 201.606ZM84.0918 200.213C87.5746 200.342 90.5199 200.496 93.8504 201.598L98.8773 186.408C93.1854 184.525 88.2115 184.354 84.684 184.224L84.0918 200.213ZM69.0694 196.271C74.5199 200.032 80.5567 200.094 84.1192 200.214L84.6567 184.223C80.4949 184.083 79.1968 183.82 78.1562 183.102L69.0694 196.271ZM64.0591 191.206C65.3979 193.192 67.0965 194.909 69.067 196.27L78.1587 183.104C77.8305 182.877 77.5477 182.591 77.3247 182.261L64.0591 191.206ZM61.8246 186.74C62.1442 187.599 62.7616 189.302 64.08 191.237L77.3037 182.23C77.2145 182.099 77.1557 181.989 77.1016 181.872C77.033 181.724 76.9718 181.568 76.8211 181.163L61.8246 186.74ZM62.9402 187.992C62.311 187.45 61.9442 186.876 61.7677 186.54C61.6944 186.4 61.6649 186.322 61.6832 186.367C61.7068 186.425 61.7384 186.508 61.8246 186.74L76.8211 181.163C76.6344 180.661 75.7951 177.947 73.3805 175.868L62.9402 187.992ZM64.2079 188.807C64.0442 188.765 63.8887 188.696 63.7478 188.603L72.573 175.257C71.2197 174.362 69.7257 173.701 68.1534 173.301L64.2079 188.807ZM52.4993 184.141C56.1756 186.157 60.0841 187.718 64.1381 188.789L68.2231 173.319C65.4264 172.58 62.7302 171.504 60.1941 170.113L52.4993 184.141ZM46.5403 179.605C48.2989 181.444 50.3394 182.991 52.5851 184.187L60.1083 170.066C59.3638 169.67 58.6873 169.157 58.1042 168.547L46.5403 179.605ZM42.0642 160.71C39.5685 167.429 41.5828 174.496 46.5808 179.647L58.0638 168.505C57.3335 167.752 57.1078 167.18 57.0387 166.902C56.9748 166.645 56.9948 166.465 57.063 166.281L42.0642 160.71ZM53.5015 149.382C50.647 150.851 44.6624 153.629 42.0532 160.74L57.074 166.251C57.1944 165.923 57.3293 165.722 57.7185 165.408C58.305 164.936 59.1034 164.494 60.822 163.609L53.5015 149.382ZM55.067 148.56C54.5925 148.82 54.0985 149.075 53.5015 149.382L60.822 163.609C61.3892 163.317 62.0676 162.969 62.7543 162.593L55.067 148.56ZM68.9883 136.587C65.9017 141.102 61.3265 145.146 55.0799 148.553L62.7415 162.6C70.7751 158.218 77.4294 152.59 82.1969 145.616L68.9883 136.587ZM71.1894 132.682C70.5762 134.041 69.8431 135.343 68.999 136.571L82.1862 145.632C83.5684 143.62 84.7687 141.489 85.7728 139.265L71.1894 132.682ZM71.4555 137.409C71.2444 136.987 71.0511 136.477 70.9277 135.893C70.8049 135.312 70.777 134.778 70.7985 134.327C70.8377 133.503 71.0404 133.031 70.9905 133.165L85.9717 138.783C86.6875 136.874 87.4808 133.683 85.7664 130.254L71.4555 137.409ZM73.1986 139.48C72.6751 139.142 72.2295 138.696 71.8913 138.173L85.3305 129.49C84.4382 128.109 83.2624 126.933 81.8812 126.041L73.1986 139.48ZM71.0092 138.055C71.6843 138.492 72.4216 138.969 73.143 139.444L81.9368 126.077C81.1592 125.566 80.3737 125.057 79.7058 124.625L71.0092 138.055ZM69.819 137.282C70.1681 137.51 70.5806 137.777 71.0092 138.055L79.7059 124.625C79.2676 124.341 78.8881 124.095 78.575 123.89L69.819 137.282ZM67.7775 135.935C68.3765 136.328 69.0364 136.76 69.7594 137.242L78.6347 123.93C77.8539 123.409 77.1461 122.945 76.55 122.554L67.7775 135.935ZM66.0636 134.8C66.5519 135.132 67.1586 135.529 67.7775 135.935L76.55 122.554C75.8879 122.12 75.4117 121.808 75.0605 121.569L66.0636 134.8ZM56.9897 124.994C59.0818 128.974 62.2486 132.094 65.9321 134.708L75.192 121.66C72.8389 119.99 71.7216 118.632 71.1523 117.549L56.9897 124.994ZM54.5156 116.084C54.6927 119.201 55.5386 122.244 56.9956 125.005L71.1464 117.538C70.7607 116.807 70.5367 116.001 70.4899 115.176L54.5156 116.084ZM55.9692 106.939C54.8343 109.848 54.3385 112.967 54.5156 116.084L70.4899 115.176C70.443 114.351 70.5742 113.525 70.8747 112.755L55.9692 106.939ZM76.5013 93.2791C67.4219 93.2791 59.2442 98.3283 55.9446 107.003L70.8993 112.691C71.6241 110.786 73.4426 109.279 76.5013 109.279V93.2791ZM81.9535 93.8416C80.1506 93.4604 78.3124 93.2719 76.4697 93.2791L76.533 109.279C77.2422 109.276 77.9498 109.349 78.6437 109.496L81.9535 93.8416ZM83.6035 94.2331C82.8286 94.0007 82.1378 93.8718 81.7297 93.7976L78.8675 109.539C78.9372 109.552 78.9878 109.562 79.0276 109.569C79.0667 109.577 79.0887 109.582 79.0986 109.584C79.1173 109.588 79.0787 109.58 79.0059 109.558L83.6035 94.2331ZM73.6913 90.0116C73.3364 94.1276 73.2714 98.2354 73.305 101.968L89.3044 101.824C89.2731 98.351 89.3379 94.7994 89.6321 91.3858L73.6913 90.0116ZM86.2583 59.7212C80.5667 66.215 75.004 74.7093 73.691 90.0149L89.6324 91.3825C90.5913 80.2047 94.3107 74.8083 98.2908 70.2673L86.2583 59.7212ZM99.1618 49.3227C94.3317 52.0379 89.9855 55.5358 86.3003 59.6737L98.2487 70.3149C100.757 67.4986 103.715 65.118 107.002 63.2699L99.1618 49.3227ZM127.748 42C117.409 42 107.748 44.4212 99.1163 49.3485L107.048 63.2441C113.085 59.7979 119.977 58 127.748 58V42ZM156.412 49.3485C147.776 44.4187 138.082 42 127.748 42V58C135.524 58 142.447 59.8004 148.481 63.2441L156.412 49.3485ZM169.172 59.6838C165.51 55.5577 161.193 52.0627 156.396 49.3391L148.497 63.2534C151.767 65.1099 154.709 67.4922 157.206 70.3047L169.172 59.6838ZM181.772 90.015C180.459 74.6992 174.889 66.2443 169.22 59.7387L157.157 70.2498C161.16 74.8439 164.873 80.2148 165.831 91.3825L181.772 90.015ZM182.158 102.039C182.227 98.1684 182.124 94.0911 181.772 90.0116L165.831 91.3858C166.129 94.8359 166.221 98.3531 166.16 101.753L182.158 102.039ZM172.809 93.9996C172.718 94.0214 172.667 94.0335 172.622 94.0437C172.58 94.0533 172.574 94.0542 172.59 94.0511L175.728 109.74C176.058 109.674 176.374 109.598 176.515 109.565L172.809 93.9996ZM173.596 93.8239C173.265 93.89 172.95 93.9662 172.809 93.9997L176.515 109.565C176.606 109.543 176.657 109.531 176.702 109.521C176.743 109.511 176.75 109.51 176.734 109.513L173.596 93.8239ZM178.994 93.2791C177.151 93.2719 175.313 93.4604 173.51 93.8416L176.82 109.496C177.514 109.349 178.221 109.276 178.931 109.279L178.994 93.2791ZM199.519 107.003C196.219 98.3283 188.042 93.2791 178.962 93.2791V109.279C182.021 109.279 183.839 110.786 184.564 112.691L199.519 107.003ZM200.931 116.11C201.116 112.993 200.629 109.872 199.502 106.96L184.581 112.735C184.879 113.506 185.008 114.332 184.959 115.157L200.931 116.11ZM198.424 125.025C199.89 122.268 200.745 119.227 200.931 116.11L184.959 115.157C184.91 115.982 184.683 116.787 184.295 117.517L198.424 125.025ZM189.419 134.764C193.268 132.103 196.376 128.922 198.441 124.994L184.279 117.549C183.682 118.684 182.572 120.046 180.319 121.604L189.419 134.764ZM186.591 136.644C187.654 135.952 188.724 135.258 189.493 134.712L180.245 121.656C179.796 121.974 179.053 122.46 177.862 123.234L186.591 136.644ZM185.608 137.284C185.949 137.062 186.276 136.849 186.591 136.644L177.863 123.234C177.549 123.439 177.212 123.657 176.86 123.888L185.608 137.284ZM184.161 138.23C184.683 137.891 185.222 137.542 185.672 137.242L176.796 123.93C176.45 124.161 176.006 124.449 175.455 124.806L184.161 138.23ZM182.199 139.514C182.841 139.086 183.509 138.653 184.161 138.23L175.455 124.806C174.816 125.22 174.064 125.708 173.324 126.202L182.199 139.514ZM183.588 138.098C183.243 138.644 182.789 139.114 182.254 139.477L173.268 126.239C171.979 127.114 170.884 128.247 170.053 129.565L183.588 138.098ZM184.396 133.122C184.401 133.136 184.451 133.273 184.502 133.507C184.555 133.747 184.615 134.116 184.621 134.584C184.634 135.669 184.353 136.654 183.976 137.409L169.665 130.254C169.028 131.528 168.6 133.049 168.622 134.783C168.641 136.343 169.021 137.669 169.374 138.63L184.396 133.122ZM186.421 136.555C185.555 135.301 184.803 133.971 184.175 132.582L169.595 139.171C170.618 141.435 171.844 143.603 173.256 145.648L186.421 136.555ZM200.79 148.77C194.318 145.335 189.607 141.205 186.438 136.58L173.239 145.623C178.119 152.746 184.962 158.483 193.289 162.903L200.79 148.77ZM202.759 149.784C202.026 149.417 201.439 149.123 200.87 148.813L193.209 162.859C194.069 163.328 194.909 163.748 195.604 164.095L202.759 149.784ZM204.279 150.569C204.049 150.437 203.034 149.828 201.916 149.421L196.448 164.458C196.285 164.399 196.165 164.346 196.096 164.314C196.027 164.283 195.99 164.263 195.994 164.265C195.999 164.268 196.025 164.281 196.087 164.316C196.116 164.333 196.151 164.352 196.193 164.376C196.236 164.401 196.281 164.426 196.335 164.457L204.279 150.569ZM204.354 150.612L204.279 150.568L196.335 164.457L196.411 164.501L204.354 150.612Z" fill="black" mask="url(#path-3-inside-1_2001_376)"/>\n            </svg>\n            ',
                    square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="256" height="256" fill="#FEFB53"/>\n            <mask id="mask0_2001_334" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><rect width="256" height="256" fill="white"/></mask>\n            <g mask="url(#mask0_2001_334)"></g>\n            <mask id="path-3-inside-1_2001_334" fill="white">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M200.383 157.556C202.752 158.887 204.829 160.477 205.932 163.463C207.166 166.806 206.419 170.571 203.401 173.784L203.368 173.816C202.163 175.154 200.735 176.274 199.149 177.127C196.003 178.85 192.656 180.18 189.185 181.086C188.515 181.26 187.879 181.545 187.303 181.93C186.689 182.47 186.437 183.138 186.126 183.965C185.895 184.58 185.631 185.282 185.161 186.084C184.34 187.526 183.209 188.767 181.851 189.719C178.642 191.933 175.02 192.085 171.206 192.245L171.076 192.251C167.603 192.381 163.611 192.543 159.1 194.036C157.337 194.634 155.451 195.782 153.296 197.094L153.095 197.216C147.643 200.559 140.178 205.135 127.748 205.135C115.318 205.135 107.885 200.592 102.433 197.216C100.194 195.821 98.2463 194.62 96.3639 194.003C91.8526 192.51 87.8931 192.348 84.3879 192.218C80.5258 192.088 76.8583 191.926 73.6128 189.687C72.4635 188.893 71.4728 187.891 70.6919 186.733C69.9553 185.652 69.6122 184.73 69.3228 183.951C69.0129 183.118 68.7646 182.45 68.1604 181.93C67.5542 181.529 66.8849 181.233 66.1806 181.054C62.7552 180.149 59.4529 178.83 56.3467 177.127C54.8516 176.33 53.4931 175.3 52.3223 174.076C49.1417 170.798 48.2978 166.903 49.5636 163.496C50.9613 159.686 54.0021 158.121 57.1617 156.496C57.7439 156.196 58.33 155.895 58.9107 155.576C66.0508 151.682 71.6655 146.846 75.5926 141.102C76.7058 139.481 77.6724 137.765 78.4811 135.974C78.8706 134.935 78.8706 134.351 78.6109 133.832C78.3338 133.403 77.9688 133.038 77.5399 132.761C76.7904 132.267 76.029 131.774 75.3575 131.34C74.9241 131.059 74.5281 130.802 74.197 130.586C73.4451 130.085 72.7613 129.636 72.1638 129.245C71.5232 128.825 70.9818 128.47 70.5621 128.184C67.5437 126.042 65.4017 123.803 64.071 121.271C63.1496 119.525 62.6147 117.601 62.5027 115.63C62.3907 113.659 62.7042 111.687 63.4219 109.847C65.4341 104.557 70.4322 101.279 76.5013 101.279C77.7773 101.274 79.0502 101.405 80.2986 101.669C80.6556 101.733 80.9801 101.798 81.3047 101.896C81.2722 98.2932 81.3372 94.4635 81.6617 90.6987C82.7976 77.457 87.4387 70.5116 92.2745 64.9943C95.3712 61.5172 99.0233 58.5779 103.082 56.2963C110.417 52.1096 118.693 50 127.748 50C136.803 50 145.111 52.1096 152.446 56.2963C156.48 58.5863 160.11 61.525 163.189 64.9943C168.025 70.5441 172.666 77.457 173.802 90.6987C174.126 94.4635 174.224 98.2608 174.159 101.896C174.321 101.863 174.491 101.823 174.662 101.782C174.832 101.742 175.003 101.701 175.165 101.669C176.413 101.405 177.686 101.274 178.962 101.279C185.031 101.279 190.029 104.557 192.042 109.847C192.754 111.689 193.062 113.662 192.945 115.634C192.827 117.605 192.287 119.528 191.36 121.271C190.029 123.803 187.92 126.075 184.869 128.184C184.26 128.616 183.353 129.206 182.227 129.939C181.912 130.144 181.581 130.36 181.234 130.586C180.836 130.851 180.344 131.17 179.808 131.518C179.163 131.937 178.452 132.397 177.761 132.858C177.384 133.114 177.063 133.446 176.82 133.832C176.56 134.351 176.528 134.903 176.885 135.876C177.711 137.703 178.699 139.452 179.838 141.102C183.863 146.976 189.64 151.909 197.04 155.836C197.754 156.226 198.468 156.583 199.182 156.94C199.519 157.062 199.885 157.271 200.307 157.513L200.383 157.556Z"/></mask>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M200.383 157.556C202.752 158.887 204.829 160.477 205.932 163.463C207.166 166.806 206.419 170.571 203.401 173.784L203.368 173.816C202.163 175.154 200.735 176.274 199.149 177.127C196.003 178.85 192.656 180.18 189.185 181.086C188.515 181.26 187.879 181.545 187.303 181.93C186.689 182.47 186.437 183.138 186.126 183.965C185.895 184.58 185.631 185.282 185.161 186.084C184.34 187.526 183.209 188.767 181.851 189.719C178.642 191.933 175.02 192.085 171.206 192.245L171.076 192.251C167.603 192.381 163.611 192.543 159.1 194.036C157.337 194.634 155.451 195.782 153.296 197.094L153.095 197.216C147.643 200.559 140.178 205.135 127.748 205.135C115.318 205.135 107.885 200.592 102.433 197.216C100.194 195.821 98.2463 194.62 96.3639 194.003C91.8526 192.51 87.8931 192.348 84.3879 192.218C80.5258 192.088 76.8583 191.926 73.6128 189.687C72.4635 188.893 71.4728 187.891 70.6919 186.733C69.9553 185.652 69.6122 184.73 69.3228 183.951C69.0129 183.118 68.7646 182.45 68.1604 181.93C67.5542 181.529 66.8849 181.233 66.1806 181.054C62.7552 180.149 59.4529 178.83 56.3467 177.127C54.8516 176.33 53.4931 175.3 52.3223 174.076C49.1417 170.798 48.2978 166.903 49.5636 163.496C50.9613 159.686 54.0021 158.121 57.1617 156.496C57.7439 156.196 58.33 155.895 58.9107 155.576C66.0508 151.682 71.6655 146.846 75.5926 141.102C76.7058 139.481 77.6724 137.765 78.4811 135.974C78.8706 134.935 78.8706 134.351 78.6109 133.832C78.3338 133.403 77.9688 133.038 77.5399 132.761C76.7904 132.267 76.029 131.774 75.3575 131.34C74.9241 131.059 74.5281 130.802 74.197 130.586C73.4451 130.085 72.7613 129.636 72.1638 129.245C71.5232 128.825 70.9818 128.47 70.5621 128.184C67.5437 126.042 65.4017 123.803 64.071 121.271C63.1496 119.525 62.6147 117.601 62.5027 115.63C62.3907 113.659 62.7042 111.687 63.4219 109.847C65.4341 104.557 70.4322 101.279 76.5013 101.279C77.7773 101.274 79.0502 101.405 80.2986 101.669C80.6556 101.733 80.9801 101.798 81.3047 101.896C81.2722 98.2932 81.3372 94.4635 81.6617 90.6987C82.7976 77.457 87.4387 70.5116 92.2745 64.9943C95.3712 61.5172 99.0233 58.5779 103.082 56.2963C110.417 52.1096 118.693 50 127.748 50C136.803 50 145.111 52.1096 152.446 56.2963C156.48 58.5863 160.11 61.525 163.189 64.9943C168.025 70.5441 172.666 77.457 173.802 90.6987C174.126 94.4635 174.224 98.2608 174.159 101.896C174.321 101.863 174.491 101.823 174.662 101.782C174.832 101.742 175.003 101.701 175.165 101.669C176.413 101.405 177.686 101.274 178.962 101.279C185.031 101.279 190.029 104.557 192.042 109.847C192.754 111.689 193.062 113.662 192.945 115.634C192.827 117.605 192.287 119.528 191.36 121.271C190.029 123.803 187.92 126.075 184.869 128.184C184.26 128.616 183.353 129.206 182.227 129.939C181.912 130.144 181.581 130.36 181.234 130.586C180.836 130.851 180.344 131.17 179.808 131.518C179.163 131.937 178.452 132.397 177.761 132.858C177.384 133.114 177.063 133.446 176.82 133.832C176.56 134.351 176.528 134.903 176.885 135.876C177.711 137.703 178.699 139.452 179.838 141.102C183.863 146.976 189.64 151.909 197.04 155.836C197.754 156.226 198.468 156.583 199.182 156.94C199.519 157.062 199.885 157.271 200.307 157.513L200.383 157.556Z" fill="white"/>\n            <path d="M205.932 163.463L213.438 160.694L213.436 160.69L205.932 163.463ZM200.383 157.556L196.411 164.501L196.438 164.516L196.465 164.531L200.383 157.556ZM203.401 173.784L209.058 179.44L209.146 179.352L209.232 179.261L203.401 173.784ZM203.368 173.816L197.711 168.16L197.565 168.306L197.426 168.46L203.368 173.816ZM199.149 177.127L195.36 170.081L195.333 170.095L195.307 170.11L199.149 177.127ZM189.185 181.086L191.191 188.831L191.199 188.829L191.207 188.826L189.185 181.086ZM187.303 181.93L182.856 175.28L182.418 175.573L182.022 175.921L187.303 181.93ZM186.126 183.965L178.638 181.15L178.638 181.15L186.126 183.965ZM185.161 186.084L178.259 182.039L178.235 182.081L178.211 182.123L185.161 186.084ZM181.851 189.719L186.394 196.304L186.418 196.287L186.443 196.27L181.851 189.719ZM171.206 192.245L170.871 184.252L170.87 184.252L171.206 192.245ZM171.076 192.251L171.374 200.245L171.393 200.244L171.411 200.244L171.076 192.251ZM159.1 194.036L156.586 186.441L156.558 186.45L156.529 186.46L159.1 194.036ZM153.296 197.094L157.456 203.928L157.456 203.927L153.296 197.094ZM153.095 197.216L148.935 190.383L148.925 190.39L148.914 190.396L153.095 197.216ZM102.433 197.216L98.2018 204.006L98.212 204.012L98.2221 204.019L102.433 197.216ZM96.3639 194.003L93.8504 201.598L93.8619 201.602L93.8734 201.606L96.3639 194.003ZM84.3879 192.218L84.684 184.224L84.6704 184.223L84.6567 184.223L84.3879 192.218ZM73.6128 189.687L69.067 196.27L69.0694 196.271L73.6128 189.687ZM70.6919 186.733L77.3247 182.261L77.3142 182.245L77.3037 182.23L70.6919 186.733ZM69.3228 183.951L76.8211 181.163L76.8211 181.163L69.3228 183.951ZM68.1604 181.93L73.3805 175.868L72.9961 175.537L72.573 175.257L68.1604 181.93ZM66.1806 181.054L64.1381 188.789L64.173 188.798L64.2079 188.807L66.1806 181.054ZM56.3467 177.127L60.1941 170.113L60.1513 170.089L60.1083 170.066L56.3467 177.127ZM52.3223 174.076L58.1042 168.547L58.0841 168.526L58.0638 168.505L52.3223 174.076ZM49.5636 163.496L57.063 166.281L57.0685 166.266L57.074 166.251L49.5636 163.496ZM57.1617 156.496L60.822 163.609L60.822 163.609L57.1617 156.496ZM58.9107 155.576L55.0799 148.553L55.0734 148.557L55.067 148.56L58.9107 155.576ZM75.5926 141.102L68.999 136.571L68.9936 136.579L68.9883 136.587L75.5926 141.102ZM78.4811 135.974L85.7728 139.265L85.8801 139.027L85.9717 138.783L78.4811 135.974ZM78.6109 133.832L85.7664 130.254L85.5695 129.86L85.3305 129.49L78.6109 133.832ZM77.5399 132.761L73.143 139.444L73.1707 139.462L73.1986 139.48L77.5399 132.761ZM75.3575 131.34L71.0092 138.055L71.0092 138.055L75.3575 131.34ZM74.197 130.586L69.7594 137.242L69.7891 137.262L69.819 137.282L74.197 130.586ZM72.1638 129.245L76.55 122.554L76.55 122.554L72.1638 129.245ZM70.5621 128.184L65.9321 134.708L65.9974 134.755L66.0636 134.8L70.5621 128.184ZM64.071 121.271L71.1524 117.549L71.1464 117.538L64.071 121.271ZM62.5027 115.63L70.4899 115.176L70.4899 115.176L62.5027 115.63ZM63.4219 109.847L70.8747 112.755L70.8871 112.723L70.8993 112.691L63.4219 109.847ZM76.5013 101.279V109.279H76.5172L76.533 109.279L76.5013 101.279ZM80.2986 101.669L78.6437 109.496L78.7553 109.519L78.8675 109.539L80.2986 101.669ZM81.3047 101.896L79.0059 109.558L89.4022 112.677L89.3044 101.824L81.3047 101.896ZM81.6617 90.6987L89.6321 91.3858L89.6324 91.3825L81.6617 90.6987ZM92.2745 64.9943L86.3003 59.6737L86.2792 59.6974L86.2583 59.7212L92.2745 64.9943ZM103.082 56.2963L107.002 63.2699L107.025 63.2571L107.048 63.2441L103.082 56.2963ZM152.446 56.2963L148.481 63.2441L148.489 63.2488L148.497 63.2534L152.446 56.2963ZM163.189 64.9943L169.22 59.7387L169.196 59.7112L169.172 59.6838L163.189 64.9943ZM173.802 90.6987L165.831 91.3825L165.831 91.3858L173.802 90.6987ZM174.159 101.896L166.16 101.753L165.983 111.689L175.728 109.74L174.159 101.896ZM174.662 101.782L176.515 109.565L176.515 109.565L174.662 101.782ZM175.165 101.669L176.734 109.513L176.777 109.505L176.82 109.496L175.165 101.669ZM178.962 101.279L178.931 109.279L178.946 109.279H178.962V101.279ZM192.042 109.847L184.564 112.691L184.572 112.713L184.581 112.735L192.042 109.847ZM192.945 115.634L200.931 116.11L200.931 116.11L192.945 115.634ZM191.36 121.271L184.295 117.517L184.287 117.533L184.279 117.549L191.36 121.271ZM184.869 128.184L180.319 121.604L180.282 121.63L180.245 121.656L184.869 128.184ZM182.227 129.939L186.591 136.644L186.591 136.644L182.227 129.939ZM181.234 130.586L176.86 123.888L176.828 123.909L176.796 123.93L181.234 130.586ZM179.808 131.518L184.161 138.23L184.161 138.23L179.808 131.518ZM177.761 132.858L173.324 126.202L173.296 126.22L173.268 126.239L177.761 132.858ZM176.82 133.832L170.053 129.565L169.842 129.9L169.665 130.254L176.82 133.832ZM176.885 135.876L169.374 138.63L169.475 138.905L169.595 139.171L176.885 135.876ZM179.838 141.102L186.438 136.58L186.43 136.568L186.421 136.555L179.838 141.102ZM197.04 155.836L200.87 148.813L200.83 148.791L200.79 148.77L197.04 155.836ZM199.182 156.94L195.604 164.095L196.015 164.301L196.448 164.458L199.182 156.94ZM200.307 157.513L196.335 164.457L196.335 164.457L200.307 157.513ZM213.436 160.69C211.371 155.102 207.357 152.298 204.3 150.581L196.465 164.531C197.368 165.039 197.791 165.366 198.024 165.594C198.19 165.757 198.31 165.915 198.428 166.236L213.436 160.69ZM209.232 179.261C214.077 174.103 215.84 167.206 213.438 160.694L198.427 166.232C198.51 166.458 198.52 166.642 198.469 166.859C198.415 167.091 198.23 167.604 197.57 168.306L209.232 179.261ZM209.026 179.472L209.058 179.44L197.743 168.128L197.711 168.16L209.026 179.472ZM202.938 184.173C205.334 182.884 207.489 181.193 209.31 179.173L197.426 168.46C196.836 169.115 196.137 169.663 195.36 170.081L202.938 184.173ZM191.207 188.826C195.312 187.754 199.27 186.181 202.992 184.143L195.307 170.11C192.735 171.518 190 172.605 187.164 173.346L191.207 188.826ZM191.751 188.58C191.579 188.694 191.39 188.779 191.191 188.831L187.18 173.342C185.64 173.74 184.178 174.396 182.856 175.28L191.751 188.58ZM193.615 186.781C193.701 186.551 193.733 186.469 193.756 186.411C193.774 186.367 193.746 186.442 193.675 186.576C193.599 186.719 193.471 186.938 193.279 187.192C193.083 187.45 192.85 187.705 192.584 187.939L182.022 175.921C179.675 177.984 178.844 180.603 178.638 181.15L193.615 186.781ZM192.063 190.13C192.911 188.684 193.377 187.413 193.615 186.781L178.638 181.15C178.414 181.746 178.352 181.88 178.259 182.039L192.063 190.13ZM186.443 196.27C188.769 194.639 190.705 192.514 192.112 190.045L178.211 182.123C177.974 182.538 177.649 182.895 177.259 183.168L186.443 196.27ZM171.542 200.238C174.982 200.094 180.99 200.033 186.394 196.304L177.307 183.135C176.293 183.834 175.059 184.077 170.871 184.252L171.542 200.238ZM171.411 200.244L171.542 200.238L170.87 184.252L170.74 184.258L171.411 200.244ZM161.613 201.631C164.942 200.529 167.917 200.374 171.374 200.245L170.777 184.256C167.289 184.387 162.28 184.557 156.586 186.441L161.613 201.631ZM157.456 203.927C159.861 202.463 160.922 201.865 161.67 201.612L156.529 186.46C153.751 187.403 151.042 189.101 149.135 190.261L157.456 203.927ZM157.255 204.05L157.456 203.928L149.136 190.261L148.935 190.383L157.255 204.05ZM127.748 213.135C142.483 213.135 151.537 207.556 157.277 204.037L148.914 190.396C143.749 193.563 137.874 197.135 127.748 197.135V213.135ZM98.2221 204.019C104.001 207.596 113.018 213.135 127.748 213.135V197.135C117.618 197.135 111.77 193.588 106.644 190.414L98.2221 204.019ZM93.8734 201.606C94.6537 201.861 95.7371 202.47 98.2018 204.006L106.664 190.427C104.65 189.172 101.839 187.379 98.8544 186.401L93.8734 201.606ZM84.0918 200.213C87.5746 200.342 90.5199 200.496 93.8504 201.598L98.8773 186.408C93.1854 184.525 88.2115 184.354 84.684 184.224L84.0918 200.213ZM69.0694 196.271C74.5199 200.032 80.5567 200.094 84.1192 200.214L84.6567 184.223C80.4949 184.083 79.1968 183.82 78.1562 183.102L69.0694 196.271ZM64.0591 191.206C65.3979 193.192 67.0965 194.909 69.067 196.27L78.1587 183.104C77.8305 182.877 77.5477 182.591 77.3247 182.261L64.0591 191.206ZM61.8246 186.74C62.1442 187.599 62.7616 189.302 64.08 191.237L77.3037 182.23C77.2145 182.099 77.1557 181.989 77.1016 181.872C77.033 181.724 76.9718 181.568 76.8211 181.163L61.8246 186.74ZM62.9402 187.992C62.311 187.45 61.9442 186.876 61.7677 186.54C61.6944 186.4 61.6649 186.322 61.6832 186.367C61.7068 186.425 61.7384 186.508 61.8246 186.74L76.8211 181.163C76.6344 180.661 75.7951 177.947 73.3805 175.868L62.9402 187.992ZM64.2079 188.807C64.0442 188.765 63.8887 188.696 63.7478 188.603L72.573 175.257C71.2197 174.362 69.7257 173.701 68.1534 173.301L64.2079 188.807ZM52.4993 184.141C56.1756 186.157 60.0841 187.718 64.1381 188.789L68.2231 173.319C65.4264 172.58 62.7302 171.504 60.1941 170.113L52.4993 184.141ZM46.5403 179.605C48.2989 181.444 50.3394 182.991 52.5851 184.187L60.1083 170.066C59.3638 169.67 58.6873 169.157 58.1042 168.547L46.5403 179.605ZM42.0642 160.71C39.5685 167.429 41.5828 174.496 46.5808 179.647L58.0638 168.505C57.3335 167.752 57.1078 167.18 57.0387 166.902C56.9748 166.645 56.9948 166.465 57.063 166.281L42.0642 160.71ZM53.5015 149.382C50.647 150.851 44.6624 153.629 42.0532 160.74L57.074 166.251C57.1944 165.923 57.3293 165.722 57.7185 165.408C58.305 164.936 59.1034 164.494 60.822 163.609L53.5015 149.382ZM55.067 148.56C54.5925 148.82 54.0985 149.075 53.5015 149.382L60.822 163.609C61.3892 163.317 62.0676 162.969 62.7543 162.593L55.067 148.56ZM68.9883 136.587C65.9017 141.102 61.3265 145.146 55.0799 148.553L62.7415 162.6C70.7751 158.218 77.4294 152.59 82.1969 145.616L68.9883 136.587ZM71.1894 132.682C70.5762 134.041 69.8431 135.343 68.999 136.571L82.1862 145.632C83.5684 143.62 84.7687 141.489 85.7728 139.265L71.1894 132.682ZM71.4555 137.409C71.2444 136.987 71.0511 136.477 70.9277 135.893C70.8049 135.312 70.777 134.778 70.7985 134.327C70.8377 133.503 71.0404 133.031 70.9905 133.165L85.9717 138.783C86.6875 136.874 87.4808 133.683 85.7664 130.254L71.4555 137.409ZM73.1986 139.48C72.6751 139.142 72.2295 138.696 71.8913 138.173L85.3305 129.49C84.4382 128.109 83.2624 126.933 81.8812 126.041L73.1986 139.48ZM71.0092 138.055C71.6843 138.492 72.4216 138.969 73.143 139.444L81.9368 126.077C81.1592 125.566 80.3737 125.057 79.7058 124.625L71.0092 138.055ZM69.819 137.282C70.1681 137.51 70.5806 137.777 71.0092 138.055L79.7059 124.625C79.2676 124.341 78.8881 124.095 78.575 123.89L69.819 137.282ZM67.7775 135.935C68.3765 136.328 69.0364 136.76 69.7594 137.242L78.6347 123.93C77.8539 123.409 77.1461 122.945 76.55 122.554L67.7775 135.935ZM66.0636 134.8C66.5519 135.132 67.1586 135.529 67.7775 135.935L76.55 122.554C75.8879 122.12 75.4117 121.808 75.0605 121.569L66.0636 134.8ZM56.9897 124.994C59.0818 128.974 62.2486 132.094 65.9321 134.708L75.192 121.66C72.8389 119.99 71.7216 118.632 71.1523 117.549L56.9897 124.994ZM54.5156 116.084C54.6927 119.201 55.5386 122.244 56.9956 125.005L71.1464 117.538C70.7607 116.807 70.5367 116.001 70.4899 115.176L54.5156 116.084ZM55.9692 106.939C54.8343 109.848 54.3385 112.967 54.5156 116.084L70.4899 115.176C70.443 114.351 70.5742 113.525 70.8747 112.755L55.9692 106.939ZM76.5013 93.2791C67.4219 93.2791 59.2442 98.3283 55.9446 107.003L70.8993 112.691C71.6241 110.786 73.4426 109.279 76.5013 109.279V93.2791ZM81.9535 93.8416C80.1506 93.4604 78.3124 93.2719 76.4697 93.2791L76.533 109.279C77.2422 109.276 77.9498 109.349 78.6437 109.496L81.9535 93.8416ZM83.6035 94.2331C82.8286 94.0007 82.1378 93.8718 81.7297 93.7976L78.8675 109.539C78.9372 109.552 78.9878 109.562 79.0276 109.569C79.0667 109.577 79.0887 109.582 79.0986 109.584C79.1173 109.588 79.0787 109.58 79.0059 109.558L83.6035 94.2331ZM73.6913 90.0116C73.3364 94.1276 73.2714 98.2354 73.305 101.968L89.3044 101.824C89.2731 98.351 89.3379 94.7994 89.6321 91.3858L73.6913 90.0116ZM86.2583 59.7212C80.5667 66.215 75.004 74.7093 73.691 90.0149L89.6324 91.3825C90.5913 80.2047 94.3107 74.8083 98.2908 70.2673L86.2583 59.7212ZM99.1618 49.3227C94.3317 52.0379 89.9855 55.5358 86.3003 59.6737L98.2487 70.3149C100.757 67.4986 103.715 65.118 107.002 63.2699L99.1618 49.3227ZM127.748 42C117.409 42 107.748 44.4212 99.1163 49.3485L107.048 63.2441C113.085 59.7979 119.977 58 127.748 58V42ZM156.412 49.3485C147.776 44.4187 138.082 42 127.748 42V58C135.524 58 142.447 59.8004 148.481 63.2441L156.412 49.3485ZM169.172 59.6838C165.51 55.5577 161.193 52.0627 156.396 49.3391L148.497 63.2534C151.767 65.1099 154.709 67.4922 157.206 70.3047L169.172 59.6838ZM181.772 90.015C180.459 74.6992 174.889 66.2443 169.22 59.7387L157.157 70.2498C161.16 74.8439 164.873 80.2148 165.831 91.3825L181.772 90.015ZM182.158 102.039C182.227 98.1684 182.124 94.0911 181.772 90.0116L165.831 91.3858C166.129 94.8359 166.221 98.3531 166.16 101.753L182.158 102.039ZM172.809 93.9996C172.718 94.0214 172.667 94.0335 172.622 94.0437C172.58 94.0533 172.574 94.0542 172.59 94.0511L175.728 109.74C176.058 109.674 176.374 109.598 176.515 109.565L172.809 93.9996ZM173.596 93.8239C173.265 93.89 172.95 93.9662 172.809 93.9997L176.515 109.565C176.606 109.543 176.657 109.531 176.702 109.521C176.743 109.511 176.75 109.51 176.734 109.513L173.596 93.8239ZM178.994 93.2791C177.151 93.2719 175.313 93.4604 173.51 93.8416L176.82 109.496C177.514 109.349 178.221 109.276 178.931 109.279L178.994 93.2791ZM199.519 107.003C196.219 98.3283 188.042 93.2791 178.962 93.2791V109.279C182.021 109.279 183.839 110.786 184.564 112.691L199.519 107.003ZM200.931 116.11C201.116 112.993 200.629 109.872 199.502 106.96L184.581 112.735C184.879 113.506 185.008 114.332 184.959 115.157L200.931 116.11ZM198.424 125.025C199.89 122.268 200.745 119.227 200.931 116.11L184.959 115.157C184.91 115.982 184.683 116.787 184.295 117.517L198.424 125.025ZM189.419 134.764C193.268 132.103 196.376 128.922 198.441 124.994L184.279 117.549C183.682 118.684 182.572 120.046 180.319 121.604L189.419 134.764ZM186.591 136.644C187.654 135.952 188.724 135.258 189.493 134.712L180.245 121.656C179.796 121.974 179.053 122.46 177.862 123.234L186.591 136.644ZM185.608 137.284C185.949 137.062 186.276 136.849 186.591 136.644L177.863 123.234C177.549 123.439 177.212 123.657 176.86 123.888L185.608 137.284ZM184.161 138.23C184.683 137.891 185.222 137.542 185.672 137.242L176.796 123.93C176.45 124.161 176.006 124.449 175.455 124.806L184.161 138.23ZM182.199 139.514C182.841 139.086 183.509 138.653 184.161 138.23L175.455 124.806C174.816 125.22 174.064 125.708 173.324 126.202L182.199 139.514ZM183.588 138.098C183.243 138.644 182.789 139.114 182.254 139.477L173.268 126.239C171.979 127.114 170.884 128.247 170.053 129.565L183.588 138.098ZM184.396 133.122C184.401 133.136 184.451 133.273 184.502 133.507C184.555 133.747 184.615 134.116 184.621 134.584C184.634 135.669 184.353 136.654 183.976 137.409L169.665 130.254C169.028 131.528 168.6 133.049 168.622 134.783C168.641 136.343 169.021 137.669 169.374 138.63L184.396 133.122ZM186.421 136.555C185.555 135.301 184.803 133.971 184.175 132.582L169.595 139.171C170.618 141.435 171.844 143.603 173.256 145.648L186.421 136.555ZM200.79 148.77C194.318 145.335 189.607 141.205 186.438 136.58L173.239 145.623C178.119 152.746 184.962 158.483 193.289 162.903L200.79 148.77ZM202.759 149.784C202.026 149.417 201.439 149.123 200.87 148.813L193.209 162.859C194.069 163.328 194.909 163.748 195.604 164.095L202.759 149.784ZM204.279 150.569C204.049 150.437 203.034 149.828 201.916 149.421L196.448 164.458C196.285 164.399 196.165 164.346 196.096 164.314C196.027 164.283 195.99 164.263 195.994 164.265C195.999 164.268 196.025 164.281 196.087 164.316C196.116 164.333 196.151 164.352 196.193 164.376C196.236 164.401 196.281 164.426 196.335 164.457L204.279 150.569ZM204.354 150.612L204.279 150.568L196.335 164.457L196.411 164.501L204.354 150.612Z" fill="black" mask="url(#path-3-inside-1_2001_334)"/>\n            </svg>\n            '
                },
                custom: {
                    filled: {
                        circle: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C57.3076 0 0 57.3076 0 128C0 198.692 57.3076 256 128 256C198.692 256 256 198.692 256 128C256 57.3076 198.692 0 128 0ZM168.018 75.1134C157.629 51.8201 135.599 50.0066 129.102 50.0066L128.708 50L125.958 50.0986C119.475 50.0986 97.5097 51.8727 87.4099 75.0477C83.9467 82.7778 84.7389 95.9324 85.3796 106.572L85.3952 106.83L85.697 110.569C85.1655 110.865 84.1811 111.259 82.6455 111.259C80.5782 111.259 78.1567 110.563 75.4004 109.288C74.6588 108.992 73.8451 108.802 72.8869 108.802C69.645 108.802 65.8125 110.865 65.2218 114.012C64.8281 116.266 65.8125 119.519 73.0772 122.377C73.7729 122.673 74.5538 122.968 75.3479 123.159L75.5366 123.222C78.4778 124.214 82.8366 125.683 84.0892 128.474C84.7783 129.946 84.4895 131.918 83.3083 134.184L83.2033 134.375C82.803 135.302 73.1822 157.241 51.762 160.789C50.0885 161.079 48.9073 162.537 49.0057 164.134C49.0254 164.627 49.1632 165.198 49.3667 165.612C50.9351 169.45 57.7077 172.209 70.2947 173.668C70.6006 174.05 70.8989 175.341 71.1572 176.459C71.237 176.804 71.3129 177.133 71.3841 177.413C71.4954 177.854 71.5918 178.313 71.6902 178.781C71.8527 179.554 72.0206 180.353 72.27 181.139C72.6638 182.427 73.6416 183.899 76.096 183.899C77.0738 183.899 78.2551 183.695 79.6398 183.413C79.791 183.384 79.9458 183.354 80.1044 183.323C82.1072 182.936 84.7036 182.434 87.9874 182.434C89.9496 182.434 92.0168 182.624 94.0774 182.92C97.9805 183.604 101.29 185.927 105.177 188.656L105.28 188.728C110.871 192.756 117.165 197.191 126.798 197.191H127.776C127.977 197.191 128.175 197.216 128.372 197.241C128.567 197.266 128.761 197.29 128.958 197.29C138.538 197.29 144.906 192.812 150.482 188.892L150.575 188.827C154.512 186.067 157.944 183.702 161.882 183.018C163.943 182.631 165.905 182.532 167.874 182.532C171.207 182.532 173.865 182.926 176.228 183.419C177.704 183.702 178.872 183.905 179.758 183.905H179.955C181.826 183.905 183.099 183.025 183.597 181.244C183.991 179.976 184.287 178.787 184.477 177.611C184.496 177.524 184.516 177.435 184.537 177.344C184.82 176.083 185.192 174.423 185.553 173.865C197.845 172.006 204.624 169.253 206.199 165.514C206.396 165.014 206.494 164.528 206.494 164.035C206.593 162.465 205.411 160.98 203.738 160.691C182.359 157.157 172.733 135.306 172.299 134.322L172.297 134.316L172.198 134.217C171.01 131.957 170.82 129.986 171.411 128.514C172.684 125.557 177.206 124.079 180.159 123.192C180.647 123.032 181.106 122.869 181.517 122.722C181.851 122.603 182.154 122.495 182.416 122.41C187.817 120.248 190.475 117.685 190.377 114.735C190.377 112.376 188.513 110.208 185.56 109.229C184.575 108.828 183.414 108.637 182.219 108.637C181.432 108.637 180.257 108.743 179.174 109.321C176.72 110.51 174.364 111.193 172.395 111.299C171.096 111.299 170.256 111.003 169.764 110.707C169.816 109.623 169.882 108.539 169.96 107.356L169.98 106.962C170.663 96.2647 171.49 82.9523 168.018 75.1134Z"/>\n                </svg>\n                ',
                        square: '<svg width="256" height="256" viewBox="0 0 256 256" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10V246C0 251.523 4.47715 256 10 256H246C251.523 256 256 251.523 256 246V10C256 4.47715 251.523 0 246 0H10ZM168.018 75.1134C157.629 51.8201 135.599 50.0066 129.102 50.0066L128.708 50L125.958 50.0986C119.475 50.0986 97.5097 51.8727 87.4099 75.0477C83.9467 82.7778 84.7389 95.9324 85.3796 106.572L85.3952 106.83L85.697 110.569C85.1655 110.865 84.1811 111.259 82.6455 111.259C80.5782 111.259 78.1567 110.563 75.4004 109.288C74.6588 108.992 73.8451 108.802 72.8869 108.802C69.645 108.802 65.8125 110.865 65.2218 114.012C64.8281 116.266 65.8125 119.519 73.0772 122.377C73.7729 122.673 74.5538 122.968 75.3479 123.159L75.5366 123.222C78.4778 124.214 82.8366 125.683 84.0892 128.474C84.7783 129.946 84.4895 131.918 83.3083 134.184L83.2033 134.375C82.803 135.302 73.1822 157.241 51.762 160.789C50.0885 161.079 48.9073 162.537 49.0057 164.134C49.0254 164.627 49.1632 165.198 49.3667 165.612C50.9351 169.45 57.7077 172.209 70.2947 173.668C70.6006 174.05 70.8989 175.341 71.1572 176.459C71.237 176.804 71.3129 177.133 71.3841 177.413C71.4954 177.854 71.5918 178.313 71.6902 178.781C71.8527 179.554 72.0206 180.353 72.27 181.139C72.6638 182.427 73.6416 183.899 76.096 183.899C77.0738 183.899 78.2551 183.695 79.6398 183.413C79.791 183.384 79.9458 183.354 80.1044 183.323C82.1072 182.936 84.7036 182.434 87.9874 182.434C89.9496 182.434 92.0168 182.624 94.0774 182.92C97.9805 183.604 101.29 185.927 105.177 188.656L105.28 188.728C110.871 192.756 117.165 197.191 126.798 197.191H127.776C127.977 197.191 128.175 197.216 128.372 197.241C128.567 197.266 128.761 197.29 128.958 197.29C138.538 197.29 144.906 192.812 150.482 188.892L150.575 188.827C154.512 186.067 157.944 183.702 161.882 183.018C163.943 182.631 165.905 182.532 167.874 182.532C171.207 182.532 173.865 182.926 176.228 183.419C177.704 183.702 178.872 183.905 179.758 183.905H179.955C181.826 183.905 183.099 183.025 183.597 181.244C183.991 179.976 184.287 178.787 184.477 177.611C184.496 177.524 184.516 177.435 184.537 177.344C184.82 176.083 185.192 174.423 185.553 173.865C197.845 172.006 204.624 169.253 206.199 165.514C206.396 165.014 206.494 164.528 206.494 164.035C206.593 162.465 205.411 160.98 203.738 160.691C182.359 157.157 172.733 135.306 172.299 134.322L172.297 134.316L172.198 134.217C171.01 131.957 170.82 129.986 171.411 128.514C172.684 125.557 177.206 124.079 180.159 123.192C180.647 123.032 181.106 122.869 181.517 122.722C181.851 122.603 182.154 122.495 182.416 122.41C187.817 120.248 190.475 117.685 190.377 114.735C190.377 112.376 188.513 110.208 185.56 109.229C184.575 108.828 183.414 108.637 182.219 108.637C181.432 108.637 180.257 108.743 179.174 109.321C176.72 110.51 174.364 111.193 172.395 111.299C171.096 111.299 170.256 111.003 169.764 110.707C169.816 109.623 169.882 108.539 169.96 107.356L169.98 106.962C170.663 96.2647 171.49 82.9523 168.018 75.1134Z"/>\n                </svg>\n\n                '
                    },
                    outline: {
                        circle: '<svg width="265" height="265" viewBox="0 0 265 265" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M132.5 0.5C59.5984 0.5 0.5 59.5984 0.5 132.5C0.5 205.402 59.5984 264.5 132.5 264.5C205.402 264.5 264.5 205.402 264.5 132.5C264.5 59.5984 205.402 0.5 132.5 0.5ZM8.5 132.5C8.5 64.0167 64.0167 8.5 132.5 8.5C200.983 8.5 256.5 64.0167 256.5 132.5C256.5 200.983 200.983 256.5 132.5 256.5C64.0167 256.5 8.5 200.983 8.5 132.5ZM172.669 83.614C162.267 60.3201 140.209 58.5066 133.704 58.5066L133.309 58.5L130.556 58.5986C124.064 58.5986 102.071 60.3727 91.9587 83.5483C88.4911 91.2786 89.2843 104.433 89.9258 115.073L89.9414 115.332L90.2437 119.071C89.7114 119.366 88.7258 119.761 87.1882 119.761C85.1183 119.761 82.6937 119.064 79.9339 117.789C79.1914 117.494 78.3766 117.303 77.4173 117.303C74.1712 117.303 70.3338 119.366 69.7424 122.514C69.3482 124.768 70.3338 128.02 77.6078 130.879C78.3043 131.174 79.0863 131.47 79.8813 131.66L80.0704 131.724C83.0154 132.716 87.3796 134.185 88.6338 136.976C89.3237 138.448 89.0346 140.419 87.8518 142.686L87.7467 142.877C87.3459 143.803 77.7129 165.744 56.2655 169.292C54.5899 169.581 53.4072 171.04 53.5057 172.637C53.5254 173.129 53.6634 173.701 53.8671 174.115C55.4376 177.952 62.2188 180.712 74.8217 182.171C75.1281 182.553 75.4267 183.844 75.6854 184.962C75.7652 185.307 75.8412 185.636 75.9125 185.916C76.024 186.357 76.1205 186.816 76.219 187.284C76.3818 188.057 76.5499 188.856 76.7996 189.642C77.1938 190.93 78.1729 192.402 80.6304 192.402C81.6095 192.402 82.7923 192.198 84.1787 191.916C84.3301 191.887 84.4852 191.857 84.6441 191.826C86.6494 191.439 89.249 190.937 92.5369 190.937C94.5016 190.937 96.5714 191.127 98.6347 191.423C102.543 192.107 105.857 194.431 109.748 197.159L109.851 197.231C115.45 201.259 121.751 205.695 131.397 205.695H132.376C132.578 205.695 132.775 205.72 132.973 205.744C133.168 205.769 133.363 205.793 133.559 205.793C143.152 205.793 149.528 201.316 155.111 197.395L155.204 197.33C159.146 194.57 162.583 192.205 166.525 191.521C168.589 191.134 170.553 191.035 172.525 191.035C175.863 191.035 178.524 191.429 180.889 191.922C182.368 192.205 183.537 192.408 184.424 192.408H184.622C186.494 192.408 187.769 191.528 188.268 189.747C188.663 188.479 188.958 187.29 189.149 186.114C189.168 186.027 189.188 185.938 189.209 185.847C189.492 184.586 189.865 182.926 190.227 182.368C202.534 180.509 209.322 177.755 210.899 174.016C211.096 173.517 211.194 173.031 211.194 172.538C211.293 170.968 210.11 169.483 208.434 169.193C187.028 165.66 177.39 143.809 176.956 142.824L176.953 142.818L176.855 142.719C175.665 140.459 175.475 138.488 176.066 137.016C177.341 134.059 181.868 132.58 184.825 131.693C185.315 131.534 185.774 131.37 186.185 131.224C186.52 131.105 186.823 130.997 187.086 130.911C192.493 128.75 195.155 126.187 195.056 123.237C195.056 120.878 193.19 118.709 190.233 117.73C189.247 117.329 188.084 117.139 186.888 117.139C186.1 117.139 184.924 117.244 183.84 117.822C181.382 119.011 179.023 119.695 177.052 119.8C175.751 119.8 174.91 119.504 174.417 119.209C174.469 118.124 174.535 117.04 174.614 115.857L174.634 115.463C175.317 104.766 176.145 91.4531 172.669 83.614Z"/>\n                </svg>\n                ',
                        square: '<svg width="265" height="265" viewBox="0 0 265 265" fill="#23242E" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5V250.5C0.5 258.232 6.76801 264.5 14.5 264.5H250.5C258.232 264.5 264.5 258.232 264.5 250.5V14.5C264.5 6.76801 258.232 0.5 250.5 0.5H14.5ZM8.5 14.5C8.5 11.1863 11.1863 8.5 14.5 8.5H250.5C253.814 8.5 256.5 11.1863 256.5 14.5V250.5C256.5 253.814 253.814 256.5 250.5 256.5H14.5C11.1863 256.5 8.5 253.814 8.5 250.5V14.5ZM172.669 83.614C162.267 60.3201 140.209 58.5066 133.704 58.5066L133.309 58.5L130.556 58.5986C124.064 58.5986 102.071 60.3727 91.9587 83.5483C88.4911 91.2786 89.2843 104.433 89.9258 115.073L89.9414 115.332L90.2437 119.071C89.7114 119.366 88.7258 119.761 87.1882 119.761C85.1183 119.761 82.6937 119.064 79.9339 117.789C79.1914 117.494 78.3766 117.303 77.4173 117.303C74.1712 117.303 70.3338 119.366 69.7424 122.514C69.3482 124.768 70.3338 128.02 77.6078 130.879C78.3043 131.174 79.0863 131.47 79.8813 131.66L80.0704 131.724C83.0154 132.716 87.3796 134.185 88.6338 136.976C89.3237 138.448 89.0346 140.419 87.8518 142.686L87.7467 142.877C87.3459 143.803 77.7129 165.744 56.2655 169.292C54.5899 169.581 53.4072 171.04 53.5057 172.637C53.5254 173.129 53.6634 173.701 53.8671 174.115C55.4376 177.952 62.2188 180.712 74.8217 182.171C75.1281 182.553 75.4267 183.844 75.6854 184.962C75.7652 185.307 75.8412 185.636 75.9125 185.916C76.024 186.357 76.1205 186.816 76.219 187.284C76.3818 188.057 76.5499 188.856 76.7996 189.642C77.1938 190.93 78.1729 192.402 80.6304 192.402C81.6095 192.402 82.7923 192.198 84.1787 191.916C84.3301 191.887 84.4852 191.857 84.6441 191.826C86.6494 191.439 89.249 190.937 92.5369 190.937C94.5016 190.937 96.5714 191.127 98.6347 191.423C102.543 192.107 105.857 194.431 109.748 197.159L109.851 197.231C115.45 201.259 121.751 205.695 131.397 205.695H132.376C132.578 205.695 132.775 205.72 132.973 205.744C133.168 205.769 133.363 205.793 133.559 205.793C143.152 205.793 149.528 201.316 155.111 197.395L155.204 197.33C159.146 194.57 162.583 192.205 166.525 191.521C168.589 191.134 170.553 191.035 172.525 191.035C175.863 191.035 178.524 191.429 180.889 191.922C182.368 192.205 183.537 192.408 184.424 192.408H184.622C186.494 192.408 187.769 191.528 188.268 189.747C188.663 188.479 188.958 187.29 189.149 186.114C189.168 186.027 189.188 185.938 189.209 185.847C189.492 184.586 189.865 182.926 190.227 182.368C202.534 180.509 209.322 177.755 210.899 174.016C211.096 173.517 211.194 173.031 211.194 172.538C211.293 170.968 210.11 169.483 208.434 169.193C187.028 165.66 177.39 143.809 176.956 142.824L176.953 142.818L176.855 142.719C175.665 140.459 175.475 138.488 176.066 137.016C177.341 134.059 181.868 132.58 184.825 131.693C185.314 131.534 185.774 131.37 186.185 131.224C186.52 131.105 186.823 130.997 187.086 130.911C192.493 128.75 195.155 126.187 195.056 123.237C195.056 120.878 193.19 118.709 190.233 117.73C189.247 117.329 188.084 117.139 186.888 117.139C186.1 117.139 184.924 117.244 183.84 117.822C181.382 119.011 179.023 119.695 177.052 119.8C175.751 119.8 174.91 119.504 174.417 119.209C174.469 118.124 174.535 117.04 174.614 115.857L174.634 115.463C175.317 104.766 176.145 91.4531 172.669 83.614Z"/>\n                </svg>\n                '
                    }
                }
            }
        };
        function Ol({attrs: t, item: {socialIcons: {items: e, shape: n, type: i}, settings: {socialIcons: {brandType: s}}}, className: o, wrapperClass: a, control: l={}}) {
            return r.j.jsxs("ul", {
                className: `${o} ${a}`,
                ...t,
                ...l.props,
                children: [e.map((t => r.j.jsx($l, {
                    item: t,
                    iconData: {
                        shape: n,
                        type: i,
                        brandType: s
                    }
                }, t.id))), l.render && l.render()]
            })
        }
        const $l = ({item: t, iconData: {shape: e, type: n, brandType: s}}) => {
            const {settings: o={}, url: a, target: l} = t
              , c = we({
                hrefType: null == o ? void 0 : o.hrefType,
                noFollow: null == o ? void 0 : o.noFollow,
                hrefValue: a,
                hrefTarget: l
            })
              , {updateModalId: d} = (0,
            i.useContext)(R);
            return r.j.jsx("li", {
                children: r.j.jsx("a", {
                    onClick: () => {
                        "popup" === o.hrefType && d(a)
                    }
                    ,
                    ...c,
                    className: me(o.hrefType),
                    dangerouslySetInnerHTML: {
                        __html: (u = t.label,
                        p = s,
                        C = e,
                        f = n,
                        (!u || u.includes("Item")) && (u = "Apple Podcast"),
                        "brand" === p ? Il[u].brand[C] : Il[u] ? Il[u].custom[f][C] : null)
                    }
                })
            }, t.id);
            var u, p, C, f
        }
        ;
        function Vl({InteractiveComponent: t, className: e, renderer: n, item: i, shouldType: s, control: o={}}) {
            const {progressbar: {items: a, label: l, tooltip: c, progressWrapperStyle: d}} = i
              , u = n === r.B;
            return r.j.jsxs("div", {
                className: e,
                ...o.props,
                children: [a.map((n => r.j.jsxs("div", {
                    className: "progressbar",
                    children: [l && r.j.jsx("label", {
                        children: n.label
                    }), r.j.jsxs("div", {
                        className: `progress-horizontal dorik-progress-${n.id}`,
                        children: [l && (u ? r.j.jsx(t, {
                            className: "label-onBar",
                            as: "label",
                            typekey: `${e}-progressbar-${n.id}`,
                            shouldType: s,
                            strings: [n.label]
                        }) : r.j.jsx("label", {
                            className: "label-onBar",
                            children: n.label
                        })), c && r.j.jsxs("div", {
                            className: "tooltip",
                            children: [n.value || 50, "%", r.j.jsx("div", {
                                className: "triangle"
                            })]
                        })]
                    })]
                }, n.id))), o.render && o.render()]
            })
        }
        Ol.shouldRender = ({item: {socialIcons: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ,
        Vl.shouldRender = ({item: {progressbar: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Rl = ({item: t, attrs: e, className: n, wrapperClass: s, control: o={}}) => {
            const {time: a, date: l, finishText: c, GMT: d, settings: {zero: u, onlyHours: p, style: C}, text: f} = t.counter
              , h = (0,
            i.useRef)()
              , m = (0,
            i.useRef)();
            let g;
            if (l && a) {
                let t = `${(0,
                r.f)(new Date(l), "MM/dd/yyyy")} ${a}  ${d ? "GMT" + d : ""}`;
                g = Date.parse(t)
            }
            Xe({
                src: "https://assets.dorik.com/common/CountDownTimer-1.0.0.js",
                onLoad: qe({
                    plugin: "CountDownTimer",
                    instantiator(t) {
                        if (m.current && m.current(),
                        t) {
                            const {destroy: e} = t(h.current, {
                                zero: u,
                                onlyHours: p,
                                endtime: g
                            });
                            m.current = e
                        }
                    }
                }),
                dep: [g, u, p]
            });
            return r.j.jsxs("div", {
                className: `${n} ${s} counter-wrapper`,
                ...e,
                ...o.props,
                ref: t => {
                    h.current = t,
                    o.props && (o.props.ref.current = t)
                }
                ,
                children: [r.j.jsx("div", {
                    className: "wrapper",
                    children: ["days", "hours", "minutes", "seconds"].map(( (t, e) => r.j.jsxs(i.Fragment, {
                        children: [r.j.jsxs("div", {
                            className: "counter-wrapper",
                            children: [r.j.jsx("span", {
                                className: `counter-value ${t}`
                            }), r.j.jsx("span", {
                                className: `counter-text ${t}-text`,
                                children: f[t]
                            })]
                        }), "none" !== C && "seconds" !== t && r.j.jsxs("div", {
                            className: `counter--separator ${t}-separator`,
                            children: ["colon" === C && r.j.jsx("span", {
                                className: "counter--separator__colon",
                                children: ":"
                            }), "line" === C && r.j.jsx("span", {
                                className: "counter--separator__line"
                            })]
                        })]
                    }, e)))
                }), r.j.jsx("p", {
                    className: "finish-text",
                    children: c
                }), o.render && o.render()]
            })
        }
        ;
        Rl.shouldRender = ({item: {counter: t={}}, renderer: e}) => !e || t.finishText.trim();
        for (var Pl = {}, Hl = {
            byteLength: function(t) {
                var e = Yl(t)
                  , n = e[0]
                  , r = e[1];
                return 3 * (n + r) / 4 - r
            },
            toByteArray: function(t) {
                var e, n, r = Yl(t), i = r[0], s = r[1], o = new Ul(function(t, e, n) {
                    return 3 * (e + n) / 4 - n
                }(0, i, s)), a = 0, l = s > 0 ? i - 4 : i;
                for (n = 0; n < l; n += 4)
                    e = Fl[t.charCodeAt(n)] << 18 | Fl[t.charCodeAt(n + 1)] << 12 | Fl[t.charCodeAt(n + 2)] << 6 | Fl[t.charCodeAt(n + 3)],
                    o[a++] = e >> 16 & 255,
                    o[a++] = e >> 8 & 255,
                    o[a++] = 255 & e;
                return 2 === s && (e = Fl[t.charCodeAt(n)] << 2 | Fl[t.charCodeAt(n + 1)] >> 4,
                o[a++] = 255 & e),
                1 === s && (e = Fl[t.charCodeAt(n)] << 10 | Fl[t.charCodeAt(n + 1)] << 4 | Fl[t.charCodeAt(n + 2)] >> 2,
                o[a++] = e >> 8 & 255,
                o[a++] = 255 & e),
                o
            },
            fromByteArray: function(t) {
                for (var e, n = t.length, r = n % 3, i = [], s = 16383, o = 0, a = n - r; o < a; o += s)
                    i.push(ql(t, o, o + s > a ? a : o + s));
                return 1 === r ? (e = t[n - 1],
                i.push(Bl[e >> 2] + Bl[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1],
                i.push(Bl[e >> 10] + Bl[e >> 4 & 63] + Bl[e << 2 & 63] + "=")),
                i.join("")
            }
        }, Bl = [], Fl = [], Ul = typeof Uint8Array < "u" ? Uint8Array : Array, Dl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zl = 0, Gl = Dl.length; zl < Gl; ++zl)
            Bl[zl] = Dl[zl],
            Fl[Dl.charCodeAt(zl)] = zl;
        function Yl(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = t.indexOf("=");
            return -1 === n && (n = e),
            [n, n === e ? 0 : 4 - n % 4]
        }
        function Xl(t) {
            return Bl[t >> 18 & 63] + Bl[t >> 12 & 63] + Bl[t >> 6 & 63] + Bl[63 & t]
        }
        function ql(t, e, n) {
            for (var r, i = [], s = e; s < n; s += 3)
                r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
                i.push(Xl(r));
            return i.join("")
        }
        Fl[45] = 62,
        Fl[95] = 63;
        var Wl = {
            read: function(t, e, n, r, i) {
                var s, o, a = 8 * i - r - 1, l = (1 << a) - 1, c = l >> 1, d = -7, u = n ? i - 1 : 0, p = n ? -1 : 1, C = t[e + u];
                for (u += p,
                s = C & (1 << -d) - 1,
                C >>= -d,
                d += a; d > 0; s = 256 * s + t[e + u],
                u += p,
                d -= 8)
                    ;
                for (o = s & (1 << -d) - 1,
                s >>= -d,
                d += r; d > 0; o = 256 * o + t[e + u],
                u += p,
                d -= 8)
                    ;
                if (0 === s)
                    s = 1 - c;
                else {
                    if (s === l)
                        return o ? NaN : 1 / 0 * (C ? -1 : 1);
                    o += Math.pow(2, r),
                    s -= c
                }
                return (C ? -1 : 1) * o * Math.pow(2, s - r)
            },
            write: function(t, e, n, r, i, s) {
                var o, a, l, c = 8 * s - i - 1, d = (1 << c) - 1, u = d >> 1, p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = r ? 0 : s - 1, f = r ? 1 : -1, h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e),
                isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
                o = d) : (o = Math.floor(Math.log(e) / Math.LN2),
                e * (l = Math.pow(2, -o)) < 1 && (o--,
                l *= 2),
                (e += o + u >= 1 ? p / l : p * Math.pow(2, 1 - u)) * l >= 2 && (o++,
                l /= 2),
                o + u >= d ? (a = 0,
                o = d) : o + u >= 1 ? (a = (e * l - 1) * Math.pow(2, i),
                o += u) : (a = e * Math.pow(2, u - 1) * Math.pow(2, i),
                o = 0)); i >= 8; t[n + C] = 255 & a,
                C += f,
                a /= 256,
                i -= 8)
                    ;
                for (o = o << i | a,
                c += i; c > 0; t[n + C] = 255 & o,
                C += f,
                o /= 256,
                c -= 8)
                    ;
                t[n + C - f] |= 128 * h
            }
        };
        !function(t) {
            const e = Hl
              , n = Wl
              , r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.Buffer = o,
            t.SlowBuffer = function(t) {
                return +t != t && (t = 0),
                o.alloc(+t)
            }
            ,
            t.INSPECT_MAX_BYTES = 50;
            const i = 2147483647;
            function s(t) {
                if (t > i)
                    throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, o.prototype),
                e
            }
            function o(t, e, n) {
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    return c(t)
                }
                return a(t, e, n)
            }
            function a(t, e, n) {
                if ("string" == typeof t)
                    return function(t, e) {
                        if (("string" != typeof e || "" === e) && (e = "utf8"),
                        !o.isEncoding(e))
                            throw new TypeError("Unknown encoding: " + e);
                        const n = 0 | C(t, e);
                        let r = s(n);
                        const i = r.write(t, e);
                        return i !== n && (r = r.slice(0, i)),
                        r
                    }(t, e);
                if (ArrayBuffer.isView(t))
                    return function(t) {
                        if (Y(t, Uint8Array)) {
                            const e = new Uint8Array(t);
                            return u(e.buffer, e.byteOffset, e.byteLength)
                        }
                        return d(t)
                    }(t);
                if (null == t)
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (Y(t, ArrayBuffer) || t && Y(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(t, SharedArrayBuffer) || t && Y(t.buffer, SharedArrayBuffer)))
                    return u(t, e, n);
                if ("number" == typeof t)
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                const r = t.valueOf && t.valueOf();
                if (null != r && r !== t)
                    return o.from(r, e, n);
                const i = function(t) {
                    if (o.isBuffer(t)) {
                        const e = 0 | p(t.length)
                          , n = s(e);
                        return 0 === n.length || t.copy(n, 0, 0, e),
                        n
                    }
                    if (void 0 !== t.length)
                        return "number" != typeof t.length || X(t.length) ? s(0) : d(t);
                    if ("Buffer" === t.type && Array.isArray(t.data))
                        return d(t.data)
                }(t);
                if (i)
                    return i;
                if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                    return o.from(t[Symbol.toPrimitive]("string"), e, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }
            function l(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be of type number');
                if (t < 0)
                    throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }
            function c(t) {
                return l(t),
                s(t < 0 ? 0 : 0 | p(t))
            }
            function d(t) {
                const e = t.length < 0 ? 0 : 0 | p(t.length)
                  , n = s(e);
                for (let r = 0; r < e; r += 1)
                    n[r] = 255 & t[r];
                return n
            }
            function u(t, e, n) {
                if (e < 0 || t.byteLength < e)
                    throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (n || 0))
                    throw new RangeError('"length" is outside of buffer bounds');
                let r;
                return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,e) : new Uint8Array(t,e,n),
                Object.setPrototypeOf(r, o.prototype),
                r
            }
            function p(t) {
                if (t >= i)
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }
            function C(t, e) {
                if (o.isBuffer(t))
                    return t.length;
                if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer))
                    return t.byteLength;
                if ("string" != typeof t)
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const n = t.length
                  , r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n)
                    return 0;
                let i = !1;
                for (; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return D(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return z(t).length;
                    default:
                        if (i)
                            return r ? -1 : D(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function f(t, e, n) {
                let r = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length || ((void 0 === n || n > this.length) && (n = this.length),
                n <= 0) || (n >>>= 0) <= (e >>>= 0))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return k(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return j(this, e, n);
                    case "ascii":
                        return E(this, e, n);
                    case "latin1":
                    case "binary":
                        return N(this, e, n);
                    case "base64":
                        return x(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return _(this, e, n);
                    default:
                        if (r)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        r = !0
                    }
            }
            function h(t, e, n) {
                const r = t[e];
                t[e] = t[n],
                t[n] = r
            }
            function m(t, e, n, r, i) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof n ? (r = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                X(n = +n) && (n = i ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length) {
                    if (i)
                        return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!i)
                        return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = o.from(e, r)),
                o.isBuffer(e))
                    return 0 === e.length ? -1 : g(t, e, n, r, i);
                if ("number" == typeof e)
                    return e &= 255,
                    "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [e], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }
            function g(t, e, n, r, i) {
                let s, o = 1, a = t.length, l = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    o = 2,
                    a /= 2,
                    l /= 2,
                    n /= 2
                }
                function c(t, e) {
                    return 1 === o ? t[e] : t.readUInt16BE(e * o)
                }
                if (i) {
                    let r = -1;
                    for (s = n; s < a; s++)
                        if (c(t, s) === c(e, -1 === r ? 0 : s - r)) {
                            if (-1 === r && (r = s),
                            s - r + 1 === l)
                                return r * o
                        } else
                            -1 !== r && (s -= s - r),
                            r = -1
                } else
                    for (n + l > a && (n = a - l),
                    s = n; s >= 0; s--) {
                        let n = !0;
                        for (let r = 0; r < l; r++)
                            if (c(t, s + r) !== c(e, r)) {
                                n = !1;
                                break
                            }
                        if (n)
                            return s
                    }
                return -1
            }
            function v(t, e, n, r) {
                n = Number(n) || 0;
                const i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                const s = e.length;
                let o;
                for (r > s / 2 && (r = s / 2),
                o = 0; o < r; ++o) {
                    const r = parseInt(e.substr(2 * o, 2), 16);
                    if (X(r))
                        return o;
                    t[n + o] = r
                }
                return o
            }
            function y(t, e, n, r) {
                return G(D(e, t.length - n), t, n, r)
            }
            function w(t, e, n, r) {
                return G(function(t) {
                    const e = [];
                    for (let n = 0; n < t.length; ++n)
                        e.push(255 & t.charCodeAt(n));
                    return e
                }(e), t, n, r)
            }
            function L(t, e, n, r) {
                return G(z(e), t, n, r)
            }
            function b(t, e, n, r) {
                return G(function(t, e) {
                    let n, r, i;
                    const s = [];
                    for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        n = t.charCodeAt(o),
                        r = n >> 8,
                        i = n % 256,
                        s.push(i),
                        s.push(r);
                    return s
                }(e, t.length - n), t, n, r)
            }
            function x(t, n, r) {
                return 0 === n && r === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(n, r))
            }
            function j(t, e, n) {
                n = Math.min(t.length, n);
                const r = [];
                let i = e;
                for (; i < n; ) {
                    const e = t[i];
                    let s = null
                      , o = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + o <= n) {
                        let n, r, a, l;
                        switch (o) {
                        case 1:
                            e < 128 && (s = e);
                            break;
                        case 2:
                            n = t[i + 1],
                            128 === (192 & n) && (l = (31 & e) << 6 | 63 & n,
                            l > 127 && (s = l));
                            break;
                        case 3:
                            n = t[i + 1],
                            r = t[i + 2],
                            128 === (192 & n) && 128 === (192 & r) && (l = (15 & e) << 12 | (63 & n) << 6 | 63 & r,
                            l > 2047 && (l < 55296 || l > 57343) && (s = l));
                            break;
                        case 4:
                            n = t[i + 1],
                            r = t[i + 2],
                            a = t[i + 3],
                            128 === (192 & n) && 128 === (192 & r) && 128 === (192 & a) && (l = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a,
                            l > 65535 && l < 1114112 && (s = l))
                        }
                    }
                    null === s ? (s = 65533,
                    o = 1) : s > 65535 && (s -= 65536,
                    r.push(s >>> 10 & 1023 | 55296),
                    s = 56320 | 1023 & s),
                    r.push(s),
                    i += o
                }
                return function(t) {
                    const e = t.length;
                    if (e <= M)
                        return String.fromCharCode.apply(String, t);
                    let n = ""
                      , r = 0;
                    for (; r < e; )
                        n += String.fromCharCode.apply(String, t.slice(r, r += M));
                    return n
                }(r)
            }
            t.kMaxLength = i,
            o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const t = new Uint8Array(1)
                      , e = {
                        foo: function() {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype),
                    Object.setPrototypeOf(t, e),
                    42 === t.foo()
                } catch {
                    return !1
                }
            }(),
            !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
            Object.defineProperty(o.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this))
                        return this.buffer
                }
            }),
            Object.defineProperty(o.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this))
                        return this.byteOffset
                }
            }),
            o.poolSize = 8192,
            o.from = function(t, e, n) {
                return a(t, e, n)
            }
            ,
            Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(o, Uint8Array),
            o.alloc = function(t, e, n) {
                return function(t, e, n) {
                    return l(t),
                    t <= 0 ? s(t) : void 0 !== e ? "string" == typeof n ? s(t).fill(e, n) : s(t).fill(e) : s(t)
                }(t, e, n)
            }
            ,
            o.allocUnsafe = function(t) {
                return c(t)
            }
            ,
            o.allocUnsafeSlow = function(t) {
                return c(t)
            }
            ,
            o.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== o.prototype
            }
            ,
            o.compare = function(t, e) {
                if (Y(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
                Y(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
                !o.isBuffer(t) || !o.isBuffer(e))
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e)
                    return 0;
                let n = t.length
                  , r = e.length;
                for (let i = 0, s = Math.min(n, r); i < s; ++i)
                    if (t[i] !== e[i]) {
                        n = t[i],
                        r = e[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }
            ,
            o.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
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
            o.concat = function(t, e) {
                if (!Array.isArray(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return o.alloc(0);
                let n;
                if (void 0 === e)
                    for (e = 0,
                    n = 0; n < t.length; ++n)
                        e += t[n].length;
                const r = o.allocUnsafe(e);
                let i = 0;
                for (n = 0; n < t.length; ++n) {
                    let e = t[n];
                    if (Y(e, Uint8Array))
                        i + e.length > r.length ? (o.isBuffer(e) || (e = o.from(e)),
                        e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
                    else {
                        if (!o.isBuffer(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(r, i)
                    }
                    i += e.length
                }
                return r
            }
            ,
            o.byteLength = C,
            o.prototype._isBuffer = !0,
            o.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2)
                    h(this, e, e + 1);
                return this
            }
            ,
            o.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4)
                    h(this, e, e + 3),
                    h(this, e + 1, e + 2);
                return this
            }
            ,
            o.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8)
                    h(this, e, e + 7),
                    h(this, e + 1, e + 6),
                    h(this, e + 2, e + 5),
                    h(this, e + 3, e + 4);
                return this
            }
            ,
            o.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : f.apply(this, arguments)
            }
            ,
            o.prototype.toLocaleString = o.prototype.toString,
            o.prototype.equals = function(t) {
                if (!o.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === o.compare(this, t)
            }
            ,
            o.prototype.inspect = function() {
                let e = "";
                const n = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
                this.length > n && (e += " ... "),
                "<Buffer " + e + ">"
            }
            ,
            r && (o.prototype[r] = o.prototype.inspect),
            o.prototype.compare = function(t, e, n, r, i) {
                if (Y(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
                !o.isBuffer(t))
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0),
                void 0 === n && (n = t ? t.length : 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = this.length),
                e < 0 || n > t.length || r < 0 || i > this.length)
                    throw new RangeError("out of range index");
                if (r >= i && e >= n)
                    return 0;
                if (r >= i)
                    return -1;
                if (e >= n)
                    return 1;
                if (this === t)
                    return 0;
                let s = (i >>>= 0) - (r >>>= 0)
                  , a = (n >>>= 0) - (e >>>= 0);
                const l = Math.min(s, a)
                  , c = this.slice(r, i)
                  , d = t.slice(e, n);
                for (let o = 0; o < l; ++o)
                    if (c[o] !== d[o]) {
                        s = c[o],
                        a = d[o];
                        break
                    }
                return s < a ? -1 : a < s ? 1 : 0
            }
            ,
            o.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }
            ,
            o.prototype.indexOf = function(t, e, n) {
                return m(this, t, e, n, !0)
            }
            ,
            o.prototype.lastIndexOf = function(t, e, n) {
                return m(this, t, e, n, !1)
            }
            ,
            o.prototype.write = function(t, e, n, r) {
                if (void 0 === e)
                    r = "utf8",
                    n = this.length,
                    e = 0;
                else if (void 0 === n && "string" == typeof e)
                    r = e,
                    n = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0,
                    isFinite(n) ? (n >>>= 0,
                    void 0 === r && (r = "utf8")) : (r = n,
                    n = void 0)
                }
                const i = this.length - e;
                if ((void 0 === n || n > i) && (n = i),
                t.length > 0 && (n < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                let s = !1;
                for (; ; )
                    switch (r) {
                    case "hex":
                        return v(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return y(this, t, e, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return w(this, t, e, n);
                    case "base64":
                        return L(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return b(this, t, e, n);
                    default:
                        if (s)
                            throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(),
                        s = !0
                    }
            }
            ,
            o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            const M = 4096;
            function E(t, e, n) {
                let r = "";
                n = Math.min(t.length, n);
                for (let i = e; i < n; ++i)
                    r += String.fromCharCode(127 & t[i]);
                return r
            }
            function N(t, e, n) {
                let r = "";
                n = Math.min(t.length, n);
                for (let i = e; i < n; ++i)
                    r += String.fromCharCode(t[i]);
                return r
            }
            function k(t, e, n) {
                const r = t.length;
                (!e || e < 0) && (e = 0),
                (!n || n < 0 || n > r) && (n = r);
                let i = "";
                for (let s = e; s < n; ++s)
                    i += q[t[s]];
                return i
            }
            function _(t, e, n) {
                const r = t.slice(e, n);
                let i = "";
                for (let s = 0; s < r.length - 1; s += 2)
                    i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                return i
            }
            function S(t, e, n) {
                if (t % 1 !== 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function A(t, e, n, r, i, s) {
                if (!o.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < s)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length)
                    throw new RangeError("Index out of range")
            }
            function T(t, e, n, r, i) {
                H(e, r, i, t, n, 7);
                let s = Number(e & BigInt(4294967295));
                t[n++] = s,
                s >>= 8,
                t[n++] = s,
                s >>= 8,
                t[n++] = s,
                s >>= 8,
                t[n++] = s;
                let o = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[n++] = o,
                o >>= 8,
                t[n++] = o,
                o >>= 8,
                t[n++] = o,
                o >>= 8,
                t[n++] = o,
                n
            }
            function Z(t, e, n, r, i) {
                H(e, r, i, t, n, 7);
                let s = Number(e & BigInt(4294967295));
                t[n + 7] = s,
                s >>= 8,
                t[n + 6] = s,
                s >>= 8,
                t[n + 5] = s,
                s >>= 8,
                t[n + 4] = s;
                let o = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[n + 3] = o,
                o >>= 8,
                t[n + 2] = o,
                o >>= 8,
                t[n + 1] = o,
                o >>= 8,
                t[n] = o,
                n + 8
            }
            function I(t, e, n, r, i, s) {
                if (n + r > t.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function O(t, e, r, i, s) {
                return e = +e,
                r >>>= 0,
                s || I(t, 0, r, 4),
                n.write(t, e, r, i, 23, 4),
                r + 4
            }
            function $(t, e, r, i, s) {
                return e = +e,
                r >>>= 0,
                s || I(t, 0, r, 8),
                n.write(t, e, r, i, 52, 8),
                r + 8
            }
            o.prototype.slice = function(t, e) {
                const n = this.length;
                (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                e < t && (e = t);
                const r = this.subarray(t, e);
                return Object.setPrototypeOf(r, o.prototype),
                r
            }
            ,
            o.prototype.readUintLE = o.prototype.readUIntLE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t]
                  , i = 1
                  , s = 0;
                for (; ++s < e && (i *= 256); )
                    r += this[t + s] * i;
                return r
            }
            ,
            o.prototype.readUintBE = o.prototype.readUIntBE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t + --e]
                  , i = 1;
                for (; e > 0 && (i *= 256); )
                    r += this[t + --e] * i;
                return r
            }
            ,
            o.prototype.readUint8 = o.prototype.readUInt8 = function(t, e) {
                return t >>>= 0,
                e || S(t, 1, this.length),
                this[t]
            }
            ,
            o.prototype.readUint16LE = o.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            o.prototype.readUint16BE = o.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            o.prototype.readUint32LE = o.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            o.prototype.readUint32BE = o.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            o.prototype.readBigUInt64LE = W((function(t) {
                B(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                (void 0 === e || void 0 === n) && F(t, this.length - 8);
                const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
                  , i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
                return BigInt(r) + (BigInt(i) << BigInt(32))
            }
            )),
            o.prototype.readBigUInt64BE = W((function(t) {
                B(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                (void 0 === e || void 0 === n) && F(t, this.length - 8);
                const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t]
                  , i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
                return (BigInt(r) << BigInt(32)) + BigInt(i)
            }
            )),
            o.prototype.readIntLE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t]
                  , i = 1
                  , s = 0;
                for (; ++s < e && (i *= 256); )
                    r += this[t + s] * i;
                return i *= 128,
                r >= i && (r -= Math.pow(2, 8 * e)),
                r
            }
            ,
            o.prototype.readIntBE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = e
                  , i = 1
                  , s = this[t + --r];
                for (; r > 0 && (i *= 256); )
                    s += this[t + --r] * i;
                return i *= 128,
                s >= i && (s -= Math.pow(2, 8 * e)),
                s
            }
            ,
            o.prototype.readInt8 = function(t, e) {
                return t >>>= 0,
                e || S(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            o.prototype.readInt16LE = function(t, e) {
                t >>>= 0,
                e || S(t, 2, this.length);
                const n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            o.prototype.readInt16BE = function(t, e) {
                t >>>= 0,
                e || S(t, 2, this.length);
                const n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            o.prototype.readInt32LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            o.prototype.readInt32BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            o.prototype.readBigInt64LE = W((function(t) {
                B(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                (void 0 === e || void 0 === n) && F(t, this.length - 8);
                const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
                return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            }
            )),
            o.prototype.readBigInt64BE = W((function(t) {
                B(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                (void 0 === e || void 0 === n) && F(t, this.length - 8);
                const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
            }
            )),
            o.prototype.readFloatLE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                n.read(this, t, !0, 23, 4)
            }
            ,
            o.prototype.readFloatBE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                n.read(this, t, !1, 23, 4)
            }
            ,
            o.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0,
                e || S(t, 8, this.length),
                n.read(this, t, !0, 52, 8)
            }
            ,
            o.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0,
                e || S(t, 8, this.length),
                n.read(this, t, !1, 52, 8)
            }
            ,
            o.prototype.writeUintLE = o.prototype.writeUIntLE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                n >>>= 0,
                !r) {
                    A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let i = 1
                  , s = 0;
                for (this[e] = 255 & t; ++s < n && (i *= 256); )
                    this[e + s] = t / i & 255;
                return e + n
            }
            ,
            o.prototype.writeUintBE = o.prototype.writeUIntBE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                n >>>= 0,
                !r) {
                    A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let i = n - 1
                  , s = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
                    this[e + i] = t / s & 255;
                return e + n
            }
            ,
            o.prototype.writeUint8 = o.prototype.writeUInt8 = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 1, 255, 0),
                this[e] = 255 & t,
                e + 1
            }
            ,
            o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 2, 65535, 0),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 2, 65535, 0),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 4, 4294967295, 0),
                this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t,
                e + 4
            }
            ,
            o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 4, 4294967295, 0),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            o.prototype.writeBigUInt64LE = W((function(t, e=0) {
                return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }
            )),
            o.prototype.writeBigUInt64BE = W((function(t, e=0) {
                return Z(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }
            )),
            o.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    A(this, t, e, n, r - 1, -r)
                }
                let i = 0
                  , s = 1
                  , o = 0;
                for (this[e] = 255 & t; ++i < n && (s *= 256); )
                    t < 0 && 0 === o && 0 !== this[e + i - 1] && (o = 1),
                    this[e + i] = (t / s >> 0) - o & 255;
                return e + n
            }
            ,
            o.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    A(this, t, e, n, r - 1, -r)
                }
                let i = n - 1
                  , s = 1
                  , o = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
                    t < 0 && 0 === o && 0 !== this[e + i + 1] && (o = 1),
                    this[e + i] = (t / s >> 0) - o & 255;
                return e + n
            }
            ,
            o.prototype.writeInt8 = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            o.prototype.writeInt16LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 2, 32767, -32768),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            o.prototype.writeInt16BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 2, 32767, -32768),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            o.prototype.writeInt32LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 4, 2147483647, -2147483648),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24,
                e + 4
            }
            ,
            o.prototype.writeInt32BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || A(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            o.prototype.writeBigInt64LE = W((function(t, e=0) {
                return T(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }
            )),
            o.prototype.writeBigInt64BE = W((function(t, e=0) {
                return Z(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }
            )),
            o.prototype.writeFloatLE = function(t, e, n) {
                return O(this, t, e, !0, n)
            }
            ,
            o.prototype.writeFloatBE = function(t, e, n) {
                return O(this, t, e, !1, n)
            }
            ,
            o.prototype.writeDoubleLE = function(t, e, n) {
                return $(this, t, e, !0, n)
            }
            ,
            o.prototype.writeDoubleBE = function(t, e, n) {
                return $(this, t, e, !1, n)
            }
            ,
            o.prototype.copy = function(t, e, n, r) {
                if (!o.isBuffer(t))
                    throw new TypeError("argument should be a Buffer");
                if (n || (n = 0),
                !r && 0 !== r && (r = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                r > 0 && r < n && (r = n),
                r === n || 0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                t.length - e < r - n && (r = t.length - e + n);
                const i = r - n;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
                i
            }
            ,
            o.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e,
                    e = 0,
                    n = this.length) : "string" == typeof n && (r = n,
                    n = this.length),
                    void 0 !== r && "string" != typeof r)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !o.isEncoding(r))
                        throw new TypeError("Unknown encoding: " + r);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === r && e < 128 || "latin1" === r) && (t = e)
                    }
                } else
                    "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= e)
                    return this;
                let i;
                if (e >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (i = e; i < n; ++i)
                        this[i] = t;
                else {
                    const s = o.isBuffer(t) ? t : o.from(t, r)
                      , a = s.length;
                    if (0 === a)
                        throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < n - e; ++i)
                        this[i + e] = s[i % a]
                }
                return this
            }
            ;
            const V = {};
            function R(t, e, n) {
                V[t] = class extends n {
                    constructor() {
                        super(),
                        Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }),
                        this.name = `${this.name} [${t}]`,
                        this.stack,
                        delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }
            function P(t) {
                let e = ""
                  , n = t.length;
                const r = "-" === t[0] ? 1 : 0;
                for (; n >= r + 4; n -= 3)
                    e = `_${t.slice(n - 3, n)}${e}`;
                return `${t.slice(0, n)}${e}`
            }
            function H(t, e, n, r, i, s) {
                if (t > n || t < e) {
                    const r = "bigint" == typeof e ? "n" : "";
                    let i;
                    throw i = s > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8 * (s + 1)}${r}` : `>= -(2${r} ** ${8 * (s + 1) - 1}${r}) and < 2 ** ${8 * (s + 1) - 1}${r}` : `>= ${e}${r} and <= ${n}${r}`,
                    new V.ERR_OUT_OF_RANGE("value",i,t)
                }
                !function(t, e, n) {
                    B(e, "offset"),
                    (void 0 === t[e] || void 0 === t[e + n]) && F(e, t.length - (n + 1))
                }(r, i, s)
            }
            function B(t, e) {
                if ("number" != typeof t)
                    throw new V.ERR_INVALID_ARG_TYPE(e,"number",t)
            }
            function F(t, e, n) {
                throw Math.floor(t) !== t ? (B(t, n),
                new V.ERR_OUT_OF_RANGE(n || "offset","an integer",t)) : e < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS : new V.ERR_OUT_OF_RANGE(n || "offset",`>= ${n ? 1 : 0} and <= ${e}`,t)
            }
            R("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }
            ), RangeError),
            R("ERR_INVALID_ARG_TYPE", (function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }
            ), TypeError),
            R("ERR_OUT_OF_RANGE", (function(t, e, n) {
                let r = `The value of "${t}" is out of range.`
                  , i = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = P(String(n)) : "bigint" == typeof n && (i = String(n),
                (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = P(i)),
                i += "n"),
                r += ` It must be ${e}. Received ${i}`,
                r
            }
            ), RangeError);
            const U = /[^+/0-9A-Za-z-_]/g;
            function D(t, e) {
                let n;
                e = e || 1 / 0;
                const r = t.length;
                let i = null;
                const s = [];
                for (let o = 0; o < r; ++o) {
                    if (n = t.charCodeAt(o),
                    n > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === r) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && s.push(239, 191, 189),
                            i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else
                        i && (e -= 3) > -1 && s.push(239, 191, 189);
                    if (i = null,
                    n < 128) {
                        if ((e -= 1) < 0)
                            break;
                        s.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        s.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return s
            }
            function z(t) {
                return e.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(U, "")).length < 2)
                        return "";
                    for (; t.length % 4 !== 0; )
                        t += "=";
                    return t
                }(t))
            }
            function G(t, e, n, r) {
                let i;
                for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
                    e[i + n] = t[i];
                return i
            }
            function Y(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            function X(t) {
                return t !== t
            }
            const q = function() {
                const t = "0123456789abcdef"
                  , e = new Array(256);
                for (let n = 0; n < 16; ++n) {
                    const r = 16 * n;
                    for (let i = 0; i < 16; ++i)
                        e[r + i] = t[n] + t[i]
                }
                return e
            }();
            function W(t) {
                return typeof BigInt > "u" ? K : t
            }
            function K() {
                throw new Error("BigInt not supported")
            }
        }(Pl);
        const Kl = ({id: t}) => {
            const e = `confirm_${t}`;
            return r.j.jsx("div", {
                style: {
                    position: "absolute",
                    opacity: 0,
                    zIndex: -999
                },
                children: r.j.jsx("label", {
                    htmlFor: e,
                    children: r.j.jsx("input", {
                        type: "text",
                        autoComplete: "off",
                        id: e,
                        name: e,
                        placeholder: `Enter your ${e}`
                    })
                })
            })
        }
        ;
        function Jl({text: t}) {
            return r.j.jsx("div", {
                className: "form-group form-button",
                children: r.j.jsxs("button", {
                    type: "submit",
                    children: [t, r.j.jsx(c.I, {
                        exClass: "spinner fa-spin",
                        iconArgs: {
                            prefix: "fas",
                            iconName: "spinner"
                        },
                        style: {
                            display: "none",
                            marginLeft: 5
                        }
                    })]
                })
            })
        }
        function Ql({field: t}) {
            const {component: e, fieldType: n, data: r={}, ...s} = t
              , {text: o} = r;
            return (0,
            i.createElement)(e, {
                ...s,
                ...r.attr
            }, o)
        }
        function tc({item: t, className: e, attrs: n, interactionDisabled: i}) {
            var s;
            const {form: o={}, fields: a={}, settings: l={}} = t
              , {service: c="mailchimp", webhook: d="", hrefType: u} = l
              , {forwardTo: p, successAction: C} = o
              , f = ve(u, p)
              , h = t => {
                if ("webhook" === l.configType) {
                    const e = {
                        default: {
                            email: "email",
                            firstName: "firstName",
                            lastName: "lastName"
                        },
                        mailchimp: {
                            email: "EMAIL",
                            firstName: "FNAME",
                            lastName: "LNAME"
                        },
                        sendinblue: {
                            email: "EMAIL",
                            firstName: "NAME",
                            lastName: "SURNAME"
                        },
                        mailerlite: {
                            email: "fields[email]",
                            firstName: "fields[name]",
                            lastName: "fields[last_name]"
                        },
                        convertkit: {
                            email: "email_address",
                            firstName: "fields[first_name]",
                            lastName: "fields[last_name]"
                        }
                    }
                      , n = e[c];
                    return n ? n[t] : e.default[t]
                }
                return {
                    email: "email",
                    firstName: "firstName",
                    lastName: "lastName"
                }[t]
            }
              , m = Object.entries(a).map(( ([t,e], n) => !1 === e._enabled ? null : r.j.jsxs("div", {
                className: "form-group",
                "data-testid": "form-group",
                children: [e.label && r.j.jsx("label", {
                    className: "form-label",
                    "data-testid": `label-el-${n}`,
                    children: e.label
                }), r.j.jsx("input", {
                    "data-testid": `input-el-${n}`,
                    name: h(t),
                    className: "form-control",
                    required: "email" === t,
                    type: "email" !== t ? "text" : "email",
                    ...e.attr
                })]
            }, n)));
            return r.j.jsxs("form", {
                ...n,
                id: t.id,
                className: e,
                children: [r.j.jsxs("div", {
                    className: "fields-wrapper",
                    children: [m, r.j.jsxs("button", {
                        onClick: t => i && t.preventDefault(),
                        type: "submit",
                        children: [r.j.jsx("span", {
                            className: "loader hidden",
                            children: r.j.jsx("svg", {
                                viewBox: "0 0 100 100",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    verticalAlign: "middle",
                                    height: "2em"
                                },
                                children: r.j.jsx("path", {
                                    fill: "#fff",
                                    d: "M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50",
                                    children: r.j.jsx("animateTransform", {
                                        attributeName: "transform",
                                        attributeType: "XML",
                                        type: "rotate",
                                        dur: "1s",
                                        from: "0 50 50",
                                        to: "360 50 50",
                                        repeatCount: "indefinite"
                                    })
                                })
                            })
                        }), r.j.jsx("span", {
                            className: "button-content",
                            "data-testid": "submit-button",
                            children: null == (s = null == o ? void 0 : o.button) ? void 0 : s.content
                        })]
                    })]
                }), "forward" === C && r.j.jsx("div", {
                    className: "forward--url",
                    hidden: !0,
                    "data-forward-to": f
                }), "activecampaign" === c && r.j.jsx("div", {
                    style: {
                        display: "none"
                    },
                    className: "success-message",
                    children: o.successMessage
                })]
            })
        }
        const ec = {
            mailerlite: {
                ajax: 1,
                "ml-submit": 1
            }
        };
        function nc({item: t, className: e, renderer: n, attrs: i, shouldType: s, InteractiveComponent: o, control: a={}, interactionDisabled: l}) {
            var d, u, p, C, f, h, m, g, v;
            e = H(t, e);
            const {form: y={}, fields: w=[], settings: L={}} = t
              , {service: b="mailchimp", webhook: x="", hrefType: j} = L;
            l = n === r.B;
            const M = "none" !== (null == (u = null == (d = null == y ? void 0 : y.button) ? void 0 : d.icon) ? void 0 : u.visible) && (null == (C = null == (p = null == y ? void 0 : y.button) ? void 0 : p.icon) ? void 0 : C.icon)
              , {forwardTo: E, successAction: N} = y
              , k = ve(j, E)
              , _ = n === r.B
              , S = t => {
                const e = {
                    default: {
                        email: "email",
                        firstName: "firstName",
                        lastName: "lastName"
                    },
                    mailchimp: {
                        email: "EMAIL",
                        firstName: "FNAME",
                        lastName: "LNAME"
                    },
                    sendinblue: {
                        email: "EMAIL",
                        firstName: "NAME",
                        lastName: "SURNAME"
                    },
                    emailoctopus: {
                        email: "field_0",
                        firstName: "field_1",
                        lastName: "field_2"
                    },
                    mailerlite: {
                        email: "fields[email]",
                        firstName: "fields[name]",
                        lastName: "fields[last_name]"
                    },
                    activecampaign: {
                        email: "email",
                        firstName: "firstname",
                        lastName: "lastname"
                    },
                    convertkit: {
                        email: "email_address",
                        firstName: "fields[first_name]",
                        lastName: "fields[last_name]"
                    }
                }
                  , n = e[b];
                return n ? n[t] : e.default[t]
            }
              , A = w.map(( (t, e) => !1 === t._enabled ? null : r.j.jsxs("div", {
                className: "form-group",
                children: [t.label && r.j.jsx("label", {
                    className: "form-label",
                    children: t.label
                }), r.j.jsx("input", {
                    name: S(t.name),
                    className: "form-control",
                    required: "email" === t.name,
                    type: "email" !== t.name ? "text" : "email",
                    ...t.attr
                })]
            }, e)));
            return r.j.jsxs("form", {
                ...i,
                id: t.id,
                className: e,
                ...a.props,
                children: [r.j.jsxs("div", {
                    className: "fields-wrapper",
                    children: [A, (t => {
                        if (!t)
                            return null;
                        const e = "function" == typeof t ? t(L) : t;
                        return Object.entries(e).map(( ([t,e], n) => r.j.jsx("input", {
                            type: "hidden",
                            value: e,
                            name: t
                        }, n)))
                    }
                    )(ec[b]), r.j.jsx(Kl, {
                        id: t.id
                    }), r.j.jsxs("button", {
                        onClick: t => l && t.preventDefault(),
                        type: "submit",
                        children: [r.j.jsx("span", {
                            className: "loader hidden",
                            children: r.j.jsx("svg", {
                                viewBox: "0 0 100 100",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    verticalAlign: "middle",
                                    height: "2em"
                                },
                                children: r.j.jsx("path", {
                                    fill: "#fff",
                                    d: "M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50",
                                    children: r.j.jsx("animateTransform", {
                                        attributeName: "transform",
                                        attributeType: "XML",
                                        type: "rotate",
                                        dur: "1s",
                                        from: "0 50 50",
                                        to: "360 50 50",
                                        repeatCount: "indefinite"
                                    })
                                })
                            })
                        }), r.j.jsxs("span", {
                            className: "button-content",
                            children: [M && r.j.jsx(c.I, {
                                iconArgs: null == (h = null == (f = null == y ? void 0 : y.button) ? void 0 : f.icon) ? void 0 : h.icon,
                                icon: null == (m = null == y ? void 0 : y.button) ? void 0 : m.icon
                            }), _ ? r.j.jsx(o, {
                                as: "span",
                                typekey: `${e}-btn-${t.id}`,
                                shouldType: s,
                                strings: [null == (g = null == y ? void 0 : y.button) ? void 0 : g.content]
                            }) : r.j.jsx("span", {
                                children: null == (v = null == y ? void 0 : y.button) ? void 0 : v.content
                            })]
                        })]
                    })]
                }), "forward" === N && r.j.jsx("div", {
                    className: "forward--url",
                    hidden: !0,
                    "data-forward-to": k
                }), "activecampaign" === b && r.j.jsx("div", {
                    style: {
                        display: "none"
                    },
                    className: "success-message",
                    children: y.successMessage
                }), a.render && a.render()]
            })
        }
        const rc = t => {
            const {item: e} = t
              , {version: n} = e;
            return "2.0.0" === n ? r.j.jsx(nc, {
                ...t
            }) : r.j.jsx(tc, {
                ...t
            })
        }
        ;
        rc.migration = (t, e) => {
            const {version: n, fields: r} = t;
            if (!n) {
                e([{
                    name: "version",
                    value: "2.0.0"
                }, {
                    name: "fields",
                    value: Object.entries(r).map(( ([t,e]) => ({
                        ...e,
                        fieldType: t,
                        name: t
                    })))
                }])
            }
        }
        ;
        var ic = pe((function(t, e, n) {
            return t + (n ? "_" : "") + e.toLowerCase()
        }
        ))
          , sc = ic;
        const oc = (0,
        r.g)(sc)
          , ac = ({data: t}) => {
            const {htmlClass: e, options: n=[], placeholder: i, ...s} = t;
            return r.j.jsxs("select", {
                ...s,
                className: `form-field-input ${e}`,
                defaultValue: "",
                children: [i && r.j.jsx("option", {
                    value: "",
                    disabled: !0,
                    children: i
                }, "placeholder"), n.map(( ({label: t, value: e}, n) => r.j.jsx("option", {
                    value: e,
                    children: t
                }, n)))]
            })
        }
          , lc = ({data: t}) => {
            const {htmlClass: e, ...n} = t;
            return r.j.jsx("input", {
                ...n,
                className: `form-field-input ${e}`
            })
        }
          , cc = ({data: t}) => {
            const {htmlClass: e, options: n=[], inlineStyle: i="", ...s} = t;
            return r.j.jsx("div", {
                className: i,
                children: n.map(( ({label: t, value: n}, i) => {
                    const o = Math.random().toString(36).substring(2, 10);
                    return r.j.jsxs("div", {
                        children: [r.j.jsx("input", {
                            ...s,
                            id: o,
                            value: n,
                            className: `${e} radio-input`
                        }), r.j.jsx("label", {
                            htmlFor: o,
                            className: "radio-label",
                            children: t
                        })]
                    }, i)
                }
                ))
            })
        }
          , dc = ({data: t}) => {
            const {htmlClass: e, options: n=[], inlineStyle: i="", ...s} = t
              , {contentDocument: o} = V()
              , a = t => {
                const {name: e} = t.target;
                if (s.required) {
                    const t = o.querySelectorAll(`input[name="${e}"]`)
                      , n = [...t].some(( ({checked: t}) => t));
                    t.forEach((t => {
                        n ? t.removeAttribute("required") : t.setAttribute("required", !0)
                    }
                    ))
                }
            }
            ;
            return r.j.jsx("div", {
                className: i,
                "data-checkbox": !!s.required,
                children: n.map(( ({label: t, value: n}, i) => {
                    const o = Math.random().toString(36).substring(2, 10);
                    return r.j.jsxs("div", {
                        children: [r.j.jsx("input", {
                            ...s,
                            id: o,
                            value: n,
                            onChange: a,
                            className: `${e} checkbox-input`
                        }), r.j.jsx("label", {
                            htmlFor: o,
                            className: "checkbox-label",
                            children: t
                        })]
                    }, i)
                }
                ))
            })
        }
          , uc = ({data: t}) => {
            const {htmlClass: e, ...n} = t;
            return r.j.jsx("input", {
                ...n,
                className: `file-upload ${e}`
            })
        }
          , pc = ({data: t, labelText: e, ...n}) => {
            const {id: i, settings: s={}} = n
              , {service: o} = s
              , {htmlClass: a, type: l, content: c, ...d} = t;
            return r.j.jsxs("div", {
                className: "acceptance",
                children: [r.j.jsx("input", {
                    type: "checkbox",
                    ...d,
                    className: a,
                    ..."airtable" === o && {
                        value: `dorik-acceptance-${i}`
                    }
                }), r.j.jsx("label", {
                    htmlFor: d.id,
                    className: "acceptance-label",
                    dangerouslySetInnerHTML: {
                        __html: c || "<p><strong>I agree with all terms and conditions.</strong></p>\n"
                    }
                }), (null == d ? void 0 : d.required) && r.j.jsx("span", {
                    className: "required-mark",
                    children: e
                })]
            })
        }
          , Cc = ({data: t}) => {
            const {htmlClass: e, ...n} = t;
            return r.j.jsx("textarea", {
                ...n,
                className: `form-field-input textarea ${e}`
            })
        }
          , fc = (t, e, n) => {
            let {id: i, columnWidth: s, label: o, htmlId: a, htmlAttributes: l, ...c} = t;
            if (c.id = a || i,
            c.htmlClass = c.htmlClass || "",
            c.name = c.name || oc(o),
            c.options && ("select" === c.type || "checkbox" === c.type || "radio" === c.type ? c.options = (t => {
                let e = Le(t)
                  , n = [];
                for (let r in e)
                    n.push({
                        label: r,
                        value: e[r]
                    });
                return n
            }
            )(c.options) : delete c.options),
            "acceptance" !== c.type && delete c.content,
            l) {
                const t = /^data-[a-z]+\d*(-[a-z\d]+)?="\w+([\s\w~!@#$%^&*()+_\-<>':;]+)?"$/
                  , e = l.filter((e => t.test(e)));
                c = {
                    ...c,
                    ...Le(e)
                }
            }
            switch (t.type) {
            case "select":
                return r.j.jsx(ac, {
                    data: c
                });
            case "textarea":
                return r.j.jsx(Cc, {
                    data: c
                });
            case "radio":
                return r.j.jsx(cc, {
                    data: c
                });
            case "checkbox":
                return r.j.jsx(dc, {
                    data: c
                });
            case "file":
                return r.j.jsx(uc, {
                    data: c
                });
            case "acceptance":
                return r.j.jsx(pc, {
                    ...n,
                    data: c,
                    labelText: e
                });
            default:
                return r.j.jsx(lc, {
                    data: c
                })
            }
        }
          , hc = t => {
            let {htmlAttributes: e, value: n, name: r, label: s} = t
              , o = {};
            return o.name = r || oc(s),
            o.value = n || "",
            e && (o = {
                ...o,
                ...Le(e)
            }),
            (0,
            i.createElement)("input", {
                ...o,
                type: "hidden",
                key: t.id
            })
        }
          , mc = (t, e) => "acceptance" === t.type ? null : r.j.jsxs("label", {
            className: "form-field-label",
            htmlFor: t.htmlId || t.id,
            children: [t.label, (null == t ? void 0 : t.required) && r.j.jsx("span", {
                className: "required-mark",
                children: e
            })]
        })
          , gc = ({item: t, attrs: e, className: n}) => {
            const {customForm: i={}, settings: s={}} = t
              , {toEmail: o, subject: a, items: l, button: c, field: u, forwardTo: p, successAction: C} = i
              , {service: f="email", hrefType: h} = s
              , {isSelected: m, selectedIcon: g} = c.icon
              , {text: v} = c
              , {text: y} = u.requiredText
              , w = ve(h, p)
              , L = null == l ? void 0 : l.map((t => {
                if ("hidden" === t.type)
                    return hc(t);
                const e = t.columnWidth ? Math.ceil(6 * t.columnWidth / 100) : 6;
                return r.j.jsxs("div", {
                    className: `customform-field-wrapper customform-field-${t.type} customform-column-${e} `,
                    children: [mc(t, y), fc(t, y)]
                }, t.id)
            }
            ))
              , b = o ? Pl.Buffer.from(o).toString("base64") : "";
            return r.j.jsx("form", {
                ...e,
                id: t.id,
                children: r.j.jsxs("div", {
                    className: n,
                    children: [L, r.j.jsx("div", {
                        className: "customform-field-wrapper",
                        children: r.j.jsxs("button", {
                            type: "submit",
                            ...Le(c.attributes),
                            className: `customform-button ${c.class || ""}`,
                            id: `${c.id || ""}`,
                            children: [m && g && r.j.jsxs(r.j.Fragment, {
                                children: [r.j.jsx(d.G, {
                                    fixedWidth: !0,
                                    icon: g,
                                    className: "customform-icon"
                                }), r.j.jsx("span", {
                                    className: "icon-text-spacer"
                                })]
                            }), v, r.j.jsx(d.G, {
                                spin: !0,
                                fixedWidth: !0,
                                icon: ["fas", "spinner"],
                                className: "customform-icon spinner",
                                style: {
                                    display: "none",
                                    marginLeft: 5
                                }
                            })]
                        })
                    }), "forward" === C && r.j.jsx("div", {
                        className: "forward--url",
                        hidden: !0,
                        "data-forward-to": w
                    }), "email" === f ? r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx("input", {
                            type: "hidden",
                            name: "_t",
                            value: b
                        }), r.j.jsx("input", {
                            type: "hidden",
                            name: "_sub",
                            value: a
                        })]
                    }) : null]
                })
            })
        }
          , vc = ({item: t, attrs: e, renderer: n, className: i, control: s={}, wrapperClass: o, interactionDisabled: a}) => {
            var l, d;
            const {customForm: u={}, settings: p={}} = t
              , {toEmail: C, subject: f, items: h, button: m, field: g, forwardTo: v, successAction: y} = u
              , {service: w="email", hrefType: L} = p;
            a = n === r.B;
            const {text: b} = m
              , {text: x} = g.requiredText
              , j = ve(L, v)
              , M = null == h ? void 0 : h.map((e => {
                if ("hidden" === e.type)
                    return hc(e);
                const n = e.columnWidth ? Math.ceil(6 * e.columnWidth / 100) : 6;
                return r.j.jsxs("div", {
                    className: `customform-field-wrapper customform-field-${e.type} customform-column-${n} `,
                    children: [mc(e, x), fc(e, x, t)]
                }, e.id)
            }
            ))
              , E = C ? Pl.Buffer.from(C).toString("base64") : "";
            return null != h && h.length ? r.j.jsxs("form", {
                ...e,
                id: t.id,
                ...s.props,
                className: o,
                children: [r.j.jsxs("div", {
                    className: i,
                    children: [M, r.j.jsx(Kl, {
                        id: t.id
                    }), r.j.jsx("div", {
                        className: "customform-field-wrapper",
                        children: r.j.jsxs("button", {
                            type: "submit",
                            onClick: t => a && t.preventDefault(),
                            ...Le(m.attributes),
                            className: `customform-button ${m.class || ""}`,
                            id: `${m.id || ""}`,
                            children: [(null == (l = null == m ? void 0 : m.icon) ? void 0 : l.isSelected) && r.j.jsxs(r.j.Fragment, {
                                children: [r.j.jsx(c.I, {
                                    exClass: "customform-icon",
                                    iconArgs: null == (d = null == m ? void 0 : m.icon) ? void 0 : d.icon,
                                    icon: null == m ? void 0 : m.icon
                                }), r.j.jsx("span", {
                                    className: "icon-text-spacer"
                                })]
                            }), b, r.j.jsx(c.I, {
                                iconArgs: {
                                    prefix: "fas",
                                    iconName: "spinner"
                                },
                                exClass: "customform-icon spinner fa-spin",
                                style: {
                                    display: "none",
                                    marginLeft: 5
                                }
                            })]
                        })
                    }), "forward" === y && r.j.jsx("div", {
                        className: "forward--url",
                        hidden: !0,
                        "data-forward-to": j
                    }), "email" === w ? r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx("input", {
                            type: "hidden",
                            name: "_t",
                            value: E
                        }), r.j.jsx("input", {
                            type: "hidden",
                            name: "_sub",
                            value: f
                        })]
                    }) : null]
                }), s.render && s.render()]
            }) : null
        }
          , yc = t => {
            const {item: e} = t
              , {version: n} = e;
            return "2.0.0" === n ? r.j.jsx(vc, {
                ...t
            }) : r.j.jsx(gc, {
                ...t
            })
        }
        ;
        yc.migration = (t, e) => {
            var n, r;
            const {version: i} = t
              , s = null == (r = null == (n = null == t ? void 0 : t.customForm) ? void 0 : n.button) ? void 0 : r.icon
              , o = {
                ...s,
                visible: "font-awesome",
                icon: {
                    type: "font-awesome",
                    ...null == s ? void 0 : s.selectedIcon
                }
            };
            i || e([{
                name: "version",
                value: "2.0.0"
            }, {
                name: "customForm/button/icon",
                value: o
            }])
        }
        ,
        yc.shouldRender = ({item: {customForm: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const wc = (t, e) => {
            if (null != t && t.classList.contains("dynamic")) {
                const n = t.getAttribute("data-target");
                ( (t, e, n, r) => {
                    let i = null;
                    const s = o => {
                        i || (i = o);
                        const a = Math.min((o - i) / r, 1);
                        t.innerHTML = Math.floor(a * (n - e) + e),
                        a < 1 ? window.requestAnimationFrame(s) : window.cancelAnimationFrame(window.requestAnimationFrame(s))
                    }
                    ;
                    window.requestAnimationFrame(s)
                }
                )(t, 0, n, e || 5e3)
            }
        }
        ;
        function Lc({InteractiveComponent: t, item: e, shouldType: n, className: s, address: o, renderer: a, attrs: l}) {
            const {counterCircle: {items: c, layout: d, duration: u}} = e
              , p = (0,
            i.useRef)(null)
              , C = (t, e) => {
                var n;
                null == (n = t.firstChild) || n.childNodes[e].classList.add("animate")
            }
              , f = a === r.B;
            return (0,
            i.useEffect)(( () => {
                const t = new IntersectionObserver((t => {
                    t.forEach((t => {
                        t.isIntersecting && t.target.childNodes.forEach((t => {
                            C(t, 2),
                            C(t, 3),
                            wc(t.firstChild.childNodes[0], u)
                        }
                        ))
                    }
                    ))
                }
                ),{
                    threshold: .2
                });
                p.current && t.observe(p.current)
            }
            ), [p, c]),
            r.j.jsx("div", {
                ...l,
                className: `counter-bar ${d || ""}`,
                ref: p,
                children: c.map(( (e, i) => r.j.jsxs("div", {
                    className: "counter-wrapper",
                    children: [r.j.jsxs("div", {
                        className: "progress progress-counter",
                        children: [r.j.jsx("span", {
                            className: `title title-${e.id} ${e.dynamicCountUp ? "dynamic" : ""}`,
                            "data-target": e.count,
                            children: e.dynamicCountUp ? 0 : e.title
                        }), r.j.jsx("div", {
                            className: `overlay overlay-${e.id}`
                        }), r.j.jsx("div", {
                            className: `left left-${e.id}`
                        }), r.j.jsx("div", {
                            className: `right right-${e.id}`
                        })]
                    }), !e.hideContent && (f ? r.j.jsx(t, {
                        as: "div",
                        inlineEditor: !0,
                        address: o,
                        className: "content",
                        path: `counterCircle/items/${i}/content`,
                        shouldType: n,
                        strings: [(0,
                        r.s)(e.content)],
                        typekey: `${s}-content--${e.id}`
                    }) : r.j.jsx("div", {
                        className: "content",
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            r.s)(e.content)
                        }
                    }))]
                }, i)))
            })
        }
        function bc({item: t, attrs: e}) {
            const {counterCircle: {items: n, duration: s}} = t
              , o = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)(( () => {
                const t = new IntersectionObserver((t => {
                    t.forEach((t => {
                        t.isIntersecting && t.target.childNodes.forEach((t => {
                            wc(t.firstChild, s)
                        }
                        ))
                    }
                    ))
                }
                ),{
                    threshold: 1
                });
                o.current && t.observe(o.current)
            }
            ), [o, t]),
            r.j.jsx("div", {
                className: "counter-bar square-counter",
                ...e,
                ref: o,
                children: n.map(( (t, e) => r.j.jsxs("div", {
                    className: "counter-wrapper",
                    children: [r.j.jsx("span", {
                        className: `title title-${t.id} ${t.dynamicCountUp ? "dynamic" : ""}`,
                        "data-target": t.count,
                        "data-duration": t.duration,
                        children: t.dynamicCountUp ? 0 : t.title
                    }), !t.hideContent && r.j.jsx("div", {
                        className: "content",
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            r.s)(t.content)
                        }
                    })]
                }, e)))
            })
        }
        function xc({className: t, item: e, attrs: n, control: i={}, ...s}) {
            const {counterCircle: {layout: o}} = e;
            return r.j.jsxs("div", {
                className: t,
                ...i.props,
                children: ["number" === o ? r.j.jsx(bc, {
                    item: e,
                    attrs: n,
                    ...s
                }) : r.j.jsx(Lc, {
                    item: e,
                    attrs: n,
                    ...s
                }), i.render && i.render()]
            })
        }
        xc.shouldRender = ({item: {counterCircle: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const jc = {
            time: 1634110139170,
            blocks: [{
                id: "qNEu-72TqW",
                type: "paragraph",
                data: {
                    text: "Here are examples of content options available on the post Editor."
                }
            }, {
                id: "Jvn3kTwkMm",
                type: "header",
                data: {
                    text: "H1.Almost before we knew it",
                    level: 1
                }
            }, {
                id: "KYc5tSZo-9",
                type: "header",
                data: {
                    text: "H2.Almost before we knew it",
                    level: 2
                }
            }, {
                id: "5W9_8tVnoA",
                type: "header",
                data: {
                    text: "H3.Almost before we knew it",
                    level: 3
                }
            }, {
                id: "oN4-lfAjRi",
                type: "header",
                data: {
                    text: "H4.Almost before we knew it",
                    level: 4
                }
            }, {
                id: "04InCf0nZn",
                type: "header",
                data: {
                    text: "h5.Almost before we knew it",
                    level: 5
                }
            }, {
                id: "EIgbEocNIr",
                type: "header",
                data: {
                    text: "H6.Almost before we knew it",
                    level: 6
                }
            }, {
                id: "FiNe3-yneK",
                type: "paragraph",
                data: {
                    text: "<b>Paragraph</b>"
                }
            }, {
                id: "6ptFwKBjoI",
                type: "paragraph",
                data: {
                    text: 'Long-tail business <b>model canvas early</b> adopters founders <i>lean startup seed</i> money scrum <a href="https://example.com">project hackathon</a> iteration. Startup iteration alpha prototype accelerator pivot customer hackathon ramen release bandwidth crowdfunding equity series A financing. Infrastructure traction pitch <u class="cdx-underline">paradigm shifts</u> ownership crowdfunding gen-z influencer entrepreneur long-tail investor iPad. <mark class="cdx-marker">Accelerator bootstrapping founders</mark> advisor crowdfunding startup. Focus bandwidth handshake success seed money social media accelerator <code class="inline-code">venture responsive </code>web design prototype infographic client startup.'
                }
            }, {
                id: "coy0Pfwd6M",
                type: "paragraph",
                data: {
                    text: "<b>List</b>"
                }
            }, {
                id: "nV1P3m7uIu",
                type: "paragraph",
                data: {
                    text: "Here is the example of a simple list"
                }
            }, {
                id: "MbVlfLfBqE",
                type: "list",
                data: {
                    style: "unordered",
                    items: ["Accelerator pitch ramen infrastructure conversion.&nbsp;<br>", "Gen-Z alpha value proposition venture metrics assets early adopters graphical user interface.", "focus accelerator lean startup. Termsheet validation research &amp; development android venture.&nbsp;", "Hypotheses traction business-to-consumer. Network effects value proposition ecosystem business plan innovator."]
                }
            }, {
                id: "74tU2ATISX",
                type: "paragraph",
                data: {
                    text: "<b>Blockquote</b>"
                }
            }, {
                id: "jqPCcn8MFv",
                type: "quote",
                data: {
                    text: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
                    caption: "St. Jerome",
                    alignment: "left"
                }
            }, {
                id: "DOGU_CDJao",
                type: "paragraph",
                data: {
                    text: "<b>Image with Caption</b>"
                }
            }, {
                id: "GiGumDhlxt",
                type: "image",
                data: {
                    file: {
                        url: "https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1488554378835-f7acf46e6c98-jiULH5.jpeg",
                        key: "6161c4c90c591c0012a6dcbb/photo-1488554378835-f7acf46e6c98-jiULH5.jpeg"
                    },
                    caption: "Image Caption",
                    withBorder: !1,
                    stretched: !1,
                    withBackground: !1
                }
            }, {
                id: "7xcYOc3LsL",
                type: "paragraph",
                data: {
                    text: "More options are coming soon! \ud83d\ude4c"
                }
            }, {
                id: "7xcYOc3Lsa",
                type: "raw",
                data: {
                    html: "<div>Hello world!</div>"
                }
            }, {
                id: "vO-S97a06I",
                type: "table",
                data: {
                    withHeadings: !0,
                    content: [["Name", "Gender", "Birthday", "Social Security Number"], ["Hailey Homenick", "male", "1981-11-10", "543-81-9671"], ["Lauryn Wuckert", "female", "1998-07-18", "370-37-7903"], ["Carolanne Rogahn", "female", "1983-11-12", "575-99-3432"], ["Hayden Rau", "male", "1997-11-23", "518-89-2578"]]
                }
            }],
            version: "2.22.2"
        }
          , Mc = ({htmlContent: t, renderContent: e}) => t && e.includes("{{{edjsRichText content}}}") && (0,
        r.s)(t)
          , Ec = ({renderer: t, className: e, children: n, control: s={}}) => {
            var o;
            const {renderContent: a} = O()
              , {permission: l, navigate: c} = (0,
            i.useContext)(r.C)
              , {data: d={}, subscriptionBanner: u, pageType: p, pageSlug: C} = en()
              , f = null == (o = (n || "").match(/{{{edjsRichText\s+(.+?)}}}/)) ? void 0 : o[1]
              , h = "content" === f && d.htmlContent
              , m = d[f]
              , g = !(t => {
                try {
                    const e = JSON.parse(t);
                    return "time"in e && "blocks"in e && "version"in e
                } catch {
                    return !1
                }
            }
            )(h ? d.htmlContent : m) && n
              , v = (null == d ? void 0 : d.content) || (null == d ? void 0 : d.htmlContent)
              , {pathname: y, query: w} = (0,
            i.useMemo)(( () => {
                let t = ""
                  , e = {};
                return "TOPIC" === p ? (t = v ? `/collection/${C}/item/${null == d ? void 0 : d._id}` : `/collection/${C}`,
                e = {
                    collectionId: null == d ? void 0 : d.topic,
                    ...!h && {
                        openDrawer: !0,
                        ...!v && {
                            item_id: null == d ? void 0 : d._id
                        }
                    }
                }) : "POST" === p && (t = `/post/${null == d ? void 0 : d.slug}`),
                {
                    pathname: t,
                    query: e
                }
            }
            ), [d, v, h, C, p])
              , L = t => {
                t.stopPropagation(),
                c({
                    pathname: y,
                    query: w
                }, y)
            }
            ;
            return r.j.jsxs("div", {
                className: e,
                ...s.props,
                children: [( () => {
                    if (t === r.B || t === r.P)
                        return r.j.jsxs(r.j.Fragment, {
                            children: [g ? r.j.jsx("div", {
                                style: {
                                    padding: "20px",
                                    borderRadius: "5px",
                                    backgroundColor: "#fffbe6",
                                    border: "1px solid #ffe58f"
                                },
                                children: r.j.jsxs("span", {
                                    style: {
                                        color: "rgb(12, 10, 37)"
                                    },
                                    onClick: t => t.preventDefault(),
                                    children: ["To Configure the CSS of your HTML content, you have to publish through", " ", r.j.jsx("span", {
                                        onClick: L,
                                        "data-testid": "navigateToEditor",
                                        children: r.j.jsx("a", {
                                            href: y,
                                            children: "Post Editor"
                                        })
                                    })]
                                })
                            }) : "", r.j.jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: n ? a(n, {
                                        edjsOptions: {
                                            renderer: t
                                        }
                                    }) : T(jc, {
                                        edjsOptions: {
                                            renderer: t
                                        }
                                    })
                                }
                            })]
                        });
                    {
                        const t = "FULL_PAGE" === (null == d ? void 0 : d.editorType);
                        return r.j.jsxs(r.j.Fragment, {
                            children: [r.j.jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: Mc({
                                        renderContent: n,
                                        htmlContent: null == d ? void 0 : d.htmlContent
                                    }) || a(n || "{{{edjsRichText content}}}", {
                                        edjsOptions: {
                                            isFullPage: t,
                                            isGatedContent: u.enabled
                                        }
                                    })
                                }
                            }), u.enabled && u.data && r.j.jsx(Cd, {
                                permission: l,
                                item: u.data
                            })]
                        })
                    }
                }
                )(), s.render && s.render()]
            })
        }
        ;
        Ec.shouldRender = ({item: t, isRenderable: e, renderer: n}) => !!n || e(t.content || "{{{edjsRichText content}}}");
        const Nc = ({item: t, onClick: e}) => {
            var n, s;
            let o = {}
              , a = {};
            const l = "customUrl" === t.action
              , c = l ? "a" : i.Fragment
              , d = we({
                hrefType: null == (n = t.settings) ? void 0 : n.hrefType,
                noFollow: t.noFollow,
                hrefValue: t.customUrl,
                hrefTarget: t.target
            });
            return l ? o = {
                ...o,
                ...d
            } : a = {
                className: "lightbox-item",
                onClick: e
            },
            r.j.jsx(c, {
                ...o,
                children: r.j.jsxs("figure", {
                    ...a,
                    "data-category": null == (s = t.category) ? void 0 : s.join(" "),
                    children: [r.j.jsx("img", {
                        id: t.id,
                        src: t.src || "/assets/images/image-placeholder.jpg",
                        alt: t.label
                    }), r.j.jsx("figcaption", {
                        children: r.j.jsx("span", {
                            children: t.label
                        })
                    })]
                })
            })
        }
          , kc = ({items: t, isBuilder: e, handleLightBox: n, interactionDisabled: i}) => r.j.jsx("div", {
            className: "justified",
            children: t.map(( (s, o) => r.j.jsx(Nc, {
                item: s,
                isBuilder: e,
                interactionDisabled: i,
                onClick: () => n(t, o)
            }, s.id)))
        })
          , _c = ({isBuilder: t, items: e, handleLightBox: n, interactionDisabled: i, colNumber: s, colNumberMob: o, colNumberTab: a}) => {
            const l = (s, o) => {
                let a = [];
                for (let l = s; l < e.length; l += o) {
                    const s = e[l];
                    a.push(r.j.jsx(Nc, {
                        item: s,
                        isBuilder: t,
                        interactionDisabled: i,
                        onClick: () => n(e, l)
                    }, s.id))
                }
                return a
            }
              , c = ({cols: t}) => {
                let e = [];
                for (let n = 0; n < t; n++)
                    e.push(r.j.jsx("div", {
                        className: "mesonry--image-container",
                        children: l(n, t)
                    }, n));
                return e
            }
            ;
            return r.j.jsxs(r.j.Fragment, {
                children: [r.j.jsx("div", {
                    className: "mesonry masonry-lg hidden-md hidden-sm lightbox",
                    children: r.j.jsx(c, {
                        cols: s
                    })
                }), r.j.jsx("div", {
                    className: "mesonry masonry-md hidden-lg hidden-sm",
                    children: r.j.jsx(c, {
                        cols: a
                    })
                }), r.j.jsx("div", {
                    className: "mesonry masonry-sm hidden-md hidden-lg",
                    children: r.j.jsx(c, {
                        cols: o
                    })
                })]
            })
        }
          , Sc = ({className: t, interactionDisabled: e, attrs: n, item: {media: s, settings: o={}, imageGallery: {items: a=[]}, categories: l=[], attr: c={}}, control: d={}}) => {
            const {maxImage: u=6, hasTab: p} = o
              , [C,f] = (0,
            i.useState)(!1)
              , [h,m] = (0,
            i.useState)(!1)
              , [g,v] = (0,
            i.useState)({
                img: "",
                alt: ""
            })
              , y = parseInt(o.colNumber)
              , w = parseInt(s.mobile.settings.colNumber)
              , L = parseInt(s.tablet.settings.colNumber);
            let b = parseInt(o.maxImage) || parseInt(o.maxImage) >= 0 ? a.filter(( (t, e) => e < o.maxImage)) : a
              , x = (null == l ? void 0 : l.map((t => t.label)).filter(( (t, e, n) => {
                if (t && n.indexOf(t) === e)
                    return t
            }
            ))) || [];
            const j = o.hrefType
              , M = c.href
              , E = we({
                hrefType: j,
                hrefValue: M,
                hrefTarget: c.target
            });
            c.href && (n = {
                ...n,
                ...E
            });
            const N = (t, e) => {
                (t => {
                    m(!0),
                    v(t)
                }
                )(t[e])
            }
              , k = () => p ? r.j.jsxs("ul", {
                className: "gallery-tab",
                children: [r.j.jsx("li", {
                    children: r.j.jsx("button", {
                        value: "all",
                        className: C ? "" : "active",
                        onClick: t => f(!1),
                        children: "All"
                    })
                }), x.map(( (t, e) => r.j.jsx("li", {
                    children: r.j.jsx("button", {
                        value: t,
                        className: C === t ? "active" : "",
                        onClick: t => f(t.target.value),
                        children: t
                    })
                }, e)))]
            }) : null;
            return b.length ? r.j.jsxs("div", {
                className: t,
                ...n,
                ...d.props,
                children: [r.j.jsx(k, {}), (t => {
                    switch (t) {
                    case "mesonry":
                        return r.j.jsx(_c, {
                            items: C ? a.filter(( ({category: t=[]}, e) => t.includes(C) && e < u)) : b,
                            colNumber: y,
                            colNumberMob: w,
                            handleLightBox: N,
                            interactionDisabled: e,
                            colNumberTab: L
                        });
                    case "justified":
                        return r.j.jsx(kc, {
                            items: C ? a.filter(( ({category: t=[]}, e) => t.includes(C) && e < u)) : b,
                            handleLightBox: N,
                            interactionDisabled: e
                        });
                    default:
                        return null
                    }
                }
                )(o.galleryType), r.j.jsxs("div", {
                    className: (h ? "show-image-modal" : "hide-image-modal") + " image-modal",
                    children: [r.j.jsx("img", {
                        src: g.src,
                        alt: g.label
                    }), r.j.jsx("button", {
                        className: "hide-button",
                        onClick: () => m(!1),
                        children: "\xd7"
                    })]
                }), d.render && d.render()]
            }) : null
        }
        ;
        Sc.shouldRender = ({item: {imageGallery: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Ac = ({className: t, interactionDisabled: e, renderer: n, attrs: s, item: {id: o, media: a, settings: l={}, imageGallery: {linkType: c, items: d=[]}, lightBox: u, configuration: p={}, categories: C=[], attr: f={}}, control: h={}}) => {
            const {maxImage: m=6, hasTab: g, hasPagination: v} = l
              , [y,w] = (0,
            i.useState)("all")
              , L = parseInt(l.colNumber)
              , b = parseInt(a.mobile.settings.colNumber)
              , x = parseInt(a.tablet.settings.colNumber)
              , [j,M] = (0,
            i.useState)(1)
              , {contentWindow: E} = V()
              , N = "BUILDER" === n
              , k = d.filter((t => "customUrl" === t.action));
            Zc({
                skin: u.skin
            });
            let _ = (null == C ? void 0 : C.map((t => t.label)).filter(( (t, e, n) => {
                if (t && n.indexOf(t) === e)
                    return t
            }
            ))) || [];
            const S = l.hrefType
              , A = f.href
              , T = we({
                hrefType: S,
                hrefValue: A,
                hrefTarget: f.target
            });
            f.href && (s = {
                ...s,
                ...T
            });
            const I = "dynamic" === c
              , $ = ["BUILDER", "PREVIEW"].includes(n)
              , {dynamicItems: R} = ( ({configuration: t}) => {
                const {selectedField: e, content: n={}} = t
                  , {data: r={}} = O()
                  , s = en();
                return {
                    dynamicItems: (0,
                    i.useMemo)(( () => r && Array.isArray(r[e]) ? r[e].flatMap(( (t, e) => {
                        const r = {
                            category: ["all"],
                            id: e + 1
                        };
                        return Object.entries({
                            ...n
                        }).forEach(( ([e,n]) => {
                            if ("src" === e) {
                                let i = Z(n, t);
                                return /^https?:\/\//.test(i) ? r[e] = i : r[e] = i && s ? `${s.CDNDomain}/${i}` : n
                            }
                            r[e] = Z(n, t)
                        }
                        )),
                        r
                    }
                    )) : []), [e, r, n, s])
                }
            }
            )({
                configuration: p
            })
              , {filterItems: P, maxCount: H} = ( ({items: t, count: e, selectedCategory: n, page: r}) => {
                if (!t)
                    return [];
                let i = t;
                n && (i = t.filter((t => "all" === n || t.category.includes(n))));
                const s = (r - 1) * e;
                return {
                    maxCount: i.length,
                    filterItems: i.slice(s, s + Number(e))
                }
            }
            )({
                page: j,
                count: m,
                selectedCategory: y,
                items: I ? R : d
            })
              , B = (t=k, e=0) => {
                if (N && (null == u || !u.builderPreview))
                    return F();
                var n = [];
                if (t.map(( ({src: t, label: e, txt: r, author: i}, s) => n.push({
                    src: t,
                    txt: r,
                    author: i,
                    index: s,
                    title: e,
                    thumb: t,
                    download: t,
                    canonical_url: t
                }))),
                E.lc_lightbox) {
                    const t = E.lc_lightbox(n, {
                        ...u,
                        ...N && {
                            fading_time: 0,
                            ol_time_diff: 0,
                            animation_time: 0,
                            open_close_time: 0
                        },
                        on_close: () => E.lcl_destroy(t)
                    });
                    E.lcl_open && E.lcl_open(t, e)
                }
            }
              , F = () => {
                E.lcl_close && E.lcl_close()
            }
            ;
            (0,
            i.useEffect)(( () => {
                if (!N)
                    return;
                let t;
                return E.lcl_close ? (F(),
                t = setTimeout(B, 100)) : B(),
                () => {
                    E.lcl_close && t && clearTimeout(t)
                }
            }
            ), [u]),
            (0,
            i.useEffect)(( () => () => N && F()), []);
            const U = t => {
                const {value: e} = t.target;
                w(e),
                M(1)
            }
              , D = () => !g || I ? null : r.j.jsx("ul", {
                className: "gallery-tab",
                children: ["all", ..._].map(( (t, e) => r.j.jsx("li", {
                    children: r.j.jsx("button", {
                        value: t,
                        className: y === t ? "active" : "",
                        style: {
                            textTransform: "capitalize"
                        },
                        onClick: U,
                        children: t
                    })
                }, e)))
            });
            return !P.length && I && $ ? r.j.jsx(Ua, {
                className: t,
                control: h
            }) : P.length ? r.j.jsxs("div", {
                className: t,
                ...s,
                id: `lcl_elems_wrapper_${o}`,
                ...h.props,
                children: [r.j.jsx(D, {}), (t => {
                    switch (t) {
                    case "mesonry":
                        return r.j.jsx(_c, {
                            items: P,
                            handleLightBox: B,
                            isBuilder: N,
                            colNumber: L,
                            colNumberMob: b,
                            colNumberTab: x,
                            interactionDisabled: e
                        });
                    case "justified":
                        return r.j.jsx(kc, {
                            items: P,
                            handleLightBox: B,
                            isBuilder: N,
                            interactionDisabled: e
                        });
                    default:
                        return null
                    }
                }
                )(l.galleryType), v && r.j.jsx(Tc, {
                    page: j,
                    setPage: M,
                    maxCount: H,
                    maxImage: m
                }), r.j.jsx("span", {
                    className: "cols hidden",
                    "data-cols": JSON.stringify({
                        lg: L,
                        sm: b,
                        md: x
                    })
                }), h.render && h.render()]
            }) : null
        }
          , Tc = ({page: t, setPage: e, maxCount: n, maxImage: i}) => {
            const s = (r="next") => {
                let s;
                s = "prev" === r ? Math.max(1, t - 1) : Math.ceil(Math.min(n / i, t + 1)),
                e(s)
            }
            ;
            return r.j.jsxs("div", {
                className: "pagination",
                children: [r.j.jsx("div", {
                    className: "wrapper " + (1 === t ? "disabled" : ""),
                    children: r.j.jsx("button", {
                        disabled: 1 === t,
                        onClick: () => s("prev"),
                        className: "prev",
                        children: r.j.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            children: r.j.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15.75 19.5L8.25 12l7.5-7.5"
                            })
                        })
                    })
                }), r.j.jsx("div", {
                    className: "wrapper " + (Math.ceil(n / i) <= t ? "disabled" : ""),
                    children: r.j.jsx("button", {
                        disabled: Math.ceil(n / i) <= t,
                        onClick: () => s("next"),
                        className: "next",
                        children: r.j.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            children: r.j.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                            })
                        })
                    })
                })]
            })
        }
        ;
        Ac.shouldRender = ({item: {imageGallery: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Zc = ({skin: t}) => {
            const {contentDocument: e} = V();
            hl({
                href: ["https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/css/lc_lightbox.min.css", {
                    light: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/light.css",
                    dark: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/dark.css",
                    minimal: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/minimal.css"
                }[t ?? "light"]],
                doc: e
            }),
            Xe({
                src: r.J,
                onLoad: ({window: t, document: e}) => {
                    t.jQuery && setTimeout(( () => {
                        const t = "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/js/lc_lightbox.lite.min.js";
                        if (e.body.querySelector(`script[src="${t}"]`))
                            return;
                        const n = e.createElement("script");
                        n.src = t,
                        n.defer = !0,
                        e.body.appendChild(n)
                    }
                    ), 500)
                }
            })
        }
          , Ic = t => {
            var e;
            const {item: n} = t;
            return "advanced" === (null == (e = n.lightBox) ? void 0 : e.type) ? r.j.jsx(Ac, {
                ...t
            }) : r.j.jsx(Sc, {
                ...t
            })
        }
        ;
        Ic.shouldRender = ({item: {imageGallery: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const Oc = () => !0
          , $c = t => e => n => (t => {
            const {useFlag: e=Oc} = (0,
            i.useContext)(r.C);
            return e(t)
        }
        )(t) ? r.j.jsx(e, {
            ...n
        }) : null
          , Vc = {}
          , Rc = $c(Vc.SEARCH)(( ({className: t, item: e, renderer: n}) => {
            const s = (0,
            i.useRef)()
              , {search: o} = e
              , {content: a, searchIcon: l} = (null == o ? void 0 : o.button) || {}
              , [d,u] = (0,
            i.useState)(!1)
              , {router: p} = (0,
            i.useContext)(r.C)
              , {query: C} = (null == p ? void 0 : p.query) || {}
              , f = () => {
                if ([r.B, r.P].includes(n))
                    return;
                const {value: t} = s.current;
                p.push(`/search?query=${t}`)
            }
            ;
            return (0,
            i.useEffect)(( () => {
                if (!p)
                    return;
                const t = () => {
                    u(!0)
                }
                  , e = () => {
                    u(!1)
                }
                ;
                return p.events.on("routeChangeStart", t),
                p.events.on("routeChangeComplete", e),
                () => {
                    p && (p.events.off("routeChangeStart", t),
                    p.events.off("routeChangeComplete", e))
                }
            }
            ), []),
            r.j.jsxs("div", {
                className: `${t}`,
                children: [r.j.jsx("input", {
                    ref: s,
                    defaultValue: C,
                    onKeyDown: t => {
                        "Enter" === t.key && (t.preventDefault(),
                        f())
                    }
                    ,
                    placeholder: e.search.input.placeholder
                }), r.j.jsxs("button", {
                    onClick: f,
                    children: [d && r.j.jsx(c.I, {
                        exClass: "fa-spin",
                        iconArgs: {
                            prefix: "fas",
                            iconName: "spinner"
                        },
                        style: {
                            marginRight: "8px"
                        }
                    }), l && r.j.jsx(c.I, {
                        icon: l,
                        iconArgs: l.icon
                    }), a]
                })]
            })
        }
        ))
          , Pc = ({page: t, renderer: e, fetchPage: n, direction: i, isFetching: s, isDisabled: o, pagination: a, isFetchingNextPage: l, hasNextPage: d}) => {
            const u = e === r.B
              , {prevText: p="Prev", nextText: C="Next", type: f="loadMore", loadText: h="Load More"} = (null == a ? void 0 : a.config) || {};
            return r.j.jsx("div", {
                className: "pagination",
                children: "nextPrev" === f ? r.j.jsxs(r.j.Fragment, {
                    children: [r.j.jsxs("button", {
                        className: "pagination--nextPrev prev",
                        onClick: () => n("prev"),
                        disabled: 1 === t,
                        children: [r.j.jsx(c.I, {
                            iconArgs: {
                                prefix: "fas",
                                iconName: "arrow-left"
                            },
                            exClass: "icon"
                        }), s && (0,
                        c.s)(i, "prev"), p]
                    }), r.j.jsxs("button", {
                        disabled: o,
                        className: "pagination--nextPrev next",
                        onClick: () => n("next"),
                        children: [s && (0,
                        c.s)(i, "next"), C, r.j.jsx(c.I, {
                            iconArgs: {
                                prefix: "fas",
                                iconName: "arrow-right"
                            },
                            exClass: "icon"
                        })]
                    })]
                }) : r.j.jsxs("button", {
                    className: "pagination--loadMore load",
                    onClick: () => n("load"),
                    disabled: !u && !d,
                    children: [l && (0,
                    c.s)(), h]
                })
            })
        }
          , Hc = ({href: t, Link: e, children: n, interactionProps: i, isContainerLinkable: s}) => s ? r.j.jsx(e, {
            href: t,
            "data-testid": "container",
            children: r.j.jsx("a", {
                ...i,
                className: "post--container",
                children: n
            })
        }) : r.j.jsx("div", {
            "data-testid": "container",
            className: "post--container",
            children: n
        })
          , Bc = ({slug: t, name: e, excerpt: n, settings: s, postSlug: o, topicSlug: a, createdAt: l, title: c=e, collectionType: d, thumbnailImage: u}) => {
            const {CDNDomain: p} = en()
              , {interactionProps: C} = ye()
              , {Link: f="a"} = (0,
            i.useContext)(r.C)
              , {layout: h, searchText: m, imgPosition: g, isImageVisible: v, isButtonVisible: y, isFooterVisible: w, isExcerptVisible: L, isContainerLinkable: b} = s
              , x = "undefined" !== window && `${window.location.origin}/${"TOPIC" === d ? a : o}/${t}`
              , j = c.length > 70 ? `${c.substring(0, 70)}...` : c
              , M = u ? `${p}/${u}` : "/assets/images/image-placeholder.jpg"
              , E = t => "grid" === h && "left" === t ? v : v && t === g;
            return r.j.jsxs(Hc, {
                Link: f,
                href: x,
                interactionProps: C,
                isContainerLinkable: b,
                children: [E("left") && r.j.jsx("img", {
                    src: M,
                    alt: "Search Image Left",
                    className: "post--image"
                }), r.j.jsxs("article", {
                    children: [r.j.jsx("h3", {
                        className: "post--heading",
                        title: c,
                        children: r.j.jsx(f, {
                            href: x,
                            children: r.j.jsx("a", {
                                ...C,
                                children: j
                            })
                        })
                    }), L && n && r.j.jsx("div", {
                        className: "post--content",
                        "data-testid": "excerpt",
                        children: n
                    }), w && r.j.jsxs("p", {
                        className: "post--footer",
                        "data-testid": "footer",
                        children: ["On ", (0,
                        r.l)(l)]
                    }), y && r.j.jsx("button", {
                        className: "post--button",
                        children: r.j.jsx(f, {
                            href: x,
                            "data-testid": "search-link",
                            children: r.j.jsx("a", {
                                ...C,
                                children: m
                            })
                        })
                    })]
                }), E("right") && r.j.jsx("img", {
                    src: M,
                    alt: "Search Image Right",
                    className: "post--image"
                })]
            })
        }
          , Fc = [{
            topicSlug: "article",
            collectionType: "TOPIC",
            _id: "63d0bf1a25f7d3004d5f34ec",
            name: "Politics is not easy says Senator Exol",
            slug: "politics-is-not-easy-says-senator-exol",
            createdAt: "2023-01-25T05:33:14.163Z",
            excerpt: "It seems that politics is always a hot topic, no matter where you go. And in today's world, it seems like more and more people are getting involved.",
            thumbnailImage: "628365ba27c9d000bcb26c90/jorge-maya-b8ubgqwzngi-unsplash-ynOL31.jpg"
        }, {
            topicSlug: "article",
            collectionType: "TOPIC",
            _id: "63d0bf1a25f7d3004d5f34e7",
            name: "Max straight up for the F1 pro round",
            slug: "max-to-the-pro-amp",
            createdAt: "2023-01-25T05:33:14.163Z",
            excerpt: "There were no easy rides at a dramatic, incident-packed Spanish Grand Prix but perseverance was most certainly rewarded. Indeed.",
            thumbnailImage: "628365ba27c9d000bcb26c90/image-3-0it-JdkYQz.webp"
        }, {
            topicSlug: "article",
            collectionType: "TOPIC",
            _id: "63d0bf1a25f7d3004d5f34e2",
            name: "Tennis has been selected for the best sport of the year award",
            slug: "tennis-has-been-selected-for-the-best-sport-of-the-year-award",
            createdAt: "2023-01-25T05:33:14.162Z",
            excerpt: "Norrie, the British No 1, also said that without players being able to compete for ranking points at Wimbledon, the tournament will more closely resemble an exhibition event.",
            thumbnailImage: "628365ba27c9d000bcb26c90/4460-EQtpu-.webp"
        }]
          , Uc = $c(Vc.SEARCH)(( ({className: t, item: e, renderer: n, control: s={}}) => {
            const {settings: o, pagination: a} = e.widget
              , {router: l} = (0,
            i.useContext)(r.C)
              , {query: d} = (null == l ? void 0 : l.query) || {}
              , {data: u, ...p} = ( ({pagination: t, options: e, sourceType: n}) => {
                const [r,s] = (0,
                i.useState)(1)
                  , [o,a] = (0,
                i.useState)("next")
                  , {siteId: l, useCollectionItems: c} = en()
                  , {type: d="loadMore", perView: u=1} = (null == t ? void 0 : t.config) || {}
                  , {data: p, isLoading: C, isFetching: f, hasNextPage: h, fetchNextPage: m, isFetchingNextPage: g} = c({
                    siteId: l,
                    type: n,
                    options: {
                        page: r,
                        type: d,
                        perPage: Number(u),
                        ...e
                    }
                });
                return {
                    page: r,
                    data: p,
                    fetchPage: (0,
                    i.useCallback)((t => {
                        switch (t) {
                        case "load":
                            return h ? m() : void 0;
                        case "prev":
                            return s((t => Math.max(t - 1, 1))),
                            void a(t);
                        default:
                            return s((t => t + 1)),
                            void a(t)
                        }
                    }
                    ), [h, r]),
                    isLoading: C,
                    direction: o,
                    pagination: t,
                    isFetching: f,
                    hasNextPage: h,
                    isFetchingNextPage: g
                }
            }
            )({
                pagination: a,
                options: {
                    query: d
                },
                sourceType: "SEARCH"
            });
            let C = n === r.B ? Fc : u;
            return p.isLoading ? r.j.jsx("div", {
                style: {
                    textAlign: "center"
                },
                "data-testid": "loading",
                children: r.j.jsx(c.I, {
                    exClass: "fa-spin fa-2x",
                    iconArgs: {
                        prefix: "fas",
                        iconName: "spinner"
                    }
                })
            }) : null != C && C.length ? r.j.jsxs("div", {
                className: t,
                ...s.props,
                children: [C.map((t => (0,
                i.createElement)(Bc, {
                    ...t,
                    key: t._id,
                    settings: o,
                    renderer: n
                }))), r.j.jsx(Pc, {
                    ...p,
                    renderer: n,
                    pagination: a,
                    isDisabled: (null == u ? void 0 : u.length) <= 0
                }), s.render && s.render()]
            }) : r.j.jsx(Ua, {})
        }
        ));
        const Dc = i.memo((function(t) {
            const {item: e, className: n} = t
              , s = (null == e ? void 0 : e.gumroad) || {}
              , {singleProduct: o, wanted: a} = s
              , {text: l, icon: d={}, settings: u={}} = e
              , p = "text-only" !== u.buttonType && d.icon
              , C = "https://gumroad.com/js/gumroad.js" + (a ? "?wanted=true" : "");
            (0,
            i.useEffect)(( () => {
                if (t.renderer === r.B || document.head.querySelector(`script[src="${C}"]`))
                    return;
                const e = document.createElement("script");
                e.src = C,
                document.head.appendChild(e)
            }
            ), []);
            const {renderContent: f} = O();
            return r.j.jsx(r.j.Fragment, {
                children: r.j.jsxs("a", {
                    "data-gumroad-single-product": o,
                    className: `dorik-btn ${n}`,
                    href: s.url,
                    children: [p && r.j.jsx(c.I, {
                        iconArgs: null == d ? void 0 : d.icon,
                        icon: d
                    }), f(l)]
                })
            })
        }
        ));
        const zc = i.memo((function(t) {
            const {item: e, className: n} = t
              , s = (null == e ? void 0 : e.paddle) || {}
              , {allowQuantity: o, coupon: a, product: l, title: d, quantity: u} = s
              , {text: p, icon: C={}, settings: f={}} = e
              , h = "text-only" !== f.buttonType && C.icon
              , {renderContent: m} = O();
            return function(t) {
                (0,
                i.useEffect)(( () => {
                    var e;
                    const n = ((null == (e = document.getElementById("dorik-builder-iframe")) ? void 0 : e.contentWindow) || window).document
                      , r = n.createElement("script");
                    return r.src = t,
                    n.body.appendChild(r),
                    () => {
                        n.body.removeChild(r)
                    }
                }
                ), [t])
            }("https://cdn.paddle.com/paddle/paddle.js"),
            r.j.jsxs("a", {
                href: "#",
                className: `paddle_button dorik-btn ${n}`,
                "data-theme": "none",
                "data-product": l,
                "data-tile": d,
                "data-coupon": a,
                "data-allow-quantity": o,
                "data-quantity": u,
                children: [h && r.j.jsx(c.I, {
                    iconArgs: null == C ? void 0 : C.icon,
                    icon: C
                }), m(p)]
            })
        }
        ))
          , Gc = t => {
            const e = i.useRef()
              , n = i.useRef()
              , {item: s, className: o} = t
              , a = (null == s ? void 0 : s.paypal) || {}
              , l = "BUILDER" === t.renderer
              , {style: c, planId: d, amount: u=0, clientId: p="", currency: C="USD", intent: f="capture"} = a
              , h = `https://www.paypal.com/sdk/js?client-id=${p || "test"}&currency=${C}&intent=${f}&vault=${"subscription" === f}`
              , {contentWindow: m} = V();
            return Xe({
                src: h,
                skip: !1
            }),
            i.useEffect(( () => {
                const t = {
                    ...c,
                    tagline: !1,
                    height: Number(null == c ? void 0 : c.height) || 55
                };
                const r = m || window;
                var i = 10
                  , s = setInterval(( () => {
                    r.paypal ? (clearInterval(s),
                    n.current && n.current.close(),
                    n.current = function(n) {
                        const r = {
                            style: t,
                            onError: function(t) {
                                alert("Error ", t)
                            },
                            onApprove: function(t, e) {
                                return e.order.capture().then((function(t) {
                                    alert("Transaction completed by " + t.payer.name.given_name)
                                }
                                ))
                            }
                        };
                        "subscription" === f ? r.createSubscription = function(t, e) {
                            return e.subscription.create({
                                plan_id: d
                            })
                        }
                        : r.createOrder = function(t, e) {
                            return e.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: u
                                    }
                                }]
                            })
                        }
                        ;
                        const i = n.paypal.Buttons(r);
                        return i.render(e.current).catch((t => {
                            console.log(t)
                        }
                        )),
                        i
                    }(r)) : (i <= 1 && clearInterval(s),
                    i--)
                }
                ), 300);
                return () => {
                    clearInterval(s)
                }
            }
            ), [c, h]),
            r.j.jsxs(r.j.Fragment, {
                children: [r.j.jsx("div", {
                    ref: e,
                    className: o,
                    id: `dorik-${s.id}`,
                    style: {
                        ...l && {
                            pointerEvents: "none"
                        }
                    }
                }), r.j.jsx("div", {
                    style: {
                        display: "none"
                    },
                    className: "success-message",
                    children: a.successMessage
                })]
            })
        }
        ;
        function Yc(t) {
            const e = i.useRef()
              , {item: n, attrs: s, className: o} = t
              , a = (null == n ? void 0 : n.stripe) || {}
              , {text: l, icon: d={}, settings: u={}} = n
              , p = "icon-text" === u.buttonType && d.icon
              , {renderContent: C} = O()
              , {contentWindow: f} = V();
            return Xe({
                src: "https://js.stripe.com/v3/"
            }),
            (0,
            i.useEffect)(( () => {
                const n = f || window
                  , r = {
                    lineItems: [{
                        quantity: 1,
                        price: a.priceId
                    }],
                    mode: a.mode || "payment",
                    submitType: a.mode && "payment" !== a.mode ? "auto" : a.submitType,
                    successUrl: a.successUrl || window.location.href,
                    cancelUrl: window.location.href,
                    billingAddressCollection: a.billingAddressCollection || "auto"
                }
                  , i = i => {
                    if (i.preventDefault(),
                    "BUILDER" === t.renderer)
                        return;
                    const s = e.current.querySelector(".icon");
                    s.style.display = "inline",
                    s.style.marginLeft = "10px",
                    n.Stripe(a.pk).redirectToCheckout(r).then((function(t) {
                        alert(t.error.message)
                    }
                    ))
                }
                ;
                return e.current && e.current.addEventListener("click", i),
                () => {
                    e.current && e.current.removeEventListener("click", i)
                }
            }
            ), [a]),
            r.j.jsxs("button", {
                ref: e,
                ...s,
                id: `dorik-${n.id}`,
                className: `dorik-btn ${o}`,
                children: [p && r.j.jsx(c.I, {
                    iconArgs: null == d ? void 0 : d.icon,
                    icon: d
                }), C(l), r.j.jsx(c.I, {
                    exClass: "icon fa-spin",
                    style: {
                        display: "none"
                    },
                    iconArgs: {
                        prefix: "fas",
                        iconName: "spinner"
                    }
                })]
            })
        }
        const Xc = t => {
            const {wrapperClass: e, item: n, attrs: i, className: s, control: o={}} = t
              , {settings: a={}} = n
              , l = `${e || s + "-wrapper"}`;
            return r.j.jsxs("div", {
                className: l,
                ...i,
                ...o.props,
                children: [( () => {
                    switch (a.type) {
                    case "paypal":
                        return r.j.jsx(Gc, {
                            ...t
                        });
                    case "gumroad":
                        return r.j.jsx(Dc, {
                            ...t
                        });
                    case "paddle":
                        return r.j.jsx(zc, {
                            ...t
                        });
                    default:
                        return r.j.jsx(Yc, {
                            ...t
                        })
                    }
                }
                )(), o.render && o.render()]
            })
        }
        ;
        Xc.shouldRender = ({item: {text: t, icon: e={}, settings: n={}}, isRenderable: r}) => {
            if ("paypal" === n.type)
                return !0;
            const {icon: i} = e;
            return r(t) || (null == i ? void 0 : i.prefix) || (null == i ? void 0 : i.iconName)
        }
        ;
        const qc = ["mounted", "updated", "move", "moved", "drag", "dragged", "visible", "hidden", "active", "inactive", "click", "arrows:mounted", "arrows:updated", "pagination:mounted", "pagination:updated", "navigation:mounted", "autoplay:play", "autoplay:pause", "autoplay:playing", "lazyload:loaded"]
          , Wc = t => {
            if (!t)
                return {};
            let e = Object.assign({}, t);
            const {perPage: n, perMove: r} = e;
            return n && (e.perPage = Kc(n)),
            r && (e.perMove = Kc(r)),
            e
        }
          , Kc = t => {
            const e = Number(t);
            return isNaN(t) || e < 1 ? 1 : e
        }
          , Jc = ({options: t, renderer: e, mobileOptions: n, tabletOptions: i}) => {
            const s = e === r.B
              , o = s ? 420 : 767
              , a = s ? 768 : 1023;
            return {
                ...Wc(t),
                breakpoints: {
                    [o]: Wc(n),
                    [a]: Wc(i)
                }
            }
        }
          , Qc = t => {
            const {options: e={}, slides: n, children: s, renderer: o} = t
              , {contentDocument: a} = V()
              , [l,c] = i.useState(null)
              , d = i.useRef()
              , u = i.useRef()
              , p = o === r.B
              , {setLoaded: C} = Xe({
                src: `${r.a}/js/splide.min.js`,
                onLoad: qe({
                    plugin: "Splide",
                    instantiator(t) {
                        d.current && c(new t(d.current,e))
                    }
                })
            });
            hl({
                href: r.a + "/css/splide.min.css",
                doc: a
            }),
            (0,
            i.useEffect)(( () => {
                if (l && !u.current)
                    return l.mount(),
                    f(),
                    u.current = !p,
                    () => !u.current && l && l.destroy()
            }
            ), [l]),
            (0,
            i.useEffect)(( () => {
                l && l.refresh(),
                n.length || l.destroy()
            }
            ), [n]),
            (t => {
                (0,
                i.useEffect)(( () => {
                    if (!t)
                        return;
                    let e;
                    const n = n => {
                        (n.target.classList.contains("popup-btn") || n.target.closest(".popup-btn")) && (e = setTimeout(( () => {
                            t.refresh()
                        }
                        ), 600))
                    }
                    ;
                    return window.addEventListener("click", n),
                    () => {
                        clearTimeout(e),
                        window.removeEventListener("click", n)
                    }
                }
                ), [t])
            }
            )(l),
            (0,
            i.useEffect)(( () => {
                l && (C(!1),
                setTimeout(C, 0, !0))
            }
            ), [e]);
            const f = () => {
                qc.forEach((e => {
                    const n = "on" + e.split(":").map((t => t.charAt(0).toUpperCase() + t.slice(1))).join("");
                    "function" == typeof t[n] && l.on(e, ( (...e) => {
                        t[n](l, ...e)
                    }
                    ))
                }
                ))
            }
            ;
            return r.j.jsxs("div", {
                className: "splide",
                ref: d,
                children: [r.j.jsx("div", {
                    className: "splide__track",
                    children: r.j.jsx("ul", {
                        className: "splide__list",
                        children: s
                    })
                }), p && r.j.jsx(td, {})]
            })
        }
          , td = () => r.j.jsx("style", {
            jsx: !0,
            children: "\n                .splide--draggable\n                    > .splide__track\n                    > .splide__list\n                    > .splide__slide {\n                    user-select: unset;\n                }\n            "
        })
          , ed = ({children: t}) => r.j.jsx("li", {
            className: "splide__slide",
            children: t
        })
          , nd = ({attrs: t, className: e, renderer: n, item: {media: {mobile: i, tablet: s}={}, slider: {items: o, caption: a, options: l}}, control: c={}}) => {
            var d, u;
            const p = null == (d = null == i ? void 0 : i.slider) ? void 0 : d.options
              , C = null == (u = null == s ? void 0 : s.slider) ? void 0 : u.options
              , {interactionProps: f} = ye()
              , h = Jc({
                options: l,
                renderer: n,
                mobileOptions: p,
                tabletOptions: C
            });
            return o.length ? r.j.jsxs("div", {
                className: e,
                ...t,
                ...c.props,
                children: [r.j.jsx(Qc, {
                    options: h,
                    slides: o,
                    renderer: n,
                    children: o.map((t => r.j.jsx(ed, {
                        children: r.j.jsx("a", {
                            href: t.url,
                            target: t.target,
                            ...f,
                            ...t.noFollow && {
                                rel: "nofollow"
                            },
                            children: r.j.jsxs("figure", {
                                children: [r.j.jsx("img", {
                                    src: t.src || "/assets/images/image-placeholder.jpg",
                                    alt: t.label
                                }), a.show && r.j.jsx("figcaption", {
                                    className: "overlay" !== a.type ? xl(a.hidden) : "",
                                    children: t.label
                                })]
                            })
                        })
                    }, t.id)))
                }), c.render && c.render()]
            }) : null
        }
        ;
        nd.shouldRender = ({item: {slider: t={}}}) => {
            var e;
            return null == (e = t.items) ? void 0 : e.length
        }
        ;
        const rd = ({className: t, attrs: e, address: n, renderer: i, shouldType: s, InteractiveComponent: o, item: {slider: {contents: a, options: l}, settings: {hasImg: c, hasButton: d}, media: {mobile: u, tablet: p}={}}, control: C={}}) => {
            var f, h;
            const m = null == (f = null == u ? void 0 : u.slider) ? void 0 : f.options
              , g = null == (h = null == p ? void 0 : p.slider) ? void 0 : h.options
              , v = Jc({
                options: l,
                renderer: i,
                mobileOptions: m,
                tabletOptions: g
            })
              , y = i === r.B;
            return a.length ? r.j.jsxs("div", {
                className: t,
                ...e,
                ...C.props,
                children: [r.j.jsx(Qc, {
                    slides: a,
                    renderer: i,
                    options: v,
                    children: a.map(( ({content: e, id: i, src: a, btnText: l, url: u, target: p, settings: C, title: f, isAdmin: h}, m) => r.j.jsx(ed, {
                        children: r.j.jsx("div", {
                            className: `content__slider--wrapper wrapper-${i}`,
                            children: r.j.jsxs("div", {
                                className: "content__slider",
                                children: [c && a && r.j.jsxs(r.j.Fragment, {
                                    children: [r.j.jsx("img", {
                                        src: a,
                                        alt: f
                                    }), r.j.jsx("span", {
                                        className: "spacer"
                                    })]
                                }), r.j.jsxs("div", {
                                    className: "content__slider--description",
                                    children: [y ? r.j.jsxs(r.j.Fragment, {
                                        children: [r.j.jsx(o, {
                                            as: "h3",
                                            typekey: `${t}-title-${i}`,
                                            shouldType: s,
                                            strings: [f]
                                        }), r.j.jsx(o, {
                                            className: "content",
                                            as: "div",
                                            inlineEditor: !0,
                                            address: n,
                                            path: `slider/contents/${m}/content`,
                                            typekey: `${t}-content-${i}`,
                                            shouldType: s,
                                            strings: [h ? (0,
                                            r.s)(e) : e]
                                        })]
                                    }) : r.j.jsxs(r.j.Fragment, {
                                        children: [r.j.jsx("h3", {
                                            children: f
                                        }), r.j.jsx("div", {
                                            className: "content",
                                            dangerouslySetInnerHTML: {
                                                __html: h ? (0,
                                                r.s)(e) : e
                                            }
                                        })]
                                    }), d && r.j.jsx(id, {
                                        data: {
                                            btnText: l,
                                            url: u,
                                            target: p,
                                            settings: C
                                        }
                                    })]
                                })]
                            })
                        })
                    }, i)))
                }), C.render && C.render()]
            }) : null
        }
          , id = ({data: {url: t, target: e, settings: n={}, btnText: s}}) => {
            const {updateModalId: o} = (0,
            i.useContext)(R)
              , a = we({
                hrefType: n.hrefType,
                noFollow: n.noFollow,
                hrefValue: t,
                hrefTarget: e
            });
            return r.j.jsx("a", {
                onClick: () => {
                    "popup" === n.hrefType && o(t)
                }
                ,
                className: me(null == n ? void 0 : n.hrefType),
                ...a,
                children: r.j.jsx("button", {
                    children: s
                })
            })
        }
        ;
        rd.shouldRender = ({item: {slider: t={}}}) => {
            var e;
            return null == (e = t.contents) ? void 0 : e.length
        }
        ;
        const sd = ["left", "right", "above", "bellow"]
          , od = (t, e=["inline", "stacked"]) => e.includes(t)
          , ad = ({className: t, attrs: e, renderer: n, address: i, InteractiveComponent: s, item: {settings: {__layout: o}, media: {mobile: a, tablet: l}={}, slider: {options: c, contents: d}}, shouldType: u, control: p={}}) => {
            var C, f;
            const h = null == (C = null == a ? void 0 : a.slider) ? void 0 : C.options
              , m = null == (f = null == l ? void 0 : l.slider) ? void 0 : f.options
              , g = Jc({
                options: c,
                renderer: n,
                mobileOptions: h,
                tabletOptions: m
            })
              , v = n === r.B;
            return d.length ? r.j.jsxs("div", {
                className: t,
                ...e,
                ...p.props,
                children: [r.j.jsx(Qc, {
                    slides: d,
                    renderer: n,
                    options: g,
                    children: d.map(( ({id: e, content: n, title: a, name: l, src: c, isAdmin: d}, p) => r.j.jsx(ed, {
                        children: r.j.jsxs("div", {
                            className: "testimonial",
                            children: [r.j.jsxs("div", {
                                className: "testimonial__content",
                                children: [v ? r.j.jsx(s, {
                                    as: "div",
                                    className: "content",
                                    address: i,
                                    inlineEditor: !0,
                                    path: `slider/contents/${p}/content`,
                                    typekey: `${t}-testimonial-${e}`,
                                    shouldType: u,
                                    strings: [d ? (0,
                                    r.s)(n) : n]
                                }) : r.j.jsx("div", {
                                    className: "content",
                                    dangerouslySetInnerHTML: {
                                        __html: d ? (0,
                                        r.s)(n) : n
                                    }
                                }), r.j.jsx("span", {
                                    className: "spacer"
                                }), r.j.jsxs("div", {
                                    className: "testimonial__info",
                                    children: [c && od(o) && r.j.jsxs(r.j.Fragment, {
                                        children: [r.j.jsx("img", {
                                            className: "testimonial__info--img",
                                            src: c,
                                            alt: l
                                        }), r.j.jsx("span", {
                                            className: "testimonial__separator"
                                        })]
                                    }), r.j.jsx("div", {
                                        className: "testimonial__info--text",
                                        children: v ? r.j.jsxs(r.j.Fragment, {
                                            children: [r.j.jsx(s, {
                                                as: "p",
                                                typekey: `${t}-name-${e}`,
                                                shouldType: u,
                                                strings: [l]
                                            }), r.j.jsx(s, {
                                                as: "p",
                                                typekey: `${t}-title-${e}`,
                                                shouldType: u,
                                                strings: [a]
                                            })]
                                        }) : r.j.jsxs(r.j.Fragment, {
                                            children: [r.j.jsx("p", {
                                                children: l
                                            }), r.j.jsx("p", {
                                                children: a
                                            }), " "]
                                        })
                                    })]
                                })]
                            }), c && od(o, sd) && r.j.jsxs(r.j.Fragment, {
                                children: [r.j.jsx("span", {
                                    className: "testimonial__separator"
                                }), r.j.jsx("img", {
                                    className: "testimonial__content--img",
                                    src: c,
                                    alt: l
                                })]
                            })]
                        })
                    }, e)))
                }), p.render && p.render()]
            }) : null
        }
        ;
        ad.shouldRender = ({item: {slider: t={}}}) => {
            var e;
            return null == (e = t.contents) ? void 0 : e.length
        }
        ;
        const ld = ({heading: t}) => r.j.jsx("h3", {
            className: "banner-heading",
            "data-testid": "subscription-banner-header",
            children: t
        })
          , cd = {
            nav: Se,
            row: B,
            icon: Oe,
            line: Ye,
            text: Re,
            tags: Ae,
            code: Ie,
            tabs: We,
            lists: tn,
            image: nn,
            links: Pa,
            title: Ea,
            video: Na,
            search: Rc,
            column: Ml,
            iframe: bl,
            button: Ha,
            cmsRow: Ll,
            section: function(t) {
                var e, n, s, o, a, l, c, d;
                const {children: u, className: p, item: C, attrs: f} = t
                  , {sources: h={}, attr: m={}} = C
                  , [g] = p.split(" ");
                Object.entries(h).filter(( ([t,e]) => e));
                const v = H(C, p);
                return (0,
                i.useState)((null == (e = null == C ? void 0 : C.sources) ? void 0 : e.mp4) || (null == (n = null == C ? void 0 : C.sources) ? void 0 : n.webm)),
                r.j.jsxs("section", {
                    className: `dorik-section ${v}`,
                    ...f,
                    children: ["video" === (null == (s = C.style) ? void 0 : s.__backgroundType) && r.j.jsxs(r.j.Fragment, {
                        children: [(null == (o = null == C ? void 0 : C.sources) ? void 0 : o.mp4) && r.j.jsx("video", {
                            className: "video-bg",
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            children: r.j.jsx("source", {
                                src: null == (a = null == C ? void 0 : C.sources) ? void 0 : a.mp4,
                                type: "video/mp4"
                            })
                        }, null == (l = null == C ? void 0 : C.sources) ? void 0 : l.mp4), "none" !== (null == (d = null == (c = C.video) ? void 0 : c.attr) ? void 0 : d.__class__overlayType) && r.j.jsx("div", {
                            className: `video-overlay ${g}--video-overlay`
                        })]
                    }), C.frames && Object.entries(C.frames).filter(( ([t,e]) => e.frameId)).map(( ([t]) => r.j.jsx("div", {
                        className: `${g}-frame-${t} dorik-frame-${t}`
                    }, t))), u]
                })
            },
            airtable: u.A,
            iconText: El,
            container: t => {
                const e = "root" === t.item.holder ? _l : i.Fragment;
                return r.j.jsx(e, {
                    children: r.j.jsx(kl, {
                        ...t
                    })
                })
            }
            ,
            moveToTop: function({className: t, attrs: e, item: n, renderer: s, control: o={}}) {
                var a;
                const {moveToTop: {icon: l, iconActive: d, buttonText: u, visibilityType: p, pixelPosition: C, sectionId: f, builderPreview: h}} = n
                  , {contentWindow: m, contentDocument: g} = V()
                  , [v,y] = (0,
                i.useState)(!1)
                  , w = (0,
                i.useRef)("")
                  , L = s === r.B && h
                  , b = s === r.B ? "div" : i.Fragment
                  , x = null == g ? void 0 : g.getElementById(f)
                  , j = () => {
                    const t = null == m ? void 0 : m.scrollY;
                    let e = Number(C) || 0;
                    if ("section" === p && x) {
                        const t = x.getBoundingClientRect().top - (null == m ? void 0 : m.innerHeight);
                        y(t < -40)
                    } else
                        y(e < t)
                }
                ;
                (0,
                i.useEffect)(( () => {
                    if (s !== r.B && (f || C))
                        return m.addEventListener("scroll", j),
                        () => m.removeEventListener("scroll", j)
                }
                ), [x]),
                (0,
                i.useEffect)(( () => {
                    w.current = v
                }
                ), [v]);
                const M = `${t}  dorik-btn ${L ? "builder-preview" : ""} ${s !== r.B ? "back-to-top-btn" : ""} ${v ? "showBtn" : ""} ${w.current ? "fadeOut" : ""}\n`;
                return r.j.jsxs(b, {
                    ...o.props,
                    style: {
                        ...null == (a = o.props) ? void 0 : a.style,
                        flex: 1
                    },
                    children: [L && r.j.jsx(Ze, {
                        item: n
                    }), r.j.jsxs("div", {
                        "data-testid": "move-to-top-el",
                        className: M,
                        ...e,
                        onClick: () => {
                            s !== r.B && (null == m || m.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }))
                        }
                        ,
                        children: [d ? (t => {
                            const {icon: e} = t;
                            return e ? r.j.jsx(c.I, {
                                exClass: "icon",
                                iconArgs: e,
                                icon: t
                            }) : null
                        }
                        )(l) : "", r.j.jsx("span", {
                            children: u
                        })]
                    }), o.render && o.render()]
                })
            },
            accordion: Al,
            socialIcon: Ol,
            emptyBlock: Ze,
            customForm: yc,
            blogWidget: ({item: t, renderer: e, className: n, interactionDisabled: s, control: o={}}) => {
                var a;
                const {slugs: l, siteId: d, pageType: u, CDNDomain: p, useCollectionItems: C, data: f={}} = en()
                  , {blogType: h, widget: m} = t
                  , g = e === r.B
                  , {prevText: v="Prev", nextText: y="Next", type: w="loadMore", perView: L=1, loadText: b="Load More"} = (null == (a = null == m ? void 0 : m.pagination) ? void 0 : a.config) || {}
                  , [x,j] = (0,
                i.useState)(1)
                  , [M,E] = (0,
                i.useState)("next")
                  , {isFetching: N, hasNextPage: k, fetchNextPage: _, data: S=[], isFetchingNextPage: A} = C({
                    siteId: d,
                    pageType: u,
                    type: "POST",
                    slug: f.slug,
                    options: {
                        page: x,
                        type: w,
                        perPage: Number(L)
                    }
                })
                  , T = t => {
                    switch (t) {
                    case "load":
                        return k ? _() : void 0;
                    case "prev":
                        return j((t => Math.max(t - 1, 1))),
                        void E(t);
                    default:
                        return j((t => t + 1)),
                        void E(t)
                    }
                }
                ;
                return r.j.jsxs("div", {
                    className: n,
                    ...o.props,
                    children: [S.map((t => r.j.jsx(Nl, {
                        post: t,
                        type: h,
                        CDNDomain: p,
                        slugs: l,
                        interactionDisabled: s
                    }, t.id))), r.j.jsx("div", {
                        className: "pagination",
                        children: "nextPrev" === w ? r.j.jsxs(r.j.Fragment, {
                            children: [r.j.jsxs("button", {
                                className: "pagination--nextPrev prev",
                                onClick: () => T("prev"),
                                disabled: 1 === x,
                                children: [r.j.jsx(c.I, {
                                    exClass: "icon",
                                    iconArgs: {
                                        prefix: "fas",
                                        iconName: "arrow-left"
                                    }
                                }), N && (0,
                                c.s)(M, "prev"), v]
                            }), r.j.jsxs("button", {
                                className: "pagination--nextPrev next",
                                onClick: () => T("next"),
                                disabled: S.length < L,
                                children: [N && (0,
                                c.s)(M, "next"), y, r.j.jsx(c.I, {
                                    exClass: "icon",
                                    iconArgs: {
                                        prefix: "fas",
                                        iconName: "arrow-right"
                                    }
                                })]
                            })]
                        }) : r.j.jsxs("button", {
                            className: "pagination--loadMore load",
                            onClick: () => T("load"),
                            disabled: !g && !k,
                            children: [A && (0,
                            c.s)(), b]
                        })
                    }), o.render && o.render()]
                })
            }
            ,
            contactForm: function({item: t, className: e, attrs: n, renderer: i, interactionDisabled: s, control: o={}}) {
                e = H(t, e);
                const {id: a, fields: l={}, form: c={}, settings: d={}} = t
                  , {service: u="email"} = d
                  , {forwardTo: p, successAction: C} = c
                  , {hrefType: f} = d
                  , h = ve(f, p)
                  , m = [{
                    type: "text",
                    name: "name",
                    fieldType: "name",
                    component: "input",
                    className: "form-control"
                }, {
                    type: "email",
                    name: "email",
                    required: !0,
                    fieldType: "email",
                    component: "input",
                    className: "form-control"
                }, {
                    type: "number",
                    name: "phone",
                    fieldType: "phone",
                    component: "input",
                    className: "form-control"
                }, {
                    type: "text",
                    name: "subject",
                    fieldType: "subject",
                    component: "input",
                    className: "form-control"
                }, {
                    name: "message",
                    fieldType: "message",
                    component: "textarea",
                    className: "form-control"
                }];
                i === r.B && m.push({
                    type: "button",
                    name: "button",
                    fieldType: "button",
                    component: "button"
                });
                const g = t => !!t && t._enabled
                  , v = m.map((t => {
                    const e = l[t.fieldType];
                    return e ? {
                        ...t,
                        data: e
                    } : t
                }
                ))
                  , y = t => ("form-group " + ("button" === t.fieldType ? "form-button" : "")).trim()
                  , w = c.toEmail ? Pl.Buffer.from(c.toEmail).toString("base64") : "";
                return i === r.B ? r.j.jsxs("form", {
                    id: a,
                    className: e,
                    ...o.props,
                    children: [r.j.jsx("input", {
                        type: "hidden",
                        name: "formId",
                        value: a
                    }), v.map(( (t, e) => g(t.data) ? r.j.jsxs("div", {
                        className: ("form-group " + ("button" === t.fieldType ? "form-button" : "")).trim(),
                        children: [t.data.label && r.j.jsx("label", {
                            children: t.data.label
                        }), r.j.jsx(Ql, {
                            field: t
                        })]
                    }, e) : null)), o.render && o.render()]
                }) : r.j.jsxs("form", {
                    ...n,
                    id: a,
                    className: e,
                    children: ["email" === u ? r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx("input", {
                            type: "hidden",
                            name: "_t",
                            value: w
                        }), r.j.jsx("input", {
                            type: "hidden",
                            name: "_sub",
                            value: c.subject
                        })]
                    }) : null, r.j.jsxs("div", {
                        className: "fields-wrapper",
                        children: [v.map(( (t, e) => g(t.data) ? r.j.jsxs("div", {
                            className: y(t),
                            children: [t.data.label && r.j.jsx("label", {
                                children: t.data.label
                            }), r.j.jsx(Ql, {
                                field: t
                            })]
                        }, e) : null)), r.j.jsx(Kl, {
                            id: t.id
                        }), r.j.jsx(Jl, {
                            ...l.button
                        })]
                    }), "forward" === C && r.j.jsx("div", {
                        className: "forward--url",
                        hidden: !0,
                        "data-forward-to": h
                    })]
                })
            },
            counterdown: Rl,
            postContent: Ec,
            imageSlider: nd,
            progressbar: Vl,
            searchWidget: Uc,
            imageGallery: Ic,
            subscription: rc,
            counterCircle: xc,
            contentSlider: rd,
            paymentWidgets: Xc,
            airtableDetails: c.A,
            testimonialSlider: ad,
            subscriptionBanner: ({className: t, item: e, renderer: n, control: s={}}) => {
                const {subscriptionAccess: o, user: a, subscriptionBanner: l} = en()
                  , c = "subscriber" === (null == a ? void 0 : a.role)
                  , {history: d, router: u, appName: p} = (0,
                i.useContext)(r.C)
                  , C = t => {
                    "BUILDER" !== n && ("STATIC" === p ? d.push : u.push)(`#/portal/${t}`)
                }
                  , f = c ? "plan" : "signup"
                  , {banner: h} = e
                  , m = "BUILDER" === n || "REGULAR" === l.bannerType ? h.text.heading_page : h.text.heading_post;
                return r.j.jsxs("div", {
                    className: t,
                    "data-testid": "subscription-banner",
                    ...s.props,
                    children: ["NOBODY" === o ? null : r.j.jsxs(r.j.Fragment, {
                        children: [r.j.jsx(ld, {
                            heading: m
                        }), "INVITED" === o ? null : r.j.jsx("button", {
                            className: "banner-button",
                            onClick: () => C(f),
                            children: h.button.subscribe_btn_text
                        }), !c && r.j.jsxs("div", {
                            className: "subscription-footer",
                            "data-testid": "subscription-banner-signin",
                            children: [r.j.jsx("p", {
                                children: h.text.signin
                            }), r.j.jsx("button", {
                                className: "banner-button",
                                onClick: () => C("signin"),
                                children: h.button.signin_btn_text
                            })]
                        })]
                    }), s.render && s.render()]
                })
            }
        };
        const dd = ({item: t, renderer: e, permission: n}) => {
            const r = "BUILDER" === e || "PREVIEW" === e
              , i = cd[t.component_path]
              , {isRenderable: s} = function() {
                const {renderContent: t} = O();
                return {
                    isRenderable: e => {
                        var n;
                        return null == (n = t(e)) ? void 0 : n.replace(/(<([^>]+)>|\n)/g, "")
                    }
                }
            }();
            if (!i)
                return null;
            const o = "function" == typeof i.shouldRender && !i.shouldRender({
                item: t,
                renderer: e,
                isRenderable: s,
                permission: n
            });
            return r && o ? cd.emptyBlock : e || n.render(t.type) ? i : null
        }
        ;
        const ud = (t=[]) => {
            const e = /^data-[a-z]+(\d*(-[a-z\d]+)*)?="[\w\s~!@#$%^&*()+_\-<>':;]*"$/;
            return t.filter((t => e.test(t)))
        }
        ;
        const pd = (0,
        i.forwardRef)(( ({as: t="div", children: e, ...n}, i) => r.j.jsx(t, {
            ...n,
            ref: i,
            children: e
        })));
        function Cd({integrationData: t, item: e, date: n, siteId: s, children: o, renderer: a, permission: l, addIntegration: c, interactionDisabled: d}) {
            const u = function(t) {
                var e;
                let n = `dorik-${t.type}-${t.id}`;
                return t.symbolId && (n = "symbol--" + t.symbolId + " " + n),
                n += " " + xl(null == (e = null == t ? void 0 : t.settings) ? void 0 : e.hideOn),
                (0,
                r.i)(t.attr) && Object.entries(t.attr).forEach(( ([t,e]) => {
                    e && ("class" === t || t.startsWith("__class__")) && (n += " " + e)
                }
                )),
                n
            }(e)
              , p = function(t, e) {
                var n;
                const [r] = t.split(" ");
                return `${r}-wrapper ${xl(null == (n = null == e ? void 0 : e.settings) ? void 0 : n.hideOn)}`
            }(u, e)
              , C = dd({
                item: e,
                renderer: a,
                permission: l
            })
              , f = function(t) {
                if (!t.animation || !t.animation.type)
                    return [];
                const e = /^\d/
                  , n = "data-aos";
                return Object.entries(t.animation).map(( ([t,r]) => ["type" === t ? n : `${n}-${t}`, e.test(r) ? parseInt(r) : r])).filter(( ([t,e]) => null != e && "" !== e))
            }(e)
              , h = function(t=[]) {
                const e = {};
                return [...t].map(( ([t,n]) => {
                    t.startsWith("__") ? t.includes("__data") && function(t=[]) {
                        return t.map((t => {
                            const [e,n] = t.split("=");
                            if (e || n)
                                return {
                                    key: e,
                                    value: null == n ? void 0 : n.replace(/["']/g, "")
                                }
                        }
                        ))
                    }(ud(n)).filter((t => t)).forEach((t => e[t.key] = t.value)) : e[he(t)] = n
                }
                )),
                e
            }([...e.attr ? Object.entries(e.attr).filter(( ([t,e]) => e)) : [], ...f]);
            return C ? i.createElement(C, {
                integrationData: t,
                item: e,
                date: n,
                attrs: h,
                siteId: s,
                renderer: a,
                className: u,
                permission: l,
                wrapperClass: p,
                addIntegration: c,
                interactionDisabled: d,
                InteractiveComponent: pd
            }, o) : null
        }
        function fd({data: t, siteURL: e, ...n}) {
            var s;
            const {global: o={}, page: a, siteId: l} = t
              , {symbols: c={}} = o
              , {subscriptionBanner: d={}} = en() || {}
              , u = i.useCallback((t => {
                var e;
                return "symbolId"in (t || {}) ? {
                    ...null == (e = c[t.symbolId]) ? void 0 : e.data,
                    ...t
                } : t
            }
            ), [c]);
            return d.isPrivatePage && d.enabled ? r.j.jsx(vd, {
                banner: d,
                permission: n.permission
            }) : t.page ? r.j.jsxs(P, {
                value: {
                    popupSetting: null == (s = a.settings) ? void 0 : s.popupSetting
                },
                children: [r.j.jsx(gd, {
                    content: t.page.content,
                    parseSymbol: u,
                    siteId: l,
                    date: null == o ? void 0 : o.date,
                    ...n
                }), r.j.jsx(hd, {
                    siteURL: e,
                    permission: n.permission
                })]
            }) : null
        }
        const hd = ({siteURL: t, permission: e={}}) => {
            const {appName: n} = (0,
            i.useContext)(r.C);
            let s = `mailto:abuse@dorik.io?subject=Abuse Report ${t}`;
            return "CMS" === n && e.render("dorikBranding") ? r.j.jsxs(r.j.Fragment, {
                children: [r.j.jsx("style", {
                    children: "\n        /* DORIK BRANDING */\n        .dorik-branding-wrapper {\n            position: fixed;\n            bottom: 20px;\n            left: 20px;\n            border-radius: 3px;\n        }\n        .dorik-branding {\n            gap: 4px;\n            z-index: 1;\n            display: flex;\n            border: unset;\n            outline: unset;\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n            position: relative;\n            padding: 10px 20px;\n            align-items: center;\n            border-radius: 4px;\n            background: #272727;\n            font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,\n                sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n        }\n        .dorik-branding a {\n            display: inline-block;\n            color: #fff;\n            text-decoration: none;\n        }\n        .dorik-branding .flag {\n            height: 18px;\n            width: 18px;\n            display: inline-block;\n            color: #ff4d4f;\n        }\n        .dorik-branding:after,\n        .dorik-branding:before {\n            z-index: -1;\n            content: '';\n            inset: 0;\n            border-radius: 4px;\n            position: absolute;\n        }\n        .dorik-branding:before {\n            width: 100%;\n            height: 100%;\n            animation: rainbow-border 1.5s linear infinite;\n            background: linear-gradient(\n                70deg,\n                #0ebeff,\n                #ffdd40,\n                #ae63e4,\n                #47cf73,\n                #0ebeff,\n                #ffdd40,\n                #ae63e4,\n                #47cf73\n            );\n            background-size: 200% 200%;\n        }\n        .dorik-branding:after {\n            margin: 3px;\n            background: inherit;\n        }\n        @keyframes rainbow-border {\n            0% {\n                background-position: 0 50%;\n            }\n            50% {\n                background-position: 100% 50%;\n            }\n            100% {\n                background-position: 200% 50%;\n            }\n        }\n    "
                }), r.j.jsx("div", {
                    className: "dorik-branding-wrapper",
                    children: r.j.jsxs("div", {
                        className: "dorik-branding",
                        children: [r.j.jsx("a", {
                            href: "https://dorik.com",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Built with Dorik"
                        }), r.j.jsx("a", {
                            className: "flag",
                            href: s,
                            title: "Report Abuse",
                            children: r.j.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: [r.j.jsx("path", {
                                    fill: "none",
                                    d: "M0 0h24v24H0z"
                                }), r.j.jsx("path", {
                                    d: "M5 16v6H3V3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5zM5 5v9h8.236l1 2H19V7h-6.236l-1-2H5z"
                                })]
                            })
                        })]
                    })
                })]
            }) : null
        }
          , md = ["tags", "cmsRow", "search", "blogWidget", "postContent", "searchWidget"];
        function gd({content: t, siteId: e, ...n}) {
            const {date: i, appName: s, renderer: o, permission: a, parseSymbol: l, interactionDisabled: c} = n;
            if (Array.isArray(t))
                return t.map(l).map(( (t, l) => ( ({item: t, appName: e="STATIC"}) => !(null == t || !t.type) && ("STATIC" !== e || !md.includes(t.type)))({
                    item: t,
                    appName: s
                }) ? r.j.jsx(Cd, {
                    date: i,
                    item: t,
                    siteId: e,
                    renderer: o,
                    permission: a,
                    interactionDisabled: c,
                    children: Array.isArray(t.content) ? r.j.jsx(gd, {
                        content: t.content,
                        siteId: e,
                        ...n
                    }) : t.content
                }, l) : null)).filter(Boolean)
        }
        const vd = ({banner: t, permission: e}) => r.j.jsx("div", {
            style: {
                width: "100vw",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center"
            },
            children: r.j.jsx("div", {
                style: {
                    width: "800px",
                    margin: "0px 25px"
                },
                children: r.j.jsx(Cd, {
                    item: t.data,
                    permission: e
                })
            })
        });
        function yd({footerScripts: t, footerScriptsInit: e, disableIntegration: n}) {
            return r.j.jsxs(r.j.Fragment, {
                children: [t.map((t => r.j.jsx("script", {
                    crossOrigin: !0,
                    src: t
                }, t))), !n && r.j.jsx("script", {
                    type: "text/javascript",
                    children: e.join("\n")
                })]
            })
        }
        var wd = jt
          , Ld = 0;
        var bd = function(t) {
            var e = ++Ld;
            return wd(t) + e
        };
        const xd = (0,
        r.g)(bd);
        function jd(t, e) {
            const {fontFamily: n="", fontWeight: r=""} = e.style
              , i = t.find((t => t.fontFamily === n));
            if (i)
                return r && i.fontWeights.push(r),
                t;
            {
                const e = [];
                return r && e.push(r),
                t.concat({
                    fontFamily: n,
                    fontWeights: e
                })
            }
        }
        function Md(t) {
            const e = `confirm_${t}`
              , n = document.querySelector(`input[id='${e}']`);
            return !(null != n && n.value)
        }
        function Ed({data: t, isCMS: e, siteId: n, symbols: i, global: s, permission: o, excludes: a=[], addIntegration: l, addCredentials: c}) {
            const d = {
                verifyLegitimateUser: t => `function verifyLegitimateUser() {\n                const honeyPotIdentifier = \`confirm_${t}\`;\n                const honeyPotField = document.querySelector(\n                    \`input[id=\\\${honeyPotIdentifier}\\]\`\n                );\n                return !honeyPotField?.value;\n            };\n\n            const isLegitimateUser = verifyLegitimateUser();\n            if (!isLegitimateUser) return;\n            `,
                subscription(t) {
                    var e, i;
                    const {form: s={}, settings: o={}, className: a} = t;
                    let {configType: c, service: d, keyId: u, listId: p, brandId: C, webhook: f=""} = o;
                    if ("api" === c) {
                        const i = `\n                    $(\\#${t.id}\\).Subscribe({\n                        siteId: \\${n}\\,\n                        keyId: \\${u}\\,\n                        service: \\${d}\\,\n                        brandId: \\${C}\\,\n                        listId: \\${p}\\,\n                        successAction: \\${s.successAction}\\,\n                        successMessage: \\${null == (e = s.successMessage) ? void 0 : e.replace(/"/gi, "&quot;")}\\,\n                        rootEl: \\${a}\\,\n                        verifyLegitimateUser: ${Md},\n                        subscriptionApiURL: \\${r.S}\\\n                    })`;
                        l({
                            scripts: [r.J, "https://cdn.dorik.com/common/subscription-form-4.0.0.umd.js"],
                            initCode: i,
                            footer: !0
                        })
                    } else if ("webhook" === c) {
                        let e = "data,"
                          , n = ""
                          , o = ""
                          , c = ""
                          , u = "POST"
                          , p = "data.result === \\success\\";
                        "mailchimp" === d ? (o = "dataType: \\jsonp\\,",
                        f = f.replace(/post\?/, "post-json?").concat("&c=?")) : "mailerlite" === d ? f = function(t) {
                            return `https://app.mailerlite.com/webforms/submit/${t}`
                        }(f) : "activecampaign" === d ? (e = "",
                        u = "GET",
                        c = "+ \\?jsonp=true&\\ + data",
                        f = function(t) {
                            return function(t="") {
                                return t.split("/f/")
                            }(t)[0]
                        }(f) + "/proc.php") : "convertkit" === d ? (n = "headers: { Accept: \\application/json\\ },",
                        p = "data.status === \\success\\ || data.status === \\quarantine\\") : "sendinblue" === d && (c = "+ \\?isAjax=1\\"),
                        "zapier" === d ? p = "data.status === \\success\\" : "integromat" === d || "pabbly" === d ? p = "true" : "mailerlite" === d || "sendinblue" === d ? p = "data.success !== false" : "activecampaign" === d && (p = "data.includes(\\_show_thank_you\\)");
                        let C = "";
                        "forward" === s.successAction && (C = `if(${p}) {\n                    var forwardTo = document.querySelector(\\${a}\\).querySelector(\\.forward--url\\).dataset.forwardTo\n                    window.location.href = forwardTo\n                }`);
                        const h = `\n                $(\\#${t.id}\\).on(\\submit\\, function(e) {\n                    e.preventDefault();\n                    ${this.verifyLegitimateUser(t.id)}\n                    var that = this;\n                    $(this).find(\\.success-message\\).remove();\n                    $(this).find(\\.error-message\\).remove();\n                    var data = $(this).serialize().replace(\\&confirm_${t.id}=\\,\\\\);\n\n                    $.ajax({\n                        url: \\${f}\\ ${c},\n                        method: \\${u}\\,\n                        ${e}\n                        ${n}\n                        ${o}\n                        crossDomain: true,\n                        success: function(data) {\n                            var msgClass = ${p} ? \\success-message\\: \\error-message\\;\n                            var message = ${p} ? \\${null == (i = s.successMessage) ? void 0 : i.replace(/"/gi, "&quot;")}\\ : \\Something went wrong! Check the fields\\;\n                            var $div = $(\\<div>\\, {\n                                class: msgClass,\n                                html: message\n                            });\n                            $(that).append($div);\n                            that.reset()\n                            ${C}\n                        },\n                        error: function(error) {\n                            var $div = $(\\<div>\\, {\n                                class: \\error-message\\,\n                                html: error.message || \\Something went wrong! Check the fields\\\n                            });\n                            $(that).append($div);\n                        }\n                    });\n                });\n            `;
                        l({
                            initCode: h,
                            script: r.J,
                            footer: !0
                        })
                    }
                },
                heading(t) {
                    var e;
                    const {settings: n={}, dynamicText: r={}} = t;
                    if (null == (e = n.dynamicText) || !e._enabled || r.items.length <= 0)
                        return;
                    let i, s, o, a, c = `dorik-${t.type}-${t.id}-wrapper`;
                    r.options && ({backSpeed: i, loop: s, cursorChar: o, typeSpeed: a} = r.options),
                    o = !0 === o ? "\\|\\" : "\\\\";
                    l({
                        initCode: `\n                ;(function() {\n                    var dynamicClass =  document.querySelector(\\.${c}\\);\n                        var type = dynamicClass.querySelector(\\.typed\\);\n                        var typedString = dynamicClass.querySelector(\\.typed-strings\\);\n                        var typed = new Typed(type, {\n                            stringsElement: typedString,\n                            loop: ${s},\n                            backSpeed: ${i},\n                            typeSpeed: ${a},\n                            cursorChar: ${o},\n                        });\n                })();\n            `,
                        footer: !0,
                        script: "https://assets.dorik.com/common/typed.js@2.0.11"
                    })
                },
                tabs(t) {
                    var e;
                    if (null == (e = t.tabs.items) || !e.length)
                        return;
                    const n = `dorik-${t.type}-${t.id}-wrapper`
                      , i = parseInt(t.tabs.options.breakpoint)
                      , s = Number(t.tabs.options.selectedTab);
                    l({
                        initCode: `\n            ;(\n                function makeTabs() {\n                    var tabWrapperClass =  document.querySelector(\\.${n}\\);\n                    var tabs = tabWrapperClass.querySelector(\\.dorik-tabs\\);\n\n                    new AccordionTabs(tabs, {\n                        breakpoint: ${i},\n                        selectedTab: ${s},\n                        });\n                }\n            )()`,
                        script: r.a + "/js/a11y-accordion-tabs.min.js",
                        footer: !0
                    })
                },
                contactForm(t) {
                    var n;
                    const {settings: i={}, form: s={}, className: o} = t
                      , {service: a="email", webhook: d=""} = i
                      , u = "email" !== a ? d : e ? "/api/action/contact" : "/v2/sites/action/contact";
                    let p = "";
                    "email" === a ? p = "data.success === true" : "zapier" === a ? p = "data.status === \\success\\" : ("integromat" === a || "pabbly" === a) && (p = "true");
                    let C = "";
                    "forward" === s.successAction && (C = `if(${p}) {\n                    var forwardTo = document.querySelector(\\${o}\\).querySelector(\\.forward--url\\).dataset.forwardTo\n                    window.location.href = forwardTo\n                }`);
                    let f = "function injectUniqId(elem) {\n                const uniqId = Math.random().toString(36).substring(2, 8);\n                var input = document.createElement('input');\n                input.type = 'hidden';\n                input.value = uniqId;\n                input.name = '_uid';\n                elem.append(input);\n            }"
                      , h = "function triggerSpinner(el, status) {\n                el.find('.spinner').css(\n                    'display',\n                    status ? 'inline-block' : 'none'\n                );\n            }";
                    f = f.replace(/'/g, "\\"),
                    h = h.replace(/'/g, "\\");
                    const m = `;(function() {\n                var elem = $(\\#${t.id}\\);\n                ${h}\n                ${"email" === a ? `;(${f})(elem);` : ""}\n                $(elem).on(\\submit\\, function (e) {\n                    e.preventDefault();\n                    ${this.verifyLegitimateUser(t.id)}\n                    var that = this;\n                    triggerSpinner(elem, true);\n                    $(that).find(\\.success-message\\).remove();\n                    $(that).find(\\.error-message\\).remove();\n\n                    const data = $(this).serialize().replace(\\&confirm_ ${t.id}=\\,\\\\)\n\n                    $.ajax({\n                        data,\n                        url: \\${u}\\,\n                        method: \\POST\\,\n                        success: function(data) {\n                            var msgClass = ${p} ? \\success-message\\: \\error-message\\;\n                            var message = ${p} ? \\${null == (n = s.successMessage) ? void 0 : n.replace(/"/gi, "&quot;")}\\ : data.message;\n                            var $div = $(\\<div>\\, {\n                                class: msgClass,\n                                html: message\n                            });\n                            $(that).append($div);\n                            triggerSpinner(elem, false);\n                            that.reset()\n                            ${C}\n                        },\n                        error: function(error) {\n                            var $div = $(\\<div>\\, {\n                                class: \\error-message\\,\n                                html: error.message || \\Something went wrong! Check the fields\\\n                            });\n                            $(that).append($div);\n                            triggerSpinner(elem, false);\n                        }\n                    });\n                });\n            })();`;
                    c({
                        type: "contactForm",
                        data: {
                            formId: t.id,
                            email: s.toEmail
                        }
                    }),
                    l({
                        initCode: m,
                        script: r.J,
                        footer: !0
                    })
                },
                customForm(t) {
                    const {settings: i={}, customForm: s={}, className: o} = t
                      , {service: a="email", webhook: d=""} = i
                      , {successMessage: u=""} = s
                      , p = "email" !== a ? d : e ? "/api/action/contact" : "/v2/sites/action/contact";
                    let C = "";
                    "email" === a ? C = "data.success === true" : "zapier" === a ? C = "data.status === \\success\\" : "integromat" === a || "pabbly" === a ? C = "true" : "airtable" === a && (C = "data.success === true");
                    let f = "";
                    "forward" === s.successAction && (f = `if(${C}) {\n                    var forwardTo = document.querySelector(\\${o}\\).querySelector(\\.forward--url\\).dataset.forwardTo\n                    window.location.href = forwardTo\n                }`);
                    let h = "function injectUniqId(elem) {\n                const uniqId = Math.random().toString(36).substring(2, 8);\n                var input = document.createElement('input');\n                input.type = 'hidden';\n                input.value = uniqId;\n                input.name = '_uid';\n                elem.append(input);\n            }"
                      , m = "function triggerSpinner(el, status) {\n                el.find('.spinner').css(\n                    'display',\n                    status ? 'inline-block' : 'none'\n                );\n            }";
                    h = h.replace(/'/g, "\\"),
                    m = m.replace(/'/g, "\\");
                    const g = `;(function() {\n                var elem = $(\\#${t.id}\\);\n                ${m}\n                    var inputs = $(\\#${t.id} div[data-checkbox=&#x27;true&#x27;] input\\);\n                    inputs.click(function(event){\n                        var {name} = event.target;\n                        var filterInputs = inputs.filter((_,el)=>el.getAttribute(\\name\\)===name)\n\n                        var isChecked = filterInputs.toArray().some(({checked})=>checked)\n                        filterInputs.each((_,input) => {\n                                if (isChecked) {\n                                    input.removeAttribute(\\required\\);\n                                } else {\n                                    input.setAttribute(\\required\\, true);\n                                }\n                            })\n                    })\n\n                ${"email" === a ? `;(${h})(elem);` : ""}\n                $(elem).on(\\submit\\, function (e) {\n                    e.preventDefault();\n                    ${this.verifyLegitimateUser(t.id)}\n                    var that = this;\n                    triggerSpinner(elem, true);\n                    $(that).find(\\.success-message\\).remove();\n                    $(that).find(\\.error-message\\).remove();\n                    var data = $(that).serialize().replace(\\&confirm_ ${t.id}=\\,\\\\);\n                   \n                    ${function(t) {
                        return "pabbly" !== t ? "" : "\n    // Parse the query string into URLSearchParams\n    const params = new URLSearchParams(data);\n    // Object to store the grouped parameters\n    const groupedParams = {};\n    for (const [key, value] of params) {\n        if (groupedParams[key]) {\n            groupedParams[key].push(value);\n        } else {\n            groupedParams[key] = [value];\n        }\n    }\n    // Create a new URLSearchParams object to build the final query string\n    const finalParams = new URLSearchParams();\n    // Iterate over the grouped parameters and add them to the finalParams object\n    for (const key in groupedParams) {\n        if (groupedParams[key].length > 1) {\n            groupedParams[key].forEach((value) => {\n                finalParams.append(key+'[]', value);\n            });\n        } else {\n            finalParams.append(key, groupedParams[key]);\n        }\n    }\n    // Get the final query string and replace global data\n    data = finalParams.toString();\n    "
                    }(a)};\n                   \n                     ${"airtable" === a ? function(e) {
                        const {airtable: r={}} = s;
                        return `const airtable = AirtableJS(${JSON.stringify({
                            ...r,
                            projectId: n
                        }).replace(/"/g, "\\")});\n\n                    var formMap = $.map($(\\#${e} :input\\), function(el, idx) {\n                        return {\n                            type: el.type,\n                            value: el.value,\n                            name: el.name\n                        };\n                    });\n\n                    var fields = $(that).serializeArray().reduce(function(a, x, idx) {\n                        var checkField = (fieldType) => {\n                            return  formMap.find( item => item.name === x.name && item.type === fieldType)\n                        }\n                        if(x.name in a) {\n                            var prev = a[x.name];\n                            a[x.name] = Array.isArray(prev) ? prev.concat(x.value) : [prev, x.value]\n                        } else {\n                            if(checkField(\\checkbox\\)){\n                              a[x.name] = x.value===\\dorik-acceptance-${t.id}\\? Boolean(x.value): [x.value];\n                            }else if(checkField(\\number\\)){\n                                a[x.name] = Number(x.value);\n                            }else{\n                                a[x.name] = x.value\n                            }\n                        }\n                        return a;\n                    }, {});\n                    delete fields[\\confirm_${e}\\];\n                    airtable.createRecord(fields).then(data => {\n                        if(data.success) {\n                            var msgClass = ${C} ? \\success-message\\: \\error-message\\;\n                            var message = ${C} ? \\${u.replace(/"/gi, "&quot;")}\\ : data.message;\n                            var $div = $(\\<div>\\, {\n                                class: msgClass,\n                                html: message\n                            });\n                            $(that).append($div);\n                            triggerSpinner(elem, false);\n                            that.reset()\n                            ${f}\n                        } else {\n                            var $div = $(\\<div>\\, {\n                                class: \\error-message\\,\n                                html: data.message || \\Something went wrong! Check the fields\\\n                            });\n                            $(that).append($div);\n                            triggerSpinner(elem, false);\n                        }\n                    })\n                `
                    }(t.id) : function() {
                        var t;
                        return `$.ajax({\n                    url: \\${p}\\,\n                    method: \\POST\\,\n                    data: data,\n                    success: function(data) {\n                        var msgClass = ${C} ? \\success-message\\: \\error-message\\;\n                        var message = ${C} ? \\${null == (t = s.successMessage) ? void 0 : t.replace(/"/gi, "&quot;")}\\ : data.message;\n                        var $div = $(\\<div>\\, {\n                            class: msgClass,\n                            html: message\n                        });\n                        $(that).append($div);\n                        triggerSpinner(elem, false);\n                        that.reset()\n                        ${f}\n                    },\n                    error: function(error) {\n                        var $div = $(\\<div>\\, {\n                            class: \\error-message\\,\n                            html: error.message || \\Something went wrong! Check the fields\\\n                        });\n                        $(that).append($div);\n                        triggerSpinner(elem, false);\n                    }\n                });`
                    }()}\n                });\n            })();`;
                    c({
                        type: "customForm",
                        data: {
                            formId: t.id,
                            email: s.toEmail
                        }
                    });
                    const v = [r.J];
                    "airtable" === a && v.push(r.a + "/airtablejs-0.0.2.js"),
                    l({
                        scripts: v,
                        initCode: g,
                        footer: !0
                    })
                },
                counterdown({counter: t, id: e, type: n}) {
                    const {date: r, time: i, GMT: s, settings: {zero: o, onlyHours: a}} = t;
                    let c, d = `dorik-${n}-${e}`;
                    r && i && (c = Date.parse(`${r} ${i}  ${s ? "GMT" + s : ""}`));
                    l({
                        initCode: `\n                ;(function() {\n                    var element = document.querySelector(\\.${d}\\);\n                    CountDownTimer(element, {\n                        zero: \\${o}\\,\n                        endtime: ${c},\n                        onlyHours: \\${a}\\\n                    });\n                })();\n            `,
                        footer: !0,
                        script: "https://assets.dorik.com/common/CountDownTimer-1.0.0.js"
                    })
                },
                imageSlider(t) {
                    var e;
                    null != (e = t.slider.items) && e.length && l({
                        ...this.slider(t)
                    })
                },
                testimonialSlider(t) {
                    var e;
                    null != (e = t.slider.contents) && e.length && l({
                        ...this.slider(t)
                    })
                },
                contentSlider(t) {
                    var e;
                    null != (e = t.slider.contents) && e.length && l({
                        ...this.slider(t)
                    })
                },
                slider(t) {
                    const {type: e, id: n, slider: {options: i}, media: {mobile: s, tablet: o}={}} = t;
                    return {
                        initCode: `\n            ;(function(){\n                var element = document.querySelector(\\.dorik-${e}-${n}\\);\n                var splideEl = element.querySelector(\\.splide\\);\n                var splide =  new Splide(splideEl,${( () => {
                            var t, e;
                            return JSON.stringify(Jc({
                                options: i,
                                mobileOptions: null == (t = null == s ? void 0 : s.slider) ? void 0 : t.options,
                                tabletOptions: null == (e = null == o ? void 0 : o.slider) ? void 0 : e.options
                            })).replace(/"/g, "\\")
                        }
                        )()});\n                splide.mount()\n\n                var observElements = document.querySelectorAll(\\.popup-row\\);\n\n                const mutationObserver = new MutationObserver(mutations => {\n                    mutations.forEach(mutation => {\n                        var isVisible = mutation.target.classList.contains('btn-visible');\n                        if(isVisible){\n                            setTimeout( () => splide.refresh(),550)\n                        }\n                    });\n                });\n\n                observElements.forEach( (element) => {\n                    var observeEl = element.parentNode.closest(\\div\\);\n                    if(observeEl){\n                        mutationObserver.observe(observeEl, {\n                            attributes: true,\n                            subtree: true,\n                        });\n                    }\n\n                })\n\n            }())\n            `,
                        footer: !0,
                        script: r.a + "/js/splide.min.js",
                        links: [r.a + "/css/splide.min.css"]
                    }
                },
                nav(t) {
                    const {className: e, settings: n={}} = t
                      , i = `\n            ;(function() {\n                var navbar = $(\\${e}\\);\n                var navbarCollapse = $(\\.dorik-navbar--collapse\\);\n                (${"function ($, navbar, navbarCollapse) {\n                $(document).on('click', 'a', function (e) {\n                    var a = event.target.closest('a');\n                    var hash = a.hash;\n                    var stickyNav = $('.sticky-nav');\n                    var isSticky = !!event.target.closest(\".sticky-nav.sticky\");\n                    if (hash) {\n                        var baseHref = a.href.match(/(^https?:.+)#/);\n                        var baseURI = a.baseURI.match(/(^https?:.+)#?/);\n                        baseHref = baseHref && baseHref[1];\n                        baseURI = baseURI && baseURI[1];\n                        if (baseHref && baseURI && baseURI.includes(baseHref)) {\n                            // const section = $(hash).offset();\n                            var section;\n                            try {\n                                section = document.querySelector(hash)\n                            } catch (error) { return;}\n                            if (!section) return;\n                            e.preventDefault();\n                            var collapsedHeight =\n                                navbarCollapse[0]?.clientHeight || 0;\n                            var navbarHeight =\n                                navbar[0].clientHeight - collapsedHeight;\n\n                            if (stickyNav.length) {\n                                section.style.scrollMarginTop = navbarHeight + \"px\"\n                            }\n\n                            function waitForScrollStop(callback, delay = 500) {\n                                let timer;\n                                let lastScrollTime = 0;\n\n                                const adjustScrollPosition = (event) => {\n                                    clearTimeout(timer);\n                                    timer = setTimeout(callback, delay);\n\n                                    const currentTime = event.timeStamp;\n                                    const hasManualScrolled =\n                                        lastScrollTime &&\n                                        currentTime - lastScrollTime >= 100;\n\n                                    if (hasManualScrolled) {\n                                        clearTimeout(timer);\n                                        removeEventListener(\n                                            'scroll',\n                                            adjustScrollPosition\n                                        );\n                                    }\n\n                                    lastScrollTime = currentTime;\n                                };\n\n                                addEventListener('scroll', adjustScrollPosition);\n\n                                return () => {\n                                    removeEventListener('scroll', adjustScrollPosition);\n                                    clearTimeout(timer);\n                                };\n                            }\n\n                            function smoothScroll() {\n                                section.scrollIntoView({\n                                    block: 'start',\n                                    behavior: 'smooth',\n                                });\n                            }\n\n                            smoothScroll();\n                            const cleanupScrollListener = waitForScrollStop(() => {\n                                smoothScroll();\n                                cleanupScrollListener();\n                            });\n                  \n                        }\n                    }\n                });\n            }".replace(/['"]/g, "\\")})($, navbar, navbarCollapse);\n            })();\n            `
                      , s = "function toggleNav(el) {\n                const toggleBtn = el.querySelector('.dorik-navbar--toggle');\n                const navlist = toggleBtn.nextElementSibling;\n                const isMobileView = window.innerWidth < 768;\n                const isTabView = navbar.parentNode?.clientWidth <= 820;\n                toggleBtn &&\n                    toggleBtn.addEventListener('click', function (e) {\n                        const hasShow = navlist?.classList.contains('show');\n                        if (!hasShow) {\n                            expand(navlist);\n                        } else {\n                            collapse(navlist);\n                        }\n                    });\n                    const expandableDropdownLinks = navbar.querySelectorAll('.is-dropdown>a');\n                    expandableDropdownLinks.length &&\n                    expandableDropdownLinks.forEach((item) => {\n                        item.addEventListener('click', function (e) {\n                            e.preventDefault();\n                            let dropdownlist =\n                                e.target.closest('a')?.nextElementSibling;\n                            const hasShow =\n                                dropdownlist?.classList.contains('show');\n    \n                            if (isMobileView || isTabView) {\n                                expandableDropdownLinks.forEach((otherItem) => {\n                                    let otherDropdown =\n                                        otherItem.closest('a')?.nextElementSibling;\n                                    if (\n                                        otherDropdown &&\n                                        otherDropdown.classList.contains('show')\n                                    ) {\n                                        collapse(otherDropdown);\n                                    }\n                                });\n                                \n                                if (hasShow) {\n                                    collapse(dropdownlist);\n                                } else {\n                                    expand(dropdownlist);\n                                }\n                            }\n                        });\n                    });\n\n                let dropdownItems = navbar.querySelectorAll(\n                    '.dorik-nav--dropdown'\n                );\n                const navButtons = navbar.querySelectorAll('.dorik-nav--btns');\n\n                const filteredNavLinks = navbar.querySelectorAll(\n                    'li:not(.is-dropdown) .dorik-nav--link'\n                );\n                [...navButtons,...dropdownItems, ...filteredNavLinks].forEach((item) => {\n                    item?.addEventListener('click', () => {\n                        collapse(navlist);\n                        dropdownItems.forEach((item) => collapse(item));\n                    });\n                });\n\n                function expand(navlist) {\n                    if (!navlist) return;\n                    navlist.classList.add('show');\n                    const height = navlist.clientHeight + 'px';\n                    isMobileView && navlist.classList.add('collapsing');\n                    setTimeout(() => {\n                        navlist.style.height = height;\n                    }, 0);\n                    setTimeout(() => {\n                        navlist.style.height = null;\n                        navlist.classList.remove('collapsing');\n                    }, 350);\n                }\n                function collapse(navlist) {\n                    if (!navlist) return;\n                    navlist.style.height = navlist.clientHeight + 'px';\n                    isMobileView && navlist.classList.add('collapsing');\n                    setTimeout(() => {\n                        navlist.style.height = null;\n                    }, 0);\n                    setTimeout(() => {\n                        navlist.classList.remove('show');\n                        navlist.classList.remove('collapsing');\n                    }, 350);\n                }\n            }".replace(/'/g, "\\");
                    l({
                        initCode: i + `\n            ;(function () {\n                var navbar = document.querySelector(\\${e}\\);\n                (${s})(navbar);\n\n            })();` + (n.sticky ? "\n            ;(function stickyNav() {\n                var navbar = document.querySelector(\\.dorik-navbar\\);\n                if (navbar) {\n                    var last_known_scroll_position = 0;\n                    var ticking = false;\n\n                    function scroll(scroll_pos) {\n                        var parent = navbar.parentNode;\n                        var classList = parent.classList;\n                        var upWard = scroll_pos <= 50 && classList.contains(\\sticky\\);\n                        var downWard = scroll_pos > 50 && !classList.contains(\\sticky\\);\n                        if (downWard) {\n                            var height = parent.clientHeight;\n                            parent.style.top = \\-\\ + height + \\px\\;\n                            setTimeout(() => {\n                                $(\\body\\).css({ paddingTop: height + \\px\\ });\n                                parent.classList.add(\\sticky\\);\n                                if (!navbar.closest(\\.container-fluid\\)) {\n                                    navbar.classList.add(\\container\\);\n                                }\n                                parent.style.top = null;\n                            }, 0);\n                        } else if (upWard) {\n                            $(\\body\\).css({ paddingTop: 0 });\n                            parent.classList.remove(\\sticky\\);\n                            navbar.classList.remove(\\container\\);\n                        }\n                    }\n\n                    document.addEventListener(\\scroll\\, function (e) {\n                        last_known_scroll_position = window.scrollY;\n\n                        if (!ticking) {\n                            window.requestAnimationFrame(function () {\n                                scroll(last_known_scroll_position);\n\n                                ticking = false;\n                            });\n                            ticking = true;\n                        }\n                    });\n                }\n            })();" : ""),
                        script: r.J,
                        footer: !0
                    })
                },
                paymentWidgets(t) {
                    var e;
                    let {selectorId: n, stripe: i, paypal: s, gumroad: o, paddle: a, settings: c={}} = t;
                    if (i) {
                        i = i || {};
                        const t = {
                            lineItems: [{
                                quantity: 1,
                                price: i.priceId
                            }],
                            mode: i.mode || "payment",
                            submitType: i.mode && "payment" !== i.mode ? "auto" : i.submitType,
                            successUrl: i.successUrl || "window.location.href",
                            cancelUrl: "window.location.href",
                            billingAddressCollection: i.billingAddressCollection || "auto"
                        }
                          , e = JSON.stringify(t).replace(/"window\.location\.href"/g, "window.location.href").replace(/"/g, "\\");
                        "donate" === i.type || i.type,
                        i.type;
                        const s = `;(function() {\n                $(\\${n}\\).on(\\click\\, function(event) {\n                        event.preventDefault();\n                        var stripe = Stripe(\\${i.pk}\\);\n                        stripe.redirectToCheckout(${e}).then(function (result) {\n                            alert(result.error.message);\n                        });\n                    })\n                })();`;
                        l({
                            footer: !0,
                            initCode: s,
                            scripts: ["https://js.stripe.com/v3/", r.J]
                        })
                    }
                    if (s) {
                        const {planId: t, amount: r=0, clientId: i="", currency: o="USD", intent: a="capture"} = s
                          , c = `https://www.paypal.com/sdk/js?client-id=${i || "test"}&currency=${o}&intent=${a}&vault=${"subscription" === a}`
                          , d = {
                            style: {
                                ...s.style,
                                tagline: !1,
                                height: Number(null == (e = s.style) ? void 0 : e.height) || 55
                            },
                            createOrder: `function (data, actions) {\n                        return actions.order.create({\n                            purchase_units: [\n                                {\n                                    amount: {\n                                        value: ${r},\n                                    },\n                                },\n                            ],\n                        });\n                    }`,
                            createSubscription: `function (data, actions) {\n                        return actions.subscription.create({\n                            plan_id: '${t}',\n                        });\n                    }`,
                            onError: function(t) {
                                alert(t.message)
                            },
                            onApprove: `function (data, actions) {\n                        return actions.order.capture().then(function (details) {\n                            document.querySelector(\n                                '${n}'\n                            ).nextElementSibling.style.display = 'block';\n                        });\n                    }`
                        };
                        "subscription" === a ? delete d.createOrder : delete d.createSubscription;
                        const u = {};
                        for (let e in d) {
                            const t = d[e];
                            u[e] = "function" == typeof t ? t.toString() : t
                        }
                        const p = JSON.stringify(u).replace(/}"/g, "}").replace(/"func/g, "func").replace(/"/g, "\\").replace(/\\\\/g, "\\").replace(/'/g, "\\").replace(/\\n/g, "");
                        l({
                            initCode: `;(function() {\n                    var selectorId = \\${n}\\;\n                    paypal.Buttons(${p}).render(selectorId).catch((err) => {\n                        console.log(err);\n                    });\n                })();`,
                            footer: !0,
                            scripts: [c]
                        })
                    }
                    if (o) {
                        const {wanted: t} = o;
                        l({
                            footer: !0,
                            script: "https://gumroad.com/js/gumroad.js" + (t ? "?wanted=true" : "")
                        })
                    }
                    a && l({
                        footer: !0,
                        script: "https://cdn.paddle.com/paddle/paddle.js"
                    })
                },
                code(t) {
                    const {advanced: e, permission: n} = t;
                    if (null != e && e.js && null != n && n.render && n.render("code")) {
                        let t = `${e.js}`;
                        l({
                            footer: !0,
                            initCode: t
                        })
                    }
                },
                row(t) {
                    var e;
                    const {className: n, settings: {popup: i}={}, attr: {id: s}={}, pageSettings: o={}, id: a} = t
                      , c = null == (e = JSON.stringify(o.popupSetting)) ? void 0 : e.replace(/["]/g, "\\");
                    if (i && s) {
                        const t = `function row() {\n                    let popupRow = document.getElementById(id);\n                    let popupOverlayEl = popupRow?.parentElement;\n                    let { exitIntentPopup = {}, onloadPopup = {} } =\n                        popupSetting || {};\n\n                    let btn = document.querySelector('.close-btn-${s}');\n\n                    const resetStorage = (prefix) => {\n                        Object.keys(localStorage).map((item) => {\n                            if (item.startsWith(prefix + '-' + id)) {\n                                localStorage.removeItem(item);\n                            }\n                        });\n                    };\n\n                    btn.addEventListener('click', () => {\n                        let exit_intent = '${r.E}-${s}-' + exitIntentPopup.suffixId,\n                            on_load = '${r.O}-${s}-' + onloadPopup.suffixId;\n\n                        if (id === onloadPopup.id && !onloadPopup.repeatedly) {\n                            resetStorage(ONLOAD);\n                            localStorage.setItem(on_load, 'disable');\n                        }\n                        if (\n                            id === exitIntentPopup.id &&\n                            !exitIntentPopup.repeatedly\n                        ) {\n                            resetStorage(EXIT_INTENT);\n                            localStorage.setItem(exit_intent, 'disable');\n                        }\n                        const videos = document.querySelectorAll('.${r.p}-popup-${a} video');\n                        if (videos.length) {\n                        videos.forEach((video) => {\n                            video.pause();\n                            video.currentTime = 0;\n                            });\n                        };\n                        popupOverlayEl?.classList.remove('row-${s}-overlay');\n                        popupRow?.classList.remove('modal-${s}-visible');\n                    });\n                }`.replace(/'/g, "\\");
                        let e = `\n                ;(function () {\n                    const id = \\${s}\\;\n                    const ONLOAD = \\${r.O}\\;\n                    const EXIT_INTENT = \\${r.E}\\;\n                    const className = \\${n}\\;\n                    const popupSetting = ${c};\n                    (${t})(\\${n}\\)\n                })();`;
                        l({
                            footer: !0,
                            initCode: e
                        })
                    }
                },
                counterCircle(t) {
                    var e;
                    if (null == (e = t.counterCircle.items) || !e.length)
                        return;
                    const {className: n, counterCircle: {layout: r, duration: i}} = t
                      , s = `function counterCircle() {\n                let counterBars = document.querySelectorAll(\n                    '${n} .counter-bar'\n                );\n\n                const countUpWithAnimate = (\n                    obj,\n                    initVal,\n                    lastVal,\n                    duration\n                ) => {\n                    let startTime = null;\n\n                    const step = (currentTime) => {\n                        if (!startTime) {\n                            startTime = currentTime;\n                        }\n\n                        const progress = Math.min(\n                            (currentTime - startTime) / duration,\n                            1\n                        );\n\n                        obj.innerHTML = Math.floor(\n                            progress * (lastVal - initVal) + initVal\n                        );\n\n                        if (progress < 1) {\n                            window.requestAnimationFrame(step);\n                        } else {\n                            window.cancelAnimationFrame(\n                                window.requestAnimationFrame(step)\n                            );\n                        }\n                    };\n\n                    window.requestAnimationFrame(step);\n                };\n\n                const addAnimateClass = (el, n) => {\n                    el.firstChild?.childNodes[n].classList.add('animate');\n                };\n                const setAnimate = (targetEl) => {\n                    if (targetEl.classList.contains('dynamic')) {\n                        const targetVal = targetEl.getAttribute('data-target');\n                        countUpWithAnimate(targetEl, 0, targetVal, duration);\n                    }\n                };\n\n                const observer = new IntersectionObserver(\n                    (entries) => {\n                        entries.forEach((entry) => {\n                            if (entry.isIntersecting) {\n                                entry.target.childNodes.forEach((el) => {\n                                    if (layout !== 'number') {\n                                        addAnimateClass(el, 2);\n                                        addAnimateClass(el, 3);\n                                        setAnimate(el.firstChild.childNodes[0]);\n                                    } else {\n                                        setAnimate(el.firstChild);\n                                    }\n                                });\n                            }\n                        });\n                    },\n                    { threshold: .2 }\n                );\n\n                counterBars.forEach((el) => observer.observe(el));\n            }`.replace(/['"]/g, "\\");
                    l({
                        footer: !0,
                        initCode: `\n            ;(function () {\n                const className = \\${n}\\;\n                const duration = \\${i || 5e3}\\;\n                const layout = \\${r}\\;\n                (${s})(\\${n}\\)\n            })();`
                    })
                },
                imageGalleryOne(t) {
                    var e;
                    const {className: n} = t;
                    if (null == (e = t.imageGallery.items) || !e.length)
                        return;
                    let r = `\n            ;(function () {\n                (${function(t) {
                        const e = document.querySelector(t)
                          , n = e.querySelector(".image-modal")
                          , r = n.querySelector(".hide-button")
                          , i = n.querySelector("img")
                          , s = e.querySelector(".gallery-tab");
                        s && s.addEventListener("click", (t => {
                            s.querySelectorAll("button").forEach((t => {
                                t.classList.remove("active")
                            }
                            )),
                            t.target.classList.add("active");
                            letn, r;
                            e.querySelectorAll(".mesonry").length ? (n = e.querySelectorAll(".mesonry figure"),
                            r = "grid") : (n = e.querySelectorAll(".justified figure"),
                            r = "block"),
                            n.forEach((e => {
                                var n;
                                "A" === e.parentElement.nodeName ? e.parentElement.style.display = "none" : e.style.display = "none",
                                "all" === t.target.value && ("A" === e.parentElement.nodeName ? e.parentElement.style.display = r : e.style.display = r),
                                null != (n = e.dataset.category) && n.includes(t.target.value) && ("A" === e.parentElement.nodeName ? e.parentElement.style.display = r : e.style.display = r)
                            }
                            )),
                            t.stopPropagation()
                        }
                        )),
                        e.addEventListener("click", (t => {
                            const e = t.target.closest("figure");
                            if ("A" === e.parentElement.nodeName)
                                return;
                            const {src: r, alt: s} = e.querySelector("img");
                            i.src = r,
                            i.alt = s,
                            n.classList.remove("hide-image-modal"),
                            n.classList.add("show-image-modal")
                        }
                        )),
                        r.addEventListener("click", (t => {
                            i.src = "",
                            i.alt = "",
                            n.classList.remove("show-image-modal"),
                            n.classList.add("hide-image-modal"),
                            t.stopPropagation()
                        }
                        ))
                    }
                    .toString().replace(/['"]/g, "\\")})(\\${n}\\)\n            })();`;
                    l({
                        footer: !0,
                        initCode: r
                    })
                },
                imageGalleryTwo(t) {
                    var e, n;
                    const {className: i, lightBox: s, id: o, imageGallery: {items: a}, settings: c} = t;
                    if (null == (e = t.imageGallery.items) || !e.length)
                        return;
                    const d = {
                        light: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/light.css",
                        dark: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/dark.css",
                        minimal: "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/skins/minimal.css"
                    }[s.skin ?? "light"];
                    let u = `\n            ;(function () {\n                (${'function imageGallery(className, lightBox, id, galleryItems, settings) {\n                var createImage = (item) => {\n                        var figure = document.createElement("figure");\n                        figure.setAttribute(\n                            "data-category",\n                            item.category == null ? void 0 : item.category?.join(" ")\n                        );\n                        var image = document.createElement("img");\n                        image.id = item.id;\n                        image.src = item.src;\n                        image.alt = item.label;\n                        var figcaption = document.createElement("figcaption");\n                        var spanElement = document.createElement("span");\n                        spanElement.textContent = item.label;\n                        figcaption.appendChild(spanElement);\n                        var isCustomUrl = item.action === "customUrl";\n                        if (isCustomUrl) {\n                            var link = document.createElement("a");\n                            link.setAttribute("href", item?.customUrl || "#");\n                            link.setAttribute("target", item.target);\n                            figure.append(image, figcaption);\n                            link.appendChild(figure);\n                            return link;\n                        } else {\n                            figure.className = !isCustomUrl && "lightbox-item";\n                            figure.append(image, figcaption);\n                            return figure;\n                        }\n                    };\n\n                    var { galleryType, maxImage = 3 } = settings;\n\n                    var imageGalleryClass = document.querySelector(className);\n                    var previousButton = imageGalleryClass.querySelector(".prev");\n                    var nextButton = imageGalleryClass.querySelector(".next");\n                    var size = window?.innerWidth <= 768 ? "sm" : (window?.innerWidth <= 1024 ? "md" : "lg")\n                    var { cols = "{}" } = imageGalleryClass.querySelector(".cols").dataset\n                    var columns = JSON.parse(cols)[size];\n                    var wrapper = galleryType === "justified"\n                        ? imageGalleryClass.querySelector(".justified")\n                        : imageGalleryClass.querySelector(`.masonry-${size}`)\n                    var galleryOptions = { page: 1, category: "all", maxCount: galleryItems.length }\n\n\n                    var appendImageToTheDom = () => {\n                        wrapper.innerHTML = "";\n                        var skip = (galleryOptions.page - 1) * maxImage;\n                        var currentPageImgs = galleryItems\n                            .filter(item => galleryOptions.category === "all" || item.category?.includes(galleryOptions.category))\n                            .slice(skip, skip + Number(maxImage))\n                        var images = currentPageImgs.map(createImage)\n\n                        if (galleryType === "mesonry") {\n                            for (let i = 0; i < columns; i++) {\n                                var container = document.createElement("div");\n                                container.classList.add("mesonry--image-container")\n                                var mesonryItems = images.filter((_, idx) => idx % columns === i)\n                                container.append(...mesonryItems)\n                                wrapper.append(container)\n                            }\n                        } else {\n                            wrapper.append(...images)\n                        }\n\n                        var imageGalleryId = "#lcl_elems_wrapper_" + id;\n                        var imageFigures = document.querySelectorAll(imageGalleryId + " figure.lightbox-item");\n\n                        var generateLightboxData = (el) => {\n                            let index = 0;\n                            var targetImgId = el.querySelector("img")?.id;\n                            var data = currentPageImgs?.map(({ src, txt, label, author, id }, idx) => {\n                                if (targetImgId === id) {\n                                    index = idx;\n                                }\n                                return {\n                                    id,\n                                    author,\n                                    txt,\n                                    src,\n                                    title: label,\n                                    thumb: src,\n                                    download: src,\n                                    canonical_url: src,\n                                };\n                            });\n                            return { data, index };\n                        };\n                        imageFigures.forEach((el, i) => {\n                            if (window.lc_lightbox) {\n                                el.addEventListener("click", () => {\n                                    var { data, index } = generateLightboxData(el);\n                                    var instance = window.lc_lightbox(data, {\n                                        ...lightBox,\n                                        on_close: () =>\n                                            window.lcl_destroy(instance),\n                                    });\n                                    window.lcl_open(instance, index);\n                                });\n                            }\n                        });\n                    }\n\n                    var galleryTab = imageGalleryClass.querySelector(".gallery-tab");\n                    if (galleryTab) {\n                        galleryTab.addEventListener("click", (event) => {\n                            var category = event.target.value;\n                            galleryTab.querySelector(`button[value="${galleryOptions.category}"]`).classList.remove("active")\n                            galleryOptions.category = category\n                            galleryOptions.page = 1;\n                            var images = galleryItems.filter(item => category === "all" || item.category.includes(galleryOptions.category))\n                            galleryOptions.maxCount = images.length;\n                            galleryTab.querySelector(`button[value="${galleryOptions.category}"]`).classList.add("active")\n                            appendImageToTheDom()\n                            disableNextPrevButton()\n                        });\n                    }\n\n                    imageGalleryClass.addEventListener("click", (e) => {\n                        var figure = e.target.closest("figure");\n                        if (!figure) return;\n                        if (figure.parentElement.nodeName === "A") return;\n                        var { src, alt } = figure.querySelector("img");\n                    });\n\n                    var disableNextPrevButton = () => {\n                        if (1 === galleryOptions.page)\n                            previousButton?.setAttribute("disabled", true);\n                        else previousButton?.removeAttribute("disabled");\n\n                        if (Math.ceil(galleryOptions.maxCount / maxImage) <= galleryOptions.page)\n                            nextButton?.setAttribute("disabled", true);\n                        else nextButton?.removeAttribute("disabled");\n                    };\n\n                    if (previousButton) {\n                        previousButton.addEventListener("click", () => {\n                            galleryOptions.page = Math.max(1, galleryOptions.page - 1);\n                            appendImageToTheDom()\n                            disableNextPrevButton();\n                        });\n                    }\n\n                    if (nextButton) {\n                        nextButton.addEventListener("click", () => {\n                            galleryOptions.page = Math.min(Math.ceil(galleryOptions.maxCount / maxImage), galleryOptions.page + 1);\n                            appendImageToTheDom()\n                            disableNextPrevButton();\n                        });\n                    }\n                    appendImageToTheDom()\n                    disableNextPrevButton();\n            }'.toString().replace(/['"]/g, "\\")})(\\${i}\\, ${null == (n = JSON.stringify(s)) ? void 0 : n.replace(/['"]/g, "\\")}, \\${o}\\, ${JSON.stringify(a)}, ${JSON.stringify(c).replace(/"/g, "\\")})\n            })();`;
                    l({
                        header: !0,
                        links: ["https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/css/lc_lightbox.min.css", d]
                    }),
                    l({
                        header: !1,
                        initCode: u,
                        scripts: [r.J, "https://cdn.jsdelivr.net/npm/lc-lightbox-lite@1.2.13/js/lc_lightbox.lite.min.js"]
                    })
                },
                imageGallery(t) {
                    var e;
                    return "advanced" === (null == (e = t.lightBox) ? void 0 : e.type) ? this.imageGalleryTwo(t) : this.imageGalleryOne(t)
                },
                moveToTop(t) {
                    const {className: e, moveToTop: {visibilityType: n, pixelPosition: r, sectionId: i}} = t
                      , s = "function moveToTopString(className) {\n                let oldScrollY = window.scrollY;\n                let isScrollingUp = false;\n                const button = document.querySelector(className);\n                button.classList.add('back-to-top-btn');\n                const targetSection = document.getElementById(sectionId);\n                const handleScroll = () => {\n                    const currentScrollY = window.scrollY;\n\n                    isScrollingUp = oldScrollY > currentScrollY;\n                    oldScrollY = currentScrollY;\n\n                    let targetPosition = Number(pixelPosition) || 0;\n                    if (visibilityType === 'section' && targetSection) {\n                        const targetSectionOffset =\n                            targetSection.getBoundingClientRect().top -\n                            window.innerHeight;\n                        button.classList.toggle(\n                            'showBtn',\n                            targetSectionOffset < -40\n                        );\n                        button.classList.toggle(\n                            'fadeOut',\n                            isScrollingUp && targetSectionOffset > -40\n                        );\n                        return;\n                    }\n                    button.classList.toggle(\n                        'showBtn',\n                        targetPosition < currentScrollY\n                    );\n                    button.classList.toggle(\n                        'fadeOut',\n                        isScrollingUp && targetPosition > currentScrollY\n                    );\n                };\n                const handleGoTop = () => {\n                    window.scrollTo({\n                        top: 0,\n                        behavior: 'smooth',\n                    });\n                };\n                if (sectionId || pixelPosition) {\n                    window.addEventListener('scroll', handleScroll);\n                    button.addEventListener('click', handleGoTop);\n                }\n            }".replace(/['"]/g, "\\");
                    l({
                        footer: !0,
                        initCode: `\n            ;(function () {\n                const className = \\${e}\\;\n                const visibilityType = \\${n}\\;\n                const pixelPosition = \\${r || ""}\\;\n                const sectionId = \\${i}\\;\n                (${s})(\\${e}\\)\n            })();`
                    })
                },
                airtableTable(t) {
                    Nd({
                        el: t,
                        siteId: n,
                        addIntegration: l,
                        pagesRef: null == s ? void 0 : s.pagesRef
                    })
                },
                airtableJobBoard(t) {
                    Nd({
                        el: t,
                        siteId: n,
                        addIntegration: l,
                        pagesRef: null == s ? void 0 : s.pagesRef
                    })
                },
                airtableGrid(t) {
                    Nd({
                        el: t,
                        siteId: n,
                        addIntegration: l,
                        pagesRef: null == s ? void 0 : s.pagesRef
                    })
                },
                airtableDetails(t) {
                    kd({
                        el: t,
                        addIntegration: l,
                        siteId: n
                    })
                }
            };
            !function e(n) {
                var r;
                if (!n)
                    return;
                let s = null == t ? void 0 : t.settings;
                if (n = "symbolId"in n ? {
                    ...null == (r = i[n.symbolId]) ? void 0 : r.data,
                    ...n
                } : n,
                "function" == typeof d[n.type]) {
                    const t = `.dorik-${n.type}-${n.id}`
                      , e = `#dorik-${n.id}`;
                    if (a.includes(n.type))
                        return;
                    d[n.type]({
                        ...n,
                        selectorId: e,
                        className: t,
                        permission: o,
                        pageSettings: s
                    })
                }
                Array.isArray(n.content) && n.content.forEach(e)
            }(t)
        }
        const Nd = ({el: t, addIntegration: e, siteId: n, pagesRef: r}) => {
            const i = JSON.parse(JSON.stringify(t));
            delete i.pageSettings,
            ["style", "records", "popupStyle", "buttonStyle", "filterStyle", "buttonWrapper", "popupCloseBtnStyle"].map((t => delete i.airtable[t]));
            let s = JSON.stringify({
                item: i,
                siteId: n,
                pagesRef: r
            }).replace(/["]/g, "_|DORIK|");
            e({
                scripts: ["https://unpkg.com/react@17/umd/react.production.min.js", "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js", "https://cdn.dorik.com/common/ReactAirtable-4.9.0.umd.js"],
                footer: !0,
                initCode: `\n            ;(function () {\n                var elem = \\${t.className}\\;\n                var strData = ${s};\n                var domContainer = document.querySelector(elem);\n                ReactDOM.render(React.createElement(ReactAirtable, strData), domContainer);\n            })();`
            })
        }
          , kd = ({el: t, addIntegration: e, siteId: n}) => {
            const r = JSON.parse(JSON.stringify(t));
            delete r.pageSettings,
            ["style", "records", "mainSection", "wrapperStyle", "buttonWrapper", "buttonWrapper"].map((t => delete r.airtable[t]));
            let i = JSON.stringify({
                item: r,
                siteId: n
            }).replace(/["]/g, "_|DORIK|");
            e({
                scripts: ["https://unpkg.com/react@17/umd/react.production.min.js", "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js", "https://cdn.dorik.com/common/ReactAirtableDetails-4.9.0.umd.js"],
                footer: !0,
                initCode: `\n            ;(function () {\n                var elem = \\${t.className}\\;\n                var strData = ${i};\n                var domContainer = document.querySelector(elem);\n                ReactDOM.render(React.createElement(ReactAirtableDetails, strData), domContainer);\n            })();`
            })
        }
        ;
        function _d({data: t, isCMS: e, siteId: n, pageURL: i, excludes: s, permission: o}) {
            const {global: a, page: l} = t
              , {integrations: c={}, symbols: d={}} = a || {}
              , {GTM: u} = c
              , p = []
              , C = []
              , f = []
              , h = []
              , m = []
              , g = []
              , v = [];
            return u && v.push(r.j.jsx("noscript", {
                children: r.j.jsx("iframe", {
                    width: "0",
                    height: "0",
                    style: {
                        display: "none",
                        visibility: "hidden"
                    },
                    src: `https://www.googletagmanager.com/ns.html?id=${u}`
                })
            })),
            Ed({
                isCMS: e,
                siteId: n,
                global: a,
                symbols: d,
                excludes: s,
                permission: o,
                data: l,
                addIntegration: function({script: t, scripts: e=[], links: n=[], initCode: i, footer: s=!1, header: o=!1, once: a=!1}) {
                    const l = o ? f : C
                      , c = o ? m : h;
                    t && !l.includes(t) && l.push(t),
                    e.length && e.forEach((t => {
                        l.includes(t) || l.push(t)
                    }
                    )),
                    n.length && n.forEach(( (t, e) => {
                        p.find((e => e.props.href === t)) || p.push(r.j.jsx("link", {
                            rel: "stylesheet",
                            href: t
                        }, e))
                    }
                    )),
                    i && c.push(i)
                },
                addCredentials: function(t) {
                    g.push(t)
                }
            }),
            function(t) {
                let e = !1;
                return function t(n) {
                    if (!e && n) {
                        if (n.animation && n.animation.type)
                            return void (e = !0);
                        Array.isArray(n.content) && n.content.forEach(t)
                    }
                }(t),
                e
            }(l) && (p.push(r.j.jsx("link", {
                rel: "stylesheet",
                href: "https://assets.dorik.io/shared/aos.css"
            })),
            C.push("https://assets.dorik.io/shared/aos.js"),
            h.push(";(function(){\n            const interval = setInterval(() => {\n                if(window.AOS?.init){\n                    clearInterval(interval)\n                    window.AOS.init({disable: \\mobile\\});\n                }\n            }, 500);\n        }())\n        ")),
            {
                footer: r.j.jsx(yd, {
                    footerScripts: C,
                    footerScriptsInit: h
                }),
                header: r.j.jsx(Ad, {
                    data: t,
                    pageURL: i,
                    permission: o,
                    stylesheets: p,
                    headerScripts: f,
                    headerScriptsInit: m
                }),
                credentials: g,
                stylesheets: p,
                bodyBegins: v,
                headerScripts: f,
                footerScripts: C,
                headerScriptsInit: m,
                footerScriptsInit: h
            }
        }
        const Sd = ({cms: t, additionalPageMeta: e, pageURL: n}) => {
            var i;
            const s = {
                noindex: e.noIndex,
                nofollow: e.noFollow
            }
              , o = Object.entries(s).filter(( ([,t]) => t)).map(( ([t]) => t)).join(",")
              , a = null == (i = e.hrefLang) ? void 0 : i.map((t => t.alternateURL ? r.j.jsx("link", {
                rel: "alternate",
                href: t.alternateURL,
                hrefLang: t.language
            }, xd()) : null)).filter((t => t));
            return [r.j.jsx("meta", {
                property: "og:url",
                content: (0,
                r.x)(e.canonicalURL) || (0,
                r.x)(n)
            }, xd()), r.j.jsx("meta", {
                property: "og:type",
                content: "website"
            }, xd()), o ? r.j.jsx("meta", {
                name: "robots",
                content: o
            }, xd()) : null, r.j.jsx("link", {
                rel: "canonical",
                href: (0,
                r.x)(e.canonicalURL) || (0,
                r.x)(n)
            }, xd()), e.schema ? r.j.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: (0,
                    r.b)((l = e.schema,
                    t ? Z(l, t.data) : l))
                }
            }) : null].concat(a);
            var l
        }
        ;
        function Ad({data: t, siteId: e, children: n, permission: i, pageURL: s="", postMeta: o=null, disableIntegration: a, renderHead: l=(t => t)}) {
            const c = en()
              , {settings: d={}} = (null == t ? void 0 : t.page) || {}
              , {settings: u={}} = (null == t ? void 0 : t.global) || {}
              , {meta: p={}, additionalMeta: C} = d
              , {meta: f={}, typekitFonts: h={}} = u
              , m = function(t) {
                if (!t)
                    return;
                let e = [];
                const {style: n, settings: {googleFonts: r=[]}={}} = t;
                if (null != n && n.fontFamily) {
                    let t = {
                        ...n,
                        fontFamily: n.fontFamily.split("'")[1]
                    };
                    e.push({
                        style: t
                    })
                }
                let i = null == r ? void 0 : r.map(( ({font: t}) => ({
                    style: t || {}
                })));
                return e = i.length ? [...e, ...i] : e,
                e.reduce(jd, []).map((t => {
                    let e = "";
                    return t.fontFamily && (e += function(t) {
                        return t.replace(/\s/g, "+")
                    }(t.fontFamily),
                    t.fontWeights.length && (e += `:${t.fontWeights.join(",")}`)),
                    e
                }
                )).filter((t => t)).join("|")
            }(null == t ? void 0 : t.global)
              , {stylesheets: g, headerScripts: v, headerScriptsInit: y} = _d({
                data: t,
                siteId: e,
                permission: i,
                isCMS: !!c
            });
            p["og:image"] || delete p["og:image"];
            const w = function(t, e) {
                const n = [{
                    key: "name",
                    value: "title"
                }, {
                    key: "name",
                    value: "description"
                }, {
                    key: "name",
                    value: "keywords"
                }, {
                    key: "property",
                    value: "og:title"
                }, {
                    key: "property",
                    value: "og:description"
                }, {
                    key: "property",
                    value: "og:image"
                }, {
                    key: "name",
                    value: "twitter:card"
                }, {
                    key: "name",
                    value: "twitter:title"
                }, {
                    key: "name",
                    value: "twitter:description"
                }, {
                    key: "name",
                    value: "twitter:image"
                }]
                  , r = ["og:image", "twitter:image"];
                function i(t) {
                    return !/^https?:\/\//.test(t) && e ? `${e.CDNDomain}/${t}` : t
                }
                function s(e) {
                    const [n,r=n] = e.split(":")
                      , i = {
                        og: r,
                        twitter: `og:${r}`
                    }
                      , o = t[e];
                    return !o && e.includes(":") ? s(i[n]) : o && "description" === r ? o.trim() : o
                }
                function o() {
                    return n.map(( ({key: t, value: e}) => ({
                        [t]: e,
                        content: s(e)
                    }))).filter((t => t.content)).concat({
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                }
                function a({data: e}) {
                    return n.map(( ({key: n, value: o}) => {
                        let a = Z(ge(I[o]), e) || Z(ge(t[o]), e) || Z(ge(s(o)), e);
                        return r.includes(o) && (a = i(a)),
                        {
                            key: n,
                            value: o,
                            content: a
                        }
                    }
                    )).map(( ({content: t, key: e, value: n}) => "twitter:card" !== n ? {
                        [e]: n,
                        content: t
                    } : {
                        [e]: "twitter:card",
                        content: t || "summary_large_image"
                    }))
                }
                return {
                    getStaticPageMetaTags: o,
                    getCMSPageMetaTags: a
                }
            }({
                ...f,
                ...p
            }, c)
              , L = c ? w.getCMSPageMetaTags(c) : w.getStaticPageMetaTags()
              , b = JSON.parse(o)
              , x = Object.assign({}, b, C);
            return (null != b && b.schema || null != C && C.schema) && (x.schema = (null == b ? void 0 : b.schema) || (null == C ? void 0 : C.schema)),
            l(r.j.jsxs(r.j.Fragment, {
                children: [p.title && r.j.jsx("title", {
                    children: (c ? Z(ge(p.title), c.data) : p.title) || ""
                }), r.j.jsx("link", {
                    rel: "icon",
                    href: (0,
                    r.x)(f.favicon)
                }), r.j.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1"
                }), L.filter((t => t.content && "" !== t.content.trim())).map((t => {
                    const e = (0,
                    r.x)(t.content);
                    return r.j.jsx("meta", {
                        ...t,
                        content: e
                    }, xd())
                }
                )), Sd({
                    additionalPageMeta: x,
                    pageURL: s,
                    cms: c
                }), v.map((t => r.j.jsx("script", {
                    src: t
                }, t))), !a && r.j.jsx("script", {
                    type: "text/javascript",
                    children: y.join("\n").trim()
                }), m && [r.j.jsx("link", {
                    as: "font",
                    rel: "preload",
                    href: `https://fonts.cmsfly.com/css?family=${m}&display=swap`
                }, "preload_fontFamilies"), r.j.jsx("link", {
                    rel: "stylesheet",
                    href: `https://fonts.cmsfly.com/css?family=${m}&display=swap`
                }, "stylesheet_fontFamilies")], null != h && h.typekitId ? r.j.jsx("link", {
                    rel: "stylesheet",
                    href: `https://use.typekit.net/${h.typekitId}.css`
                }) : null, r.j.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/main.css"
                }), a ? null : g, n]
            }))
        }
        var Td, Zd = {
            exports: {}
        }, Id = {};
        Zd.exports = function() {
            if (Td)
                return Id;
            Td = 1;
            var t = (0,
            r.r)()
              , e = i;
            function n(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
                    e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var s = 60106
              , o = 60107
              , a = 60108
              , l = 60114
              , c = 60109
              , d = 60110
              , u = 60112
              , p = 60113
              , C = 60120
              , f = 60115
              , h = 60116
              , m = 60121
              , g = 60117
              , v = 60119
              , y = 60129
              , w = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var L = Symbol.for;
                s = L("react.portal"),
                o = L("react.fragment"),
                a = L("react.strict_mode"),
                l = L("react.profiler"),
                c = L("react.provider"),
                d = L("react.context"),
                u = L("react.forward_ref"),
                p = L("react.suspense"),
                C = L("react.suspense_list"),
                f = L("react.memo"),
                h = L("react.lazy"),
                m = L("react.block"),
                g = L("react.fundamental"),
                v = L("react.scope"),
                y = L("react.debug_trace_mode"),
                w = L("react.legacy_hidden")
            }
            function b(t) {
                if (null == t)
                    return null;
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
                switch (t) {
                case o:
                    return "Fragment";
                case s:
                    return "Portal";
                case l:
                    return "Profiler";
                case a:
                    return "StrictMode";
                case p:
                    return "Suspense";
                case C:
                    return "SuspenseList"
                }
                if ("object" == typeof t)
                    switch (t.$$typeof) {
                    case d:
                        return (t.displayName || "Context") + ".Consumer";
                    case c:
                        return (t._context.displayName || "Context") + ".Provider";
                    case u:
                        var e = t.render;
                        return e = e.displayName || e.name || "",
                        t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case f:
                        return b(t.type);
                    case m:
                        return b(t._render);
                    case h:
                        e = t._payload,
                        t = t._init;
                        try {
                            return b(t(e))
                        } catch {}
                    }
                return null
            }
            var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , j = {};
            function M(t, e) {
                for (var n = 0 | t._threadCount; n <= e; n++)
                    t[n] = t._currentValue2,
                    t._threadCount = n + 1
            }
            for (var E = new Uint16Array(16), N = 0; 15 > N; N++)
                E[N] = N + 1;
            E[15] = 0;
            var k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , _ = Object.prototype.hasOwnProperty
              , S = {}
              , A = {};
            function T(t) {
                return !!_.call(A, t) || !_.call(S, t) && (k.test(t) ? A[t] = !0 : (S[t] = !0,
                !1))
            }
            function Z(t, e, n, r, i, s, o) {
                this.acceptsBooleans = 2 === e || 3 === e || 4 === e,
                this.attributeName = r,
                this.attributeNamespace = i,
                this.mustUseProperty = n,
                this.propertyName = t,
                this.type = e,
                this.sanitizeURL = s,
                this.removeEmptyString = o
            }
            var I = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
                I[t] = new Z(t,0,!1,t,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(t) {
                var e = t[0];
                I[e] = new Z(e,1,!1,t[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
                I[t] = new Z(t,2,!1,t.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
                I[t] = new Z(t,2,!1,t,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
                I[t] = new Z(t,3,!1,t.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(t) {
                I[t] = new Z(t,3,!0,t,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(t) {
                I[t] = new Z(t,4,!1,t,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(t) {
                I[t] = new Z(t,6,!1,t,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(t) {
                I[t] = new Z(t,5,!1,t.toLowerCase(),null,!1,!1)
            }
            ));
            var O = /[\-:]([a-z])/g;
            function $(t) {
                return t[1].toUpperCase()
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
                var e = t.replace(O, $);
                I[e] = new Z(e,1,!1,t,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
                var e = t.replace(O, $);
                I[e] = new Z(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
                var e = t.replace(O, $);
                I[e] = new Z(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(t) {
                I[t] = new Z(t,1,!1,t.toLowerCase(),null,!1,!1)
            }
            )),
            I.xlinkHref = new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(t) {
                I[t] = new Z(t,1,!1,t.toLowerCase(),null,!0,!0)
            }
            ));
            var V = /["'&<>]/;
            function R(t) {
                if ("boolean" == typeof t || "number" == typeof t)
                    return "" + t;
                t = "" + t;
                var e = V.exec(t);
                if (e) {
                    var n, r = "", i = 0;
                    for (n = e.index; n < t.length; n++) {
                        switch (t.charCodeAt(n)) {
                        case 34:
                            e = "&quot;";
                            break;
                        case 38:
                            e = "&amp;";
                            break;
                        case 39:
                            e = "&#x27;";
                            break;
                        case 60:
                            e = "&lt;";
                            break;
                        case 62:
                            e = "&gt;";
                            break;
                        default:
                            continue
                        }
                        i !== n && (r += t.substring(i, n)),
                        i = n + 1,
                        r += e
                    }
                    t = i !== n ? r + t.substring(i, n) : r
                }
                return t
            }
            function P(t, e) {
                var n, r = I.hasOwnProperty(t) ? I[t] : null;
                return (n = "style" !== t) && (n = null !== r ? 0 === r.type : !(!(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1])),
                n || function(t, e, n, r) {
                    if (null === e || typeof e > "u" || function(t, e, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof e) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                        default:
                            return !1
                        }
                    }(t, e, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !e;
                        case 4:
                            return !1 === e;
                        case 5:
                            return isNaN(e);
                        case 6:
                            return isNaN(e) || 1 > e
                        }
                    return !1
                }(t, e, r, !1) ? "" : null !== r ? (t = r.attributeName,
                3 === (n = r.type) || 4 === n && !0 === e ? t + '=""' : (r.sanitizeURL && (e = "" + e),
                t + '="' + R(e) + '"')) : T(t) ? t + '="' + R(e) + '"' : ""
            }
            var H = "function" == typeof Object.is ? Object.is : function(t, e) {
                return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
            }
              , B = null
              , F = null
              , U = null
              , D = !1
              , z = !1
              , G = null
              , Y = 0;
            function X() {
                if (null === B)
                    throw Error(n(321));
                return B
            }
            function q() {
                if (0 < Y)
                    throw Error(n(312));
                return {
                    memoizedState: null,
                    queue: null,
                    next: null
                }
            }
            function W() {
                return null === U ? null === F ? (D = !1,
                F = U = q()) : (D = !0,
                U = F) : null === U.next ? (D = !1,
                U = U.next = q()) : (D = !0,
                U = U.next),
                U
            }
            function K(t, e, n, r) {
                for (; z; )
                    z = !1,
                    Y += 1,
                    U = null,
                    n = t(e, r);
                return J(),
                n
            }
            function J() {
                B = null,
                z = !1,
                F = null,
                Y = 0,
                U = G = null
            }
            function Q(t, e) {
                return "function" == typeof e ? e(t) : e
            }
            function tt(t, e, n) {
                if (B = X(),
                U = W(),
                D) {
                    var r = U.queue;
                    if (e = r.dispatch,
                    null !== G && void 0 !== (n = G.get(r))) {
                        G.delete(r),
                        r = U.memoizedState;
                        do {
                            r = t(r, n.action),
                            n = n.next
                        } while (null !== n);
                        return U.memoizedState = r,
                        [r, e]
                    }
                    return [U.memoizedState, e]
                }
                return t = t === Q ? "function" == typeof e ? e() : e : void 0 !== n ? n(e) : e,
                U.memoizedState = t,
                t = (t = U.queue = {
                    last: null,
                    dispatch: null
                }).dispatch = nt.bind(null, B, t),
                [U.memoizedState, t]
            }
            function et(t, e) {
                if (B = X(),
                e = void 0 === e ? null : e,
                null !== (U = W())) {
                    var n = U.memoizedState;
                    if (null !== n && null !== e) {
                        var r = n[1];
                        t: if (null === r)
                            r = !1;
                        else {
                            for (var i = 0; i < r.length && i < e.length; i++)
                                if (!H(e[i], r[i])) {
                                    r = !1;
                                    break t
                                }
                            r = !0
                        }
                        if (r)
                            return n[0]
                    }
                }
                return t = t(),
                U.memoizedState = [t, e],
                t
            }
            function nt(t, e, r) {
                if (!(25 > Y))
                    throw Error(n(301));
                if (t === B)
                    if (z = !0,
                    t = {
                        action: r,
                        next: null
                    },
                    null === G && (G = new Map),
                    void 0 === (r = G.get(e)))
                        G.set(e, t);
                    else {
                        for (e = r; null !== e.next; )
                            e = e.next;
                        e.next = t
                    }
            }
            function rt() {}
            var it = null
              , st = {
                readContext: function(t) {
                    var e = it.threadID;
                    return M(t, e),
                    t[e]
                },
                useContext: function(t) {
                    X();
                    var e = it.threadID;
                    return M(t, e),
                    t[e]
                },
                useMemo: et,
                useReducer: tt,
                useRef: function(t) {
                    B = X();
                    var e = (U = W()).memoizedState;
                    return null === e ? (t = {
                        current: t
                    },
                    U.memoizedState = t) : e
                },
                useState: function(t) {
                    return tt(Q, t)
                },
                useLayoutEffect: function() {},
                useCallback: function(t, e) {
                    return et((function() {
                        return t
                    }
                    ), e)
                },
                useImperativeHandle: rt,
                useEffect: rt,
                useDebugValue: rt,
                useDeferredValue: function(t) {
                    return X(),
                    t
                },
                useTransition: function() {
                    return X(),
                    [function(t) {
                        t()
                    }
                    , !1]
                },
                useOpaqueIdentifier: function() {
                    return (it.identifierPrefix || "") + "R:" + (it.uniqueID++).toString(36)
                },
                useMutableSource: function(t, e) {
                    return X(),
                    e(t._source)
                }
            }
              , ot = "http://www.w3.org/1999/xhtml"
              , at = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
              , lt = t({
                menuitem: !0
            }, at)
              , ct = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , dt = ["Webkit", "ms", "Moz", "O"];
            Object.keys(ct).forEach((function(t) {
                dt.forEach((function(e) {
                    e = e + t.charAt(0).toUpperCase() + t.substring(1),
                    ct[e] = ct[t]
                }
                ))
            }
            ));
            var ut = /([A-Z])/g
              , pt = /^ms-/
              , Ct = e.Children.toArray
              , ft = x.ReactCurrentDispatcher
              , ht = {
                listing: !0,
                pre: !0,
                textarea: !0
            }
              , mt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/
              , gt = {}
              , vt = {}
              , yt = Object.prototype.hasOwnProperty
              , wt = {
                children: null,
                dangerouslySetInnerHTML: null,
                suppressContentEditableWarning: null,
                suppressHydrationWarning: null
            };
            function Lt(t, e) {
                if (void 0 === t)
                    throw Error(n(152, b(e) || "Component"))
            }
            function bt(r, i, s) {
                function o(e, o) {
                    var a = o.prototype && o.prototype.isReactComponent
                      , l = function(t, e, n, r) {
                        if (r && "object" == typeof (r = t.contextType) && null !== r)
                            return M(r, n),
                            r[n];
                        if (t = t.contextTypes) {
                            for (var i in n = {},
                            t)
                                n[i] = e[i];
                            e = n
                        } else
                            e = j;
                        return e
                    }(o, i, s, a)
                      , c = []
                      , d = !1
                      , u = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {
                            if (null === c)
                                return null
                        },
                        enqueueReplaceState: function(t, e) {
                            d = !0,
                            c = [e]
                        },
                        enqueueSetState: function(t, e) {
                            if (null === c)
                                return null;
                            c.push(e)
                        }
                    };
                    if (a) {
                        if (a = new o(e.props,l,u),
                        "function" == typeof o.getDerivedStateFromProps) {
                            var p = o.getDerivedStateFromProps.call(null, e.props, a.state);
                            null != p && (a.state = t({}, a.state, p))
                        }
                    } else if (B = {},
                    a = o(e.props, l, u),
                    null == (a = K(o, e.props, a, l)) || null == a.render)
                        return void Lt(r = a, o);
                    if (a.props = e.props,
                    a.context = l,
                    a.updater = u,
                    void 0 === (u = a.state) && (a.state = u = null),
                    "function" == typeof a.UNSAFE_componentWillMount || "function" == typeof a.componentWillMount)
                        if ("function" == typeof a.componentWillMount && "function" != typeof o.getDerivedStateFromProps && a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount && "function" != typeof o.getDerivedStateFromProps && a.UNSAFE_componentWillMount(),
                        c.length) {
                            u = c;
                            var C = d;
                            if (c = null,
                            d = !1,
                            C && 1 === u.length)
                                a.state = u[0];
                            else {
                                p = C ? u[0] : a.state;
                                var f = !0;
                                for (C = C ? 1 : 0; C < u.length; C++) {
                                    var h = u[C];
                                    null != (h = "function" == typeof h ? h.call(a, p, e.props, l) : h) && (f ? (f = !1,
                                    p = t({}, p, h)) : t(p, h))
                                }
                                a.state = p
                            }
                        } else
                            c = null;
                    if (Lt(r = a.render(), o),
                    "function" == typeof a.getChildContext && "object" == typeof (e = o.childContextTypes)) {
                        var m = a.getChildContext();
                        for (var g in m)
                            if (!(g in e))
                                throw Error(n(108, b(o) || "Unknown", g))
                    }
                    m && (i = t({}, i, m))
                }
                for (; e.isValidElement(r); ) {
                    var a = r
                      , l = a.type;
                    if ("function" != typeof l)
                        break;
                    o(a, l)
                }
                return {
                    child: r,
                    context: i
                }
            }
            var xt = function() {
                function r(t, r, i) {
                    e.isValidElement(t) ? t.type !== o ? t = [t] : (t = t.props.children,
                    t = e.isValidElement(t) ? [t] : Ct(t)) : t = Ct(t),
                    t = {
                        type: null,
                        domNamespace: ot,
                        children: t,
                        childIndex: 0,
                        context: j,
                        footer: ""
                    };
                    var s = E[0];
                    if (0 === s) {
                        var a = E
                          , l = 2 * (s = a.length);
                        if (!(65536 >= l))
                            throw Error(n(304));
                        var c = new Uint16Array(l);
                        for (c.set(a),
                        (E = c)[0] = s + 1,
                        a = s; a < l - 1; a++)
                            E[a] = a + 1;
                        E[l - 1] = 0
                    } else
                        E[0] = E[s];
                    this.threadID = s,
                    this.stack = [t],
                    this.exhausted = !1,
                    this.currentSelectValue = null,
                    this.previousWasTextNode = !1,
                    this.makeStaticMarkup = r,
                    this.suspenseDepth = 0,
                    this.contextIndex = -1,
                    this.contextStack = [],
                    this.contextValueStack = [],
                    this.uniqueID = 0,
                    this.identifierPrefix = i && i.identifierPrefix || ""
                }
                var i = r.prototype;
                return i.destroy = function() {
                    if (!this.exhausted) {
                        this.exhausted = !0,
                        this.clearProviders();
                        var t = this.threadID;
                        E[t] = E[0],
                        E[0] = t
                    }
                }
                ,
                i.pushProvider = function(t) {
                    var e = ++this.contextIndex
                      , n = t.type._context
                      , r = this.threadID;
                    M(n, r);
                    var i = n[r];
                    this.contextStack[e] = n,
                    this.contextValueStack[e] = i,
                    n[r] = t.props.value
                }
                ,
                i.popProvider = function() {
                    var t = this.contextIndex
                      , e = this.contextStack[t]
                      , n = this.contextValueStack[t];
                    this.contextStack[t] = null,
                    this.contextValueStack[t] = null,
                    this.contextIndex--,
                    e[this.threadID] = n
                }
                ,
                i.clearProviders = function() {
                    for (var t = this.contextIndex; 0 <= t; t--)
                        this.contextStack[t][this.threadID] = this.contextValueStack[t]
                }
                ,
                i.read = function(t) {
                    if (this.exhausted)
                        return null;
                    var e = it;
                    it = this;
                    var r = ft.current;
                    ft.current = st;
                    try {
                        for (var i = [""], s = !1; i[0].length < t; ) {
                            if (0 === this.stack.length) {
                                this.exhausted = !0;
                                var o = this.threadID;
                                E[o] = E[0],
                                E[0] = o;
                                break
                            }
                            var a = this.stack[this.stack.length - 1];
                            if (s || a.childIndex >= a.children.length) {
                                var l = a.footer;
                                if ("" !== l && (this.previousWasTextNode = !1),
                                this.stack.pop(),
                                "select" === a.type)
                                    this.currentSelectValue = null;
                                else if (null != a.type && null != a.type.type && a.type.type.$$typeof === c)
                                    this.popProvider(a.type);
                                else if (a.type === p) {
                                    this.suspenseDepth--;
                                    var d = i.pop();
                                    if (s) {
                                        s = !1;
                                        var u = a.fallbackFrame;
                                        if (!u)
                                            throw Error(n(303));
                                        this.stack.push(u),
                                        i[this.suspenseDepth] += "\x3c!--$!--\x3e";
                                        continue
                                    }
                                    i[this.suspenseDepth] += d
                                }
                                i[this.suspenseDepth] += l
                            } else {
                                var C = a.children[a.childIndex++]
                                  , f = "";
                                try {
                                    f += this.render(C, a.context, a.domNamespace)
                                } catch (h) {
                                    throw null != h && "function" == typeof h.then ? Error(n(294)) : h
                                }
                                i.length <= this.suspenseDepth && i.push(""),
                                i[this.suspenseDepth] += f
                            }
                        }
                        return i[0]
                    } finally {
                        ft.current = r,
                        it = e,
                        J()
                    }
                }
                ,
                i.render = function(r, i, m) {
                    if ("string" == typeof r || "number" == typeof r)
                        return "" === (m = "" + r) ? "" : this.makeStaticMarkup ? R(m) : this.previousWasTextNode ? "\x3c!-- --\x3e" + R(m) : (this.previousWasTextNode = !0,
                        R(m));
                    if (r = (i = bt(r, i, this.threadID)).child,
                    i = i.context,
                    null === r || !1 === r)
                        return "";
                    if (!e.isValidElement(r)) {
                        if (null != r && null != r.$$typeof)
                            throw m = r.$$typeof,
                            Error(m === s ? n(257) : n(258, m.toString()));
                        return r = Ct(r),
                        this.stack.push({
                            type: null,
                            domNamespace: m,
                            children: r,
                            childIndex: 0,
                            context: i,
                            footer: ""
                        }),
                        ""
                    }
                    var L = r.type;
                    if ("string" == typeof L)
                        return this.renderDOM(r, i, m);
                    switch (L) {
                    case w:
                    case y:
                    case a:
                    case l:
                    case C:
                    case o:
                        return r = Ct(r.props.children),
                        this.stack.push({
                            type: null,
                            domNamespace: m,
                            children: r,
                            childIndex: 0,
                            context: i,
                            footer: ""
                        }),
                        "";
                    case p:
                        throw Error(n(294));
                    case v:
                        throw Error(n(343))
                    }
                    if ("object" == typeof L && null !== L)
                        switch (L.$$typeof) {
                        case u:
                            B = {};
                            var b = L.render(r.props, r.ref);
                            return b = K(L.render, r.props, b, r.ref),
                            b = Ct(b),
                            this.stack.push({
                                type: null,
                                domNamespace: m,
                                children: b,
                                childIndex: 0,
                                context: i,
                                footer: ""
                            }),
                            "";
                        case f:
                            return r = [e.createElement(L.type, t({
                                ref: r.ref
                            }, r.props))],
                            this.stack.push({
                                type: null,
                                domNamespace: m,
                                children: r,
                                childIndex: 0,
                                context: i,
                                footer: ""
                            }),
                            "";
                        case c:
                            return m = {
                                type: r,
                                domNamespace: m,
                                children: L = Ct(r.props.children),
                                childIndex: 0,
                                context: i,
                                footer: ""
                            },
                            this.pushProvider(r),
                            this.stack.push(m),
                            "";
                        case d:
                            L = r.type,
                            b = r.props;
                            var x = this.threadID;
                            return M(L, x),
                            L = Ct(b.children(L[x])),
                            this.stack.push({
                                type: r,
                                domNamespace: m,
                                children: L,
                                childIndex: 0,
                                context: i,
                                footer: ""
                            }),
                            "";
                        case g:
                            throw Error(n(338));
                        case h:
                            return L = (b = (L = r.type)._init)(L._payload),
                            r = [e.createElement(L, t({
                                ref: r.ref
                            }, r.props))],
                            this.stack.push({
                                type: null,
                                domNamespace: m,
                                children: r,
                                childIndex: 0,
                                context: i,
                                footer: ""
                            }),
                            ""
                        }
                    throw Error(n(130, null == L ? L : typeof L, ""))
                }
                ,
                i.renderDOM = function(r, i, s) {
                    var o = r.type.toLowerCase();
                    if (!gt.hasOwnProperty(o)) {
                        if (!mt.test(o))
                            throw Error(n(65, o));
                        gt[o] = !0
                    }
                    var a = r.props;
                    if ("input" === o)
                        a = t({
                            type: void 0
                        }, a, {
                            defaultChecked: void 0,
                            defaultValue: void 0,
                            value: null != a.value ? a.value : a.defaultValue,
                            checked: null != a.checked ? a.checked : a.defaultChecked
                        });
                    else if ("textarea" === o) {
                        var l = a.value;
                        if (null == l) {
                            l = a.defaultValue;
                            var c = a.children;
                            if (null != c) {
                                if (null != l)
                                    throw Error(n(92));
                                if (Array.isArray(c)) {
                                    if (!(1 >= c.length))
                                        throw Error(n(93));
                                    c = c[0]
                                }
                                l = "" + c
                            }
                            null == l && (l = "")
                        }
                        a = t({}, a, {
                            value: void 0,
                            children: "" + l
                        })
                    } else if ("select" === o)
                        this.currentSelectValue = null != a.value ? a.value : a.defaultValue,
                        a = t({}, a, {
                            value: void 0
                        });
                    else if ("option" === o) {
                        c = this.currentSelectValue;
                        var d = function(t) {
                            if (null == t)
                                return t;
                            var n = "";
                            return e.Children.forEach(t, (function(t) {
                                null != t && (n += t)
                            }
                            )),
                            n
                        }(a.children);
                        if (null != c) {
                            var u = null != a.value ? a.value + "" : d;
                            if (l = !1,
                            Array.isArray(c)) {
                                for (var p = 0; p < c.length; p++)
                                    if ("" + c[p] === u) {
                                        l = !0;
                                        break
                                    }
                            } else
                                l = "" + c === u;
                            a = t({
                                selected: void 0,
                                children: void 0
                            }, a, {
                                selected: l,
                                children: d
                            })
                        }
                    }
                    if (l = a) {
                        if (lt[o] && (null != l.children || null != l.dangerouslySetInnerHTML))
                            throw Error(n(137, o));
                        if (null != l.dangerouslySetInnerHTML) {
                            if (null != l.children)
                                throw Error(n(60));
                            if ("object" != typeof l.dangerouslySetInnerHTML || !("__html"in l.dangerouslySetInnerHTML))
                                throw Error(n(61))
                        }
                        if (null != l.style && "object" != typeof l.style)
                            throw Error(n(62))
                    }
                    l = a,
                    c = this.makeStaticMarkup,
                    d = 1 === this.stack.length,
                    u = "<" + r.type;
                    t: if (-1 === o.indexOf("-"))
                        p = "string" == typeof l.is;
                    else
                        switch (o) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            p = !1;
                            break t;
                        default:
                            p = !0
                        }
                    for (L in l)
                        if (yt.call(l, L)) {
                            var C = l[L];
                            if (null != C) {
                                if ("style" === L) {
                                    var f = void 0
                                      , h = ""
                                      , m = "";
                                    for (f in C)
                                        if (C.hasOwnProperty(f)) {
                                            var g = 0 === f.indexOf("--")
                                              , v = C[f];
                                            if (null != v) {
                                                if (g)
                                                    var y = f;
                                                else if (y = f,
                                                vt.hasOwnProperty(y))
                                                    y = vt[y];
                                                else {
                                                    var w = y.replace(ut, "-$1").toLowerCase().replace(pt, "-ms-");
                                                    y = vt[y] = w
                                                }
                                                h += m + y + ":",
                                                m = f,
                                                h += g = null == v || "boolean" == typeof v || "" === v ? "" : g || "number" != typeof v || 0 === v || ct.hasOwnProperty(m) && ct[m] ? ("" + v).trim() : v + "px",
                                                m = ";"
                                            }
                                        }
                                    C = h || null
                                }
                                f = null,
                                p ? wt.hasOwnProperty(L) || (f = T(f = L) && null != C ? f + '="' + R(C) + '"' : "") : f = P(L, C),
                                f && (u += " " + f)
                            }
                        }
                    c || d && (u += ' data-reactroot=""');
                    var L = u;
                    l = "",
                    at.hasOwnProperty(o) ? L += "/>" : (L += ">",
                    l = "</" + r.type + ">");
                    t: {
                        if (null != (c = a.dangerouslySetInnerHTML)) {
                            if (null != c.__html) {
                                c = c.__html;
                                break t
                            }
                        } else if ("string" == typeof (c = a.children) || "number" == typeof c) {
                            c = R(c);
                            break t
                        }
                        c = null
                    }
                    return null != c ? (a = [],
                    ht.hasOwnProperty(o) && "\n" === c.charAt(0) && (L += "\n"),
                    L += c) : a = Ct(a.children),
                    r = r.type,
                    s = null == s || "http://www.w3.org/1999/xhtml" === s ? function(t) {
                        switch (t) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                        }
                    }(r) : "http://www.w3.org/2000/svg" === s && "foreignObject" === r ? "http://www.w3.org/1999/xhtml" : s,
                    this.stack.push({
                        domNamespace: s,
                        type: o,
                        children: a,
                        childIndex: 0,
                        context: i,
                        footer: l
                    }),
                    this.previousWasTextNode = !1,
                    L
                }
                ,
                r
            }();
            return Id.renderToNodeStream = function() {
                throw Error(n(207))
            }
            ,
            Id.renderToStaticMarkup = function(t, e) {
                t = new xt(t,!0,e);
                try {
                    return t.read(1 / 0)
                } finally {
                    t.destroy()
                }
            }
            ,
            Id.renderToStaticNodeStream = function() {
                throw Error(n(208))
            }
            ,
            Id.renderToString = function(t, e) {
                t = new xt(t,!1,e);
                try {
                    return t.read(1 / 0)
                } finally {
                    t.destroy()
                }
            }
            ,
            Id.version = "17.0.2",
            Id
        }();
        Zd.exports;
        const Od = () => r.j.jsx("style", {
            children: "\n\t\t.custom-error-wrapper{\n\t\t\ttext-align: center;\n\t\t\tdisplay:flex;\n\t\t\tflex-direction:column;\n\t\t\tfont-family:\n\t\t\t\t-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;\n\t\t}\n\t\t.me404 {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t\t.st0 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #e8ebed;\n\t\t}\n\t\t.st1 {\n\t\t\tfill: #ffffff;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 3;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st2 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #dbdfe1;\n\t\t}\n\t\t.st3 {\n\t\t\tfill: #ffffff;\n\t\t}\n\t\t.st4 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #e8ebed;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 3;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st5 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #ffffff;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 3;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st6 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: none;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 3;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st7 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: none;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 4;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st8 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #ffffff;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 2;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st9 {\n\t\t\tfill: #89949b;\n\t\t}\n\t\t.st10 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #89949b;\n\t\t}\n\t\t.st11 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: none;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-width: 2;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st12 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #ffffff;\n\t\t}\n\t\t.st13 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: #ffffff;\n\t\t\tstroke: #8894a0;\n\t\t\tstroke-width: 3;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st14 {\n\t\t\tfill-rule: evenodd;\n\t\t\tclip-rule: evenodd;\n\t\t\tfill: none;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t.st15 {\n\t\t\tfill: none;\n\t\t\tstroke: #89949b;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t\tstroke-miterlimit: 10;\n\t\t}\n\t\t#cloud {\n\t\t\t-webkit-animation: cloud 9s infinite ease-in-out;\n\t\t\t-moz-animation: cloud 9s infinite ease-in-out;\n\t\t\t-o-animation: cloud 9s infinite ease-in-out;\n\t\t\tanimation: cloud 9s infinite ease-in-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes cloud {\n\t\t\t0% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-webkit-transform: skewX(20deg);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\topacity: 1;\n\t\t\t\tleft: 114px;\n\t\t\t\t-webkit-transform: skewX(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-webkit-transform: skewX(20deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes cloud {\n\t\t\t0% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-moz-transform: skewX(20deg);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\topacity: 1;\n\t\t\t\tleft: 114px;\n\t\t\t\t-moz-transform: skewX(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-moz-transform: skewX(20deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes cloud {\n\t\t\t0% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-o-transform: skewX(20deg);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\topacity: 1;\n\t\t\t\tleft: 114px;\n\t\t\t\t-o-transform: skewX(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-o-transform: skewX(20deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes cloud {\n\t\t\t0% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-webkit-transform: skewX(20deg);\n\t\t\t\t-moz-transform: skewX(20deg);\n\t\t\t\t-ms-transform: skewX(20deg);\n\t\t\t\ttransform: skewX(20deg);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\topacity: 1;\n\t\t\t\tleft: 114px;\n\t\t\t\t-webkit-transform: skewX(0deg);\n\t\t\t\t-moz-transform: skewX(0deg);\n\t\t\t\t-ms-transform: skewX(0deg);\n\t\t\t\ttransform: skewX(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 0.3;\n\t\t\t\tleft: 160px;\n\t\t\t\t-webkit-transform: skewX(20deg);\n\t\t\t\t-moz-transform: skewX(20deg);\n\t\t\t\t-ms-transform: skewX(20deg);\n\t\t\t\ttransform: skewX(20deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#moon {\n\t\t\ttransform-origin: 640px 81px;\n\t\t\t-webkit-animation: moon-float 6s infinite ease-in-out;\n\t\t\t-moz-animation: moon-float 6s infinite ease-in-out;\n\t\t\t-o-animation: moon-float 6s infinite ease-in-out;\n\t\t\tanimation: moon-float 6s infinite ease-in-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes moon-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0, 0px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes moon-float {\n\t\t\t0% {\n\t\t\t\t-moz-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-moz-transform: translate(0, 0px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes moon-float {\n\t\t\t0% {\n\t\t\t\t-o-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-o-transform: translate(0, 0px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t}\n\t\t@keyframes moon-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0, 20px) scale(1.1);\n\t\t\t\t-moz-transform: translate(0, 20px) scale(1.1);\n\t\t\t\t-ms-transform: translate(0, 20px) scale(1.1);\n\t\t\t\ttransform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0, 0px) scale(1);\n\t\t\t\t-moz-transform: translate(0, 0px) scale(1);\n\t\t\t\t-ms-transform: translate(0, 0px) scale(1);\n\t\t\t\ttransform: translate(0, 0px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0, 20px) scale(1.1);\n\t\t\t\t-moz-transform: translate(0, 20px) scale(1.1);\n\t\t\t\t-ms-transform: translate(0, 20px) scale(1.1);\n\t\t\t\ttransform: translate(0, 20px) scale(1.1);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#monkey-eye-l {\n\t\t\ttransform-origin: 191px 257px;\n\t\t\t-webkit-animation: blink-l 12s infinite ease-in-out;\n\t\t\t-moz-animation: blink-l 12s infinite ease-in-out;\n\t\t\t-o-animation: blink-l 12s infinite ease-in-out;\n\t\t\tanimation: blink-l 12s infinite ease-in-out;\n\t\t}\n\t\t#monkey-eye-r {\n\t\t\ttransform-origin: 205px 256px;\n\t\t\t-webkit-animation: blink-r 12s infinite ease-in-out;\n\t\t\t-moz-animation: blink-r 12s infinite ease-in-out;\n\t\t\t-o-animation: blink-r 12s infinite ease-in-out;\n\t\t\tanimation: blink-r 12s infinite ease-in-out;\n\t\t}\n\t\t#monkey-arm {\n\t\t\ttransform-origin: 155px 298px;\n\t\t\t-webkit-animation: monkey-arm 4s infinite ease-in-out;\n\t\t\t-moz-animation: monkey-arm 4s infinite ease-in-out;\n\t\t\t-o-animation: monkey-arm 4s infinite ease-in-out;\n\t\t\tanimation: monkey-arm 4s infinite ease-in-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes monkey-arm {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateZ(20deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes monkey-arm {\n\t\t\t0% {\n\t\t\t\t-moz-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-moz-transform: rotateZ(20deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes monkey-arm {\n\t\t\t0% {\n\t\t\t\t-o-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-o-transform: rotateZ(20deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: rotateZ(-10deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes monkey-arm {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateZ(-10deg);\n\t\t\t\t-moz-transform: rotateZ(-10deg);\n\t\t\t\t-ms-transform: rotateZ(-10deg);\n\t\t\t\ttransform: rotateZ(-10deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateZ(20deg);\n\t\t\t\t-moz-transform: rotateZ(20deg);\n\t\t\t\t-ms-transform: rotateZ(20deg);\n\t\t\t\ttransform: rotateZ(20deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateZ(-10deg);\n\t\t\t\t-moz-transform: rotateZ(-10deg);\n\t\t\t\t-ms-transform: rotateZ(-10deg);\n\t\t\t\ttransform: rotateZ(-10deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes blink-l {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t20% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t22% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t24%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t70% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t72% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t74%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes blink-l {\n\t\t\t0% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t20% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t22% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t24%,\n\t\t\t30% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t70% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t72% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t74%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes blink-l {\n\t\t\t0% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t20% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t22% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t24%,\n\t\t\t30% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t70% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t72% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t74%,\n\t\t\t100% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes blink-l {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t20% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t22% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t24%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t70% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t72% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t74%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes blink-r {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t52% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t54%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes blink-r {\n\t\t\t0% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t30% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t50% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t52% {\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t54%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes blink-r {\n\t\t\t0% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t30% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t50% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t\t52% {\n\t\t\t\t-o-transform: rotateX(80deg);\n\t\t\t}\n\t\t\t54%,\n\t\t\t100% {\n\t\t\t\t-o-transform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes blink-r {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t2% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t4%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t32% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t34%,\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t\t52% {\n\t\t\t\t-webkit-transform: rotateX(80deg);\n\t\t\t\t-moz-transform: rotateX(80deg);\n\t\t\t\t-ms-transform: rotateX(80deg);\n\t\t\t\ttransform: rotateX(80deg);\n\t\t\t}\n\t\t\t54%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateX(0deg);\n\t\t\t\t-moz-transform: rotateX(0deg);\n\t\t\t\t-ms-transform: rotateX(0deg);\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#star1 {\n\t\t\ttransform-origin: 643px 338px;\n\t\t\t-webkit-animation: star1 12s infinite linear,\n\t\t\t\tstar1-fade 12s infinite ease-in-out;\n\t\t\t-moz-animation: star1 12s infinite linear,\n\t\t\t\tstar1-fade 12s infinite ease-in-out;\n\t\t\t-o-animation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n\t\t\tanimation: star1 12s infinite linear, star1-fade 12s infinite ease-in-out;\n\t\t}\n\t\t#star2 {\n\t\t\ttransform-origin: 489px 82px;\n\t\t\t-webkit-animation: star2 12s infinite linear,\n\t\t\t\tstar2-fade 12s infinite ease-in-out;\n\t\t\t-moz-animation: star2 12s infinite linear,\n\t\t\t\tstar2-fade 12s infinite ease-in-out;\n\t\t\t-o-animation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n\t\t\tanimation: star2 12s infinite linear, star2-fade 12s infinite ease-in-out;\n\t\t}\n\t\t#star3 {\n\t\t\ttransform-origin: 316px 344px;\n\t\t\t-webkit-animation: star3 12s infinite linear,\n\t\t\t\tstar3-fade 12s infinite ease-in-out;\n\t\t\t-moz-animation: star3 12s infinite linear,\n\t\t\t\tstar3-fade 12s infinite ease-in-out;\n\t\t\t-o-animation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n\t\t\tanimation: star3 12s infinite linear, star3-fade 12s infinite ease-in-out;\n\t\t}\n\t\t#star4 {\n\t\t\ttransform-origin: 126px 182px;\n\t\t\t-webkit-animation: star4 12s infinite linear,\n\t\t\t\tstar4-fade 12s infinite ease-in-out;\n\t\t\t-moz-animation: star4 12s infinite linear,\n\t\t\t\tstar4-fade 12s infinite ease-in-out;\n\t\t\t-o-animation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n\t\t\tanimation: star4 12s infinite linear, star4-fade 12s infinite ease-in-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star1 {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t15% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star1 {\n\t\t\t0% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t15% {\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star1 {\n\t\t\t0% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t15% {\n\t\t\t\t-o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes star1 {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t15% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\ttransform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star2 {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t30% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star2 {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t30% {\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star2 {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t30% {\n\t\t\t\t-o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes star2 {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t30% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\ttransform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star3 {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t45% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star3 {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t45% {\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star3 {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t45% {\n\t\t\t\t-o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes star3 {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t45% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\ttransform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star4 {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t60% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star4 {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t60% {\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star4 {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t60% {\n\t\t\t\t-o-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\t-o-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes star4 {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(0deg);\n\t\t\t}\n\t\t\t60% {\n\t\t\t\t-webkit-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-moz-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\t-ms-transform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t\ttransform: scale(1) skewX(0deg) rotateZ(360deg);\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\t-webkit-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-moz-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\t-ms-transform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t\ttransform: scale(0.5) skewX(15deg) rotateZ(720deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star1-fade {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t15% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star1-fade {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t15% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star1-fade {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t15% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@keyframes star1-fade {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t15% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t30%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star2-fade {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t30% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star2-fade {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t30% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star2-fade {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t30% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@keyframes star2-fade {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t30% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t45%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star3-fade {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t45% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star3-fade {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t45% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star3-fade {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t45% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@keyframes star3-fade {\n\t\t\t0%,\n\t\t\t30% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t45% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t60%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes star4-fade {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t60% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes star4-fade {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t60% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes star4-fade {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t60% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t@keyframes star4-fade {\n\t\t\t0%,\n\t\t\t45% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t60% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t75%,\n\t\t\t100% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#sword-path {\n\t\t\ttransform-origin: 458px 206px;\n\t\t\t-webkit-animation: tetris-float 3s infinite ease-in-out;\n\t\t\t-moz-animation: tetris-float 3s infinite ease-in-out;\n\t\t\t-o-animation: tetris-float 3s infinite ease-in-out;\n\t\t\tanimation: tetris-float 3s infinite ease-in-out;\n\t\t}\n\t\t#sword {\n\t\t\ttransform-origin: 458px 206px;\n\t\t\t-webkit-animation: sword 4s infinite ease-out;\n\t\t\t-moz-animation: sword 4s infinite ease-out;\n\t\t\t-o-animation: sword 4s infinite ease-out;\n\t\t\tanimation: sword 4s infinite ease-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes sword {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-webkit-transform: rotate(-40deg);\n\t\t\t}\n\t\t\t87% {\n\t\t\t\t-webkit-transform: rotate(50deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotate(-40deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes sword {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-moz-transform: rotate(-40deg);\n\t\t\t}\n\t\t\t87% {\n\t\t\t\t-moz-transform: rotate(50deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: rotate(-40deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes sword {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-o-transform: rotate(-40deg);\n\t\t\t}\n\t\t\t87% {\n\t\t\t\t-o-transform: rotate(50deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: rotate(-40deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes sword {\n\t\t\t0%,\n\t\t\t15% {\n\t\t\t\t-webkit-transform: rotate(-40deg);\n\t\t\t\t-moz-transform: rotate(-40deg);\n\t\t\t\t-ms-transform: rotate(-40deg);\n\t\t\t\ttransform: rotate(-40deg);\n\t\t\t}\n\t\t\t87% {\n\t\t\t\t-webkit-transform: rotate(50deg);\n\t\t\t\t-moz-transform: rotate(50deg);\n\t\t\t\t-ms-transform: rotate(50deg);\n\t\t\t\ttransform: rotate(50deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotate(-40deg);\n\t\t\t\t-moz-transform: rotate(-40deg);\n\t\t\t\t-ms-transform: rotate(-40deg);\n\t\t\t\ttransform: rotate(-40deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#tetris-path {\n\t\t\ttransform-origin: 538px 374px;\n\t\t\t-webkit-animation: tetris-float 5s infinite ease-in-out;\n\t\t\t-moz-animation: tetris-float 5s infinite ease-in-out;\n\t\t\t-o-animation: tetris-float 5s infinite ease-in-out;\n\t\t\tanimation: tetris-float 5s infinite ease-in-out;\n\t\t}\n\t\t#tetris {\n\t\t\ttransform-origin: 538px 374px;\n\t\t\t-webkit-animation: rotate 10s steps(1) infinite alternate;\n\t\t\t-moz-animation: rotate 10s steps(1) infinite alternate;\n\t\t\t-o-animation: rotate 10s steps(1) infinite alternate;\n\t\t\tanimation: rotate 10s steps(1) infinite alternate;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes rotate {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateZ(0deg);\n\t\t\t}\n\t\t\t25% {\n\t\t\t\t-webkit-transform: rotateZ(90deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateZ(180deg);\n\t\t\t}\n\t\t\t75% {\n\t\t\t\t-webkit-transform: rotateZ(270deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateZ(360deg);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes rotate {\n\t\t\t0% {\n\t\t\t\t-moz-transform: rotateZ(0deg);\n\t\t\t}\n\t\t\t25% {\n\t\t\t\t-moz-transform: rotateZ(90deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-moz-transform: rotateZ(180deg);\n\t\t\t}\n\t\t\t75% {\n\t\t\t\t-moz-transform: rotateZ(270deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: rotateZ(360deg);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes rotate {\n\t\t\t0% {\n\t\t\t\t-o-transform: rotateZ(0deg);\n\t\t\t}\n\t\t\t25% {\n\t\t\t\t-o-transform: rotateZ(90deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-o-transform: rotateZ(180deg);\n\t\t\t}\n\t\t\t75% {\n\t\t\t\t-o-transform: rotateZ(270deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: rotateZ(360deg);\n\t\t\t}\n\t\t}\n\t\t@keyframes rotate {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotateZ(0deg);\n\t\t\t\t-moz-transform: rotateZ(0deg);\n\t\t\t\t-ms-transform: rotateZ(0deg);\n\t\t\t\ttransform: rotateZ(0deg);\n\t\t\t}\n\t\t\t25% {\n\t\t\t\t-webkit-transform: rotateZ(90deg);\n\t\t\t\t-moz-transform: rotateZ(90deg);\n\t\t\t\t-ms-transform: rotateZ(90deg);\n\t\t\t\ttransform: rotateZ(90deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\t-webkit-transform: rotateZ(180deg);\n\t\t\t\t-moz-transform: rotateZ(180deg);\n\t\t\t\t-ms-transform: rotateZ(180deg);\n\t\t\t\ttransform: rotateZ(180deg);\n\t\t\t}\n\t\t\t75% {\n\t\t\t\t-webkit-transform: rotateZ(270deg);\n\t\t\t\t-moz-transform: rotateZ(270deg);\n\t\t\t\t-ms-transform: rotateZ(270deg);\n\t\t\t\ttransform: rotateZ(270deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotateZ(360deg);\n\t\t\t\t-moz-transform: rotateZ(360deg);\n\t\t\t\t-ms-transform: rotateZ(360deg);\n\t\t\t\ttransform: rotateZ(360deg);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes tetris-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes tetris-float {\n\t\t\t0% {\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-moz-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes tetris-float {\n\t\t\t0% {\n\t\t\t\t-o-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-o-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@keyframes tetris-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-ms-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\ttransform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0px, 30px) scale(1);\n\t\t\t\t-moz-transform: translate(0px, 30px) scale(1);\n\t\t\t\t-ms-transform: translate(0px, 30px) scale(1);\n\t\t\t\ttransform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-ms-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\ttransform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t#triforce {\n\t\t\ttransform-origin: 175px 91px;\n\t\t\t-webkit-animation: triforce-float 3s infinite ease-in-out;\n\t\t\t-moz-animation: triforce-float 3s infinite ease-in-out;\n\t\t\t-o-animation: triforce-float 3s infinite ease-in-out;\n\t\t\tanimation: triforce-float 3s infinite ease-in-out;\n\t\t}\n\t\tlesshat-selector {\n\t\t\t-lh-property: 0;\n\t\t}\n\t\t@-webkit-keyframes triforce-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@-moz-keyframes triforce-float {\n\t\t\t0% {\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-moz-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@-o-keyframes triforce-float {\n\t\t\t0% {\n\t\t\t\t-o-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-o-transform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-o-transform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t@keyframes triforce-float {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-ms-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\ttransform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t\t65% {\n\t\t\t\t-webkit-transform: translate(0px, 30px) scale(1);\n\t\t\t\t-moz-transform: translate(0px, 30px) scale(1);\n\t\t\t\t-ms-transform: translate(0px, 30px) scale(1);\n\t\t\t\ttransform: translate(0px, 30px) scale(1);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-moz-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\t-ms-transform: translate(0px, 0px) scale(0.9);\n\t\t\t\ttransform: translate(0px, 0px) scale(0.9);\n\t\t\t}\n\t\t}\n\t\t[not-existing] {\n\t\t\tzoom: 1;\n\t\t}\n\t\t\n\t\t "
        })
          , $d = () => {
            const {Link: t="a"} = (0,
            i.useContext)(r.C);
            return r.j.jsxs("div", {
                style: {
                    padding: 40
                },
                children: [r.j.jsx(Od, {}), r.j.jsx("div", {
                    className: "ant-row ant-row-center",
                    children: r.j.jsxs("div", {
                        className: "ant-col ant-col-xs-16 custom-error-wrapper",
                        children: [r.j.jsx("h2", {
                            style: {
                                color: "#5f6c72",
                                marginTop: 5
                            },
                            children: "Sorry, the page you requested was not found"
                        }), r.j.jsx("div", {
                            style: {
                                height: 8
                            }
                        }), r.j.jsx(t, {
                            href: "/",
                            children: r.j.jsx("a", {
                                style: {
                                    fontSize: "18px",
                                    fontWeight: "bold"
                                },
                                children: "\u2190 Back to Home Page"
                            })
                        }), r.j.jsxs("svg", {
                            className: "me404",
                            viewBox: "0 0 900 480",
                            children: [r.j.jsx("path", {
                                id: "cloud",
                                className: "st0",
                                d: "M658.4,345.2c-10.9,0-19.7-8.8-19.7-19.7c0-10.9,8.8-19.7,19.7-19.7h50.1c9.9-1.5,17.5-10,17.5-20.3\n\tc0-11.4-9.2-20.6-20.6-20.6v-0.2H633c-11.4,0-20.6-6.7-20.6-18.1c0-11.4,9.2-19.3,20.6-19.3h70.4l2-0.2c7.3-3.1,12.5-11,12.5-19.5\n\tc0-8.5-4.2-16.7-11.4-19.2l-2.5-0.3h-11.3c-11.9,0-21.6-8.9-21.6-19.9c0-11,9.7-19.9,21.6-19.9h15.8l1.4-0.3\n\tc8.6-2.5,14.8-10.1,14.8-19.5c0-11.4-9.2-20.6-20.6-20.6h-1.2h-69.2H382.5c-19.8-0.9-19.9-15.9-19.8-17.8c0-0.1,0-0.1,0-0.2\n\tc0-9.9-8.1-18-18-18h-93.5c-9.9,0-18,8.1-18,18c0,9.4,7.2,17.1,16.3,17.9h9.3c0.2,0,0,0,0.6,0l0.5,0l0.4,0l0.2,0\n\tc10.1,0.9,18,9.3,18,19.6c0,10.9-8.8,19.7-19.7,19.7h-70.7c-11.3,0-20.5,9.2-20.5,20.6c0,11.3,9.1,20.5,20.4,20.6h48.8\n\tc10.3,0,18.7,8.4,18.7,18.7c0,10.3-8.4,18.7-18.7,18.7h-23.2c-11.3,0.1-20.4,9.2-20.4,20.6c0,11.3,9.2,20.5,20.5,20.6h6.3\n\tc10.7,0,19.3,8.7,19.3,19.3c0,10.7-7.8,19.3-18.4,19.3l-1.5,0l-2.8,0.4c-7.3,3.1-11.8,11-11.5,18.9c0.3,8.5,4.2,16.5,11.7,19.6\n\tc1.1,0.7,3.4,0.9,4.4,0.9h4.5H296h19.7c3.9,0.5,8.2,4.2,7.4,10.4c0,0.4,0,0.8,0.1,1.1c0,0.5-0.1,1-0.1,1.5c0,9.7,7.9,17.5,17.5,17.5\n\th60.2c9.7,0,17.5-7.9,17.5-17.5c0-0.4,0-0.8-0.1-1.2c0.1-0.3,0-0.7,0.1-1.1c0.3-6.5,6.4-10.9,10.6-10.8h110.1\n\tc8.5,0,16.9,6.6,16.9,14.8c0,8.2,6.6,14.8,14.8,14.8h92.6c8.2,0,14.8-6.6,14.8-14.8c0-8.2-6.6-14.8-14.8-14.8 M332.8,187.1h-21.2\n\tc-11.4,0-20.6-9.2-20.6-20.6c0-11.4,9.2-20.6,20.6-20.6h21.2c11.4,0,20.6,9.2,20.6,20.6C353.3,177.9,344.1,187.1,332.8,187.1z"
                            }), r.j.jsxs("g", {
                                id: "triforce",
                                children: [r.j.jsx("path", {
                                    id: "zelda_stroke",
                                    className: "st1",
                                    d: "M138.4,59.5h36.9l-18.5,32L138.4,59.5z M193.8,91.5l18.5-32h-36.9L193.8,91.5z M175.4,123.5\n\t\tl18.5-32h-36.9L175.4,123.5z"
                                }), r.j.jsx("path", {
                                    id: "zelda_dark_shadow",
                                    className: "st0",
                                    d: "M156.9,91.5l-18.5-32l18.5,10.7L156.9,91.5z M193.8,70.2l-18.5-10.7l18.5,32\n\t\tL193.8,70.2z M175.4,102.2l-18.5-10.7l18.5,32L175.4,102.2z"
                                }), r.j.jsx("path", {
                                    id: "zelda_light_shadow",
                                    className: "st2",
                                    d: "M175.4,59.5l-18.5,10.7l-18.5-10.7H175.4z M175.4,59.5l18.5,10.7l18.5-10.7H175.4zM156.9,91.5l18.5,10.7l18.5-10.7H156.9z"
                                }), r.j.jsx("path", {
                                    id: "zelda_highlight",
                                    className: "st3",
                                    d: "M150.6,66.6h12.5l-6.3,10.8L150.6,66.6z M193.8,77.4l6.3-10.8h-12.5L193.8,77.4zM175.4,109.4l6.3-10.8h-12.5L175.4,109.4z"
                                })]
                            }), r.j.jsxs("g", {
                                id: "monkey",
                                children: [r.j.jsx("path", {
                                    id: "foot_back",
                                    className: "st4",
                                    d: "M187.3,354.5c2.2-4.5,1.6-12.8-3.3-18.5l-9.3,2c2.2,3.5,8.3,7.7,2.3,20.8 c-1.9,4.2-0.8,8.7,4,8.7h22.3c6.5,0,5.3-7.9,2-10.5c-4.2-3.3-10.2-3.6-15.3-1C187.9,357.1,185.3,358.7,187.3,354.5z"
                                }), r.j.jsx("path", {
                                    id: "foot_front",
                                    className: "st5",
                                    d: "M166.3,354.5c2.2-4.5,1.6-12.8-3.3-18.5l-9.3,2c2.2,3.5,8.3,7.7,2.3,20.8 c-1.9,4.2-0.8,8.7,4,8.7h22.3c6.5,0,5.3-7.9,2-10.5c-4.2-3.3-10.2-3.6-15.3-1C166.9,357.1,164.3,358.7,166.3,354.5z"
                                }), r.j.jsx("path", {
                                    id: "body",
                                    className: "st5",
                                    d: "M199.8,299.3l9-55.5c0,0-2.1-3.6-7.2-7.1c1.4-1.2,2.2-3.1,1.8-5c-0.6-3.1-3.9-5.3-7.5-4.8 c-2.9,0.4-5,2.4-5.4,4.8l0,0c-7.2-1.9-16.5-1.9-29.5,1.6c-1.5-3.1-5.6-5.4-9.3-5.7c-5.5-0.4-9.3,3.7-9.7,9.3 c-0.3,4.4,2.2,8.3,6.1,9.9c-16,25.6-14.6,58.2-11,71.9c4.3,16.1,18.2,21.8,26.3,21.8c13,0,33.8-1.9,37.5-17.7 C202.9,315,202,303.9,199.8,299.3z"
                                }), r.j.jsx("path", {
                                    id: "rock",
                                    className: "st6",
                                    d: "M93.4,367.5H89 M104,367.5h144l-11,17.2c-0.9,1.4-2.5,2.3-4.2,2.3H203c-1.6,0-3,0.7-4,2l-40,52"
                                }), r.j.jsx("path", {
                                    id: "tail",
                                    className: "st7",
                                    d: "M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3"
                                }), r.j.jsx("path", {
                                    id: "face",
                                    className: "st8",
                                    d: "M213.7,245.2c0,0-6-2.9-11,0.2c-4.6,2.8-9.4,1.7-14,0c-4.6-1.7-16-5.1-19.2,2.6 c-2,3.8-2.3,9.7,3.8,16.3c-0.9,10.1-2.9,37.9,28.6,34.2c10.1-1.2,24.8-12.7,25.4-18.2s-1.7-7.4-6.5-6.5 c-1.3-6.5-2.3-12.9-10.7-11.8c-3.9,0.2,7.5,0,8.1-7.5C218.6,247.8,213.7,245.2,213.7,245.2z"
                                }), r.j.jsx("path", {
                                    id: "mouth",
                                    className: "st9",
                                    d: "M220.6,274.8c0,0-0.3,0.2-0.7,0.5c-0.2,0.2-0.6,0.3-1,0.5c-0.4,0.2-0.9,0.3-1.4,0.5 c-1,0.3-2.1,0.5-3.3,0.6c-1.2,0.2-2.4,0.3-3.7,0.5c-0.6,0.1-1.2,0.2-1.8,0.4c-0.6,0.1-1.1,0.3-1.7,0.5c-0.5,0.2-1,0.4-1.4,0.7 c-0.5,0.2-0.8,0.5-1.2,0.8c-0.4,0.2-0.6,0.6-0.9,0.9c-0.3,0.3-0.4,0.5-0.6,0.7c-0.3,0.4-0.5,0.7-0.5,0.7l0,0.1 c-0.2,0.2-0.5,0.3-0.7,0.1c-0.2-0.1-0.3-0.4-0.2-0.7c0,0,0.2-0.3,0.5-0.8c0.2-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.5-0.7,0.9-1 c0.4-0.3,0.8-0.7,1.3-1c0.5-0.3,1-0.6,1.6-0.9c0.6-0.2,1.2-0.5,1.8-0.7c0.6-0.2,1.3-0.3,1.9-0.5c1.3-0.3,2.5-0.5,3.7-0.7 c1.2-0.2,2.2-0.4,3-0.7c0.4-0.2,0.8-0.3,1.1-0.4c0.3-0.2,0.5-0.2,0.8-0.4c0.5-0.3,0.7-0.5,0.7-0.5c0.5-0.3,1.1-0.2,1.4,0.2 C221.2,273.9,221.1,274.5,220.6,274.8C220.6,274.8,220.6,274.8,220.6,274.8z"
                                }), r.j.jsx("path", {
                                    id: "nose_hole",
                                    className: "st10",
                                    d: "M213.2,266.3c0.6,0,1,0.5,0.9,1.1c0,0.6-0.5,1-1.1,0.9c-0.6,0-1-0.5-0.9-1.1\n\t\tC212.1,266.6,212.6,266.2,213.2,266.3z"
                                }), r.j.jsx("path", {
                                    id: "nose_hole_1_",
                                    className: "st10",
                                    d: "M208.1,266.9c0.6,0,1,0.5,0.9,1.1c0,0.6-0.5,1-1.1,0.9c-0.6,0-1-0.5-0.9-1.1\n\t\tC207.1,267.3,207.6,266.9,208.1,266.9z"
                                }), r.j.jsx("path", {
                                    id: "monkey-eye-r",
                                    className: "st10",
                                    d: "M205,253.5c1.1,0.1,1.9,1,1.9,2.1c-0.1,1.1-1,1.9-2.1,1.9c-1.1-0.1-1.9-1-1.9-2.1 C203,254.3,203.9,253.4,205,253.5z"
                                }), r.j.jsx("path", {
                                    id: "monkey-eye-l",
                                    className: "st10",
                                    d: "M191.5,254.6c1.4,0.1,2.4,1.3,2.3,2.7c-0.1,1.4-1.3,2.4-2.7,2.3c-1.4-0.1-2.4-1.3-2.3-2.7 C188.9,255.6,190.1,254.5,191.5,254.6z"
                                }), r.j.jsx("path", {
                                    id: "mongkey_shadow_1_",
                                    className: "st0",
                                    d: "M209.1,281c0.9-0.9,9.4-2.6,12-3c2.4-0.4-1.6,4.1-5,5S208.2,282,209.1,281z M143.6,237.1c-0.3,3.6,1.8,7,5.2,8.4c0.4,0.2,0.7,0.5,0.8,0.9c0.1,0.4,0.1,0.9-0.2,1.2c-15.1,24.2-14.7,56.3-10.8,70.8 c4,15.2,17.1,20.7,24.8,20.7c8.9,0,16.1-1,21.8-2.9c-67.5,2.2-35-81.7-33.3-87.3c0.2-0.8,1.2-4.4,1-5c-0.6-1.6-3.5-0.2-6-4 c-2.9-4.5,1.2-9.2,2.6-10.6C146.3,230.1,143.9,233,143.6,237.1z M201.7,297.5c7.8-0.9,17.9-8,22.3-13.3\n\t\tc-27.4,14.7-44.4,3.1-50.1-9.8c0.3,5.9,1.6,12.6,5.9,17.3C184.4,296.7,191.8,298.7,201.7,297.5z M208.6,261.2\n\t\tc-5.7,0.8-8.6-1.1-11.6,1.8c-2.8,2.7-7.7,4.6-3.8,4.1c3.9-0.6,10.1-3.4,16.8-4.1c0,0,0,0,0,0l-0.5,0c-0.2,0-0.3,0-0.4,0\n\t\tc-0.5,0-1-0.4-1-0.9C208.2,261.9,208.2,261.5,208.6,261.2z M198.4,300c0-0.1,0-0.1-0.1-0.2c-0.7,0-1.4,0.1-2,0.1\n\t\tc-7.8,0-13.9-2.3-18-6.8c-7.7-8.4-6.6-22.5-6.1-28.4c-5.6-6.2-5.6-11.5-4.6-15c-2,2.3-4.8,8.5,2.1,16.1c-3.9,6.4-5.4,26.5,9.2,36.2\n\t\tc7.2,4.8,16.6,5.3,20.8,2.8C199.5,302.9,199,301.2,198.4,300z"
                                }), r.j.jsx("path", {
                                    id: "belly",
                                    className: "st11",
                                    d: "M189.1,304c6.2,3,8.1,11.5,5.9,19c-2.3,7.4-9.8,10-16,7c-6.2-3-7.6-10.4-5.3-17.8\n\t\tS182.9,301.1,189.1,304z"
                                }), r.j.jsx("path", {
                                    id: "belly_button",
                                    className: "st9",
                                    d: "M191.2,322.3c0-0.1-0.1-0.2-0.2-0.2l-1.9-1.4l1-1.9c0.1-0.1,0.1-0.2,0-0.3\n\t\tc-0.1-0.2-0.4-0.4-0.7-0.3c-0.2,0-0.4,0.2-0.5,0.3l-0.9,1.7l-1.6-1.2c-0.2-0.1-0.3-0.1-0.5-0.1c-0.4,0.1-0.5,0.4-0.5,0.6\n\t\tc0,0.1,0.1,0.2,0.2,0.2l1.8,1.3l-1.1,2.1c-0.1,0.1-0.1,0.2,0,0.3c0.1,0.3,0.4,0.4,0.7,0.4c0.2,0,0.3-0.1,0.4-0.3l1-1.9l1.7,1.3\n\t\tc0.1,0.1,0.3,0.1,0.5,0.1C191.1,322.8,191.3,322.5,191.2,322.3z"
                                }), r.j.jsxs("g", {
                                    id: "monkey_arm",
                                    children: [r.j.jsx("path", {
                                        id: "monkey-arm",
                                        className: "st5",
                                        d: "M164.3,344.1c-0.9-0.3-1.8-0.2-2.5,0.2c-0.3-0.2-0.6-0.3-0.9-0.4c-0.8-0.3-1.5-0.5-2.3-0.5\n\t\t\tc-0.1,0-0.2-0.1-0.3-0.3c-2.4-11.4-1.1-27.6,0.3-43.8c0-0.1,1.2-5.7-2.6-7.2c-5.2-2.1-5.5,2.5-5.5,2.7c-0.5,4.8-3.6,39,1.1,51.4\n\t\t\tc0,0.1,0,0.2,0,0.3c-0.4,0.5-0.7,1-0.9,1.7c-1.5,3.9,0.7,8.3,4.8,9.9c4.1,1.6,8.7-0.3,10.1-4.2c0.5-1.3,0.6-2.7,0.3-4\n\t\t\tc0-0.1,0-0.2,0.1-0.2c0.5-0.7,0.9-1.6,0.5-2.9C166.2,345.5,165.4,344.4,164.3,344.1z"
                                    }), r.j.jsxs("g", {
                                        id: "armpit",
                                        children: [r.j.jsx("path", {
                                            className: "st12",
                                            d: "M165,296c0-4.3-1.8-10.8-6-12c-12.5-3.5-12.4,11.1-12.4,11.1s10.8-1.4,16.7,9.6\n\t\t\t\tC163.3,304.6,165,300.3,165,296z"
                                        }), r.j.jsx("path", {
                                            className: "st11",
                                            d: "M146.6,295.1c0,0,10.8-1.4,16.7,9.6"
                                        }), r.j.jsx("path", {
                                            className: "st11",
                                            d: "M144.4,296c0,0,8.7-6.6,19.2,0"
                                        })]
                                    })]
                                })]
                            }), r.j.jsx("g", {
                                id: "tetris-path",
                                children: r.j.jsxs("g", {
                                    id: "tetris",
                                    children: [r.j.jsx("path", {
                                        id: "tetris_stroke",
                                        className: "st13",
                                        d: "M487.5,323.5h34v34h-34V323.5z M487.5,357.5h34v34h-34V357.5z M521.5,357.5h34v34h-34 V357.5z M555.5,357.5h34v34h-34V357.5z M555.5,391.5h34v34h-34V391.5z"
                                    }), r.j.jsx("path", {
                                        id: "tetris_dark_shadow",
                                        className: "st2",
                                        d: "M489,356l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H489z M489,390l6-6 c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H489z M523,390l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H523z M557,390l6-6 c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H557z M557,424l6-6c0.9-0.9,2.2-1.5,3.5-1.5h13.9l7.5,7.5H557z"
                                    }), r.j.jsx("path", {
                                        id: "tetris_light_shadow",
                                        className: "st0",
                                        d: "M520,356l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V356z M520,390l-8-7.5v-13.9 c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M554,390l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M588,390l-8-7.5v-13.9 c0-1.4,0.6-2.7,1.6-3.6l6.4-6V390z M588,424l-8-7.5v-13.9c0-1.4,0.6-2.7,1.6-3.6l6.4-6V424z"
                                    })]
                                })
                            }), r.j.jsxs("g", {
                                id: "stars",
                                children: [r.j.jsx("path", {
                                    id: "star1",
                                    className: "st5",
                                    d: "M652.6,332.5c-5.3,3.1-12.1,1.2-15.1-4.1l-1.4-2.4l1.4,2.4c3.1,5.3,1.2,12.1-4.1,15.1l-2.4,1.4 l2.4-1.4c5.3-3.1,12.1-1.2,15.1,4.1l1.4,2.4l-1.4-2.4C645.5,342.3,647.3,335.5,652.6,332.5l2.4-1.4L652.6,332.5z"
                                }), r.j.jsx("path", {
                                    id: "star2",
                                    className: "st5",
                                    d: "M503.4,73.7c-8,4.6-18.1,1.9-22.7-6.1l-2.1-3.6l2.1,3.6c4.6,8,1.9,18.1-6.1,22.7l-3.6,2.1l3.6-2.1 c8-4.6,18.1-1.9,22.7,6.1l2.1,3.6l-2.1-3.6C492.7,88.4,495.4,78.3,503.4,73.7l3.6-2.1L503.4,73.7z"
                                }), r.j.jsx("path", {
                                    id: "star3",
                                    className: "st5",
                                    d: "M330.4,335.7c-8,4.6-18.1,1.9-22.7-6.1l-2.1-3.6l2.1,3.6c4.6,8,1.9,18.1-6.1,22.7l-3.6,2.1 l3.6-2.1c8-4.6,18.1-1.9,22.7,6.1l2.1,3.6l-2.1-3.6C319.7,350.4,322.4,340.3,330.4,335.7l3.6-2.1L330.4,335.7z"
                                }), r.j.jsx("path", {
                                    id: "star4",
                                    className: "st5",
                                    d: "M135.6,176.5c-5.3,3.1-12.1,1.2-15.1-4.1l-1.4-2.4l1.4,2.4c3.1,5.3,1.2,12.1-4.1,15.1l-2.4,1.4 l2.4-1.4c5.3-3.1,12.1-1.2,15.1,4.1l1.4,2.4l-1.4-2.4C128.5,186.3,130.3,179.5,135.6,176.5l2.4-1.4L135.6,176.5z"
                                })]
                            }), r.j.jsxs("g", {
                                id: "moon",
                                children: [r.j.jsx("path", {
                                    id: "moon_body",
                                    className: "st5",
                                    d: "M641,34c26,0,47,21,47,47s-21,47-47,47s-47-21-47-47S615,34,641,34z"
                                }), r.j.jsx("path", {
                                    id: "moon_shades",
                                    className: "st0",
                                    d: "M622.5,55.9c1.3,2.3,0,5.8-3.1,7.7c-3,2-6.6,1.7-7.9-0.6c-1.3-2.3,0-5.8,3.1-7.7\n\t\tC617.6,53.3,621.1,53.6,622.5,55.9z M628.8,94.1c-4.1-6.1-11.6-9-16.7-6.4c-5.1,2.6-5.9,9.6-1.7,15.7c4.1,6.1,11.6,9,16.7,6.4\n\t\tC632.2,107.2,632.9,100.2,628.8,94.1z M644.5,109c-3.6,0-6.5,2.2-6.5,5s2.9,5,6.5,5s6.5-2.2,6.5-5S648.1,109,644.5,109zM645.7,95.8c-2.3-1.2-5-0.5-6,1.4c-1,2,0,4.5,2.3,5.7c2.3,1.2,5,0.5,6-1.4C649,99.6,648,97,645.7,95.8z M686.5,81\n\t\tc0-25.1-20.4-45.5-45.5-45.5c-16.1,0-30.2,8.4-38.3,21c7.9-5.9,17.7-9.5,28.3-9.5c26,0,47,21,47,47c0,6.3-1.3,12.3-3.5,17.8\n\t\tC681.9,103.6,686.5,92.8,686.5,81z"
                                })]
                            }), r.j.jsxs("g", {
                                id: "number_4",
                                children: [r.j.jsx("path", {
                                    id: "number_4_outline",
                                    className: "st1",
                                    d: "M379.5,235.5c0-4.9-3.9-9.1-8.7-9.1h-11.4v-72.5c0-9.1-8.5-15.7-17.6-15\n\t\tc-6,0-11.8,3.1-15.1,8l-52.7,79.8c-1.2,2.1-2.1,4.5-2.1,6.6c0,6.6,5,11.1,10.3,11.1H339v24.3c0,5.6,4.3,10.1,9.9,10.1\n\t\tc6,0,10.5-4.5,10.5-10.1v-24.3h11.4C375.6,244.3,379.5,240.4,379.5,235.5z M339,226.4h-45.5l45.5-67.8V226.4z"
                                }), r.j.jsx("path", {
                                    id: "number_4_inner_lines",
                                    className: "st14",
                                    d: "M349,158v109.2 M345.9,147c-5.6,0-10.9,2.8-14,7.2l-47.1,69.5\n\t\tc-1.2,1.9-3.3,4.3-3.6,5.8c-0.8,4.6,2.3,5.5,7.3,5.5H340 M359.5,235H379 M342,232l-4,7 M345,232l-4,7 M358,232l-4,7 M361,232l-4,7"
                                }), r.j.jsx("path", {
                                    id: "number_4_dots",
                                    className: "st10",
                                    d: "M349,266c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tC346.1,267.3,347.4,266,349,266z M349,155.1c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9S347.4,155.1,349,155.1\n\t\tz M344.4,144.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C341.4,145.9,342.7,144.6,344.4,144.6z"
                                })]
                            }), r.j.jsxs("g", {
                                id: "number_4_2",
                                children: [r.j.jsx("path", {
                                    id: "number_4_outline_2",
                                    className: "st1",
                                    d: "M627,235.5c0-4.9-3.9-9.1-8.7-9.1h-11.4v-72.5c0-9.1-8.5-15.7-17.6-15\n\t\tc-6,0-11.8,3.1-15.1,8l-52.7,79.8c-1.2,2.1-2.1,4.5-2.1,6.6c0,6.6,5,11.1,10.3,11.1h56.7v24.3c0,5.6,4.3,10.1,9.9,10.1\n\t\tc6,0,10.5-4.5,10.5-10.1v-24.3h11.4C623.1,244.3,627,240.4,627,235.5z M586.5,226.4H541l45.5-67.8V226.4z"
                                }), r.j.jsx("path", {
                                    id: "number_4_inner_lines_2",
                                    className: "st14",
                                    d: "M596.5,158v109.2 M593.3,147c-5.6,0-10.9,2.8-14,7.2l-47.1,69.5\n\t\tc-1.2,1.9-3.3,4.3-3.6,5.8c-0.8,4.6,2.3,5.5,7.3,5.5h51.5 M607,235h19.5 M589.5,232l-4,7 M592.5,232l-4,7 M605.5,232l-4,7M608.5,232l-4,7"
                                }), r.j.jsx("path", {
                                    id: "number_4_dots_2",
                                    className: "st10",
                                    d: "M596.5,266c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tC593.6,267.3,594.9,266,596.5,266z M596.5,155.1c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tS594.9,155.1,596.5,155.1z M591.8,144.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tC588.9,145.9,590.2,144.6,591.8,144.6z"
                                })]
                            }), r.j.jsxs("g", {
                                id: "number_0",
                                children: [r.j.jsx("path", {
                                    id: "number_0_outline",
                                    className: "st1",
                                    d: "M502,208.9c0-34-15.9-70.9-54-70.9c-38.3,0-54,36.9-54,70.9s15.7,71.1,54,71.1\n\t\tC486.1,280,502,242.9,502,208.9z M481.1,208.9c0,26.8-8.7,53-33.1,53c-24.6,0-33.1-26.2-33.1-53c0-26.8,8.5-52.8,33.1-52.8\n\t\tC472.4,156.1,481.1,182.1,481.1,208.9z"
                                }), r.j.jsx("path", {
                                    id: "number_0_inner_lines",
                                    className: "st15",
                                    d: "M487.2,175.7c-6.7-16.8-19.3-29.4-39.2-29.4c-32,0-45.1,32.5-45.1,62.4\n\t\ts13.1,62.6,45.1,62.6c31.8,0,44.1-32.6,44.1-62.6 M487.5,172c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5\n\t\tC482,174.5,484.5,172,487.5,172z M492.5,202c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5\n\t\tC487,204.5,489.5,202,492.5,202z"
                                }), r.j.jsx("path", {
                                    id: "number_0_dots",
                                    className: "st10",
                                    d: "M492.5,205c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5\n\t\tC490,206.1,491.1,205,492.5,205z M487.5,175c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5\n\t\tC485,176.1,486.1,175,487.5,175z M448.1,143.4c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tC445.1,144.7,446.4,143.4,448.1,143.4z M448.1,268.3c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9\n\t\tC445.1,269.6,446.4,268.3,448.1,268.3z"
                                })]
                            }), r.j.jsx("g", {
                                id: "sword-path",
                                children: r.j.jsxs("g", {
                                    id: "sword",
                                    children: [r.j.jsx("path", {
                                        id: "sword_handle",
                                        className: "st5",
                                        d: "M444.6,196.6l0.6-0.8c1.5-2,1.8-4.3,3.8-2.8l8.9,6.8c2,1.5,2.4,4.3,0.9,6.3l-0.6,0.8 c-1.5,2-4.3,2.4-6.3,0.9L443,201C441,199.5,443.1,198.5,444.6,196.6z"
                                    }), r.j.jsx("path", {
                                        id: "sword_handle_line",
                                        className: "st14",
                                        d: "M453.9,197c2,1.5,2.4,4.3,0.9,6.3l-0.6,0.8c-1.5,2-4.3,2.4-6.3,0.9"
                                    }), r.j.jsx("path", {
                                        id: "sword_hilt",
                                        className: "st5",
                                        d: "M432.5,197.1l10.6-13.9c1.6-2.2,4.7-2.6,6.9-0.9c2.2,1.6,2.6,4.7,0.9,6.9l-10.6,13.9 c-1.6,2.2-4.7,2.6-6.9,0.9C431.2,202.4,430.8,199.3,432.5,197.1z"
                                    }), r.j.jsx("polygon", {
                                        id: "sword_blade",
                                        className: "st1",
                                        points: "437,199 446,187.3 387.3,138.9 366.3,136.7 372.2,154 \t"
                                    }), r.j.jsx("polygon", {
                                        id: "sword_blade_shadow",
                                        className: "st0",
                                        points: "436.7,197 440.3,192.3 369,138.5 368.5,138.4 373.5,153 \t"
                                    })]
                                })
                            })]
                        }), r.j.jsxs("p", {
                            style: {
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#828999"
                            },
                            children: ["Animation by", r.j.jsx("a", {
                                href: "https://codepen.io/UnfocusedDrive/pen/npDyq",
                                style: {
                                    color: "#828999"
                                },
                                children: "John Yagiz"
                            })]
                        })]
                    })
                })]
            })
        }
          , Vd = Object.freeze({
            owner: "owner",
            admin: "admin",
            author: "author",
            editor: "editor",
            sysAdmin: "sys_admin",
            developer: "developer",
            superUser: "super_user",
            publicApi: "public_api",
            subscriber: "subscriber",
            sysReviewer: "sys_reviewer"
        })
          , Rd = Object.freeze({
            TAG: "TAG",
            SITE: "SITE",
            POST: "POST",
            PAGE: "PAGE",
            THEME: "THEME",
            TOPIC: "TOPIC",
            API_KEY: "API_KEY",
            SITEMAP: "SITEMAP",
            LICENSE: "LICENSE",
            PAYMENT: "PAYMENT",
            CAMPAIGN: "CAMPAIGN",
            CATEGORY: "CATEGORY",
            RE_INDEX: "RE_INDEX",
            USER_META: "USER_META",
            All_SITES: "All_SITES",
            PUBLIC_API: "PUBLIC_API",
            MEMBERSHIP: "MEMBERSHIP",
            WEBHOOK_URL: "WEBHOOK_URL",
            CUSTOM_ROLE: "CUSTOM_ROLE",
            URL_REDIRECT: "URL_REDIRECT",
            ACTIVITY_LOG: "ACTIVITY_LOG",
            AGENCY_CONFIG: "AGENCY_CONFIG",
            MEDIA_LIBRARY: "MEDIA_LIBRARY",
            PRESIGNED_URL: "PRESIGNED_URL",
            CLIENT_BILLING: "CLIENT_BILLING",
            PUBLIC_API_KEY: "PUBLIC_API_KEY"
        })
          , Pd = Object.freeze({
            EXPORT_JSON: "EXPORT_JSON",
            INVITE_USER: "INVITE_USER",
            SITE_LIMITS: "SITE_LIMITS"
        });
        Vd.sysAdmin,
        Vd.sysReviewer;
        var Hd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof n.g < "u" ? n.g : typeof self < "u" ? self : {}
          , Bd = {
            exports: {}
        }
          , Fd = {}
          , Ud = {}
          , Dd = {}
          , zd = {}
          , Gd = Hd && Hd.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }();
        Object.defineProperty(zd, "__esModule", {
            value: !0
        });
        var Yd = function(t) {
            function e(n) {
                void 0 === n && (n = "");
                var r = t.call(this, n) || this;
                return r.message = n,
                r.name = "AccessControlError",
                Object.setPrototypeOf(r, e.prototype),
                r
            }
            return Gd(e, t),
            e
        }(Error);
        zd.AccessControlError = Yd;
        var Xd = {}
          , qd = {}
          , Wd = {};
        Object.defineProperty(Wd, "__esModule", {
            value: !0
        });
        Wd.Action = {
            CREATE: "create",
            READ: "read",
            UPDATE: "update",
            DELETE: "delete"
        };
        var Kd = {};
        Object.defineProperty(Kd, "__esModule", {
            value: !0
        });
        Kd.Possession = {
            OWN: "own",
            ANY: "any"
        },
        Object.defineProperty(qd, "__esModule", {
            value: !0
        });
        var Jd = Wd;
        qd.Action = Jd.Action;
        var Qd = Kd;
        qd.Possession = Qd.Possession;
        var tu = Object.keys(Jd.Action).map((function(t) {
            return Jd.Action[t]
        }
        ));
        qd.actions = tu;
        var eu = Object.keys(Qd.Possession).map((function(t) {
            return Qd.Possession[t]
        }
        ));
        qd.possessions = eu;
        var nu = {}
          , ru = {
            exports: {}
        };
        typeof self < "u" && self,
        ru.exports = function(t) {
            function e(r) {
                if (n[r])
                    return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, e),
                i.l = !0,
                i.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.d = function(t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            e.n = function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return e.d(n, "a", n),
                n
            }
            ,
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            e.p = "lib/",
            e(e.s = 2)
        }([function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = Object.prototype.toString
              , i = {
                isObject: function(t) {
                    return "[object Object]" === r.call(t)
                },
                isArray: function(t) {
                    return "[object Array]" === r.call(t)
                },
                ensureArray: function(t) {
                    return i.isArray(t) ? t : null == t ? [] : [t]
                },
                hasOwn: function(t, e) {
                    return t && "function" == typeof t.hasOwnProperty && t.hasOwnProperty(e)
                },
                deepCopy: function(t) {
                    if (!i.isObject(t))
                        return t;
                    var e = void 0
                      , n = void 0
                      , r = {};
                    for (e in t)
                        i.hasOwn(t, e) && (n = t[e],
                        r[e] = i.isObject(n) ? i.deepCopy(n) : n);
                    return r
                },
                each: function(t, e, n) {
                    for (var r = t.length, i = -1; ++i < r && !1 !== e.call(n, t[i], i, t); )
                        ;
                },
                eachRight: function(t, e) {
                    for (var n = t.length; n-- && !1 !== e(t[n], n, t); )
                        ;
                },
                pregQuote: function(t, e) {
                    return String(t).replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (e || "") + "-]","g"), "\\$&")
                },
                stringOrArrayOf: function(t, e) {
                    return "string" == typeof t && t === e || i.isArray(t) && 1 === t.length && t[0] === e
                },
                hasSingleItemOf: function(t, e) {
                    return 1 === t.length && (2 !== arguments.length || t[0] === e)
                }
            };
            e.default = i
        }
        , function(t, e, n) {
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    r(this, e);
                    var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.name = n.constructor.name,
                    Object.defineProperty(n, "name", {
                        enumerable: !1,
                        writable: !1,
                        value: "NotationError"
                    }),
                    Object.defineProperty(n, "message", {
                        enumerable: !1,
                        writable: !0,
                        value: t
                    }),
                    Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(n, n.constructor) : Object.defineProperty(n, "stack", {
                        enumerable: !1,
                        writable: !1,
                        value: new Error(t).stack
                    }),
                    n
                }
                return s(e, Error),
                e
            }();
            e.default = o
        }
        , function(t, e, n) {
            var r, i = n(3), s = (r = i) && r.__esModule ? r : {
                default: r
            };
            t.exports = s.default
        }
        , function(t, e, n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }()
              , o = r(n(0))
              , a = r(n(4))
              , l = r(n(1))
              , c = {
                SOURCE: "Invalid source object.",
                DEST: "Invalid destination object.",
                NOTATION: "Invalid notation: ",
                NOTA_OBJ: "Invalid notations object: "
            }
              , d = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (i(this, t),
                    !o.default.isObject(e))
                        throw new l.default(c.SOURCE);
                    this._source = e
                }
                return s(t, [{
                    key: "each",
                    value: function(e) {
                        var n = this
                          , r = this._source
                          , i = Object.keys(r);
                        o.default.each(i, (function(i, s, a) {
                            var l = r[i]
                              , c = void 0;
                            o.default.isObject(l) ? (c = new t(l)).each((function(t, n, s, o) {
                                var a = i + "." + t;
                                e.call(c, a, n, s, r)
                            }
                            )) : e.call(n, i, i, l, r)
                        }
                        ))
                    }
                }, {
                    key: "eachKey",
                    value: function(t) {
                        return this.each(t)
                    }
                }, {
                    key: "eachValue",
                    value: function(e, n) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        var r = this._source;
                        t.eachNote(e, (function(t, e, i, s) {
                            if (r = o.default.hasOwn(r, e) ? r[e] : void 0,
                            !1 === n(r, t, e, i, s))
                                return !1
                        }
                        ))
                    }
                }, {
                    key: "getNotations",
                    value: function() {
                        var t = [];
                        return this.each((function(e, n, r, i) {
                            t.push(e)
                        }
                        )),
                        t
                    }
                }, {
                    key: "flatten",
                    value: function() {
                        var t = {};
                        return this.each((function(e, n, r, i) {
                            t[e] = r
                        }
                        )),
                        this._source = t,
                        this
                    }
                }, {
                    key: "expand",
                    value: function() {
                        return this._source = t.create({}).merge(this._source).value,
                        this
                    }
                }, {
                    key: "aggregate",
                    value: function() {
                        return this.expand()
                    }
                }, {
                    key: "inspect",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        var n = this._source
                          , r = {
                            has: !1,
                            value: void 0
                        };
                        return t.eachNote(e, (function(t, e, i, s) {
                            if (!o.default.hasOwn(n, e))
                                return r = {
                                    has: !1,
                                    value: void 0
                                },
                                !1;
                            n = n[e],
                            r = {
                                has: !0,
                                value: n
                            }
                        }
                        )),
                        r
                    }
                }, {
                    key: "inspectRemove",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        var n = void 0
                          , r = void 0;
                        if (e.indexOf(".") < 0)
                            r = e,
                            n = this._source;
                        else {
                            var i = t.parent(e);
                            r = t.last(e),
                            n = this.inspect(i).value
                        }
                        var s = void 0;
                        return o.default.hasOwn(n, r) ? (s = {
                            has: !0,
                            value: n[r]
                        },
                        delete n[r]) : s = {
                            has: !1,
                            value: void 0
                        },
                        s
                    }
                }, {
                    key: "has",
                    value: function(t) {
                        return this.inspect(t).has
                    }
                }, {
                    key: "hasDefined",
                    value: function(t) {
                        return void 0 !== this.inspect(t).value
                    }
                }, {
                    key: "get",
                    value: function(t, e) {
                        var n = this.inspect(t);
                        return n.has ? n.value : e
                    }
                }, {
                    key: "set",
                    value: function(e, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        var i = this._source
                          , s = void 0;
                        return t.eachNote(e, (function(t, e, a, l) {
                            s = a === l.length - 1,
                            o.default.hasOwn(i, e) ? s ? r && (i[e] = n) : i = i[e] : i = i[e] = s ? n : {}
                        }
                        )),
                        this
                    }
                }, {
                    key: "merge",
                    value: function(t) {
                        var e = this
                          , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (!o.default.isObject(t))
                            throw new l.default(c.NOTA_OBJ + "`" + t + "`");
                        var r = void 0;
                        return o.default.each(Object.keys(t), (function(i, s, o) {
                            r = t[i],
                            e.set(i, r, n)
                        }
                        )),
                        this
                    }
                }, {
                    key: "separate",
                    value: function(e) {
                        var n = this;
                        if (!o.default.isArray(e))
                            throw new l.default(c.NOTA_OBJ + "`" + e + "`");
                        var r = new t({});
                        return o.default.each(e, (function(t, e, i) {
                            var s = n.inspectRemove(t);
                            r.set(t, s.value)
                        }
                        )),
                        this._source = r._source,
                        this
                    }
                }, {
                    key: "filter",
                    value: function(e) {
                        var n = this
                          , r = this.value
                          , i = o.default.deepCopy(r)
                          , s = a.default.normalize(e).concat();
                        if (o.default.stringOrArrayOf(s, "*"))
                            return this._source = i,
                            this;
                        if (0 === arguments.length || o.default.stringOrArrayOf(s, "") || o.default.stringOrArrayOf(s, "!*"))
                            return this._source = {},
                            this;
                        var l = void 0;
                        "*" === s[0] ? (l = new t(i),
                        s.shift()) : l = new t({});
                        var c = void 0
                          , d = void 0
                          , u = void 0;
                        return o.default.each(s, (function(e, i, s) {
                            if (c = new a.default(e),
                            d = ".*" === c.absGlob.slice(-2),
                            (u = d ? c.absGlob.slice(0, -2) : c.absGlob).indexOf("*") < 0)
                                return c.isNegated ? (l.remove(u),
                                d && l.set(u, {}, !0)) : l.copyFrom(r, u, null, !0),
                                !0;
                            n.each((function(e, n, r, i) {
                                t.eachNote(e, (function(t, e, n, i) {
                                    if (c.test(t)) {
                                        if (c.isNegated)
                                            return l.remove(t),
                                            !1;
                                        l.set(t, r, !0)
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        this._source = l.value,
                        this
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        return this.inspectRemove(t),
                        this
                    }
                }, {
                    key: "delete",
                    value: function(t) {
                        return this.remove(t),
                        this
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t(o.default.deepCopy(this.value))
                    }
                }, {
                    key: "copyTo",
                    value: function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                          , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if (!o.default.isObject(e))
                            throw new l.default(c.DEST);
                        var s = this.inspect(n);
                        return s.has && new t(e).set(r || n, s.value, i),
                        this
                    }
                }, {
                    key: "copyFrom",
                    value: function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                          , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if (!o.default.isObject(e))
                            throw new l.default(c.DEST);
                        var s = new t(e).inspect(n);
                        return s.has && this.set(r || n, s.value, i),
                        this
                    }
                }, {
                    key: "moveTo",
                    value: function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                          , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if (!o.default.isObject(e))
                            throw new l.default(c.DEST);
                        var s = this.inspectRemove(n);
                        return s.has && new t(e).set(r || n, s.value, i),
                        this
                    }
                }, {
                    key: "moveFrom",
                    value: function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                          , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if (!o.default.isObject(e))
                            throw new l.default(c.DEST);
                        var s = new t(e).inspectRemove(n);
                        return s.has && this.set(r || n, s.value, i),
                        this
                    }
                }, {
                    key: "rename",
                    value: function(t, e, n) {
                        return e ? this.moveTo(this._source, t, e, n) : this
                    }
                }, {
                    key: "renote",
                    value: function(t, e, n) {
                        return this.rename(t, e, n)
                    }
                }, {
                    key: "extract",
                    value: function(t, e) {
                        var n = {};
                        return this.copyTo(n, t, e),
                        n
                    }
                }, {
                    key: "copyToNew",
                    value: function(t, e) {
                        return this.extract(t, e)
                    }
                }, {
                    key: "extrude",
                    value: function(t, e) {
                        var n = {};
                        return this.moveTo(n, t, e),
                        n
                    }
                }, {
                    key: "moveToNew",
                    value: function(t, e) {
                        return this.extrude(t, e)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._source
                    }
                }], [{
                    key: "create",
                    value: function() {
                        return new t(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }
                }, {
                    key: "isValid",
                    value: function(t) {
                        return "string" == typeof t && /^[^\s.!]+(\.[^\s.!]+)*$/.test(t)
                    }
                }, {
                    key: "countNotes",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        return e.split(".").length
                    }
                }, {
                    key: "countLevels",
                    value: function(e) {
                        return t.countNotes(e)
                    }
                }, {
                    key: "first",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        return e.split(".")[0]
                    }
                }, {
                    key: "last",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        return e.split(".").reverse()[0]
                    }
                }, {
                    key: "parent",
                    value: function(e) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        return e.indexOf(".") >= 0 ? e.replace(/\.[^.]*$/, "") : null
                    }
                }, {
                    key: "eachNote",
                    value: function(e, n) {
                        if (!t.isValid(e))
                            throw new l.default(c.NOTATION + "`" + e + "`");
                        var r = e.split(".")
                          , i = []
                          , s = void 0;
                        o.default.each(r, (function(t, e, o) {
                            if (i.push(t),
                            s = i.join("."),
                            !1 === n(s, t, e, r))
                                return !1
                        }
                        ), t)
                    }
                }, {
                    key: "eachLevel",
                    value: function(e, n) {
                        t.eachNote(e, n)
                    }
                }]),
                t
            }();
            d.Error = l.default,
            d.Glob = a.default,
            e.default = d
        }
        , function(t, e, n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }()
              , o = r(n(0))
              , a = r(n(1))
              , l = function() {
                function t(e) {
                    if (i(this, t),
                    !t.isValid(e))
                        throw new a.default('Invalid notation glob: "' + e + '"');
                    var n = t.inspect(e);
                    this._ = {
                        glob: e,
                        absGlob: n.absGlob,
                        isNegated: n.isNegated,
                        regexp: t.toRegExp(n.absGlob),
                        levels: n.absGlob.split(".")
                    }
                }
                return s(t, [{
                    key: "test",
                    value: function(t) {
                        return "*" === this.absGlob || "" !== this.absGlob && "" !== t && this.regexp.test(t)
                    }
                }, {
                    key: "glob",
                    get: function() {
                        return this._.glob
                    }
                }, {
                    key: "absGlob",
                    get: function() {
                        return this._.absGlob
                    }
                }, {
                    key: "isNegated",
                    get: function() {
                        return this._.isNegated
                    }
                }, {
                    key: "regexp",
                    get: function() {
                        return this._.regexp
                    }
                }, {
                    key: "notes",
                    get: function() {
                        return this._.levels
                    }
                }, {
                    key: "levels",
                    get: function() {
                        return this._.levels
                    }
                }], [{
                    key: "create",
                    value: function(e) {
                        return new t(e)
                    }
                }, {
                    key: "toRegExp",
                    value: function(t) {
                        return 0 === t.indexOf("!") && (t = t.slice(1)),
                        t = o.default.pregQuote(t).replace(/\\\*/g, "[^\\s\\.]*").replace(/\\\?/g, "."),
                        new RegExp("^" + t + "(\\..+|$)")
                    }
                }, {
                    key: "inspect",
                    value: function(t) {
                        var e = "!" === t.slice(0, 1);
                        return {
                            absGlob: t = e ? t.slice(1) : t,
                            isNegated: e
                        }
                    }
                }, {
                    key: "isValid",
                    value: function(t) {
                        return "string" == typeof t && /^(!?([^\s.!*]+|\*)(\.([^\s.!*]+|\*))*)$/.test(t)
                    }
                }, {
                    key: "compare",
                    value: function(t, e) {
                        if (t === e)
                            return 0;
                        var n = t.split(".")
                          , r = e.split(".");
                        if (n.length === r.length) {
                            var i = /(?:^|\.)\*(?:$|\.)/g
                              , s = t.match(i)
                              , o = e.match(i)
                              , a = s ? s.length : 0
                              , l = o ? o.length : 0;
                            if (a === l) {
                                var c = 0 === t.indexOf("!")
                                  , d = 0 === e.indexOf("!");
                                if (c === d)
                                    return t < e ? -1 : 1;
                                var u = c ? t.slice(1) : t
                                  , p = d ? e.slice(1) : e;
                                return u === p ? c ? 1 : -1 : u < p ? -1 : 1
                            }
                            return a > l ? -1 : 1
                        }
                        return n.length < r.length ? -1 : 1
                    }
                }, {
                    key: "sort",
                    value: function(e) {
                        return e.sort(t.compare)
                    }
                }, {
                    key: "normalize",
                    value: function(e) {
                        e = o.default.ensureArray(e).map((function(t) {
                            return t.trim()
                        }
                        )),
                        e = t.sort(e),
                        o.default.eachRight(e, (function(n, r) {
                            var i = t.inspect(n)
                              , s = !1
                              , a = !1
                              , l = !1
                              , c = !0
                              , d = !1
                              , u = !0;
                            o.default.eachRight(e, (function(e, o) {
                                if (o !== r) {
                                    var p = t.inspect(e)
                                      , C = t.toRegExp(p.absGlob);
                                    if (n === e)
                                        return s = !0,
                                        !1;
                                    if (p.isNegated && n === p.absGlob)
                                        return a = !0,
                                        !1;
                                    if (i.isNegated) {
                                        if (p.isNegated && C.test(i.absGlob))
                                            return l = !0,
                                            !1;
                                        c && C.test(i.absGlob) && (c = !1)
                                    } else
                                        !p.isNegated && C.test(i.absGlob) ? d = !0 : u && C.test(i.absGlob) && (u = !1)
                                }
                            }
                            ));
                            var p = i.isNegated ? l || c : d && u;
                            (s || a || p) && e.splice(r, 1)
                        }
                        ));
                        var n = e.indexOf("!*");
                        return n >= 0 && e.splice(n, 1),
                        e
                    }
                }, {
                    key: "union",
                    value: function(e, n) {
                        if (o.default.hasSingleItemOf(e, "*") || o.default.hasSingleItemOf(n, "*"))
                            return ["*"];
                        var r = e.concat()
                          , i = n.concat()
                          , s = void 0
                          , a = void 0
                          , l = void 0
                          , c = void 0
                          , d = [];
                        o.default.eachRight(r, (function(e, n) {
                            l = t.inspect(e),
                            s = t.toRegExp(l.absGlob),
                            o.default.eachRight(i, (function(o, u) {
                                if (c = t.inspect(o),
                                a = t.toRegExp(c.absGlob),
                                l.isNegated && !c.isNegated && (l.absGlob === c.absGlob || a.test(l.absGlob) && -1 === i.indexOf(e) && -1 === d.indexOf(e)))
                                    return r.splice(n, 1),
                                    !1;
                                if (l.isNegated || !c.isNegated || !(l.absGlob === c.absGlob || s.test(c.absGlob) && -1 === r.indexOf(o) && -1 === d.indexOf(o))) {
                                    if (l.isNegated && c.isNegated && e !== o) {
                                        if (a.test(l.absGlob))
                                            return i.splice(u, 1),
                                            void d.push(e);
                                        if (s.test(c.absGlob))
                                            return r.splice(n, 1),
                                            d.push(o),
                                            !1
                                    }
                                    return l.isNegated || c.isNegated || e !== o ? void 0 : (r.splice(n, 1),
                                    !1)
                                }
                                i.splice(u, 1)
                            }
                            ))
                        }
                        ));
                        var u = r.concat(i);
                        return t.normalize(u)
                    }
                }]),
                t
            }();
            e.default = l
        }
        ]);
        var iu, su, ou = ru.exports;
        function au() {
            if (iu)
                return nu;
            iu = 1,
            Object.defineProperty(nu, "__esModule", {
                value: !0
            });
            var t = ou
              , e = qd
              , n = Cu()
              , r = ["*", "!", "$", "$extend"];
            nu.RESERVED_KEYWORDS = r;
            nu.ERR_LOCK = "Cannot alter the underlying grants model. AccessControl instance is locked.";
            var i = {
                type: function(t) {
                    return Object.prototype.toString.call(t).match(/\s(\w+)/i)[1].toLowerCase()
                },
                hasDefined: function(t, e) {
                    return t.hasOwnProperty(e) && void 0 !== t[e]
                },
                toStringArray: function(t) {
                    return Array.isArray(t) ? t : "string" == typeof t ? t.trim().split(/\s*[;,]\s*/) : []
                },
                isFilledStringArray: function(t) {
                    if (!t || !Array.isArray(t))
                        return !1;
                    for (var e = 0, n = t; e < n.length; e++) {
                        var r = n[e];
                        if ("string" != typeof r || "" === r.trim())
                            return !1
                    }
                    return !0
                },
                isEmptyArray: function(t) {
                    return Array.isArray(t) && 0 === t.length
                },
                pushUniq: function(t, e) {
                    return t.indexOf(e) < 0 && t.push(e),
                    t
                },
                uniqConcat: function(t, e) {
                    var n = t.concat();
                    return e.forEach((function(t) {
                        i.pushUniq(n, t)
                    }
                    )),
                    n
                },
                subtractArray: function(t, e) {
                    return t.concat().filter((function(t) {
                        return -1 === e.indexOf(t)
                    }
                    ))
                },
                deepFreeze: function(t) {
                    if ("object" === i.type(t))
                        return Object.getOwnPropertyNames(t).forEach((function(e) {
                            var n = t[e];
                            Array.isArray(n) && Object.freeze(n),
                            "object" === i.type(n) && i.deepFreeze(n)
                        }
                        )),
                        Object.freeze(t)
                },
                each: function(t, e, n) {
                    void 0 === n && (n = null);
                    for (var r = t.length, i = -1; ++i < r && !1 !== e.call(n, t[i], i, t); )
                        ;
                },
                eachKey: function(t, e, n) {
                    void 0 === n && (n = null),
                    i.each(Object.keys(t), e, n)
                },
                eachRole: function(t, e) {
                    i.eachKey(t, (function(n) {
                        return e(t[n], n)
                    }
                    ))
                },
                eachRoleResource: function(t, e) {
                    var n, r;
                    i.eachKey(t, (function(s) {
                        n = t[s],
                        i.eachKey(n, (function(t) {
                            r = s[t],
                            e(s, t, r)
                        }
                        ))
                    }
                    ))
                },
                isInfoFulfilled: function(t) {
                    return i.hasDefined(t, "role") && i.hasDefined(t, "action") && i.hasDefined(t, "resource")
                },
                validName: function(t, e) {
                    if (void 0 === e && (e = !0),
                    "string" != typeof t || "" === t.trim()) {
                        if (!e)
                            return !1;
                        throw new n.AccessControlError("Invalid name, expected a valid string.")
                    }
                    if (r.indexOf(t) >= 0) {
                        if (!e)
                            return !1;
                        throw new n.AccessControlError('Cannot use reserved name: "' + t + '"')
                    }
                    return !0
                },
                hasValidNames: function(t, e) {
                    void 0 === e && (e = !0);
                    var n = !0;
                    return i.each(i.toStringArray(t), (function(t) {
                        return !!i.validName(t, e) || (n = !1,
                        !1)
                    }
                    )),
                    n
                },
                validResourceObject: function(t) {
                    if ("object" !== i.type(t))
                        throw new n.AccessControlError("Invalid resource definition.");
                    return i.eachKey(t, (function(r) {
                        var s = r.split(":");
                        if (-1 === e.actions.indexOf(s[0]))
                            throw new n.AccessControlError('Invalid action: "' + r + '"');
                        if (s[1] && -1 === e.possessions.indexOf(s[1]))
                            throw new n.AccessControlError('Invalid action possession: "' + r + '"');
                        var o = t[r];
                        if (!i.isEmptyArray(o) && !i.isFilledStringArray(o))
                            throw new n.AccessControlError('Invalid resource attributes for action "' + r + '".')
                    }
                    )),
                    !0
                },
                validRoleObject: function(t, e) {
                    var r = t[e];
                    if (!r || "object" !== i.type(r))
                        throw new n.AccessControlError("Invalid role definition.");
                    return i.eachKey(r, (function(s) {
                        if (i.validName(s, !1))
                            i.validResourceObject(r[s]);
                        else {
                            if ("$extend" !== s)
                                throw new n.AccessControlError('Cannot use reserved name "' + s + '" for a resource.');
                            var o = r[s];
                            if (!i.isFilledStringArray(o))
                                throw new n.AccessControlError('Invalid extend value for role "' + e + '": ' + JSON.stringify(o));
                            i.extendRole(t, e, o)
                        }
                    }
                    )),
                    !0
                },
                getInspectedGrants: function(t) {
                    var e = {}
                      , r = i.type(t);
                    if ("object" === r)
                        i.eachKey(t, (function(e) {
                            return !!i.validName(e) && i.validRoleObject(t, e)
                        }
                        )),
                        e = t;
                    else {
                        if ("array" !== r)
                            throw new n.AccessControlError("Invalid grants object. Expected an array or object.");
                        t.forEach((function(t) {
                            return i.commitToGrants(e, t, !0)
                        }
                        ))
                    }
                    return e
                },
                getResources: function(t) {
                    var e = {};
                    return i.eachRoleResource(t, (function(t, n, r) {
                        e[n] = null
                    }
                    )),
                    Object.keys(e)
                },
                normalizeActionPossession: function(t, r) {
                    if (void 0 === r && (r = !1),
                    "string" != typeof t.action)
                        throw new n.AccessControlError("Invalid action: " + JSON.stringify(t));
                    var i = t.action.split(":");
                    if (e.actions.indexOf(i[0].trim().toLowerCase()) < 0)
                        throw new n.AccessControlError("Invalid action: " + i[0]);
                    t.action = i[0].trim().toLowerCase();
                    var s = t.possession || i[1];
                    if (s) {
                        if (e.possessions.indexOf(s.trim().toLowerCase()) < 0)
                            throw new n.AccessControlError("Invalid action possession: " + s);
                        t.possession = s.trim().toLowerCase()
                    } else
                        t.possession = e.Possession.ANY;
                    return r ? t.action + ":" + t.possession : t
                },
                normalizeQueryInfo: function(t) {
                    if ("object" !== i.type(t))
                        throw new n.AccessControlError("Invalid IQueryInfo: " + typeof t);
                    if ((t = Object.assign({}, t)).role = i.toStringArray(t.role),
                    !i.isFilledStringArray(t.role))
                        throw new n.AccessControlError("Invalid role(s): " + JSON.stringify(t.role));
                    if ("string" != typeof t.resource || "" === t.resource.trim())
                        throw new n.AccessControlError('Invalid resource: "' + t.resource + '"');
                    return t.resource = t.resource.trim(),
                    t = i.normalizeActionPossession(t)
                },
                normalizeAccessInfo: function(t, e) {
                    if (void 0 === e && (e = !1),
                    "object" !== i.type(t))
                        throw new n.AccessControlError("Invalid IAccessInfo: " + typeof t);
                    if ((t = Object.assign({}, t)).role = i.toStringArray(t.role),
                    0 === t.role.length || !i.isFilledStringArray(t.role))
                        throw new n.AccessControlError("Invalid role(s): " + JSON.stringify(t.role));
                    if (t.resource = i.toStringArray(t.resource),
                    0 === t.resource.length || !i.isFilledStringArray(t.resource))
                        throw new n.AccessControlError("Invalid resource(s): " + JSON.stringify(t.resource));
                    return t.denied || Array.isArray(t.attributes) && 0 === t.attributes.length ? t.attributes = [] : t.attributes = t.attributes ? i.toStringArray(t.attributes) : ["*"],
                    e && (t = i.normalizeActionPossession(t)),
                    t
                },
                resetAttributes: function(t) {
                    return t.denied ? (t.attributes = [],
                    t) : ((!t.attributes || i.isEmptyArray(t.attributes)) && (t.attributes = ["*"]),
                    t)
                },
                getRoleHierarchyOf: function(t, e, r) {
                    var s = t[e];
                    if (!s)
                        throw new n.AccessControlError('Role not found: "' + e + '"');
                    var o = [e];
                    return !Array.isArray(s.$extend) || 0 === s.$extend.length || s.$extend.forEach((function(s) {
                        if (!t[s])
                            throw new n.AccessControlError('Role not found: "' + t[s] + '"');
                        if (s === e)
                            throw new n.AccessControlError('Cannot extend role "' + e + '" by itself.');
                        if (r && r === s)
                            throw new n.AccessControlError('Cross inheritance is not allowed. Role "' + s + '" already extends "' + r + '".');
                        var a = i.getRoleHierarchyOf(t, s, r || e);
                        o = i.uniqConcat(o, a)
                    }
                    )),
                    o
                },
                getFlatRoles: function(t, e) {
                    var r = i.toStringArray(e);
                    if (0 === r.length)
                        throw new n.AccessControlError("Invalid role(s): " + JSON.stringify(e));
                    var s = i.uniqConcat([], r);
                    return r.forEach((function(e) {
                        s = i.uniqConcat(s, i.getRoleHierarchyOf(t, e))
                    }
                    )),
                    s
                },
                getNonExistentRoles: function(t, e) {
                    var n = [];
                    if (i.isEmptyArray(e))
                        return n;
                    for (var r = 0, s = e; r < s.length; r++) {
                        var o = s[r];
                        t.hasOwnProperty(o) || n.push(o)
                    }
                    return n
                },
                getCrossExtendingRole: function(t, e, n) {
                    var r = i.toStringArray(n)
                      , s = null;
                    return i.each(r, (function(n) {
                        if (s || e === n)
                            return !1;
                        var r = i.getRoleHierarchyOf(t, n);
                        return i.each(r, (function(t) {
                            return t !== e || (s = n,
                            !1)
                        }
                        )),
                        !0
                    }
                    )),
                    s
                },
                extendRole: function(t, e, r) {
                    if (0 === (e = i.toStringArray(e)).length)
                        throw new n.AccessControlError("Invalid role(s): " + JSON.stringify(e));
                    if (!i.isEmptyArray(r)) {
                        var s = i.toStringArray(r).concat();
                        if (0 === s.length)
                            throw new n.AccessControlError("Cannot inherit invalid role(s): " + JSON.stringify(r));
                        var o = i.getNonExistentRoles(t, s);
                        if (o.length > 0)
                            throw new n.AccessControlError('Cannot inherit non-existent role(s): "' + o.join(", ") + '"');
                        e.forEach((function(e) {
                            if (!t[e])
                                throw new n.AccessControlError('Role not found: "' + e + '"');
                            if (s.indexOf(e) >= 0)
                                throw new n.AccessControlError('Cannot extend role "' + e + '" by itself.');
                            var r = i.getCrossExtendingRole(t, e, s);
                            if (r)
                                throw new n.AccessControlError('Cross inheritance is not allowed. Role "' + r + '" already extends "' + e + '".');
                            i.validName(e);
                            var o = t[e];
                            Array.isArray(o.$extend) ? o.$extend = i.uniqConcat(o.$extend, s) : o.$extend = s
                        }
                        ))
                    }
                },
                preCreateRoles: function(t, e) {
                    if ("string" == typeof e && (e = i.toStringArray(e)),
                    !Array.isArray(e) || 0 === e.length)
                        throw new n.AccessControlError("Invalid role(s): " + JSON.stringify(e));
                    e.forEach((function(e) {
                        i.validName(e) && !t.hasOwnProperty(e) && (t[e] = {})
                    }
                    ))
                },
                commitToGrants: function(t, e, n) {
                    void 0 === n && (n = !1),
                    (e = i.normalizeAccessInfo(e, n)).role.forEach((function(n) {
                        i.validName(n) && !t.hasOwnProperty(n) && (t[n] = {});
                        var r = t[n]
                          , s = e.action + ":" + e.possession;
                        e.resource.forEach((function(t) {
                            i.validName(t) && !r.hasOwnProperty(t) && (r[t] = {}),
                            r[t][s] = i.toStringArray(e.attributes)
                        }
                        ))
                    }
                    ))
                },
                getUnionAttrsOfRoles: function(e, n) {
                    n = i.normalizeQueryInfo(n);
                    var r, s, o = [];
                    i.getFlatRoles(e, n.role).forEach((function(t, i) {
                        r = e[t],
                        (s = r[n.resource]) && o.push((s[n.action + ":" + n.possession] || s[n.action + ":any"] || []).concat())
                    }
                    ));
                    var a = []
                      , l = o.length;
                    if (l > 0) {
                        a = o[0];
                        for (var c = 1; c < l; )
                            a = t.Glob.union(a, o[c]),
                            c++
                    }
                    return a
                },
                lockAC: function(t) {
                    var e = t;
                    if (!e._grants || 0 === Object.keys(e._grants).length)
                        throw new n.AccessControlError("Cannot lock empty or invalid grants model.");
                    var r = t.isLocked && Object.isFrozen(e._grants);
                    if (r || (r = !!i.deepFreeze(e._grants)),
                    !r)
                        throw new n.AccessControlError("Could not lock grants: " + typeof e._grants);
                    e._isLocked = r
                },
                filter: function(e, n) {
                    return Array.isArray(n) && 0 !== n.length ? new t(e).filter(n).value : {}
                },
                filterAll: function(t, e) {
                    return Array.isArray(t) ? t.map((function(t) {
                        return i.filter(t, e)
                    }
                    )) : i.filter(t, e)
                }
            };
            return nu.utils = i,
            nu
        }
        var lu, cu = {};
        var du, uu, pu = {};
        function Cu() {
            return uu || (uu = 1,
            function(t) {
                function e(e) {
                    for (var n in e)
                        t.hasOwnProperty(n) || (t[n] = e[n])
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                e(zd),
                e(function() {
                    if (su)
                        return Xd;
                    su = 1,
                    Object.defineProperty(Xd, "__esModule", {
                        value: !0
                    });
                    var t = Cu()
                      , e = qd
                      , n = au()
                      , r = function() {
                        function r(e, r, i) {
                            if (void 0 === i && (i = !1),
                            this._ = {},
                            this._ac = e,
                            this._grants = e._grants,
                            this._.denied = i,
                            "string" == typeof r || Array.isArray(r))
                                this.role(r);
                            else if ("object" === n.utils.type(r)) {
                                if (0 === Object.keys(r).length)
                                    throw new t.AccessControlError("Invalid IAccessInfo: {}");
                                r.denied = i,
                                this._ = n.utils.resetAttributes(r),
                                n.utils.isInfoFulfilled(this._) && n.utils.commitToGrants(this._grants, this._, !0)
                            } else if (void 0 !== r)
                                throw new t.AccessControlError("Invalid role(s), expected a valid string, string[] or IAccessInfo.")
                        }
                        return Object.defineProperty(r.prototype, "denied", {
                            get: function() {
                                return this._.denied
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                        r.prototype.role = function(t) {
                            return n.utils.preCreateRoles(this._grants, t),
                            this._.role = t,
                            this
                        }
                        ,
                        r.prototype.resource = function(t) {
                            return n.utils.hasValidNames(t, !0),
                            this._.resource = t,
                            this
                        }
                        ,
                        r.prototype.attributes = function(t) {
                            return this._.attributes = t,
                            this
                        }
                        ,
                        r.prototype.extend = function(t) {
                            return n.utils.extendRole(this._grants, this._.role, t),
                            this
                        }
                        ,
                        r.prototype.inherit = function(t) {
                            return this.extend(t),
                            this
                        }
                        ,
                        r.prototype.grant = function(t) {
                            return new r(this._ac,t,!1).attributes(["*"])
                        }
                        ,
                        r.prototype.deny = function(t) {
                            return new r(this._ac,t,!0).attributes([])
                        }
                        ,
                        r.prototype.lock = function() {
                            return n.utils.lockAC(this._ac),
                            this
                        }
                        ,
                        r.prototype.createOwn = function(t, n) {
                            return this._prepareAndCommit(e.Action.CREATE, e.Possession.OWN, t, n)
                        }
                        ,
                        r.prototype.createAny = function(t, n) {
                            return this._prepareAndCommit(e.Action.CREATE, e.Possession.ANY, t, n)
                        }
                        ,
                        r.prototype.create = function(t, e) {
                            return this.createAny(t, e)
                        }
                        ,
                        r.prototype.readOwn = function(t, n) {
                            return this._prepareAndCommit(e.Action.READ, e.Possession.OWN, t, n)
                        }
                        ,
                        r.prototype.readAny = function(t, n) {
                            return this._prepareAndCommit(e.Action.READ, e.Possession.ANY, t, n)
                        }
                        ,
                        r.prototype.read = function(t, e) {
                            return this.readAny(t, e)
                        }
                        ,
                        r.prototype.updateOwn = function(t, n) {
                            return this._prepareAndCommit(e.Action.UPDATE, e.Possession.OWN, t, n)
                        }
                        ,
                        r.prototype.updateAny = function(t, n) {
                            return this._prepareAndCommit(e.Action.UPDATE, e.Possession.ANY, t, n)
                        }
                        ,
                        r.prototype.update = function(t, e) {
                            return this.updateAny(t, e)
                        }
                        ,
                        r.prototype.deleteOwn = function(t, n) {
                            return this._prepareAndCommit(e.Action.DELETE, e.Possession.OWN, t, n)
                        }
                        ,
                        r.prototype.deleteAny = function(t, n) {
                            return this._prepareAndCommit(e.Action.DELETE, e.Possession.ANY, t, n)
                        }
                        ,
                        r.prototype.delete = function(t, e) {
                            return this.deleteAny(t, e)
                        }
                        ,
                        r.prototype._prepareAndCommit = function(t, e, r, i) {
                            return this._.action = t,
                            this._.possession = e,
                            r && (this._.resource = r),
                            this._.denied ? this._.attributes = [] : this._.attributes = i ? n.utils.toStringArray(i) : ["*"],
                            n.utils.commitToGrants(this._grants, this._, !1),
                            this._.attributes = void 0,
                            this
                        }
                        ,
                        r
                    }();
                    return Xd.Access = r,
                    Xd
                }()),
                e(function() {
                    if (lu)
                        return cu;
                    lu = 1,
                    Object.defineProperty(cu, "__esModule", {
                        value: !0
                    });
                    var t = Cu()
                      , e = qd
                      , n = au()
                      , r = function() {
                        function r(e, r) {
                            if (this._ = {},
                            this._grants = e,
                            "string" == typeof r || Array.isArray(r))
                                this.role(r);
                            else if ("object" === n.utils.type(r)) {
                                if (0 === Object.keys(r).length)
                                    throw new t.AccessControlError("Invalid IQueryInfo: {}");
                                this._ = r
                            } else if (void 0 !== r)
                                throw new t.AccessControlError("Invalid role(s), expected a valid string, string[] or IQueryInfo.")
                        }
                        return r.prototype.role = function(t) {
                            return this._.role = t,
                            this
                        }
                        ,
                        r.prototype.resource = function(t) {
                            return this._.resource = t,
                            this
                        }
                        ,
                        r.prototype.createOwn = function(t) {
                            return this._getPermission(e.Action.CREATE, e.Possession.OWN, t)
                        }
                        ,
                        r.prototype.createAny = function(t) {
                            return this._getPermission(e.Action.CREATE, e.Possession.ANY, t)
                        }
                        ,
                        r.prototype.create = function(t) {
                            return this.createAny(t)
                        }
                        ,
                        r.prototype.readOwn = function(t) {
                            return this._getPermission(e.Action.READ, e.Possession.OWN, t)
                        }
                        ,
                        r.prototype.readAny = function(t) {
                            return this._getPermission(e.Action.READ, e.Possession.ANY, t)
                        }
                        ,
                        r.prototype.read = function(t) {
                            return this.readAny(t)
                        }
                        ,
                        r.prototype.updateOwn = function(t) {
                            return this._getPermission(e.Action.UPDATE, e.Possession.OWN, t)
                        }
                        ,
                        r.prototype.updateAny = function(t) {
                            return this._getPermission(e.Action.UPDATE, e.Possession.ANY, t)
                        }
                        ,
                        r.prototype.update = function(t) {
                            return this.updateAny(t)
                        }
                        ,
                        r.prototype.deleteOwn = function(t) {
                            return this._getPermission(e.Action.DELETE, e.Possession.OWN, t)
                        }
                        ,
                        r.prototype.deleteAny = function(t) {
                            return this._getPermission(e.Action.DELETE, e.Possession.ANY, t)
                        }
                        ,
                        r.prototype.delete = function(t) {
                            return this.deleteAny(t)
                        }
                        ,
                        r.prototype._getPermission = function(e, n, r) {
                            return this._.action = e,
                            this._.possession = n,
                            r && (this._.resource = r),
                            new t.Permission(this._grants,this._)
                        }
                        ,
                        r
                    }();
                    return cu.Query = r,
                    cu
                }()),
                e(function() {
                    if (du)
                        return pu;
                    du = 1,
                    Object.defineProperty(pu, "__esModule", {
                        value: !0
                    });
                    var t = au()
                      , e = function() {
                        function e(e, n) {
                            this._ = {},
                            this._.attributes = t.utils.getUnionAttrsOfRoles(e, n),
                            this._.role = n.role,
                            this._.resource = n.resource
                        }
                        return Object.defineProperty(e.prototype, "roles", {
                            get: function() {
                                return this._.role
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "resource", {
                            get: function() {
                                return this._.resource
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "attributes", {
                            get: function() {
                                return this._.attributes
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "granted", {
                            get: function() {
                                return !(!this.attributes || 0 === this.attributes.length) && this.attributes.some((function(t) {
                                    return "!" !== t.trim().slice(0, 1)
                                }
                                ))
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                        e.prototype.filter = function(e) {
                            return t.utils.filterAll(e, this.attributes)
                        }
                        ,
                        e
                    }();
                    return pu.Permission = e,
                    pu
                }())
            }(Dd)),
            Dd
        }
        Object.defineProperty(Ud, "__esModule", {
            value: !0
        });
        var fu = Cu()
          , hu = qd
          , mu = au()
          , gu = function() {
            function t(t) {
                this._isLocked = !1,
                0 === arguments.length && (t = {}),
                this.setGrants(t)
            }
            return Object.defineProperty(t.prototype, "isLocked", {
                get: function() {
                    return this._isLocked && Object.isFrozen(this._grants)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getGrants = function() {
                return this._grants
            }
            ,
            t.prototype.setGrants = function(t) {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                return this._grants = mu.utils.getInspectedGrants(t),
                this
            }
            ,
            t.prototype.reset = function() {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                return this._grants = {},
                this
            }
            ,
            t.prototype.lock = function() {
                return mu.utils.lockAC(this),
                this
            }
            ,
            t.prototype.extendRole = function(t, e) {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                return mu.utils.extendRole(this._grants, t, e),
                this
            }
            ,
            t.prototype.removeRoles = function(t) {
                var e = this;
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                var n = mu.utils.toStringArray(t);
                if (0 === n.length || !mu.utils.isFilledStringArray(n))
                    throw new fu.AccessControlError("Invalid role(s): " + JSON.stringify(t));
                return n.forEach((function(t) {
                    if (!e._grants[t])
                        throw new fu.AccessControlError('Cannot remove a non-existing role: "' + t + '"');
                    delete e._grants[t]
                }
                )),
                mu.utils.eachRole(this._grants, (function(t, e) {
                    Array.isArray(t.$extend) && (t.$extend = mu.utils.subtractArray(t.$extend, n))
                }
                )),
                this
            }
            ,
            t.prototype.removeResources = function(t, e) {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                return this._removePermission(t, e),
                this
            }
            ,
            t.prototype.getRoles = function() {
                return Object.keys(this._grants)
            }
            ,
            t.prototype.getInheritedRolesOf = function(t) {
                var e = mu.utils.getRoleHierarchyOf(this._grants, t);
                return e.shift(),
                e
            }
            ,
            t.prototype.getExtendedRolesOf = function(t) {
                return this.getInheritedRolesOf(t)
            }
            ,
            t.prototype.getResources = function() {
                return mu.utils.getResources(this._grants)
            }
            ,
            t.prototype.hasRole = function(t) {
                var e = this;
                return Array.isArray(t) ? t.every((function(t) {
                    return e._grants.hasOwnProperty(t)
                }
                )) : this._grants.hasOwnProperty(t)
            }
            ,
            t.prototype.hasResource = function(t) {
                var e = this.getResources();
                return Array.isArray(t) ? t.every((function(t) {
                    return e.indexOf(t) >= 0
                }
                )) : "string" == typeof t && "" !== t && e.indexOf(t) >= 0
            }
            ,
            t.prototype.can = function(t) {
                if (0 !== arguments.length && void 0 === t)
                    throw new fu.AccessControlError("Invalid role(s): undefined");
                return new fu.Query(this._grants,t)
            }
            ,
            t.prototype.query = function(t) {
                return this.can(t)
            }
            ,
            t.prototype.permission = function(t) {
                return new fu.Permission(this._grants,t)
            }
            ,
            t.prototype.grant = function(t) {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                if (0 !== arguments.length && void 0 === t)
                    throw new fu.AccessControlError("Invalid role(s): undefined");
                return new fu.Access(this,t,!1)
            }
            ,
            t.prototype.allow = function(t) {
                return this.grant(t)
            }
            ,
            t.prototype.deny = function(t) {
                if (this.isLocked)
                    throw new fu.AccessControlError(mu.ERR_LOCK);
                if (0 !== arguments.length && void 0 === t)
                    throw new fu.AccessControlError("Invalid role(s): undefined");
                return new fu.Access(this,t,!0)
            }
            ,
            t.prototype.reject = function(t) {
                return this.deny(t)
            }
            ,
            t.prototype._removePermission = function(t, e, n) {
                var r = this;
                if (0 === (t = mu.utils.toStringArray(t)).length || !mu.utils.isFilledStringArray(t))
                    throw new fu.AccessControlError("Invalid resource(s): " + JSON.stringify(t));
                if (void 0 !== e && (0 === (e = mu.utils.toStringArray(e)).length || !mu.utils.isFilledStringArray(e)))
                    throw new fu.AccessControlError("Invalid role(s): " + JSON.stringify(e));
                mu.utils.eachRoleResource(this._grants, (function(i, s, o) {
                    if (t.indexOf(s) >= 0 && (!e || e.indexOf(i) >= 0))
                        if (n) {
                            var a = mu.utils.normalizeActionPossession({
                                action: n
                            }, !0);
                            delete r._grants[i][s][a]
                        } else
                            delete r._grants[i][s]
                }
                ))
            }
            ,
            Object.defineProperty(t, "Action", {
                get: function() {
                    return hu.Action
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "Possession", {
                get: function() {
                    return hu.Possession
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "Error", {
                get: function() {
                    return fu.AccessControlError
                },
                enumerable: !0,
                configurable: !0
            }),
            t.filter = function(t, e) {
                return mu.utils.filterAll(t, e)
            }
            ,
            t.isACError = function(t) {
                return t instanceof fu.AccessControlError
            }
            ,
            t.isAccessControlError = function(e) {
                return t.isACError(e)
            }
            ,
            t
        }();
        Ud.AccessControl = gu,
        function(t) {
            function e(e) {
                for (var n in e)
                    t.hasOwnProperty(n) || (t[n] = e[n])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            e(Ud),
            e(Cu())
        }(Fd);
        var vu = Fd.AccessControl;
        Bd.exports = vu;
        var yu = Bd.exports.AccessControl = vu;
        const {EXPORT_JSON: wu, SITE_LIMITS: Lu} = Pd
          , {publicApi: bu, owner: xu, admin: ju, editor: Mu, author: Eu, sysAdmin: Nu, developer: ku, superUser: _u, subscriber: Su, sysReviewer: Au} = Vd
          , {TAG: Tu, SITE: Zu, POST: Iu, PAGE: Ou, TOPIC: $u, API_KEY: Vu, SITEMAP: Ru, LICENSE: Pu, PAYMENT: Hu, CATEGORY: Bu, USER_META: Fu, CAMPAIGN: Uu, RE_INDEX: Du, All_SITES: zu, MEMBERSHIP: Gu, PUBLIC_API: Yu, CUSTOM_ROLE: Xu, URL_REDIRECT: qu, WEBHOOK_URL: Wu, ACTIVITY_LOG: Ku, PRESIGNED_URL: Ju, MEDIA_LIBRARY: Qu, AGENCY_CONFIG: tp, CLIENT_BILLING: ep} = Rd
          , np = new yu
          , rp = Object.values(Rd);
        np.grant(Eu).create([Iu, $u, Ju, Qu]).read([Iu, $u, Bu, Tu, Ju, Qu, Zu]).update([Iu, $u, Qu]).grant(Mu).extend(Eu).create([Bu, Tu]).read([Ou]).update([Bu, Tu]).delete([Iu, $u, Bu, Tu, Qu]).grant(ku).extend(Mu).create([Ou]).read([Vu, Uu]).update([Zu, Ou, Uu]).delete([Ou]).grant(ju).extend(Mu).create([Ou, Gu, Fu, qu, Vu, Ru, Uu, Xu, Wu, Yu]).read([Ou, Gu, Fu, qu, Vu, Uu, Xu, Wu, Yu]).update([Zu, Ou, Pu, Hu, Gu, Fu, qu, Vu, Uu, Xu, tp, Wu, Yu]).delete([Ou, Gu, Fu, $u, qu, Vu, Uu, Xu, Wu, Yu]).grant(xu).extend(ju).create([Zu, ep, Yu]).read([ep, Yu, Ku]).update([ep]).delete([Zu, ep, Yu, Ku]).grant(_u).extend(xu),
        np.grant(bu).create([$u]).read([$u]).update([$u]).delete([$u]),
        np.grant(Su).read([Fu, Gu]).update([Gu]),
        np.grant(Nu).create([...rp, wu]).read(rp).update([...rp, Lu]).delete(rp),
        np.grant(Au).create([Tu, Iu, Zu, Ou, $u, Pu, Ru, Hu, Vu, Bu, Uu, Du, zu, Fu, Gu, Yu, Xu, wu, Wu, qu, Ju, Qu, tp, ep]).read(rp).update([Tu, Zu, Iu, Ou, $u, Pu, Hu, Vu, Ru, Bu, Uu, Du, Fu, zu, Yu, Gu, Xu, Lu, wu, Wu, qu, Qu, Ju, tp, ep]).deleteOwn([Tu, Zu, Iu, Ou, $u, Vu, Ru, Bu, Uu, Du, Fu, Gu, Yu, Xu, Wu, qu, Ku, Ju, tp, Qu, ep]);
        const ip = {
            billingType: {
                MONTHLY: "MONTHLY",
                YEARLY: "YEARLY",
                FOREVER: "FOREVER",
                TWO_YEARLY: "TWO_YEARLY"
            },
            siteTypes: {
                STATIC: "STATIC",
                AGENCY: "AGENCY"
            },
            product: {
                STARTER: "STARTER",
                PERSONAL: "PERSONAL",
                AGENCY: "AGENCY",
                FREE: "FREE",
                BUSINESS: "BUSINESS",
                PREMIUM: "PREMIUM",
                AGENCY_PLUS: "AGENCY_PLUS"
            },
            planType: {
                REGULAR: "REGULAR",
                AGENCY: "AGENCY"
            },
            plan: {
                CMS: "CMS",
                FREE: "FREE",
                PLAN_1: "PLAN_1",
                PLAN_2: "PLAN_2",
                PLAN_3: "PLAN_3",
                STARTER_25: "STARTER_25",
                PREMIUM_10: "PREMIUM_10",
                PREMIUM_25: "PREMIUM_25",
                PREMIUM_100: "PREMIUM_100",
                STARTER: "STARTER",
                PERSONAL: "PERSONAL",
                PERSONAL_MONTHLY: "PERSONAL_MONTHLY",
                BUSINESS: "BUSINESS",
                BUSINESS_3: "BUSINESS_3",
                BUSINESS_10: "BUSINESS_10",
                BUSINESS_MONTHLY: "BUSINESS_MONTHLY",
                BUSINESS_MONTHLY_10: "BUSINESS_MONTHLY_10",
                AGENCY: "AGENCY",
                AGENCY_25: "AGENCY_25",
                AGENCY_100: "AGENCY_100",
                AGENCY_250: "AGENCY_250",
                AGENCY_PLUS: "AGENCY_PLUS",
                AGENCY_MONTHLY_25: "AGENCY_MONTHLY_25",
                AGENCY_MONTHLY_100: "AGENCY_MONTHLY_100",
                AGENCY_MONTHLY_250: "AGENCY_MONTHLY_250",
                LTD_AGENCY_NCF: "LTD_AGENCY_NCF",
                LTD_AGENCY_PRIME: "LTD_AGENCY_PRIME"
            }
        }
          , {billingType: sp, product: op, planType: ap, plan: lp} = ip
          , {YEARLY: cp, MONTHLY: dp, TWO_YEARLY: up, FOREVER: pp} = sp
          , Cp = {};
        Cp[lp.FREE] = {
            price: 0,
            planId: 0,
            provider: "",
            billingType: "",
            displayName: "Free",
            planKey: lp.FREE,
            planType: ap.REGULAR,
            productType: op.FREE,
            limits: {
                domain: 0
            }
        },
        Cp[lp.PERSONAL_MONTHLY] = {
            limits: {
                domain: 1
            },
            price: {
                [dp]: {
                    IN: {
                        original: 1199,
                        discount: 5.6,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 29,
                        discount: 5.6,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            billingType: dp,
            discountPrice: {
                [dp]: 5.6
            },
            discountAllowed: !1,
            coupon: "BLF30",
            discountRatio: .3,
            planKey: lp.PERSONAL_MONTHLY,
            planType: ap.REGULAR,
            productType: op.PERSONAL,
            displayName: "Personal (1 Domain) - Monthly"
        },
        Cp[lp.PERSONAL] = {
            price: {
                [cp]: {
                    IN: {
                        original: 8999,
                        discount: 33.6,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 216,
                        discount: 33.6,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                },
                [pp]: {
                    DEFAULT: {
                        original: 249,
                        domain: 199,
                        discount: 33.6,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            limits: {
                domain: 1
            },
            coupon: "BLF30",
            billingType: cp,
            displayName: "Personal (1 Domain) - Yearly",
            ltdDisplayName: "Personal (LTD)",
            planKey: lp.PERSONAL,
            planType: ap.REGULAR,
            productType: op.PERSONAL
        },
        Cp[lp.PLAN_1] = {
            price: 36,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Starter ( 25 Domains )",
            planKey: lp.PLAN_1,
            planType: ap.REGULAR,
            productType: op.STARTER,
            limits: {
                domain: 25
            }
        },
        Cp[lp.PLAN_2] = {
            price: 50,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Premium (25 Domains)",
            planKey: lp.PLAN_2,
            planType: ap.REGULAR,
            productType: ip.product.PREMIUM,
            limits: {
                domain: 25
            }
        },
        Cp[lp.PLAN_3] = {
            provider: "PADDLE",
            billingType: sp.FOREVER,
            displayName: "Lifetime",
            planKey: ip.plan.PLAN_3,
            planType: ap.REGULAR,
            productType: ip.product.PREMIUM,
            price: {
                [pp]: {
                    DEFAULT: {
                        domain: 149,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            limits: {
                domain: 3
            }
        },
        Cp[lp.LTD_AGENCY_PRIME] = {
            displayName: "DORIK CMS - PRIME LTD",
            billingType: sp.FOREVER,
            planType: ap.AGENCY,
            planKey: lp.LTD_AGENCY_PRIME,
            productType: op.AGENCY,
            price: {
                [pp]: {
                    DEFAULT: {
                        domain: 149,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            limits: {
                pageViews: 1e5,
                staffLimit: 1e3,
                category: 1e3,
                tag: 1e3,
                post: 1e3,
                members: 5e4,
                teamMembers: 1e3
            }
        },
        Cp[lp.LTD_AGENCY_NCF] = {
            displayName: "DORIK CMS - NoCodeFrance",
            billingType: sp.FOREVER,
            planType: ap.AGENCY,
            planKey: lp.LTD_AGENCY_NCF,
            productType: op.AGENCY,
            price: {
                [pp]: {
                    DEFAULT: {
                        domain: 149,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            limits: {
                pageViews: 1e5,
                staffLimit: 1e3,
                category: 1e3,
                tag: 1e3,
                post: 1e3,
                members: 5e4,
                teamMembers: 1e3
            }
        },
        Cp[lp.STARTER_25] = {
            price: 79,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Starter  (25 Domains)",
            planKey: lp.STARTER_25,
            planType: ap.REGULAR,
            productType: op.STARTER,
            limits: {
                domain: 25
            }
        },
        Cp[lp.PREMIUM_10] = {
            price: 79,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Premium 10",
            planKey: lp.PREMIUM_10,
            planType: ap.REGULAR,
            productType: op.PREMIUM,
            limits: {
                domain: 100
            }
        },
        Cp[lp.PREMIUM_25] = {
            price: 79,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Premium 25",
            planKey: lp.PREMIUM_25,
            planType: ap.REGULAR,
            productType: op.PREMIUM,
            limits: {
                domain: 100
            }
        },
        Cp[lp.PREMIUM_100] = {
            price: 199,
            provider: "PADDLE",
            billingType: "YEARLY",
            displayName: "Premium",
            planKey: lp.PREMIUM_100,
            planType: ap.REGULAR,
            productType: op.PREMIUM,
            limits: {
                domain: 100
            }
        },
        Cp[lp.BUSINESS_MONTHLY] = {
            provider: "PADDLE",
            billingType: dp,
            displayName: "Business (3 Domains) - Monthly",
            planKey: lp.BUSINESS_MONTHLY,
            price: {
                [dp]: {
                    IN: {
                        original: 2399,
                        discount: 13.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 59,
                        discount: 13.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            coupon: "BLF30",
            discountRatio: .3,
            planType: ap.REGULAR,
            productType: op.BUSINESS,
            limits: {
                domain: 3
            }
        },
        Cp[lp.BUSINESS_3] = {
            price: {
                [cp]: {
                    IN: {
                        original: 19188,
                        discount: 90.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 468,
                        discount: 90.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                },
                [pp]: {
                    DEFAULT: {
                        original: 599,
                        domain: 149,
                        discount: 90.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            coupon: "BLF30",
            discountRatio: .3,
            billingType: cp,
            planKey: lp.BUSINESS_3,
            planType: ap.REGULAR,
            displayName: "Business (3 Domains) - Yearly",
            ltdDisplayName: "Business (LTD)",
            productType: op.BUSINESS,
            limits: {
                domain: 3
            }
        },
        Cp[lp.BUSINESS_10] = {
            price: {
                [cp]: {
                    IN: {
                        original: 59988,
                        discount: 13.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 1428,
                        discount: 244.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            coupon: "BLF30",
            discountRatio: .3,
            billingType: cp,
            displayName: "Business (10 Domains) - Yearly",
            planKey: lp.BUSINESS_10,
            planType: ap.REGULAR,
            productType: op.BUSINESS,
            limits: {
                domain: 10
            }
        },
        Cp[lp.BUSINESS_MONTHLY_10] = {
            price: {
                [dp]: {
                    IN: {
                        original: 6599,
                        discount: 13.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        currency: "INR",
                        currencySign: "\u20b9"
                    },
                    DEFAULT: {
                        original: 159,
                        discount: 34.3,
                        discountAllowed: !1,
                        discountRatio: .3,
                        coupon: "BLF30",
                        currency: "USD",
                        currencySign: "$"
                    }
                }
            },
            coupon: "BLF30",
            discountRatio: .3,
            billingType: dp,
            displayName: "Business (10 Domains) - Monthly",
            planKey: lp.BUSINESS_MONTHLY_10,
            planType: ap.REGULAR,
            productType: op.BUSINESS,
            limits: {
                domain: 10
            }
        },
        Cp[lp.AGENCY_25] = {
            billingType: cp,
            displayName: "Agency (25 Domains)",
            planKey: lp.AGENCY_25,
            planType: ap.AGENCY,
            productType: op.AGENCY,
            discountAllowed: !0,
            coupon: "BLF30",
            price: {
                [cp]: 2868,
                [up]: 699
            },
            discountPrice: {
                [cp]: 314.3,
                [up]: 489.3
            },
            discountRatio: .3,
            limits: {
                domain: 25
            }
        },
        Cp[lp.AGENCY_100] = {
            billingType: cp,
            displayName: "Agency (100 Domains)",
            planType: ap.AGENCY,
            planKey: lp.AGENCY_100,
            productType: op.AGENCY,
            discountAllowed: !0,
            coupon: "BLF30",
            limits: {
                domain: 100
            },
            price: {
                [cp]: 849,
                [up]: 1299
            },
            discountPrice: {
                [cp]: 594.3,
                [up]: 909.3
            },
            discountRatio: .3
        },
        Cp[lp.AGENCY_250] = {
            displayName: "Agency (250 Domains)",
            billingType: cp,
            planType: ap.AGENCY,
            planKey: lp.AGENCY_250,
            productType: op.AGENCY,
            discountAllowed: !0,
            coupon: "BLF30",
            limits: {
                domain: 250
            },
            price: {
                [cp]: 1199,
                [up]: 1999
            },
            discountPrice: {
                [cp]: 839.3,
                [up]: 1399.3
            },
            discountRatio: .3
        },
        Cp[lp.AGENCY_MONTHLY_25] = {
            billingType: dp,
            displayName: "Agency (25 Domains) - Monthly",
            planKey: lp.AGENCY_MONTHLY_25,
            planType: ap.AGENCY,
            productType: op.AGENCY,
            discountAllowed: !1,
            coupon: "BLF30",
            price: {
                [dp]: 299
            },
            discountPrice: {
                [dp]: 41.3
            },
            discountRatio: .3,
            limits: {
                domain: 25
            }
        },
        Cp[lp.AGENCY_MONTHLY_100] = {
            billingType: dp,
            displayName: "Agency (100 Domains) - Monthly",
            planType: ap.AGENCY,
            planKey: lp.AGENCY_MONTHLY_100,
            productType: op.AGENCY,
            discountAllowed: !1,
            coupon: "BLF30",
            limits: {
                domain: 100
            },
            price: {
                [dp]: 119
            },
            discountPrice: {
                [dp]: 83.3
            },
            discountRatio: .3
        },
        Cp[lp.AGENCY_MONTHLY_250] = {
            displayName: "Agency (250 Domains) - Monthly",
            billingType: dp,
            planType: ap.AGENCY,
            planKey: lp.AGENCY_MONTHLY_250,
            productType: op.AGENCY,
            discountAllowed: !1,
            coupon: "BLF30",
            limits: {
                domain: 250
            },
            price: {
                [dp]: 159
            },
            discountPrice: {
                [dp]: 111.3
            },
            discountRatio: .3
        };
        const fp = new Map
          , {plan: hp} = ip;
        fp.set(hp.FREE, Cp.FREE),
        fp.set(hp.PERSONAL_MONTHLY, {
            ...Cp.PERSONAL_MONTHLY,
            planId: 19384
        }),
        fp.set(hp.PERSONAL, {
            ...Cp.PERSONAL,
            planId: 19385
        }),
        fp.set(hp.PLAN_1, {
            ...Cp.PLAN_1,
            planId: 9389
        }),
        fp.set(hp.PLAN_2, {
            ...Cp.PLAN_2,
            planId: 7844
        }),
        fp.set(hp.PLAN_3, {
            ...Cp.PLAN_3,
            planId: 7845
        }),
        fp.set(hp.LTD_AGENCY_PRIME, {
            ...Cp.LTD_AGENCY_PRIME,
            planId: 31936
        }),
        fp.set(hp.LTD_AGENCY_NCF, {
            ...Cp.LTD_AGENCY_NCF,
            planId: 19389
        }),
        fp.set(hp.STARTER_25, {
            ...Cp.STARTER_25,
            planId: 9387
        }),
        fp.set(hp.PREMIUM_100, {
            ...Cp.PREMIUM_100,
            planId: 9388
        }),
        fp.set(hp.BUSINESS_MONTHLY, {
            ...Cp.BUSINESS_MONTHLY,
            planId: 19388
        }),
        fp.set(hp.BUSINESS_3, {
            planId: 48465,
            ...Cp.BUSINESS_3
        }),
        fp.set(hp.BUSINESS_10, {
            ...Cp.BUSINESS_10,
            planId: 48466
        }),
        fp.set(hp.BUSINESS_MONTHLY_10, {
            ...Cp.BUSINESS_MONTHLY_10,
            planId: 65357
        }),
        fp.set(hp.AGENCY_25, {
            ...Cp.AGENCY_25,
            planId: 48467
        }),
        fp.set(hp.AGENCY_100, {
            ...Cp.AGENCY_100,
            planId: 48468
        }),
        fp.set(hp.AGENCY_250, {
            ...Cp.AGENCY_250,
            planId: 48469
        }),
        fp.set(hp.AGENCY_MONTHLY_25, {
            ...Cp.AGENCY_MONTHLY_25,
            planId: 65358
        }),
        fp.set(hp.AGENCY_MONTHLY_100, {
            ...Cp.AGENCY_MONTHLY_100,
            planId: 65359
        }),
        fp.set(hp.AGENCY_MONTHLY_250, {
            ...Cp.AGENCY_MONTHLY_250,
            planId: 65360
        });
        const mp = new Map
          , {plan: gp} = ip;
        mp.set(gp.FREE, Cp.FREE),
        mp.set(gp.PERSONAL_MONTHLY, {
            ...Cp.PERSONAL_MONTHLY,
            planId: 743159
        }),
        mp.set(gp.PERSONAL, {
            ...Cp.PERSONAL,
            planId: 743160
        }),
        mp.set(gp.PLAN_1, {
            ...Cp.PLAN_1,
            planId: 591501
        }),
        mp.set(gp.PLAN_2, {
            ...Cp.PLAN_2,
            planId: 592743
        }),
        mp.set(gp.PLAN_3, {
            ...Cp.PLAN_3,
            planId: 599617
        }),
        mp.set(gp.STARTER_25, {
            ...Cp.STARTER_25,
            planId: 744473
        }),
        mp.set(gp.PREMIUM_10, {
            ...Cp.PREMIUM_10,
            planId: 647853
        }),
        mp.set(gp.PREMIUM_25, {
            ...Cp.PREMIUM_25,
            planId: 647857
        }),
        mp.set(gp.PREMIUM_100, {
            ...Cp.PREMIUM_100,
            planId: 647859
        }),
        mp.set(gp.BUSINESS_MONTHLY, {
            ...Cp.BUSINESS_MONTHLY,
            planId: 743162
        }),
        mp.set(gp.BUSINESS_3, {
            ...Cp.BUSINESS_3,
            planId: 743161
        }),
        mp.set(gp.BUSINESS_10, {
            ...Cp.BUSINESS_10,
            planId: 823088
        }),
        mp.set(gp.BUSINESS_MONTHLY_10, {
            ...Cp.BUSINESS_MONTHLY_10,
            planId: 857028
        }),
        mp.set(gp.AGENCY_25, {
            ...Cp.AGENCY_25,
            planId: 774988
        }),
        mp.set(gp.AGENCY_100, {
            ...Cp.AGENCY_100,
            planId: 774989
        }),
        mp.set(gp.AGENCY_250, {
            ...Cp.AGENCY_250,
            planId: 823732
        }),
        mp.set(gp.AGENCY_MONTHLY_25, {
            ...Cp.AGENCY_MONTHLY_25,
            planId: 857029
        }),
        mp.set(gp.AGENCY_MONTHLY_100, {
            ...Cp.AGENCY_MONTHLY_100,
            planId: 857030
        }),
        mp.set(gp.AGENCY_MONTHLY_250, {
            ...Cp.AGENCY_MONTHLY_250,
            planId: 857031
        }),
        mp.set(gp.LTD_AGENCY_PRIME, {
            ...Cp.LTD_AGENCY_PRIME,
            planId: 779882
        }),
        mp.set(gp.LTD_AGENCY_NCF, {
            ...Cp.LTD_AGENCY_NCF,
            planId: 795160
        });
        const {product: vp, plan: yp} = ip
          , wp = new Map;
        wp.set(yp.PERSONAL, {
            provider: "",
            plans: [yp.PERSONAL, yp.PERSONAL_MONTHLY],
            displayName: "Personal",
            productType: vp.PERSONAL,
            features: [{
                label: "AI Site Generation (Beta)",
                active: !0
            }, {
                label: "AI Text Generation (Beta)",
                active: !0
            }, {
                label: "AI Image Generation (Beta)",
                active: !0
            }, {
                label: "25 Pages",
                active: !0
            }, {
                label: "200 Blog Posts",
                active: !0
            }, {
                label: "0 Collaborator",
                active: !0
            }, {
                label: "Unlimited Storage",
                active: !0
            }, {
                label: "Unlimited Bandwidth",
                active: !0
            }, {
                label: "5 CMS Collections",
                active: !0
            }, {
                label: "200 Collection Items",
                active: !0
            }, {
                active: !0,
                label: "Custom Fields & Collections"
            }, {
                label: "Templates & UI Blocks",
                active: !0
            }, {
                label: "3,000 Members",
                active: !0
            }, {
                label: "Export Site",
                active: !1
            }, {
                label: "White Label Dashboard",
                active: !1
            }, {
                label: "Client Billing",
                active: !1
            }, {
                label: "Agency Branding",
                active: !1
            }, {
                label: "White Label Documentation",
                active: !1
            }]
        }),
        wp.set(yp.BUSINESS, {
            provider: "",
            plans: [yp.BUSINESS_3, yp.BUSINESS_10, yp.BUSINESS_MONTHLY, yp.BUSINESS_MONTHLY_10],
            displayName: "Business",
            productType: vp.BUSINESS,
            features: [{
                label: "AI Site Generation (Beta)",
                active: !0
            }, {
                label: "AI Text Generation (Beta)",
                active: !0
            }, {
                label: "AI Image Generation (Beta)",
                active: !0
            }, {
                label: "Unlimited Pages",
                active: !0
            }, {
                label: "Unlimited Blog Posts",
                active: !0
            }, {
                label: "10 Collaborator",
                active: !0
            }, {
                label: "Unlimited Storage",
                active: !0
            }, {
                label: "Unlimited Bandwidth",
                active: !0
            }, {
                label: "Unlimited CMS Collections",
                active: !0
            }, {
                label: "Unlimited Collection Items",
                active: !0
            }, {
                active: !0,
                label: "Custom Fields & Collections"
            }, {
                label: "Templates & UI Blocks",
                active: !0
            }, {
                label: "10,000 Members",
                active: !0
            }, {
                label: "Export Site 15 Times Per Month",
                active: !0
            }, {
                label: "White Label Dashboard",
                active: !0
            }, {
                label: "Client Billing",
                active: !1
            }, {
                label: "Agency Branding",
                active: !1
            }, {
                label: "White Label Documentation",
                active: !1
            }]
        }),
        wp.set(yp.AGENCY, {
            provider: "",
            plans: [yp.AGENCY_25, yp.AGENCY_100, yp.AGENCY_250, yp.AGENCY_MONTHLY_25, yp.AGENCY_MONTHLY_100, yp.AGENCY_MONTHLY_250],
            displayName: "Agency",
            productType: vp.AGENCY,
            features: [{
                label: "AI Site Generation (Beta)",
                active: !0
            }, {
                label: "AI Text Generation (Beta)",
                active: !0
            }, {
                label: "AI Image Generation (Beta)",
                active: !0
            }, {
                label: "Unlimited Pages",
                active: !0
            }, {
                label: "Unlimited Blog Posts",
                active: !0
            }, {
                label: "Unlimited Collaborator",
                active: !0
            }, {
                label: "Unlimited Storage",
                active: !0
            }, {
                label: "Unlimited Bandwidth",
                active: !0
            }, {
                label: "Unlimited CMS Collections",
                active: !0
            }, {
                label: "Unlimited Collection Items",
                active: !0
            }, {
                active: !0,
                label: "Custom Fields & Collections"
            }, {
                label: "Templates & UI Blocks",
                active: !0
            }, {
                label: "Unlimted Members",
                active: !0
            }, {
                label: "Export Site 15 Times Per Month",
                active: !0
            }, {
                label: "White Label Dashboard",
                active: !0
            }, {
                label: "Client Billing",
                active: !0
            }, {
                label: "Agency Branding",
                active: !0
            }, {
                label: "White Label Documentation",
                active: !0
            }]
        });
        const Lp = new Map;
        Lp.set(yp.BUSINESS, {
            plans: [yp.BUSINESS_MONTHLY, yp.LTD_AGENCY_PRIME, yp.LTD_AGENCY_NCF],
            displayName: "Business",
            features: wp.get(yp.BUSINESS).features || []
        }),
        Lp.set(yp.PERSONAL, {
            displayName: "Personal",
            plans: [yp.PERSONAL_MONTHLY],
            features: wp.get(yp.PERSONAL).features || []
        }),
        Lp.set(ip.product.FREE, {
            displayName: "Free",
            plans: [yp.FREE],
            features: [{
                label: "\u221e Published Projects*",
                active: !0
            }, {
                label: "Integrations",
                active: !0
            }, {
                label: "SEO & Social Settings",
                active: !0
            }, {
                label: "Custom CSS",
                active: !0
            }, {
                label: "Contact Form",
                active: !0
            }, {
                label: "Subscription Form",
                active: !0
            }]
        }),
        Lp.set(ip.product.STARTER, {
            displayName: "Starter",
            plans: [yp.PLAN_1, yp.PLAN_2, yp.STARTER_25],
            features: [{
                label: "\u221e Published Projects*",
                active: !0
            }, {
                label: "Integrations",
                active: !0
            }, {
                label: "SEO & Social Settings",
                active: !0
            }, {
                label: "Custom CSS",
                active: !0
            }, {
                label: "Contact Form",
                active: !0
            }, {
                label: "Subscription Form",
                active: !0
            }, {
                label: "Remove Branding",
                active: !0
            }, {
                label: "Custom Code",
                active: !0
            }]
        }),
        Lp.set(ip.product.PREMIUM, {
            displayName: "Premium",
            plans: [yp.PLAN_3, yp.PREMIUM_10, yp.PREMIUM_25, yp.PREMIUM_100],
            features: [{
                label: "\u221e Published Projects*",
                active: !0
            }, {
                label: "Integrations",
                active: !0
            }, {
                label: "SEO & Social Settings",
                active: !0
            }, {
                label: "Custom CSS",
                active: !0
            }, {
                label: "Contact Form",
                active: !0
            }, {
                label: "Subscription Form",
                active: !0
            }, {
                label: "Remove Branding",
                active: !0
            }, {
                label: "Custom Code",
                active: !0
            }, {
                label: "Custom Form",
                active: !0
            }, {
                label: "Payment Button",
                active: !0
            }, {
                label: "Export HTML/CSS/JS",
                active: !0
            }]
        });
        const bp = ["production", "staging"].includes({
            VITE_AIRTABLE_API_URL: "https://rkqj7859q4.execute-api.us-east-2.amazonaws.com/Prod",
            VITE_SUBSCRIPTION_API_URL: "https://41f5pv771f.execute-api.us-east-2.amazonaws.com/Prod/create-contact",
            BASE_URL: "/",
            MODE: "production",
            DEV: !1,
            PROD: !0,
            SSR: !1
        }.VITE_APP_STAGE)
          , {siteTypes: {STATIC: xp}, plan: {FREE: jp, STARTER: Mp, PERSONAL: Ep, AGENCY: Np, PLAN_1: kp, PLAN_2: _p, PLAN_3: Sp, STARTER_25: Ap, AGENCY_PLUS: Tp, BUSINESS_3: Zp, BUSINESS_10: Ip, AGENCY_25: Op, AGENCY_100: $p, AGENCY_250: Vp, LTD_AGENCY_NCF: Rp, BUSINESS_MONTHLY: Pp, LTD_AGENCY_PRIME: Hp, PERSONAL_MONTHLY: Bp, BUSINESS_MONTHLY_10: Fp, AGENCY_MONTHLY_25: Up, AGENCY_MONTHLY_100: Dp, AGENCY_MONTHLY_250: zp}, billingType: {TWO_YEARLY: Gp, FOREVER: Yp}} = ip
          , Xp = bp ? mp : fp
          , qp = (t=0) => [...Xp.values()].find((e => e.planId === t))
          , Wp = [jp, kp, _p, Mp, Bp, Pp, Fp, Up, Dp, zp, Ep, Ap, Zp, Ip, Op, $p, Np, Tp, Vp, Sp, Rp, Hp]
          , Kp = Object.freeze(Object.defineProperty({
            __proto__: null,
            getCouponByPlanId: t => ({
                743160: "D5EEDA8C",
                743161: "E01135A4",
                823088: "E01135A4",
                774988: "9D0076F1",
                774989: "9D0076F1",
                823732: "9D0076F1",
                19385: "E70F0CE1",
                48465: "5C2FD20F",
                48466: "5C2FD20F",
                48467: "ACA010E3",
                48468: "ACA010E3",
                48469: "ACA010E3"
            }[t]),
            getCurrentProducts: (t=xp) => [...wp.values()].map((t => ({
                ...t,
                plans: t.plans.map((t => Xp.get(t)))
            }))),
            getFeatureByPlanKey: t => {
                const e = [...Lp.values(), ...wp.values()].find((e => {
                    var n;
                    return null == (n = e.plans) ? void 0 : n.includes(t)
                }
                ));
                return (null == e ? void 0 : e.features) || []
            }
            ,
            getPlanById: qp,
            getPlanByKey: t => Xp.get(t),
            isAgencyPlan: (t=0) => {
                var e;
                return (null == (e = qp(t)) ? void 0 : e.planType) === Np
            }
            ,
            isHighestPlan: (t=0, e) => {
                if (e === Gp)
                    return !0;
                const n = qp(t);
                return (null == n ? void 0 : n.billingType) === Yp || (null == n ? void 0 : n.planKey) === Vp
            }
            ,
            planEnum: ip,
            productTypes: Wp
        }, Symbol.toStringTag, {
            value: "Module"
        }))
          , {planEnum: Jp} = Kp
          , {plan: Qp} = Jp
          , {FREE: tC, PERSONAL: eC, PERSONAL_MONTHLY: nC} = Qp
          , rC = Object.values(Qp).filter((t => t !== Qp.FREE))
          , iC = {
            code: rC,
            headerCode: rC,
            footerCode: rC,
            customForm: rC,
            paymentWidgets: rC,
            dorikBranding: [Qp.FREE]
        }
          , sC = {
            code: ["super_user", "sys_admin", "sys_reviewer"]
        }
          , oC = Object.freeze(Object.defineProperty({
            __proto__: null,
            getSiteGlobal: t => {
                if (!t)
                    return {};
                const e = JSON.parse(t);
                return e.version ? "2.0.0" === e.version ? e : void 0 : {
                    global: JSON.parse(t)
                }
            }
            ,
            grantPermission: (t, e) => {
                const n = "sys_admin" === t;
                return {
                    read: n => !!rC.includes(e) || sC[n].includes(t),
                    render: t => {
                        const r = iC[t];
                        return !r || n || r.includes(e)
                    }
                }
            }
            ,
            hasFeaturePermission: ({planKey: t, isFreeUser: e, hasSuperAccess: n, excludePlans: r=[tC]}) => {
                let i = e;
                return r.includes(eC) && (i || (i = [eC, nC].includes(t))),
                n || !i
            }
            ,
            socialIconSvgs: Il
        }, Symbol.toStringTag, {
            value: "Module"
        }))
    }
}]);
