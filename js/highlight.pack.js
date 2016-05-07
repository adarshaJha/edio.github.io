/*! highlight.js v9.0.0 | BSD3 License | git.io/hljslicense */
!function (e) {
  "undefined" != typeof exports ? e(exports) : (self.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function () {
    return self.hljs
  }))
}(function (e) {
  function n(e) {
    return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
  }

  function t(e) {
    return e.nodeName.toLowerCase()
  }

  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 == t.index
  }

  function a(e) {
    return /^(no-?highlight|plain|text)$/i.test(e)
  }

  function i(e) {
    var n, t, r, i = e.className + " ";
    if (i += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/i.exec(i))return E(t[1]) ? t[1] : "no-highlight";
    for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++)if (E(i[n]) || a(i[n]))return i[n]
  }

  function o(e, n) {
    var t, r = {};
    for (t in e)r[t] = e[t];
    if (n)for (t in n)r[t] = n[t];
    return r
  }

  function u(e) {
    var n = [];
    return function r(e, a) {
      for (var i = e.firstChild; i; i = i.nextSibling)3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
        event: "start",
        offset: a,
        node: i
      }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({event: "stop", offset: a, node: i}));
      return a
    }(e, 0), n
  }

  function c(e, r, a) {
    function i() {
      return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
    }

    function o(e) {
      function r(e) {
        return " " + e.nodeName + '="' + n(e.value) + '"'
      }

      l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
    }

    function u(e) {
      l += "</" + t(e) + ">"
    }

    function c(e) {
      ("start" == e.event ? o : u)(e.node)
    }

    for (var s = 0, l = "", f = []; e.length || r.length;) {
      var g = i();
      if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
        f.reverse().forEach(u);
        do c(g.splice(0, 1)[0]), g = i(); while (g == e && g.length && g[0].offset == s);
        f.reverse().forEach(o)
      } else"start" == g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
    }
    return l + n(a.substr(s))
  }

  function s(e) {
    function n(e) {
      return e && e.source || e
    }

    function t(t, r) {
      return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
    }

    function r(a, i) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var u = {}, c = function (n, t) {
            e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
              var t = e.split("|");
              u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
            })
          };
          "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function (e) {
            c(e, a.k[e])
          }), a.k = u
        }
        a.lR = t(a.l || /\b\w+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
        var s = [];
        a.c.forEach(function (e) {
          e.v ? e.v.forEach(function (n) {
            s.push(o(e, n))
          }) : s.push("self" == e ? a : e)
        }), a.c = s, a.c.forEach(function (e) {
          r(e, a)
        }), a.starts && r(a.starts, i);
        var l = a.c.map(function (e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
        }).concat([a.tE, a.i]).map(n).filter(Boolean);
        a.t = l.length ? t(l.join("|"), !0) : {
          exec: function () {
            return null
          }
        }
      }
    }

    r(e)
  }

  function l(e, t, a, i) {
    function o(e, n) {
      for (var t = 0; t < n.c.length; t++)if (r(n.c[t].bR, e))return n.c[t]
    }

    function u(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent;)e = e.parent;
        return e
      }
      return e.eW ? u(e.parent, n) : void 0
    }

    function c(e, n) {
      return !a && r(n.iR, e)
    }

    function g(e, n) {
      var t = N.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t]
    }

    function h(e, n, t, r) {
      var a = r ? "" : x.classPrefix, i = '<span class="' + a, o = t ? "" : "</span>";
      return i += e + '">', i + n + o
    }

    function p() {
      if (!L.k)return n(M);
      var e = "", t = 0;
      L.lR.lastIndex = 0;
      for (var r = L.lR.exec(M); r;) {
        e += n(M.substr(t, r.index - t));
        var a = g(L, r);
        a ? (B += a[1], e += h(a[0], n(r[0]))) : e += n(r[0]), t = L.lR.lastIndex, r = L.lR.exec(M)
      }
      return e + n(M.substr(t))
    }

    function d() {
      var e = "string" == typeof L.sL;
      if (e && !R[L.sL])return n(M);
      var t = e ? l(L.sL, M, !0, y[L.sL]) : f(M, L.sL.length ? L.sL : void 0);
      return L.r > 0 && (B += t.r), e && (y[L.sL] = t.top), h(t.language, t.value, !1, !0)
    }

    function b() {
      return void 0 !== L.sL ? d() : p()
    }

    function v(e, t) {
      var r = e.cN ? h(e.cN, "", !0) : "";
      e.rB ? (k += r, M = "") : e.eB ? (k += n(t) + r, M = "") : (k += r, M = t), L = Object.create(e, {parent: {value: L}})
    }

    function m(e, t) {
      if (M += e, void 0 === t)return k += b(), 0;
      var r = o(t, L);
      if (r)return k += b(), v(r, t), r.rB ? 0 : t.length;
      var a = u(L, t);
      if (a) {
        var i = L;
        i.rE || i.eE || (M += t), k += b();
        do L.cN && (k += "</span>"), B += L.r, L = L.parent; while (L != a.parent);
        return i.eE && (k += n(t)), M = "", a.starts && v(a.starts, ""), i.rE ? 0 : t.length
      }
      if (c(t, L))throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"');
      return M += t, t.length || 1
    }

    var N = E(e);
    if (!N)throw new Error('Unknown language: "' + e + '"');
    s(N);
    var w, L = i || N, y = {}, k = "";
    for (w = L; w != N; w = w.parent)w.cN && (k = h(w.cN, "", !0) + k);
    var M = "", B = 0;
    try {
      for (var C, j, I = 0; ;) {
        if (L.t.lastIndex = I, C = L.t.exec(t), !C)break;
        j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
      }
      for (m(t.substr(I)), w = L; w.parent; w = w.parent)w.cN && (k += "</span>");
      return {r: B, value: k, language: e, top: L}
    } catch (O) {
      if (-1 != O.message.indexOf("Illegal"))return {r: 0, value: n(t)};
      throw O
    }
  }

  function f(e, t) {
    t = t || x.languages || Object.keys(R);
    var r = {r: 0, value: n(e)}, a = r;
    return t.forEach(function (n) {
      if (E(n)) {
        var t = l(n, e, !1);
        t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
      }
    }), a.language && (r.second_best = a), r
  }

  function g(e) {
    return x.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, n) {
      return n.replace(/\t/g, x.tabReplace)
    })), x.useBR && (e = e.replace(/\n/g, "<br>")), e
  }

  function h(e, n, t) {
    var r = n ? w[n] : t, a = [e.trim()];
    return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
  }

  function p(e) {
    var n = i(e);
    if (!a(n)) {
      var t;
      x.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
      var r = t.textContent, o = n ? l(n, r, !0) : f(r), s = u(t);
      if (s.length) {
        var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        p.innerHTML = o.value, o.value = c(s, u(p), r)
      }
      o.value = g(o.value), e.innerHTML = o.value, e.className = h(e.className, n, o.language), e.result = {
        language: o.language,
        re: o.r
      }, o.second_best && (e.second_best = {language: o.second_best.language, re: o.second_best.r})
    }
  }

  function d(e) {
    x = o(x, e)
  }

  function b() {
    if (!b.called) {
      b.called = !0;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, p)
    }
  }

  function v() {
    addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
  }

  function m(n, t) {
    var r = R[n] = t(e);
    r.aliases && r.aliases.forEach(function (e) {
      w[e] = n
    })
  }

  function N() {
    return Object.keys(R)
  }

  function E(e) {
    return e = (e || "").toLowerCase(), R[e] || R[w[e]]
  }

  var x = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0}, R = {}, w = {};
  return e.highlight = l, e.highlightAuto = f, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = E, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, e.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE]}, e.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [e.BE]
  }, e.PWM = {b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/}, e.C = function (n, t, r) {
    var a = e.inherit({cN: "comment", b: n, e: t, c: []}, r || {});
    return a.c.push(e.PWM), a.c.push({cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0}), a
  }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
    cN: "number",
    b: e.NR,
    r: 0
  }, e.CNM = {cN: "number", b: e.CNR, r: 0}, e.BNM = {cN: "number", b: e.BNR, r: 0}, e.CSSNM = {
    cN: "number",
    b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, e.RM = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]
  }, e.TM = {cN: "title", b: e.IR, r: 0}, e.UTM = {cN: "title", b: e.UIR, r: 0}, e
});
hljs.registerLanguage("python", function (e) {
  var r = {cN: "meta", b: /^(>>>|\.\.\.) /}, b = {
    cN: "string",
    c: [e.BE],
    v: [{b: /(u|b)?r?'''/, e: /'''/, c: [r], r: 10}, {b: /(u|b)?r?"""/, e: /"""/, c: [r], r: 10}, {
      b: /(u|r|ur)'/,
      e: /'/,
      r: 10
    }, {b: /(u|r|ur)"/, e: /"/, r: 10}, {b: /(b|br)'/, e: /'/}, {b: /(b|br)"/, e: /"/}, e.ASM, e.QSM]
  }, a = {
    cN: "number",
    r: 0,
    v: [{b: e.BNR + "[lLjJ]?"}, {b: "\\b(0o[0-7]+)[lLjJ]?"}, {b: e.CNR + "[lLjJ]?"}]
  }, l = {cN: "params", b: /\(/, e: /\)/, c: ["self", r, a, b]};
  return {
    aliases: ["py", "gyp"],
    k: {
      keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented"
    },
    i: /(<\/|->|\?)/,
    c: [r, a, b, e.HCM, {
      v: [{cN: "function", bK: "def", r: 10}, {cN: "class", bK: "class"}],
      e: /:/,
      i: /[${=;\n,]/,
      c: [e.UTM, l]
    }, {cN: "meta", b: /^[\t ]*@/, e: /$/}, {b: /\b(print|exec)\(/}]
  }
});
hljs.registerLanguage("makefile", function (e) {
  var a = {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]};
  return {
    aliases: ["mk", "mak"],
    c: [e.HCM, {
      b: /^\w+\s*\W*=/,
      rB: !0,
      r: 0,
      starts: {e: /\s*\W*=/, eE: !0, starts: {e: /$/, r: 0, c: [a]}}
    }, {cN: "section", b: /^[\w]+:\s*$/}, {
      cN: "meta",
      b: /^\.PHONY:/,
      e: /$/,
      k: {"meta-keyword": ".PHONY"},
      l: /[\.\w]+/
    }, {b: /^\t+/, e: /$/, r: 0, c: [e.QSM, a]}]
  }
});
hljs.registerLanguage("perl", function (e) {
  var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", r = {
    cN: "subst",
    b: "[$@]\\{",
    e: "\\}",
    k: t
  }, s = {
    b: "->{",
    e: "}"
  }, n = {
    v: [{b: /\$\d/}, {b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/}, {
      b: /[\$%@][^\s\w{]/,
      r: 0
    }]
  }, i = [e.BE, r, n], o = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {eW: !0}), s, {
    cN: "string",
    c: i,
    v: [{b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5}, {b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5}, {
      b: "q[qwxr]?\\s*\\{",
      e: "\\}",
      r: 5
    }, {b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5}, {b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5}, {
      b: "qw\\s+q",
      e: "q",
      r: 5
    }, {b: "'", e: "'", c: [e.BE]}, {b: '"', e: '"'}, {b: "`", e: "`", c: [e.BE]}, {
      b: "{\\w+}",
      c: [],
      r: 0
    }, {b: "-?\\w+\\s*\\=\\>", c: [], r: 0}]
  }, {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  }, {
    b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
    k: "split return print reverse grep",
    r: 0,
    c: [e.HCM, {cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10}, {
      cN: "regexp",
      b: "(m|qr)?/",
      e: "/[a-z]*",
      c: [e.BE],
      r: 0
    }]
  }, {cN: "function", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", eE: !0, r: 5, c: [e.TM]}, {
    b: "-\\w\\b",
    r: 0
  }, {b: "^__DATA__$", e: "^__END__$", sL: "mojolicious", c: [{b: "^@@.*", e: "$", cN: "comment"}]}];
  return r.c = o, s.c = o, {aliases: ["pl"], k: t, c: o}
});
hljs.registerLanguage("nimrod", function (t) {
  return {
    aliases: ["nim"],
    k: {
      keyword: "addr and as asm bind block break|0 case|0 cast const|0 continue|0 converter discard distinct|10 div do elif else|0 end|0 enum|0 except export finally for from generic if|0 import|0 in include|0 interface is isnot|10 iterator|10 let|0 macro method|10 mixin mod nil not notin|10 object|0 of or out proc|10 ptr raise ref|10 return shl shr static template try|0 tuple type|0 using|0 var|0 when while|0 with without xor yield",
      literal: "shared guarded stdin stdout stderr result|10 true false"
    },
    c: [{cN: "meta", b: /{\./, e: /\.}/, r: 10}, {
      cN: "string",
      b: /[a-zA-Z]\w*"/,
      e: /"/,
      c: [{b: /""/}]
    }, {cN: "string", b: /([a-zA-Z]\w*)?"""/, e: /"""/}, t.QSM, {cN: "type", b: /\b[A-Z]\w+\b/, r: 0}, {
      cN: "built_in",
      b: /\b(int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|float32|float64|bool|char|string|cstring|pointer|expr|stmt|void|auto|any|range|array|openarray|varargs|seq|set|clong|culong|cchar|cschar|cshort|cint|csize|clonglong|cfloat|cdouble|clongdouble|cuchar|cushort|cuint|culonglong|cstringarray|semistatic)\b/
    }, {
      cN: "number",
      r: 0,
      v: [{b: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/}, {b: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/}, {b: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/}, {b: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}]
    }, t.HCM]
  }
});
hljs.registerLanguage("java", function (e) {
  var a = e.UIR + "(<(" + e.UIR + "|\\s*,\\s*)+>)?", t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", r = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?", c = {
    cN: "number",
    b: r,
    r: 0
  };
  return {
    aliases: ["jsp"],
    k: t,
    i: /<\/|#/,
    c: [e.C("/\\*\\*", "\\*/", {
      r: 0,
      c: [{b: /\w+@/, r: 0}, {cN: "doctag", b: "@[A-Za-z]+"}]
    }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
      cN: "class",
      bK: "class interface",
      e: /[{;=]/,
      eE: !0,
      k: "class interface",
      i: /[:"\[\]]/,
      c: [{bK: "extends implements"}, e.UTM]
    }, {bK: "new throw return else", r: 0}, {
      cN: "function",
      b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]}, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: t,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }, c, {cN: "meta", b: "@[A-Za-z]+"}]
  }
});
hljs.registerLanguage("thrift", function (e) {
  var t = "bool byte i16 i32 i64 double string binary";
  return {
    k: {
      keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
      built_in: t,
      literal: "true false"
    },
    c: [e.QSM, e.NM, e.CLCM, e.CBCM, {
      cN: "class",
      bK: "struct enum service exception",
      e: /\{/,
      i: /\n/,
      c: [e.inherit(e.TM, {starts: {eW: !0, eE: !0}})]
    }, {b: "\\b(set|list|map)\\s*<", e: ">", k: t, c: ["self"]}]
  }
});
hljs.registerLanguage("ruby", function (e) {
  var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", r = {
    cN: "doctag",
    b: "@[A-Za-z]+"
  }, a = {b: "#<", e: ">"}, s = [e.C("#", "$", {c: [r]}), e.C("^\\=begin", "^\\=end", {
    c: [r],
    r: 10
  }), e.C("^__END__", "\\n$")], n = {cN: "subst", b: "#\\{", e: "}", k: c}, t = {
    cN: "string",
    c: [e.BE, n],
    v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: /`/, e: /`/}, {b: "%[qQwWx]?\\(", e: "\\)"}, {
      b: "%[qQwWx]?\\[",
      e: "\\]"
    }, {b: "%[qQwWx]?{", e: "}"}, {b: "%[qQwWx]?<", e: ">"}, {b: "%[qQwWx]?/", e: "/"}, {
      b: "%[qQwWx]?%",
      e: "%"
    }, {b: "%[qQwWx]?-", e: "-"}, {
      b: "%[qQwWx]?\\|",
      e: "\\|"
    }, {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]
  }, i = {cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: c}, d = [t, a, {
    cN: "class",
    bK: "class module",
    e: "$|;",
    i: /=/,
    c: [e.inherit(e.TM, {b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {
      b: "<\\s*",
      c: [{b: "(" + e.IR + "::)?" + e.IR}]
    }].concat(s)
  }, {cN: "function", bK: "def", e: "$|;", c: [e.inherit(e.TM, {b: b}), i].concat(s)}, {
    cN: "symbol",
    b: e.UIR + "(\\!|\\?)?:",
    r: 0
  }, {cN: "symbol", b: ":", c: [t, {b: b}], r: 0}, {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  }, {b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {
    b: "(" + e.RSR + ")\\s*",
    c: [a, {
      cN: "regexp",
      c: [e.BE, n],
      i: /\n/,
      v: [{b: "/", e: "/[a-z]*"}, {b: "%r{", e: "}[a-z]*"}, {b: "%r\\(", e: "\\)[a-z]*"}, {
        b: "%r!",
        e: "![a-z]*"
      }, {b: "%r\\[", e: "\\][a-z]*"}]
    }].concat(s),
    r: 0
  }].concat(s);
  n.c = d, i.c = d;
  var o = "[>?]>", l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>", u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>", w = [{
    b: /^\s*=>/,
    starts: {e: "$", c: d}
  }, {cN: "meta", b: "^(" + o + "|" + l + "|" + u + ")", starts: {e: "$", c: d}}];
  return {aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: c, i: /\/\*/, c: s.concat(w).concat(d)}
});
hljs.registerLanguage("sql", function (e) {
  var t = e.C("--", "$");
  return {
    cI: !0,
    i: /[<>{}*]/,
    c: [{
      bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
      e: /;/,
      eW: !0,
      k: {
        keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
        literal: "true false null",
        built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
      },
      c: [{cN: "string", b: "'", e: "'", c: [e.BE, {b: "''"}]}, {
        cN: "string",
        b: '"',
        e: '"',
        c: [e.BE, {b: '""'}]
      }, {cN: "string", b: "`", e: "`", c: [e.BE]}, e.CNM, e.CBCM, t]
    }, e.CBCM, t]
  }
});
hljs.registerLanguage("bash", function (e) {
  var t = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)}/}]}, s = {
    cN: "string",
    b: /"/,
    e: /"/,
    c: [e.BE, t, {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]}]
  }, a = {cN: "string", b: /'/, e: /'/};
  return {
    aliases: ["sh", "zsh"],
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      _: "-ne -eq -lt -gt -f -d -e -s -l -a"
    },
    c: [{cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10}, {
      cN: "function",
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: !0,
      c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
      r: 0
    }, e.HCM, s, a, t]
  }
});
hljs.registerLanguage("julia", function (e) {
  var r = {
    keyword: "in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export finally for function global if immutable import importall let local macro module quote return try type typealias using while",
    literal: "true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 eulergamma golden im nothing pi γ π φ Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ",
    built_in: "ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix StridedVecOrMat StridedVector VecOrMat Vector "
  }, t = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*", a = {l: t, k: r, i: /<\//}, n = {
    cN: "type",
    b: /::/
  }, o = {cN: "type", b: /<:/}, i = {
    cN: "number",
    b: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
    r: 0
  }, l = {cN: "string", b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/}, c = {
    cN: "subst",
    b: /\$\(/,
    e: /\)/,
    k: r
  }, s = {cN: "variable", b: "\\$" + t}, d = {
    cN: "string",
    c: [e.BE, c, s],
    v: [{b: /\w*"""/, e: /"""\w*/, r: 10}, {b: /\w*"/, e: /"\w*/}]
  }, S = {cN: "string", c: [e.BE, c, s], b: "`", e: "`"}, u = {cN: "meta", b: "@" + t}, g = {
    cN: "comment",
    v: [{b: "#=", e: "=#", r: 10}, {b: "#", e: "$"}]
  };
  return a.c = [i, l, n, o, d, S, u, g, e.HCM], c.c = a.c, a
});
hljs.registerLanguage("xml", function (s) {
  var t = "[A-Za-z0-9\\._:-]+", e = {b: /<\?(php)?(?!\w)/, e: /\?>/, sL: "php"}, r = {
    eW: !0,
    i: /</,
    r: 0,
    c: [e, {cN: "attr", b: t, r: 0}, {
      b: "=",
      r: 0,
      c: [{cN: "string", c: [e], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s\/>]+/}]}]
    }]
  };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
    cI: !0,
    c: [{
      cN: "meta",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{b: "\\[", e: "\\]"}]
    }, s.C("<!--", "-->", {r: 10}), {b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {name: "style"},
      c: [r],
      starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
    }, {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {name: "script"},
      c: [r],
      starts: {e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
    }, e, {cN: "meta", b: /<\?\w+/, e: /\?>/, r: 10}, {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, r]
    }]
  }
});
hljs.registerLanguage("r", function (e) {
  var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
  return {
    c: [e.HCM, {
      b: r,
      l: r,
      k: {
        keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
        literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
      },
      r: 0
    }, {cN: "number", b: "0[xX][0-9a-fA-F]+[Li]?\\b", r: 0}, {
      cN: "number",
      b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
      r: 0
    }, {cN: "number", b: "\\d+\\.(?!\\d)(?:i\\b)?", r: 0}, {
      cN: "number",
      b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
      r: 0
    }, {cN: "number", b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b", r: 0}, {b: "`", e: "`", r: 0}, {
      cN: "string",
      c: [e.BE],
      v: [{b: '"', e: '"'}, {b: "'", e: "'"}]
    }]
  }
});
hljs.registerLanguage("json", function (e) {
  var t = {literal: "true false null"}, i = [e.QSM, e.CNM], r = {e: ",", eW: !0, eE: !0, c: i, k: t}, s = {
    b: "{",
    e: "}",
    c: [{cN: "attr", b: '\\s*"', e: '"\\s*:\\s*', eB: !0, eE: !0, c: [e.BE], i: "\\n", starts: r}],
    i: "\\S"
  }, n = {b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S"};
  return i.splice(i.length, 0, s, n), {c: i, k: t, i: "\\S"}
});
hljs.registerLanguage("coffeescript", function (e) {
  var c = {
    keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
    literal: "true false null undefined yes no on off",
    built_in: "npm require console print module global window document"
  }, n = "[A-Za-z$_][0-9A-Za-z$_]*", r = {
    cN: "subst",
    b: /#\{/,
    e: /}/,
    k: c
  }, s = [e.BNM, e.inherit(e.CNM, {starts: {e: "(\\s*/)?", r: 0}}), {
    cN: "string",
    v: [{b: /'''/, e: /'''/, c: [e.BE]}, {b: /'/, e: /'/, c: [e.BE]}, {b: /"""/, e: /"""/, c: [e.BE, r]}, {
      b: /"/,
      e: /"/,
      c: [e.BE, r]
    }]
  }, {
    cN: "regexp",
    v: [{b: "///", e: "///", c: [r, e.HCM]}, {b: "//[gim]*", r: 0}, {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]
  }, {b: "@" + n}, {b: "`", e: "`", eB: !0, eE: !0, sL: "javascript"}];
  r.c = s;
  var i = e.inherit(e.TM, {b: n}), t = "(\\(.*\\))?\\s*\\B[-=]>", o = {
    cN: "params",
    b: "\\([^\\(]",
    rB: !0,
    c: [{b: /\(/, e: /\)/, k: c, c: ["self"].concat(s)}]
  };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: c,
    i: /\/\*/,
    c: s.concat([e.C("###", "###"), e.HCM, {
      cN: "function",
      b: "^\\s*" + n + "\\s*=\\s*" + t,
      e: "[-=]>",
      rB: !0,
      c: [i, o]
    }, {b: /[:\(,=]\s*/, r: 0, c: [{cN: "function", b: t, e: "[-=]>", rB: !0, c: [o]}]}, {
      cN: "class",
      bK: "class",
      e: "$",
      i: /[:="\[\]]/,
      c: [{bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i]}, i]
    }, {b: n + ":", e: ":", rB: !0, rE: !0, r: 0}])
  }
});
hljs.registerLanguage("groovy", function (e) {
  return {
    k: {
      literal: "true false null",
      keyword: "byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
    },
    c: [e.C("/\\*\\*", "\\*/", {
      r: 0,
      c: [{b: /\w+@/, r: 0}, {cN: "doctag", b: "@[A-Za-z]+"}]
    }), e.CLCM, e.CBCM, {cN: "string", b: '"""', e: '"""'}, {cN: "string", b: "'''", e: "'''"}, {
      cN: "string",
      b: "\\$/",
      e: "/\\$",
      r: 10
    }, e.ASM, {cN: "regexp", b: /~?\/[^\/\n]+\//, c: [e.BE]}, e.QSM, {
      cN: "meta",
      b: "^#!/usr/bin/env",
      e: "$",
      i: "\n"
    }, e.BNM, {
      cN: "class",
      bK: "class interface trait enum",
      e: "{",
      i: ":",
      c: [{bK: "extends implements"}, e.UTM]
    }, e.CNM, {cN: "meta", b: "@[A-Za-z]+"}, {cN: "string", b: /[^\?]{0}[A-Za-z0-9_$]+ *:/}, {
      b: /\?/,
      e: /\:/
    }, {cN: "symbol", b: "^\\s*[A-Za-z0-9_$]+:", r: 0}],
    i: /#|<\//
  }
});
hljs.registerLanguage("swift", function (e) {
  var i = {
    keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
    literal: "true false nil",
    built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
  }, t = {cN: "type", b: "\\b[A-Z][\\w']*", r: 0}, n = e.C("/\\*", "\\*/", {c: ["self"]}), r = {
    cN: "subst",
    b: /\\\(/,
    e: "\\)",
    k: i,
    c: []
  }, a = {
    cN: "number",
    b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
    r: 0
  }, o = e.inherit(e.QSM, {c: [r, e.BE]});
  return r.c = [a], {
    k: i,
    c: [o, e.CLCM, n, t, a, {
      cN: "function",
      bK: "func",
      e: "{",
      eE: !0,
      c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/, i: /\(/}), {b: /</, e: />/, i: />/}, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        endsParent: !0,
        k: i,
        c: ["self", a, o, e.CBCM, {b: ":"}],
        i: /["']/
      }],
      i: /\[|%/
    }, {
      cN: "class",
      bK: "struct protocol class extension enum",
      k: i,
      e: "\\{",
      eE: !0,
      c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/})]
    }, {
      cN: "meta",
      b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
    }, {bK: "import", e: /$/, c: [e.CLCM, n]}]
  }
});
hljs.registerLanguage("haskell", function (e) {
  var i = {v: [e.C("--", "$"), e.C("{-", "-}", {c: ["self"]})]}, a = {cN: "meta", b: "{-#", e: "#-}"}, l = {
    cN: "meta",
    b: "^#",
    e: "$"
  }, c = {cN: "type", b: "\\b[A-Z][\\w']*", r: 0}, n = {
    b: "\\(",
    e: "\\)",
    i: '"',
    c: [a, l, {cN: "type", b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"}, e.inherit(e.TM, {b: "[_a-z][\\w']*"}), i]
  }, s = {b: "{", e: "}", c: n.c};
  return {
    aliases: ["hs"],
    k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
    c: [{bK: "module", e: "where", k: "module where", c: [n, i], i: "\\W\\.|;"}, {
      b: "\\bimport\\b",
      e: "$",
      k: "import qualified as hiding",
      c: [n, i],
      i: "\\W\\.|;"
    }, {
      cN: "class",
      b: "^(\\s*)?(class|instance)\\b",
      e: "where",
      k: "class family instance where",
      c: [c, n, i]
    }, {
      cN: "class",
      b: "\\b(data|(new)?type)\\b",
      e: "$",
      k: "data family type newtype deriving",
      c: [a, c, n, s, i]
    }, {bK: "default", e: "$", c: [c, n, i]}, {bK: "infix infixl infixr", e: "$", c: [e.CNM, i]}, {
      b: "\\bforeign\\b",
      e: "$",
      k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
      c: [c, e.QSM, i]
    }, {
      cN: "meta",
      b: "#!\\/usr\\/bin\\/env runhaskell",
      e: "$"
    }, a, l, e.QSM, e.CNM, c, e.inherit(e.TM, {b: "^[_a-z][\\w']*"}), i, {b: "->|<-"}]
  }
});
hljs.registerLanguage("markdown", function (e) {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [{cN: "section", v: [{b: "^#{1,6}", e: "$"}, {b: "^.+?\\n[=-]{2,}$"}]}, {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
      cN: "emphasis",
      v: [{b: "\\*.+?\\*"}, {b: "_.+?_", r: 0}]
    }, {cN: "quote", b: "^>\\s+", e: "$"}, {
      cN: "code",
      v: [{b: "`.+?`"}, {b: "^( {4}|	)", e: "$", r: 0}]
    }, {b: "^[-\\*]{3,}", e: "$"}, {
      b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
      rB: !0,
      c: [{cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0}, {
        cN: "link",
        b: "\\]\\(",
        e: "\\)",
        eB: !0,
        eE: !0
      }, {cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0}],
      r: 10
    }, {
      b: "^\\[.+\\]:",
      rB: !0,
      c: [{cN: "symbol", b: "\\[", e: "\\]:", eB: !0, eE: !0, starts: {cN: "link", e: "$"}}]
    }]
  }
});
hljs.registerLanguage("javascript", function (e) {
  return {
    aliases: ["js"],
    k: {
      keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import from as",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
    },
    c: [{cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/}, e.ASM, e.QSM, {
      cN: "string",
      b: "`",
      e: "`",
      c: [e.BE, {cN: "subst", b: "\\$\\{", e: "\\}"}]
    }, e.CLCM, e.CBCM, {
      cN: "number",
      v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}],
      r: 0
    }, {
      b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [e.CLCM, e.CBCM, e.RM, {b: /</, e: />\s*[);\]]/, r: 0, sL: "xml"}],
      r: 0
    }, {
      cN: "function",
      bK: "function",
      e: /\{/,
      eE: !0,
      c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        eB: !0,
        eE: !0,
        c: [e.CLCM, e.CBCM]
      }],
      i: /\[|%/
    }, {b: /\$[(.]/}, {b: "\\." + e.IR, r: 0}, {
      cN: "class",
      bK: "class",
      e: /[{;=]/,
      eE: !0,
      i: /[:"\[\]]/,
      c: [{bK: "extends"}, e.UTM]
    }, {bK: "constructor", e: /\{/, eE: !0}],
    i: /#/
  }
});
hljs.registerLanguage("diff", function (e) {
  return {
    aliases: ["patch"],
    c: [{
      cN: "meta",
      r: 10,
      v: [{b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/}, {b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}]
    }, {
      cN: "comment",
      v: [{b: /Index: /, e: /$/}, {b: /=====/, e: /=====$/}, {b: /^\-\-\-/, e: /$/}, {
        b: /^\*{3} /,
        e: /$/
      }, {b: /^\+\+\+/, e: /$/}, {b: /\*{5}/, e: /\*{5}$/}]
    }, {cN: "addition", b: "^\\+", e: "$"}, {cN: "deletion", b: "^\\-", e: "$"}, {cN: "addition", b: "^\\!", e: "$"}]
  }
});
hljs.registerLanguage("elixir", function (e) {
  var r = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", n = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", b = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote", c = {
    cN: "subst",
    b: "#\\{",
    e: "}",
    l: r,
    k: b
  }, a = {cN: "string", c: [e.BE, c], v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}]}, i = {
    cN: "function",
    bK: "def defp defmacro",
    e: /\B\b/,
    c: [e.inherit(e.TM, {b: r, endsParent: !0})]
  }, s = e.inherit(i, {cN: "class", bK: "defmodule defrecord", e: /\bdo\b|$|;/}), l = [a, e.HCM, s, i, {
    cN: "symbol",
    b: ":",
    c: [a, {b: n}],
    r: 0
  }, {cN: "symbol", b: r + ":", r: 0}, {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  }, {cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {b: "->"}, {
    b: "(" + e.RSR + ")\\s*",
    c: [e.HCM, {cN: "regexp", i: "\\n", c: [e.BE, c], v: [{b: "/", e: "/[a-z]*"}, {b: "%r\\[", e: "\\][a-z]*"}]}],
    r: 0
  }];
  return c.c = l, {l: r, k: b, c: l}
});
hljs.registerLanguage("clojure", function (e) {
  var t = {"builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"}, r = "a-zA-Z_\\-!.?+*=<>&#'", n = "[" + r + "][" + r + "0-9/;:]*", a = "[-+]?\\d+(\\.\\d+)?", o = {
    b: n,
    r: 0
  }, s = {cN: "number", b: a, r: 0}, i = e.inherit(e.QSM, {i: null}), c = e.C(";", "$", {r: 0}), d = {
    cN: "literal",
    b: /\b(true|false|nil)\b/
  }, l = {b: "[\\[\\{]", e: "[\\]\\}]"}, m = {cN: "comment", b: "\\^" + n}, p = e.C("\\^\\{", "\\}"), u = {
    cN: "symbol",
    b: "[:]" + n
  }, f = {b: "\\(", e: "\\)"}, h = {eW: !0, r: 0}, y = {
    k: t,
    l: n,
    cN: "name",
    b: n,
    starts: h
  }, b = [f, i, m, p, c, u, l, s, d, o];
  return f.c = [e.C("comment", ""), y, h], h.c = b, l.c = b, {aliases: ["clj"], i: /\S/, c: [f, i, m, p, c, u, l, s, d]}
});
hljs.registerLanguage("kotlin", function (e) {
  var r = "val var get set class trait object open private protected public final enum if else do while for when break continue throw try catch finally import package is as in return fun override default companion reified inline volatile transient native Byte Short Char Int Long Boolean Float Double Void Unit Nothing";
  return {
    k: {keyword: r, literal: "true false null"},
    c: [e.C("/\\*\\*", "\\*/", {r: 0, c: [{cN: "doctag", b: "@[A-Za-z]+"}]}), e.CLCM, e.CBCM, {
      cN: "type",
      b: /</,
      e: />/,
      rB: !0,
      eE: !1,
      r: 0
    }, {
      cN: "function",
      bK: "fun",
      e: "[(]|$",
      rB: !0,
      eE: !0,
      k: r,
      i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
      r: 5,
      c: [{b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]}, {
        cN: "type",
        b: /</,
        e: />/,
        k: "reified",
        r: 0
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: r,
        r: 0,
        i: /\([^\(,\s:]+,/,
        c: [{cN: "type", b: /:\s*/, e: /\s*[=\)]/, eB: !0, rE: !0, r: 0}]
      }, e.CLCM, e.CBCM]
    }, {
      cN: "class",
      bK: "class trait",
      e: /[:\{(]|$/,
      eE: !0,
      i: "extends implements",
      c: [e.UTM, {cN: "type", b: /</, e: />/, eB: !0, eE: !0, r: 0}, {
        cN: "type",
        b: /[,:]\s*/,
        e: /[<\(,]|$/,
        eB: !0,
        rE: !0
      }]
    }, {cN: "variable", bK: "var val", e: /\s*[=:$]/, eE: !0}, e.QSM, {
      cN: "meta",
      b: "^#!/usr/bin/env",
      e: "$",
      i: "\n"
    }, e.CNM]
  }
});
hljs.registerLanguage("gradle", function (e) {
  return {
    cI: !0,
    k: {keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"},
    c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.NM, e.RM]
  }
});
hljs.registerLanguage("vim", function (e) {
  return {
    l: /[!#@\w]+/,
    k: {
      keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
      built_in: "abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"
    },
    i: /[{:]/,
    c: [e.NM, e.ASM, {cN: "string", b: /"((\\")|[^"\n])*("|\n)/}, {
      cN: "variable",
      b: /[bwtglsav]:[\w\d_]*/
    }, {cN: "function", bK: "function function!", e: "$", r: 0, c: [e.TM, {cN: "params", b: "\\(", e: "\\)"}]}]
  }
});
hljs.registerLanguage("matlab", function (e) {
  var a = [e.CNM, {cN: "string", b: "'", e: "'", c: [e.BE, {b: "''"}]}], s = {r: 0, c: [{b: /'['\.]*/}]};
  return {
    k: {
      keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
      built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
    },
    i: '(//|"|#|/\\*|\\s+/\\w+)',
    c: [{
      cN: "function",
      bK: "function",
      e: "$",
      c: [e.UTM, {cN: "params", v: [{b: "\\(", e: "\\)"}, {b: "\\[", e: "\\]"}]}]
    }, {b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/, rB: !0, r: 0, c: [{b: /[a-zA-Z_][a-zA-Z_0-9]*/, r: 0}, s.c[0]]}, {
      b: "\\[",
      e: "\\]",
      c: a,
      r: 0,
      starts: s
    }, {b: "\\{", e: /}/, c: a, r: 0, starts: s}, {
      b: /\)/,
      r: 0,
      starts: s
    }, e.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.C("\\%", "$")].concat(a)
  }
});
hljs.registerLanguage("objectivec", function (e) {
  var t = {
    cN: "built_in",
    b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+"
  }, i = {
    keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
    literal: "false true FALSE TRUE nil YES NO NULL",
    built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
  }, n = /[a-zA-Z@][a-zA-Z0-9_]*/, o = "@interface @class @protocol @implementation";
  return {
    aliases: ["mm", "objc", "obj-c"],
    k: i,
    l: n,
    i: "</",
    c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
      cN: "string",
      v: [{b: '@"', e: '"', i: "\\n", c: [e.BE]}, {b: "'", e: "[^\\\\]'", i: "[^\\\\][^']"}]
    }, {cN: "meta", b: "#", e: "$", c: [{cN: "meta-string", v: [{b: '"', e: '"'}, {b: "<", e: ">"}]}]}, {
      cN: "class",
      b: "(" + o.split(" ").join("|") + ")\\b",
      e: "({|$)",
      eE: !0,
      k: o,
      l: n,
      c: [e.UTM]
    }, {b: "\\." + e.UIR, r: 0}]
  }
});
hljs.registerLanguage("ini", function (e) {
  var b = {
    cN: "string",
    c: [e.BE],
    v: [{b: "'''", e: "'''", r: 10}, {b: '"""', e: '"""', r: 10}, {b: '"', e: '"'}, {b: "'", e: "'"}]
  };
  return {
    aliases: ["toml"],
    cI: !0,
    i: /\S/,
    c: [e.C(";", "$"), e.HCM, {cN: "section", b: /^\s*\[+/, e: /\]+/}, {
      b: /^[a-z0-9\[\]_-]+\s*=\s*/,
      e: "$",
      rB: !0,
      c: [{cN: "attr", b: /[a-z0-9\[\]_-]+/}, {
        b: /=/,
        eW: !0,
        r: 0,
        c: [{cN: "literal", b: /\bon|off|true|false|yes|no\b/}, {
          cN: "variable",
          v: [{b: /\$[\w\d"][\w\d_]*/}, {b: /\$\{(.*?)}/}]
        }, b, {cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/}, e.NM]
      }]
    }]
  }
});
hljs.registerLanguage("scala", function (e) {
  var t = {cN: "meta", b: "@[A-Za-z]+"}, a = {
    cN: "subst",
    v: [{b: "\\$[A-Za-z0-9_]+"}, {b: "\\${", e: "}"}]
  }, r = {
    cN: "string",
    v: [{b: '"', e: '"', i: "\\n", c: [e.BE]}, {b: '"""', e: '"""', r: 10}, {
      b: '[a-z]+"',
      e: '"',
      i: "\\n",
      c: [e.BE, a]
    }, {cN: "string", b: '[a-z]+"""', e: '"""', c: [a], r: 10}]
  }, c = {cN: "symbol", b: "'\\w[\\w\\d_]*(?!')"}, i = {cN: "type", b: "\\b[A-Z][A-Za-z0-9_]*", r: 0}, s = {
    cN: "title",
    b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
    r: 0
  }, n = {
    cN: "class",
    bK: "class object trait type",
    e: /[:={\[\n;]/,
    eE: !0,
    c: [{bK: "extends with", r: 10}, {b: /\[/, e: /\]/, eB: !0, eE: !0, r: 0, c: [i]}, {
      cN: "params",
      b: /\(/,
      e: /\)/,
      eB: !0,
      eE: !0,
      r: 0,
      c: [i]
    }, s]
  }, l = {cN: "function", bK: "def", e: /[:={\[(\n;]/, eE: !0, c: [s]};
  return {
    k: {
      literal: "true false null",
      keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
    }, c: [e.CLCM, e.CBCM, r, c, i, l, n, e.CNM, t]
  }
});
hljs.registerLanguage("dart", function (e) {
  var t = {cN: "subst", b: "\\$\\{", e: "}", k: "true false null this is new super"}, r = {
    cN: "string",
    v: [{b: "r'''", e: "'''"}, {b: 'r"""', e: '"""'}, {b: "r'", e: "'", i: "\\n"}, {
      b: 'r"',
      e: '"',
      i: "\\n"
    }, {b: "'''", e: "'''", c: [e.BE, t]}, {b: '"""', e: '"""', c: [e.BE, t]}, {
      b: "'",
      e: "'",
      i: "\\n",
      c: [e.BE, t]
    }, {b: '"', e: '"', i: "\\n", c: [e.BE, t]}]
  };
  t.c = [e.CNM, r];
  var n = {
    keyword: "assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with abstract as dynamic export external factory get implements import library operator part set static typedef",
    built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
  };
  return {
    k: n,
    c: [r, e.C("/\\*\\*", "\\*/", {sL: "markdown"}), e.C("///", "$", {sL: "markdown"}), e.CLCM, e.CBCM, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      c: [{bK: "extends implements"}, e.UTM]
    }, e.CNM, {cN: "meta", b: "@[A-Za-z]+"}, {b: "=>"}]
  }
});
hljs.registerLanguage("scss", function (e) {
  var t = "[a-zA-Z-][a-zA-Z0-9_-]*", i = {cN: "variable", b: "(\\$" + t + ")\\b"}, r = {
    cN: "number",
    b: "#[0-9A-Fa-f]+"
  };
  ({
    cN: "attribute",
    b: "[A-Z\\_\\.\\-]+",
    e: ":",
    eE: !0,
    i: "[^\\s]",
    starts: {eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "meta", b: "!important"}]}
  });
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CLCM, e.CBCM, {cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0}, {
      cN: "selector-class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {cN: "selector-attr", b: "\\[", e: "\\]", i: "$"}, {
      cN: "selector-tag",
      b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
      r: 0
    }, {b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"}, {b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"}, i, {
      cN: "attribute",
      b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
      i: "[^\\s]"
    }, {b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"}, {
      b: ":",
      e: ";",
      c: [i, r, e.CSSNM, e.QSM, e.ASM, {cN: "meta", b: "!important"}]
    }, {
      b: "@",
      e: "[{;]",
      k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
      c: [i, e.QSM, e.ASM, r, e.CSSNM, {b: "\\s[A-Za-z0-9_.-]+", r: 0}]
    }]
  }
});
hljs.registerLanguage("css", function (e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*", t = {
    b: /[A-Z\_\.\-]+\s*:/,
    rB: !0,
    e: ";",
    eW: !0,
    c: [{
      cN: "attribute",
      b: /\S/,
      e: ":",
      eE: !0,
      starts: {
        eW: !0,
        eE: !0,
        c: [{
          b: /[\w-]+\s*\(/,
          rB: !0,
          c: [{cN: "built_in", b: /[\w-]+/}]
        }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
      }
    }]
  };
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {
      cN: "selector-class",
      b: /\.[A-Za-z0-9_-]+/
    }, {cN: "selector-attr", b: /\[/, e: /\]/, i: "$"}, {
      cN: "selector-pseudo",
      b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
    }, {b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
      b: "@",
      e: "[{;]",
      c: [{cN: "keyword", b: /\S+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
    }, {cN: "selector-tag", b: c, r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
  }
});
hljs.registerLanguage("rust", function (e) {
  var t = "([uif](8|16|32|64|size))?", r = e.inherit(e.CBCM);
  r.c.push("self");
  var n = "Copy Send Sized Sync Drop Fn FnMut FnOnce drop Box ToOwned Clone PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator Option Some None Result Ok Err SliceConcatExt String ToString Vec assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!";
  return {
    aliases: ["rs"],
    k: {
      keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",
      literal: "true false",
      built_in: n
    },
    l: e.IR + "!?",
    i: "</",
    c: [e.CLCM, r, e.inherit(e.QSM, {i: null}), {
      cN: "string",
      v: [{b: /r(#*)".*?"\1(?!#)/}, {b: /'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]
    }, {cN: "symbol", b: /'[a-zA-Z_][a-zA-Z0-9_]*/}, {
      cN: "number",
      v: [{b: "\\b0b([01_]+)" + t}, {b: "\\b0o([0-7_]+)" + t}, {b: "\\b0x([A-Fa-f0-9_]+)" + t}, {b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t}],
      r: 0
    }, {cN: "function", bK: "fn", e: "(\\(|<)", eE: !0, c: [e.UTM]}, {
      cN: "meta",
      b: "#\\!?\\[",
      e: "\\]"
    }, {cN: "class", bK: "type", e: "(=|<)", c: [e.UTM], i: "\\S"}, {
      cN: "class",
      bK: "trait enum",
      e: "{",
      c: [e.inherit(e.UTM, {endsParent: !0})],
      i: "[\\w\\d]"
    }, {b: e.IR + "::", k: {built_in: n}}, {b: "->"}]
  }
});
hljs.registerLanguage("http", function (e) {
  var t = "HTTP/[0-9\\.]+";
  return {
    aliases: ["https"],
    i: "\\S",
    c: [{b: "^" + t, e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
      b: "^[A-Z]+ (.*?) " + t + "$",
      rB: !0,
      e: "$",
      c: [{cN: "string", b: " ", e: " ", eB: !0, eE: !0}, {b: t}, {cN: "keyword", b: "[A-Z]+"}]
    }, {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {e: "$", r: 0}}, {
      b: "\\n\\n",
      starts: {sL: [], eW: !0}
    }]
  }
});
hljs.registerLanguage("cos", function (e) {
  var r = {cN: "string", v: [{b: '"', e: '"', c: [{b: '""', r: 0}]}]}, t = {
    cN: "number",
    b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
    r: 0
  }, s = (e.IR + "\\s*\\(", {keyword: ["break", "catch", "close", "continue", "do", "d", "else", "elseif", "for", "goto", "halt", "hang", "h", "if", "job", "j", "kill", "k", "lock", "l", "merge", "new", "open", "quit", "q", "read", "r", "return", "set", "s", "tcommit", "throw", "trollback", "try", "tstart", "use", "view", "while", "write", "w", "xecute", "x", "zkill", "znspace", "zn", "ztrap", "zwrite", "zw", "zzdump", "zzwrite", "print", "zbreak", "zinsert", "zload", "zprint", "zremove", "zsave", "zzprint", "mv", "mvcall", "mvcrt", "mvdim", "mvprint", "zquit", "zsync", "ascii"].join(" ")});
  return {
    cI: !0,
    aliases: ["cos", "cls"],
    k: s,
    c: [t, r, e.CLCM, e.CBCM, {cN: "built_in", b: /\$\$?[a-zA-Z]+/}, {
      cN: "keyword",
      b: /\$\$\$[a-zA-Z]+/
    }, {cN: "symbol", b: /\^%?[a-zA-Z][\w]*/}, {cN: "keyword", b: /##class/}, {
      b: /&sql\(/,
      e: /\)/,
      eB: !0,
      eE: !0,
      sL: "sql"
    }, {b: /&(js|jscript|javascript)</, e: />/, eB: !0, eE: !0, sL: "javascript"}, {
      b: /&html<\s*</,
      e: />\s*>/,
      sL: "xml"
    }]
  }
});
hljs.registerLanguage("cpp", function (t) {
  var e = {cN: "keyword", b: "\\b[a-z\\d_]*_t\\b"}, r = {
    cN: "string",
    v: [t.inherit(t.QSM, {b: '((u8?|U)|L)?"'}), {b: '(u8?|U)?R"', e: '"', c: [t.BE]}, {b: "'\\\\?.", e: "'", i: "."}]
  }, i = {cN: "number", v: [{b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"}, {b: t.CNR}], r: 0}, s = {
    cN: "meta",
    b: "#",
    e: "$",
    k: {"meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef"},
    c: [{b: /\\\n/, r: 0}, {
      bK: "include",
      e: "$",
      k: {"meta-keyword": "include"},
      c: [t.inherit(r, {cN: "meta-string"}), {cN: "meta-string", b: "<", e: ">", i: "\\n"}]
    }, r, t.CLCM, t.CBCM]
  }, a = t.IR + "\\s*\\(", c = {
    keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
    built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
    literal: "true false nullptr NULL"
  };
  return {
    aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
    k: c,
    i: "</",
    c: [e, t.CLCM, t.CBCM, i, r, s, {
      b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
      e: ">",
      k: c,
      c: ["self", e]
    }, {b: t.IR + "::", k: c}, {bK: "new throw return else", r: 0}, {
      cN: "function",
      b: "(" + t.IR + "[\\*&\\s]+)+" + a,
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: c,
      i: /[^\w\s\*&]/,
      c: [{b: a, rB: !0, c: [t.TM], r: 0}, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: c,
        r: 0,
        c: [t.CLCM, t.CBCM, r, i]
      }, t.CLCM, t.CBCM, s]
    }]
  }
});
hljs.registerLanguage("nginx", function (e) {
  var r = {cN: "variable", v: [{b: /\$\d+/}, {b: /\$\{/, e: /}/}, {b: "[\\$\\@]" + e.UIR}]}, b = {
    eW: !0,
    l: "[a-z/_]+",
    k: {literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},
    r: 0,
    i: "=>",
    c: [e.HCM, {cN: "string", c: [e.BE, r], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}]}, {
      b: "([a-z]+):/",
      e: "\\s",
      eW: !0,
      eE: !0,
      c: [r]
    }, {
      cN: "regexp",
      c: [e.BE, r],
      v: [{b: "\\s\\^", e: "\\s|{|;", rE: !0}, {
        b: "~\\*?\\s+",
        e: "\\s|{|;",
        rE: !0
      }, {b: "\\*(\\.[a-z\\-]+)+"}, {b: "([a-z\\-]+\\.)+\\*"}]
    }, {cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"}, {
      cN: "number",
      b: "\\b\\d+[kKmMgGdshdwy]*\\b",
      r: 0
    }, r]
  };
  return {
    aliases: ["nginxconf"],
    c: [e.HCM, {b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{cN: "section", b: e.UIR}], r: 0}, {
      b: e.UIR + "\\s",
      e: ";|{",
      rB: !0,
      c: [{cN: "attribute", b: e.UIR, starts: b}],
      r: 0
    }],
    i: "[^\\s\\}]"
  }
});
hljs.registerLanguage("protobuf", function (e) {
  return {
    k: {
      keyword: "package import option optional required repeated group",
      built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
      literal: "true false"
    },
    c: [e.QSM, e.NM, e.CLCM, {
      cN: "class",
      bK: "message enum service",
      e: /\{/,
      i: /\n/,
      c: [e.inherit(e.TM, {starts: {eW: !0, eE: !0}})]
    }, {cN: "function", bK: "rpc", e: /;/, eE: !0, k: "rpc returns"}, {b: /^\s*[A-Z_]+/, e: /\s*=/, eE: !0}]
  }
});
hljs.registerLanguage("apache", function (e) {
  var r = {cN: "number", b: "[\\$%]\\d+"};
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [e.HCM, {cN: "section", b: "</?", e: ">"}, {
      cN: "attribute",
      b: /\w+/,
      r: 0,
      k: {nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},
      starts: {
        e: /$/,
        r: 0,
        k: {literal: "on off all"},
        c: [{cN: "meta", b: "\\s\\[", e: "\\]$"}, {cN: "variable", b: "[\\$%]\\{", e: "\\}", c: ["self", r]}, r, e.QSM]
      }
    }],
    i: /\S/
  }
});
hljs.registerLanguage("clojure-repl", function (e) {
  return {c: [{cN: "meta", b: /^([\w.-]+|\s*#_)=>/, starts: {e: /$/, sL: "clojure"}}]}
});
hljs.registerLanguage("cs", function (e) {
  var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield", r = e.IR + "(<" + e.IR + ">)?";
  return {
    aliases: ["csharp"],
    k: t,
    i: /::/,
    c: [e.C("///", "$", {
      rB: !0,
      c: [{cN: "doctag", v: [{b: "///", r: 0}, {b: "<!--|-->"}, {b: "</?", e: ">"}]}]
    }), e.CLCM, e.CBCM, {
      cN: "meta",
      b: "#",
      e: "$",
      k: {"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"}
    }, {cN: "string", b: '@"', e: '"', c: [{b: '""'}]}, e.ASM, e.QSM, e.CNM, {
      bK: "class interface",
      e: /[{;=]/,
      i: /[^\s:]/,
      c: [e.TM, e.CLCM, e.CBCM]
    }, {
      bK: "namespace",
      e: /[{;=]/,
      i: /[^\s:]/,
      c: [e.inherit(e.TM, {b: "[a-zA-Z](\\.?\\w)*"}), e.CLCM, e.CBCM]
    }, {bK: "new return throw await", r: 0}, {
      cN: "function",
      b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0}, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        eB: !0,
        eE: !0,
        k: t,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }]
  }
});
hljs.registerLanguage("php", function (e) {
  var c = {b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"}, a = {cN: "meta", b: /<\?(php)?|\?>/}, i = {
    cN: "string",
    c: [e.BE, a],
    v: [{b: 'b"', e: '"'}, {b: "b'", e: "'"}, e.inherit(e.ASM, {i: null}), e.inherit(e.QSM, {i: null})]
  }, t = {v: [e.BNM, e.CNM]};
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
      c: [{
        cN: "doctag",
        b: "@[A-Za-z]+"
      }, a]
    }), e.C("__halt_compiler.+?;", !1, {eW: !0, k: "__halt_compiler", l: e.UIR}), {
      cN: "string",
      b: /<<<['"]?\w+['"]?$/,
      e: /^\w+;?$/,
      c: [e.BE, {cN: "subst", v: [{b: /\$\w+/}, {b: /\{\$/, e: /\}/}]}]
    }, a, c, {b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/}, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      eE: !0,
      i: "\\$|\\[|%",
      c: [e.UTM, {cN: "params", b: "\\(", e: "\\)", c: ["self", c, e.CBCM, i, t]}]
    }, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      i: /[:\(\$"]/,
      c: [{bK: "extends implements"}, e.UTM]
    }, {bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM]}, {bK: "use", e: ";", c: [e.UTM]}, {b: "=>"}, i, t]
  }
});