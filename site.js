/* E-Mail links: the normal mailto: link always goes first, so the visitor's own mail app opens (any provider).
   Only on laptops and desktops, if nothing seems to open within about two seconds, a small hint appears with
   a Copy address button, which works with any mail provider. Phones and tablets keep the plain mailto: behaviour. */
(function () {
  if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  var hint = null, timer = null, left = false;
  function clear() { if (timer) { clearTimeout(timer); timer = null; } }
  function close() { clear(); if (hint) { hint.remove(); hint = null; } }
  function leftPage() { left = true; clear(); }
  window.addEventListener("blur", leftPage);
  document.addEventListener("visibilitychange", function () { if (document.hidden) leftPage(); });
  function btn(label, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = label;
    b.addEventListener("click", function () { fn(b); });
    return b;
  }
  function show(a, to, subject) {
    var q = encodeURIComponent;
    hint = document.createElement("div");
    hint.className = "mail-menu mail-hint"; hint.setAttribute("role", "status");
    var t = document.createElement("span"); t.textContent = "No mail app detected?"; hint.appendChild(t);
    hint.appendChild(btn("Copy address", function (b) {
      var done = function () { b.textContent = to + " (copied)"; setTimeout(close, 3000); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(to).then(done, close); else close();
    }));
    document.body.appendChild(hint);
    var r = a.getBoundingClientRect(), w = hint.offsetWidth;
    var h = hint.offsetHeight, below = window.innerHeight - r.bottom, above = r.top;
    // below the link when there is room, otherwise above it, so the message is never cut off at the bottom of the screen
    hint.style.top = (below >= h + 14 || above < h + 14 ? window.scrollY + r.bottom + 6 : window.scrollY + r.top - h - 6) + "px";
    hint.style.left = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - w - 8)) + "px";
    hint.scrollIntoView({ block: "nearest" });
    timer = setTimeout(close, 15000);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!a) { if (hint && !hint.contains(e.target)) close(); return; }
    close(); left = false;   // no preventDefault: the visitor's own mail app gets the click first
    var parts = a.getAttribute("href").slice(7).split("?");
    var subject = new URLSearchParams(parts[1] || "").get("subject") || "";
    timer = setTimeout(function () { timer = null; if (!left) show(a, parts[0], subject); }, 2000);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
