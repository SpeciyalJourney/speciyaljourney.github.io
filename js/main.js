(function () {
  "use strict";
  var C = window.SPECIYAL;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- Nama tamu dari ?to= ---------- */
  var params = new URLSearchParams(location.search);
  var guest = params.get("to");
  if (guest) $("guestName").textContent = guest.trim().slice(0, 80);

  /* ---------- Isi konten dari config ---------- */
  var H = C.honoree, E = C.event;
  $("honoreePhoto").src = H.photo;
  $("honoreeName").textContent = H.name;
  $("honoreeNick").textContent = "“" + H.nickname + "”";
  $("honoreePos").textContent = H.position;
  $("birth").textContent = H.birth;
  $("retire").textContent = H.retire;
  $("quote").textContent = H.quote;
  $("bio").innerHTML = H.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("edu").textContent = H.education;
  $("facts").innerHTML = H.facts.map(function (f) {
    return '<div><b data-count="' + Number(f.value) + '">0</b><span>' + esc(f.label) + "</span></div>";
  }).join("");
  $("values").innerHTML = (H.values || []).map(function (v) { return "<span>" + esc(v) + "</span>"; }).join("");

  /* ---------- Jejak langkah ---------- */
  $("timeline").innerHTML = C.journey.map(function (j) {
    return '<li class="reveal" data-icon="' + esc(j.icon || "✈") + '"><div class="tl-card' + (j.finish ? " finish-card" : "") +
      '"><span class="tl-year">' + esc(j.year) + '</span><p class="tl-title">' + esc(j.title) +
      '</p><p class="tl-place">' + esc(j.place) + '</p><p class="tl-desc">' + esc(j.desc) + "</p></div></li>";
  }).join("");

  /* ---------- Boarding pass riwayat jabatan ---------- */
  var SHOW = 4, P = C.positions || [];
  $("passes").innerHTML = P.slice().reverse().map(function (p, i) {
    var cls = "pass reveal" + (p.special ? " special" : "") + (i === 0 ? " current" : "") + (i >= SHOW ? " hidden-pass" : "");
    var d = p.date.split(" ");
    var top = d.length === 3 ? d[0] + " " + d[1] : d.slice(0, -1).join(" ");
    return '<div class="' + cls + '"><div class="pass-date"><small>' + esc(top.toUpperCase()) + "</small><b>" +
      esc(d[d.length - 1]) + '</b></div><div class="pass-body"><span class="pass-no">NO. ' +
      String(P.length - i).padStart(2, "0") + '</span><p class="pass-role">' + esc(p.role) +
      '</p><p class="pass-unit">' + esc(p.unit) + "</p></div></div>";
  }).join("");
  var moreBtn = $("morePasses");
  if (P.length <= SHOW) moreBtn.hidden = true;
  moreBtn.addEventListener("click", function () {
    var open = $("passes").classList.toggle("open");
    $("passes").querySelectorAll(".hidden-pass").forEach(function (el) { el.classList.add("in"); });
    moreBtn.textContent = open ? "Tutup ▴" : "Lihat semua jabatan ▾";
  });

  /* ---------- Pita "Speciyal Journey" ---------- */
  document.querySelectorAll("[data-ribbon]").forEach(function (t) {
    var unit = '<img src="assets/img/logo-wordmark.png" alt=""><span>✦</span>';
    t.innerHTML = new Array(12).join(unit);
  });

  $("eventName").textContent = E.name;
  $("evDay").textContent = E.dayLabel;
  $("evDate").textContent = E.dateLabel;
  $("evTime").textContent = E.timeLabel;
  $("evVenue").textContent = E.venue;
  $("evAddr").textContent = E.venueSub || "";
  $("evAddr").hidden = !E.venueSub;
  $("evNotes").innerHTML = (E.notes || []).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("");
  $("evDress").textContent = E.dressCode;
  $("mapBtn").href = E.mapsLink || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(E.mapsQuery));

  $("rundownList").innerHTML = C.rundown.map(function (r) {
    return '<div class="rd-item reveal"><div class="rd-time">' + esc(r.time) + '</div><div><p class="rd-title">' +
      esc(r.title) + "</p>" + (r.desc ? '<p class="rd-desc">' + esc(r.desc) + "</p>" : "") + "</div></div>";
  }).join("");

  $("gallery").innerHTML = C.gallery.map(function (g, i) {
    return '<figure class="reveal" data-i="' + i + '"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.caption) +
      '"><figcaption>' + esc(g.caption) + "</figcaption></figure>";
  }).join("");

  $("closing").textContent = C.closing;
  $("office").textContent = C.office;

  /* ---------- Kalender ---------- */
  var gcal = function (iso) { return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); };
  $("calBtn").href = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(E.name + " — " + H.nickname) +
    "&dates=" + gcal(E.start) + "/" + gcal(E.end) +
    "&location=" + encodeURIComponent(E.venue + ", " + E.address) +
    "&details=" + encodeURIComponent("Speciyal Journey · " + location.href.split("?")[0]);

  /* ---------- Hitung mundur ---------- */
  var target = new Date(E.start).getTime();
  var DAY = 864e5, WIB = 7 * 36e5;
  function tick() {
    var now = Date.now(), diff = Math.max(0, target - now);
    $("cdD").textContent = Math.floor(diff / DAY);
    $("cdH").textContent = Math.floor(diff / 36e5) % 24;
    $("cdM").textContent = Math.floor(diff / 6e4) % 60;
    $("cdS").textContent = Math.floor(diff / 1e3) % 60;
    // H-n dihitung per tanggal kalender WIB
    var hDays = Math.floor((target + WIB) / DAY) - Math.floor((now + WIB) / DAY);
    var label = hDays > 0 ? "H-" + hDays : hDays === 0 ? "HARI-H" : "TERIMA KASIH";
    var hc = $("hCount");
    if (hc.textContent !== label) { hc.textContent = label; hc.style.fontSize = Math.min(19, 60 / label.length) + "cqw"; }
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Musik ---------- */
  var audio = $("bgm"), btn = $("musicBtn"), playing = false, synth = null;

  // Melodi kotak musik bawaan (dipakai jika file lagu belum tersedia)
  function MusicBox() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    var ctx = new Ctx(), master = ctx.createGain(), timer = null, step = 0, next = 0;
    master.gain.value = 0.18; master.connect(ctx.destination);
    var hz = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };
    // Progresi I–vi–IV–V di C mayor, arpeggio lembut
    var chords = [[60, 64, 67, 72], [57, 60, 64, 69], [53, 57, 60, 65], [55, 59, 62, 67]];
    var melody = [76, 74, 72, 74, 76, 76, 76, null, 74, 74, 74, null, 76, 79, 79, null,
                  76, 74, 72, 74, 76, 76, 76, 76, 74, 74, 76, 74, 72, null, null, null];
    var beat = 0.42;
    function note(m, t, len, vol, type) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.value = hz(m);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + len + 0.05);
    }
    function schedule() {
      while (next < ctx.currentTime + 0.6) {
        var chord = chords[Math.floor(step / 8) % 4];
        note(chord[step % 4] - 12, next, beat * 2.2, 0.22, "sine");
        if (step % 8 === 0) note(chord[0] - 24, next, beat * 7, 0.3, "sine");
        var m = melody[step % melody.length];
        if (m) note(m, next, beat * 2.5, 0.25, "triangle");
        next += beat; step++;
      }
    }
    return {
      play: function () { ctx.resume(); next = ctx.currentTime + 0.1; schedule(); timer = setInterval(schedule, 150); },
      pause: function () { clearInterval(timer); ctx.suspend(); },
    };
  }

  function setState(on) {
    playing = on;
    btn.classList.toggle("playing", on);
    btn.classList.toggle("paused", !on);
  }
  function useSynth() {
    if (synth && playing) return;
    if (!synth) { try { synth = MusicBox(); } catch (e) { return; } }
    synth.play(); setState(true);
  }
  function startMusic() {
    if (synth) return useSynth();
    if (!C.music) return useSynth();
    audio.src = C.music;
    var p = audio.play();
    if (p && p.then) p.then(function () { setState(true); }, useSynth);
    else setState(true);
  }
  audio.addEventListener("error", function () { if (!synth) useSynth(); });
  btn.addEventListener("click", function () {
    if (playing) { synth ? synth.pause() : audio.pause(); setState(false); }
    else if (synth) { synth.play(); setState(true); }
    else { audio.play().then(function () { setState(true); }, useSynth); }
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && playing) { synth ? synth.pause() : audio.pause(); setState(false); }
  });

  /* ---------- Buka leaflet ---------- */
  $("openBtn").addEventListener("click", function () {
    $("cover").classList.add("opened");
    document.body.classList.remove("locked");
    $("main").setAttribute("aria-hidden", "false");
    $("bottomNav").classList.add("show");
    btn.classList.add("show");
    startMusic();
    window.scrollTo(0, 0);
  });

  /* ---------- Animasi muncul saat scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- Navigasi aktif ---------- */
  var links = document.querySelectorAll(".bottom-nav a");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "profil", "peta", "acara", "rundown", "galeri"].forEach(function (id) { spy.observe($(id)); });

  /* ---------- Lightbox album (geser / panah) ---------- */
  var lb = $("lightbox"), lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption"), cur = 0;
  function show(i) {
    var n = C.gallery.length; cur = (i + n) % n;
    lbImg.src = C.gallery[cur].src; lbCap.textContent = C.gallery[cur].caption;
  }
  $("gallery").addEventListener("click", function (e) {
    var fig = e.target.closest("figure"); if (!fig) return;
    show(Number(fig.dataset.i)); lb.hidden = false;
  });
  lb.querySelector(".prev").addEventListener("click", function () { show(cur - 1); });
  lb.querySelector(".next").addEventListener("click", function () { show(cur + 1); });
  lb.querySelector(".lb-close").addEventListener("click", function () { lb.hidden = true; });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.hidden = true; });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") lb.hidden = true;
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  var sx = null;
  lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
  });

  /* ---------- Angka menghitung naik ---------- */
  var counted = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      counted.unobserve(e.target);
      var el = e.target, to = Number(el.dataset.count), t0 = null;
      (function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / 1400);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { counted.observe(el); });

  /* ---------- Peta rute perjalanan ---------- */
  (function buildMap() {
    var svg = $("routeMap"), NS = "http://www.w3.org/2000/svg";
    var W = 390, Hh = 150, K = 25, LON0 = 104.6, LAT0 = 5.0;
    var X = function (lon) { return (lon - LON0) * K + 6; };
    var Y = function (lat) { return (-lat - LAT0) * K + 40; };
    svg.setAttribute("viewBox", "0 0 " + W + " " + Hh);
    var land = {
      Jawa: [[105.2,-6.8],[106.0,-5.95],[106.8,-6.05],[107.6,-6.2],[108.3,-6.25],[108.6,-6.7],[109.4,-6.85],[110.4,-6.9],[110.9,-6.45],[111.5,-6.6],[112.6,-6.9],[112.7,-7.2],[113.5,-7.6],[114.4,-7.75],[114.6,-8.6],[113.3,-8.3],[112.0,-8.3],[110.5,-8.15],[109.0,-7.75],[108.0,-7.8],[106.5,-7.4],[105.5,-6.9]],
      Madura: [[112.7,-7.0],[114.0,-6.9],[113.9,-7.15],[112.8,-7.2]],
      Bali: [[114.45,-8.1],[115.2,-8.05],[115.7,-8.4],[115.2,-8.8],[114.6,-8.4]],
      Lombok: [[116.05,-8.35],[116.5,-8.25],[116.7,-8.8],[116.05,-8.9]],
      Sumbawa: [[116.8,-8.5],[117.3,-8.4],[117.8,-8.1],[118.3,-8.2],[119.0,-8.3],[119.1,-8.7],[118.4,-8.8],[117.7,-9.0],[117.0,-8.9]],
      Sumatra: [[104.6,-5.4],[105.3,-5.6],[105.8,-5.8],[105.6,-6.0],[104.6,-6.0]]
    };
    var html = "";
    Object.keys(land).forEach(function (k) {
      html += '<path class="land" d="M' + land[k].map(function (p) { return X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1); }).join(" L") + 'Z"/>';
    });
    html += '<text class="sea-label" x="' + X(108.8) + '" y="' + Y(-5.65) + '">LAUT JAWA</text>';
    html += '<text class="sea-label" x="' + X(108.2) + '" y="' + Y(-8.75) + '">SAMUDRA HINDIA</text>';
    html += '<text class="compass" x="14" y="22">N ↑</text>';

    // Titik rute (Yokohama = kotak di pojok)
    var far = { x: 300, y: 18 };
    var pts = C.route.map(function (r) { return r.far ? { x: far.x, y: far.y + 14, r: r } : { x: X(r.lon), y: Y(r.lat), r: r }; });
    var d = "M" + pts[0].x.toFixed(1) + " " + pts[0].y.toFixed(1);
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i];
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, dist = Math.hypot(b.x - a.x, b.y - a.y);
      var lift = Math.max(10, dist * 0.35) * (i % 2 ? 1 : -0.6);
      d += " Q" + mx.toFixed(1) + " " + (my - lift).toFixed(1) + " " + b.x.toFixed(1) + " " + b.y.toFixed(1);
    }
    html += '<path class="route-bg" d="' + d + '"/>';
    html += '<mask id="routeMask"><path id="routeDraw" d="' + d + '" fill="none" stroke="#fff" stroke-width="6" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></mask>';
    html += '<path class="route" d="' + d + '" mask="url(#routeMask)"/>';
    html += '<path id="routePath" d="' + d + '" fill="none" stroke="none"/>';

    html += '<g class="far-box"><rect x="' + (far.x - 52) + '" y="4" width="104" height="26" rx="5"/>' +
      '<text x="' + far.x + '" y="15" text-anchor="middle">✈ YOKOHAMA, JEPANG</text>' +
      '<text x="' + far.x + '" y="25" text-anchor="middle">Tugas Belajar · 2004</text></g>';

    // Label kota (sekali per kota)
    var labelPos = { "Jakarta": [-4, -7, "end"], "Pondok Gede": [5, 13, "start"], "Pasar Minggu": [-5, 13, "end"],
      "Surabaya": [0, -8, "middle"], "Sumbawa Besar": [0, -8, "middle"], "Batang": [0, -8, "middle"],
      "Solo": [5, -3, "start"], "Yogyakarta": [0, 13, "middle"] };
    var seen = {};
    var pinFor = function (r, cls, delay) {
      var p = labelPos[r.city] || [0, -8, "middle"];
      var showLabel = !seen[r.city]; seen[r.city] = true;
      return '<g class="pin ' + cls + '" style="transition-delay:' + delay + 's"><circle cx="' + X(r.lon).toFixed(1) + '" cy="' + Y(r.lat).toFixed(1) +
        '" r="' + (cls === "final" ? 4.5 : 3.2) + '"/>' + (showLabel ? '<text x="' + (X(r.lon) + p[0]).toFixed(1) + '" y="' + (Y(r.lat) + p[1]).toFixed(1) +
        '" text-anchor="' + p[2] + '">' + esc(r.city) + "</text>" : "") + "</g>";
    };
    (C.otherCities || []).forEach(function (r) { html += pinFor(r, "other", 0); });
    var DUR = 9;
    C.route.forEach(function (r, i) {
      if (r.far) return;
      html += pinFor(r, i === C.route.length - 1 ? "final" : "", (i / (C.route.length - 1)) * DUR);
    });
    html += '<text class="plane" id="plane" text-anchor="middle" dominant-baseline="central">✈️</text>';
    svg.innerHTML = html;

    // Daftar perhentian
    $("stops").innerHTML = C.route.map(function (r) {
      return "<li><b>" + esc(r.year) + "</b><span>" + esc(r.city) + "</span></li>";
    }).join("");

    var path = $("routePath"), draw = $("routeDraw"), plane = $("plane"), len = path.getTotalLength(), raf = null;
    function play() {
      cancelAnimationFrame(raf);
      svg.classList.remove("play"); void svg.offsetWidth; svg.classList.add("play");
      var t0 = null;
      (function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / (DUR * 1000));
        draw.setAttribute("stroke-dashoffset", String(1 - k));
        var p = path.getPointAtLength(k * len), q = path.getPointAtLength(Math.min(len, k * len + 1));
        var ang = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
        plane.setAttribute("transform", "translate(" + p.x + " " + p.y + ") rotate(" + (ang + 45) + ")");
        if (k < 1) raf = requestAnimationFrame(step);
      })(performance.now());
    }
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { DUR = 0.01; }
    var mo = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { mo.disconnect(); play(); }
    }, { threshold: 0.5 });
    mo.observe(svg);
    $("replayRoute").addEventListener("click", play);
  })();

  /* ---------- Konfeti saat leaflet dibuka ---------- */
  function confetti() {
    var box = $("confetti"), colors = ["#b5452a", "#e8b04b", "#7a2614", "#9cc3d9", "#5b6e2e", "#fbf3e2"];
    for (var i = 0; i < 70; i++) {
      var c = document.createElement("i");
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % colors.length];
      c.style.animationDuration = 2.4 + Math.random() * 2.2 + "s";
      c.style.animationDelay = Math.random() * 0.6 + "s";
      c.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      box.appendChild(c);
    }
    setTimeout(function () { box.innerHTML = ""; }, 5500);
  }
  $("openBtn").addEventListener("click", confetti);
})();
