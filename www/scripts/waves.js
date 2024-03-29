/*!
 * Waves v0.5.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!(function (a) {
  "use strict";
  function b(a) {
    return null !== a && a === a.window;
  }
  function c(a) {
    return b(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  function d(a) {
    var b,
      d,
      e = { top: 0, left: 0 },
      f = a && a.ownerDocument;
    return (
      (b = f.documentElement),
      "undefined" != typeof a.getBoundingClientRect &&
        (e = a.getBoundingClientRect()),
      (d = c(f)),
      {
        top: e.top + d.pageYOffset - b.clientTop,
        left: e.left + d.pageXOffset - b.clientLeft,
      }
    );
  }
  function e(a) {
    var b = "";
    for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
    return b;
  }
  var f = f || {},
    g = document.querySelectorAll.bind(document),
    h = {
      duration: 500,
      show: function (a) {
        if (2 === a.button) return !1;
        var b = this,
          c = document.createElement("div");
        (c.className = "waves-ripple"), b.appendChild(c);
        var f = d(b),
          g = a.pageY - f.top - 45,
          i = a.pageX - f.left - 45,
          j = "scale(" + (b.clientWidth / 100) * 2.5 + ")";
        c.setAttribute("data-hold", Date.now()),
          c.setAttribute("data-scale", j),
          c.setAttribute("data-x", i),
          c.setAttribute("data-y", g);
        var k = { top: g + "px", left: i + "px" };
        (c.className = c.className + " waves-notransition"),
          c.setAttribute("style", e(k)),
          (c.className = c.className.replace("waves-notransition", "")),
          (k["-webkit-transform"] = j),
          (k["-moz-transform"] = j),
          (k["-ms-transform"] = j),
          (k["-o-transform"] = j),
          (k.transform = j),
          (k.opacity = "1"),
          (k["-webkit-transition-duration"] = h.duration + "ms"),
          (k["-moz-transition-duration"] = h.duration + "ms"),
          (k["-o-transition-duration"] = h.duration + "ms"),
          (k["transition-duration"] = h.duration + "ms"),
          c.setAttribute("style", e(k));
      },
      hide: function () {
        for (
          var a = this,
            b = (1.4 * a.clientWidth, null),
            c = a.children.length,
            d = 0;
          c > d;
          d++
        )
          -1 === a.children[d].className.indexOf("waves-ripple") ||
            (b = a.children[d]);
        if (!b) return !1;
        var f = b.getAttribute("data-x"),
          g = b.getAttribute("data-y"),
          i = b.getAttribute("data-scale"),
          j = Date.now() - Number(b.getAttribute("data-hold")),
          k = 500 - j;
        0 > k && (k = 0),
          setTimeout(function () {
            var c = {
              top: g + "px",
              left: f + "px",
              opacity: "0",
              "-webkit-transition-duration": h.duration + "ms",
              "-moz-transition-duration": h.duration + "ms",
              "-o-transition-duration": h.duration + "ms",
              "transition-duration": h.duration + "ms",
              "-webkit-transform": i,
              "-moz-transform": i,
              "-ms-transform": i,
              "-o-transform": i,
              transform: i,
            };
            b.setAttribute("style", e(c)),
              setTimeout(function () {
                try {
                  a.removeChild(b);
                } catch (c) {
                  return !1;
                }
              }, h.duration);
          }, k);
      },
      wrapInput: function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if ("input" === c.tagName.toLowerCase()) {
            var d = c.parentNode;
            if (
              "i" === d.tagName.toLowerCase() &&
              -1 !== d.className.indexOf("waves-effect")
            )
              return !1;
            var e = document.createElement("i");
            e.className = c.className + " waves-input-wrapper";
            var f = c.getAttribute("style"),
              g =
                "width:" +
                c.offsetWidth +
                "px;height:" +
                c.clientHeight +
                "px;";
            f || (f = ""),
              e.setAttribute("style", g + f),
              (c.className = "waves-button-input"),
              c.removeAttribute("style"),
              d.replaceChild(e, c),
              e.appendChild(c);
          }
        }
      },
    };
  (f.displayEffect = function (a) {
    (a = a || {}),
      "duration" in a && (h.duration = a.duration),
      h.wrapInput(g(".waves-effect")),
      Array.prototype.forEach.call(g(".waves-effect"), function (a) {
        a.addEventListener("mousedown", h.show, !1),
          a.addEventListener("mouseup", h.hide, !1),
          a.addEventListener("mouseleave", h.hide, !1);
      });
  }),
    (a.Waves = f);
})(window);
//# sourceMappingURL=waves.min.js.map
