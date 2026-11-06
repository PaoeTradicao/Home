/* Decoracoes sazonais - Pao & Tradicao
   Uso: <script src="https://www.padariapaoetradicao.com.br/decoracoes.js" data-site="principal" defer></script>
   O tema ativo e lido do Firestore (vitrine/config-decoracoes) e aplicado so dentro do periodo agendado. */
(function () {
  "use strict";
  var PROJ = "planner-c01a1", KEY = "AIzaSyAbWca-fYMQgvQl7otkHZibptOox1NTFN4";

  /* onde cada site recebe a decoracao: cabecalho (festao logo abaixo), primeira dobra (detalhes), foto com aro */
  var SITES = {
    principal: { cab: ".cabecalho", dobra: ".hero", foto: ".hero-foto", aro: ".aro" },
    catalogo:  { cab: "header", dobra: "main", foto: null, aro: null },
    kitfesta:  { cab: "header", dobra: "main", foto: null, aro: null },
    cardapio:  { cab: "header", dobra: "main", foto: null, aro: null }
  };

  var S = {
    estrela: function (c, s) { return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><path d="M12 1l2.6 8.1H23l-6.8 5 2.6 8.1L12 17.2 5.2 22.2l2.6-8.1L1 9.1h8.4z" fill="' + c + '"/></svg>'; },
    brilho: function (c, s) { return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" fill="' + c + '"/></svg>'; },
    bola: function (c, s) { return '<svg viewBox="0 0 24 28" width="' + s + '" height="' + (s * 1.17) + '"><rect x="9" y="0" width="6" height="5" rx="1" fill="#C9A961"/><circle cx="12" cy="16" r="11" fill="' + c + '"/><circle cx="8" cy="12" r="3" fill="#fff" opacity=".35"/></svg>'; },
    ovo: function (c, f, s) { return '<svg viewBox="0 0 24 30" width="' + s + '" height="' + (s * 1.25) + '"><path d="M12 1C5 1 1 12 1 18c0 6.5 5 11 11 11s11-4.5 11-11C23 12 19 1 12 1Z" fill="' + c + '"/><path d="M2 16l3.3-3 3.3 3 3.4-3 3.3 3 3.4-3 3.3 3" fill="none" stroke="' + f + '" stroke-width="2"/><circle cx="7" cy="22" r="1.6" fill="' + f + '"/><circle cx="12" cy="24" r="1.6" fill="' + f + '"/><circle cx="17" cy="22" r="1.6" fill="' + f + '"/></svg>'; },
    coracao: function (c, s) { return '<svg viewBox="0 0 24 22" width="' + s + '" height="' + (s * .92) + '"><path d="M12 21S1 14 1 7a5.5 5.5 0 0 1 11-1.5A5.5 5.5 0 0 1 23 7c0 7-11 14-11 14Z" fill="' + c + '"/></svg>'; },
    gravata: function (c, d, s) { return '<svg viewBox="0 0 40 20" width="' + s + '" height="' + (s / 2) + '"><path d="M2 2l15 6v4L2 18Z" fill="' + c + '"/><path d="M38 2L23 8v4l15 6Z" fill="' + c + '"/><rect x="16" y="6" width="8" height="8" rx="2" fill="' + c + '"/><circle cx="8" cy="10" r="1.3" fill="' + d + '"/><circle cx="32" cy="10" r="1.3" fill="' + d + '"/><circle cx="20" cy="10" r="1.3" fill="' + d + '"/></svg>'; },
    flor: function (c, m, s) { var p = ''; for (var i = 0; i < 5; i++) p += '<ellipse cx="12" cy="6" rx="4" ry="5.5" fill="' + c + '" transform="rotate(' + (i * 72) + ' 12 12)"/>'; return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '">' + p + '<circle cx="12" cy="12" r="3.2" fill="' + m + '"/></svg>'; },
    folha: function (c, s, r) { return '<svg viewBox="0 0 24 12" width="' + s + '" height="' + (s / 2) + '" style="transform:rotate(' + r + 'deg)"><path d="M0 6C6 -1 18 -1 24 6C18 13 6 13 0 6Z" fill="' + c + '"/></svg>'; },
    azevinho: function (s) { return '<svg viewBox="0 0 64 40" width="' + s + '" height="' + (s * .62) + '"><path d="M30 22C22 10 10 12 4 6C8 14 4 18 8 24C12 22 16 26 18 30C20 26 26 26 30 22Z" fill="#2E7A54"/><path d="M34 22C42 10 54 12 60 6C56 14 60 18 56 24C52 22 48 26 46 30C44 26 38 26 34 22Z" fill="#1F5C3F"/><circle cx="28.5" cy="25" r="4.5" fill="#C8202F"/><circle cx="36" cy="26" r="4.5" fill="#C8202F"/><circle cx="32.5" cy="19" r="4.5" fill="#E0303F"/></svg>'; },
    orelhas: function (s) { return '<svg viewBox="0 0 60 50" width="' + s + '" height="' + (s * .83) + '"><path d="M18 50C10 34 8 8 16 2c8-5 12 22 10 48Z" fill="#FFFFFF" stroke="#E6DCEF" stroke-width="2"/><path d="M18 46C13 32 12 12 16 8c5-3 7 18 6 38Z" fill="#F4B9CC"/><path d="M42 50C50 34 52 8 44 2c-8-5-12 22-10 48Z" fill="#FFFFFF" stroke="#E6DCEF" stroke-width="2"/><path d="M42 46C47 32 48 12 44 8c-5-3-7 18-6 38Z" fill="#F4B9CC"/></svg>'; },
    balao: function (s) { return '<svg viewBox="0 0 30 44" width="' + s + '" height="' + (s * 1.47) + '"><path d="M15 1C7 1 2 8 3 16c1 9 7 15 9 19h6c2-4 8-10 9-19C28 8 23 1 15 1Z" fill="#E4572E"/><path d="M15 1C11 1 9 8 9.5 16c.5 9 2.5 15 3 19M15 1c4 0 6 7 5.5 15-.5 9-2.5 15-3 19" fill="none" stroke="#F2C14E" stroke-width="2"/><path d="M3.5 13h23M5 22h20" stroke="#2E86AB" stroke-width="2"/><rect x="11" y="35" width="8" height="5" rx="1" fill="#8A5A2B"/><path d="M15 40v4" stroke="#F2C14E" stroke-width="2"/></svg>'; },
    fogos: function (c, s) { var l = ''; for (var i = 0; i < 12; i++) { var a = i * 30 * Math.PI / 180; l += '<line x1="' + (24 + Math.cos(a) * 8) + '" y1="' + (24 + Math.sin(a) * 8) + '" x2="' + (24 + Math.cos(a) * 21) + '" y2="' + (24 + Math.sin(a) * 21) + '" stroke="' + c + '" stroke-width="2.2" stroke-linecap="round"/><circle cx="' + (24 + Math.cos(a) * 23) + '" cy="' + (24 + Math.sin(a) * 23) + '" r="1.4" fill="' + c + '"/>'; } return '<svg viewBox="0 0 48 48" width="' + s + '" height="' + s + '">' + l + '</svg>'; },
    confete: function (c, s, r) { return '<svg viewBox="0 0 10 4" width="' + s + '" height="' + (s * .4) + '" style="transform:rotate(' + r + 'deg)"><rect width="10" height="4" rx="1" fill="' + c + '"/></svg>'; }
  };


  /* ===== ilustracoes animadas ===== */
  var TRENO = '<svg viewBox="0 0 340 130" width="340" height="130" style="overflow:visible">' +
    '<defs><linearGradient id="dt-tr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D8323F"/><stop offset="1" stop-color="#8C1626"/></linearGradient>' +
    '<linearGradient id="dt-ou" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F6D27A"/><stop offset=".5" stop-color="#EFAD4C"/><stop offset="1" stop-color="#C98A2B"/></linearGradient>' +
    '<radialGradient id="dt-br"><stop offset="0" stop-color="#FFF6D8" stop-opacity=".9"/><stop offset="1" stop-color="#FFF6D8" stop-opacity="0"/></radialGradient></defs>' +
    '<ellipse cx="170" cy="70" rx="170" ry="48" fill="url(#dt-br)" opacity=".55"/>' +
    /* tirantes */
    '<path d="M132 74C160 70 190 66 214 64M132 78C180 74 240 70 278 58" stroke="url(#dt-ou)" stroke-width="1.6" fill="none"/>' +
    /* renas */
    [[196, 8, 0], [258, -4, .18]].map(function (r) {
      var x = r[0], y = r[1], d = r[2], lider = x > 220;
      return '<g transform="translate(' + x + ' ' + y + ')">' +
        '<g class="dt-perna" style="animation-delay:-' + d + 's"><path d="M10 64q-4 8-10 14M17 65q2 8 6 14" stroke="#5A3A1A" stroke-width="3.4" stroke-linecap="round" fill="none"/></g>' +
        '<g class="dt-perna b" style="animation-delay:-' + d + 's"><path d="M40 63q-2 8-8 14M47 60q6 6 12 10" stroke="#5A3A1A" stroke-width="3.4" stroke-linecap="round" fill="none"/></g>' +
        '<path d="M4 52c0-9 12-15 28-15s24 5 24 14-10 15-26 15S4 61 4 52Z" fill="#9A6232"/><path d="M12 58c6 4 20 4 30 0" stroke="#D9A86C" stroke-width="5" stroke-linecap="round" fill="none"/>' +
        '<path d="M5 49c-6-1-9-5-7-9 3 1 6 3 7 6" fill="#F2E6D0"/>' +
        '<path d="M46 46c4-8 8-13 12-16" stroke="#9A6232" stroke-width="10" stroke-linecap="round"/><path d="M47 47l9-12" stroke="#EFAD4C" stroke-width="3"/><circle cx="52" cy="42" r="3" fill="url(#dt-ou)"/>' +
        '<path d="M54 26c0-5 5-9 11-8 7 1 10 5 9 9s-6 6-12 6c-5 0-8-3-8-7Z" fill="#9A6232"/>' +
        '<g stroke="#6B4423" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M58 20c-3-6-2-11 2-15M59 12l-6-4M60 8l-3-6"/><path d="M64 19c1-7 5-11 10-13M68 11l6 1M71 7l3-5"/></g>' +
        '<ellipse cx="60" cy="20" rx="3" ry="2" fill="#7A4E2D" transform="rotate(-30 60 20)"/>' +
        '<circle cx="66" cy="24" r="1.7" fill="#1b1b1f"/><circle cx="66.6" cy="23.4" r=".6" fill="#fff"/>' +
        '<circle cx="75" cy="28" r="' + (lider ? 3.6 : 2.6) + '" fill="' + (lider ? "#FF4250" : "#3A2414") + '"/>' +
        (lider ? '<circle cx="75" cy="28" r="7" fill="#FF4250" opacity=".25" class="dt-nariz"/>' : "") +
        '</g>';
    }).join("") +
    /* treno */
    '<path d="M22 92h110c12 0 18-6 20-14" stroke="url(#dt-ou)" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M22 92c-8 0-12-6-8-10" stroke="url(#dt-ou)" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
    '<path d="M44 92v-12M110 92v-12" stroke="url(#dt-ou)" stroke-width="3.5"/>' +
    '<path d="M18 46c-4 22 8 36 34 36h68c12 0 18-10 16-24l-6-12Z" fill="url(#dt-tr)"/>' +
    '<path d="M18 46h112" stroke="url(#dt-ou)" stroke-width="4" stroke-linecap="round"/>' +
    '<path d="M34 64c8-8 18-8 22 0s14 8 22 0 18-8 22 0" stroke="url(#dt-ou)" stroke-width="2" fill="none"/>' +
    '<path d="M120 46c10-2 16 4 14 12-1 6-8 8-11 4" stroke="url(#dt-ou)" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    /* saco de presentes */
    '<path d="M22 46c-8-18 2-34 18-34s24 14 18 34Z" fill="#7A4E2D"/><path d="M30 18c4-4 12-4 16 0" stroke="#5A3A1A" stroke-width="2.5" fill="none"/>' +
    '<rect x="32" y="2" width="14" height="12" rx="1.5" fill="#2E7A54"/><path d="M39 2v12M32 8h14" stroke="#EFAD4C" stroke-width="2"/>' +
    '<rect x="44" y="6" width="11" height="10" rx="1.5" fill="#3E7CC2"/><path d="M49.5 6v10" stroke="#F5F0DC" stroke-width="1.8"/>' +
    /* papai noel */
    '<path d="M64 46c0-16 8-24 22-24s22 8 22 24Z" fill="url(#dt-tr)"/><path d="M62 46h48" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/><path d="M86 24v22" stroke="#FFFFFF" stroke-width="4"/>' +
    '<rect x="70" y="36" width="32" height="5" rx="1" fill="#2B1B10"/><rect x="83" y="35" width="6" height="7" rx="1" fill="url(#dt-ou)"/>' +
    '<circle cx="88" cy="14" r="9" fill="#F4C9A4"/><circle cx="84" cy="16" r="2.2" fill="#F2A08C" opacity=".7"/>' +
    '<path d="M78 16c-1 11 5 18 10 18s11-7 10-18c-3 4-6 5-10 5s-7-1-10-5Z" fill="#FFFFFF"/><path d="M84 21c2 1.5 6 1.5 8 0" stroke="#E2E2E2" stroke-width="2" fill="none"/>' +
    '<path d="M79 8c1-9 10-13 18-9 5 3 10 8 12 14" fill="url(#dt-tr)"/><path d="M78 9.5h21" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/><circle cx="110" cy="14" r="3.6" fill="#FFFFFF"/>' +
    '<circle cx="91" cy="13" r="1.3" fill="#1b1b1f"/><path d="M86 11.5h3" stroke="#FFFFFF" stroke-width="1.4"/>' +
    '<g class="dt-aceno"><path d="M68 30c-8-6-12-14-12-20" stroke="#C8202F" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="56" cy="8" r="4.5" fill="#FFFFFF"/></g>' +
    '<path d="M104 30l26 20" stroke="#C8202F" stroke-width="7" stroke-linecap="round"/><circle cx="131" cy="50" r="4" fill="#FFFFFF"/>' +
    '</svg>';

  var COELHO = '<svg viewBox="0 0 120 110" width="120" height="110" style="overflow:visible">' +
    '<defs><radialGradient id="dc-pe" cx=".4" cy=".35"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#EDE6F3"/></radialGradient></defs>' +
    '<g class="dc-corpo">' +
    '<g class="dc-orelhas"><path d="M62 40C56 18 58 2 65 1s9 18 5 40Z" fill="url(#dc-pe)" stroke="#DCD0E8" stroke-width="1.5"/><path d="M63 35c-3-14-2-26 2-26s4 13 2 26Z" fill="#F4B9CC"/>' +
    '<path d="M72 41C76 22 85 10 91 12s-1 18-11 32Z" fill="url(#dc-pe)" stroke="#DCD0E8" stroke-width="1.5"/><path d="M75 38c3-12 9-20 12-19s-1 12-8 22Z" fill="#F4B9CC"/></g>' +
    '<ellipse cx="44" cy="74" rx="32" ry="24" fill="url(#dc-pe)" stroke="#DCD0E8" stroke-width="1.5"/>' +
    '<circle cx="12" cy="68" r="9" fill="#FFFFFF" stroke="#DCD0E8" stroke-width="1.5"/>' +
    '<ellipse cx="30" cy="94" rx="15" ry="7" fill="url(#dc-pe)" stroke="#DCD0E8" stroke-width="1.5"/>' +
    '<circle cx="72" cy="52" r="19" fill="url(#dc-pe)" stroke="#DCD0E8" stroke-width="1.5"/>' +
    '<ellipse cx="77" cy="48" rx="3" ry="3.6" fill="#3A2E4F"/><circle cx="78" cy="46.6" r="1.1" fill="#FFFFFF"/>' +
    '<ellipse cx="70" cy="58" rx="4.5" ry="3" fill="#F7C6D6" opacity=".8"/>' +
    '<path d="M88 54.5c1.4-1.6 3.6-1.6 4.4 0-.4 1.6-1.6 2.6-2.2 2.6s-1.8-1-2.2-2.6Z" fill="#E58FAD"/><path d="M90 57c0 2-1 3-3 3M90 57c0 2 1 3 3 3" stroke="#C9A2B8" stroke-width="1.2" fill="none"/>' +
    '<path d="M93 55l12-2M93 57l12 1" stroke="#CFC4DA" stroke-width=".9"/>' +
    /* cesta */
    '<path d="M78 80h34l-4 22H82Z" fill="#C9965F"/><path d="M78 86h34M80 93h30" stroke="#A8743E" stroke-width="1.3"/><path d="M84 80v22M92 80v22M100 80v22" stroke="#A8743E" stroke-width="1"/>' +
    '<path d="M78 80c4-16 30-16 34 0" stroke="#8A5A2B" stroke-width="3" fill="none"/>' +
    '<ellipse cx="86" cy="78" rx="5" ry="6.5" fill="#B9A3DC"/><ellipse cx="95" cy="76" rx="5" ry="6.5" fill="#FFD98A"/><ellipse cx="104" cy="78" rx="5" ry="6.5" fill="#9FD8C3"/>' +
    '<path d="M91 76l2-2 2 2 2-2 2 2" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>' +
    '<path d="M64 74c6 4 12 6 16 8" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"/><path d="M64 74c6 4 12 6 16 8" stroke="#DCD0E8" stroke-width="1" fill="none"/>' +
    '</g></svg>';

  /* fogos: foguete sobe, estoura em particulas que se espalham e caem */
  function fogo(c, x, y, at, raio, sobe) {
    var p = "", n = 26;
    for (var i = 0; i < n; i++) {
      var a = i / n * Math.PI * 2, r = raio * (i % 2 ? .78 : 1);
      var cc = i % 3 === 0 ? "#FFF6D8" : c; p += '<i class="df-pt" style="--dx:' + (Math.cos(a) * r).toFixed(1) + 'px;--dy:' + (Math.sin(a) * r).toFixed(1) + 'px;background:' + cc + ';box-shadow:0 0 5px 1px ' + cc + '"></i>';
      if (i % 2 === 0) p += '<i class="df-pt" style="--dx:' + (Math.cos(a + .12) * r * .45).toFixed(1) + 'px;--dy:' + (Math.sin(a + .12) * r * .45).toFixed(1) + 'px;background:#FFFFFF;width:3px;height:3px"></i>';
    }
    return '<div class="df" style="left:' + x + '%;top:' + y + 'px;--sobe:' + sobe + 'px;--c:' + c + ';animation-delay:' + at + 's">' +
      '<i class="df-fg" style="animation-delay:inherit"></i><i class="df-fl" style="animation-delay:inherit"></i>' +
      p.replace(/class="df-pt"/g, 'class="df-pt" ') + "</div>";
  }

  /* particulas que caem (neve, confete) ou sobem (coracoes) dentro da primeira dobra */
  function particulas(qtd, html, sobe, dur) {
    var o = "";
    for (var i = 0; i < qtd; i++) {
      var l = (i * 37 + 11) % 100, d = dur + (i % 5) * 1.7, at = -((i * 2.3) % d);
      o += '<span class="deco-p ' + (sobe ? "sobe" : "cai") + '" style="left:' + l + '%;animation-duration:' + d + 's;animation-delay:' + at + 's">' + html(i) + '</span>';
    }
    return o;
  }
  function festaoCorda(n, cor, larg, pont, junta, pingente, fio, comp) {
    var p = "M0 3 ", h = "", lg = 100 / n, i;
    for (i = 0; i < n; i++) p += "Q " + (1000 / n * i + 500 / n) + " 37 " + (1000 / n * (i + 1)) + " 3 ";
    h += '<svg viewBox="0 0 1000 40" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:40px"><path d="' + p + '" fill="none" stroke="' + cor + '" stroke-width="' + larg + '" vector-effect="non-scaling-stroke"/>' +
      (pont ? '<path d="' + p + '" fill="none" stroke="' + pont + '" stroke-width="1.5" stroke-dasharray="2 6" vector-effect="non-scaling-stroke"/>' : "") + "</svg>";
    for (i = 0; i <= n; i++) h += '<div style="position:absolute;top:-3px;left:' + (lg * i) + '%;transform:translateX(-50%)">' + junta(i) + "</div>";
    for (i = 0; i < n; i++) { var c = comp[i % comp.length]; h += '<div class="deco-bal" style="position:absolute;top:20px;left:' + (lg * (i + .5)) + '%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center"><i style="width:1px;height:' + c + 'px;background:' + fio + '"></i>' + pingente(i) + "</div>"; }
    return h;
  }
  var TACA = function (s) { return '<svg viewBox="0 0 80 60" width="' + s + '" height="' + (s * .75) + '"><g transform="rotate(-14 26 40)"><path d="M14 6h22l-2 18c-1 7-5 10-9 10s-8-3-9-10Z" fill="#F6E3A6" stroke="#C9A961" stroke-width="2"/><path d="M15 14h20" stroke="#EFAD4C" stroke-width="5" opacity=".7"/><path d="M25 34v16M17 52h16" stroke="#C9A961" stroke-width="2.5" stroke-linecap="round"/></g><g transform="rotate(14 54 40)"><path d="M44 6h22l-2 18c-1 7-5 10-9 10s-8-3-9-10Z" fill="#F6E3A6" stroke="#C9A961" stroke-width="2"/><path d="M45 14h20" stroke="#EFAD4C" stroke-width="5" opacity=".7"/><path d="M55 34v16M47 52h16" stroke="#C9A961" stroke-width="2.5" stroke-linecap="round"/></g><circle cx="40" cy="4" r="2" fill="#EFAD4C"/><circle cx="34" cy="1" r="1.3" fill="#EFAD4C"/><circle cx="46" cy="2" r="1.3" fill="#EFAD4C"/></svg>'; };
  function ramo(s, flip) {
    var f = function (c, x, y, r) { return '<g transform="translate(' + x + ' ' + y + ') scale(' + r + ')">' + [0, 72, 144, 216, 288].map(function (a) { return '<ellipse cx="0" cy="-6" rx="4" ry="5.5" fill="' + c + '" transform="rotate(' + a + ')"/>'; }).join("") + '<circle r="3" fill="#E8A33D"/></g>'; };
    var fl = function (x, y, a) { return '<path d="M0 0C6 -7 18 -7 24 0C18 7 6 7 0 0Z" fill="#6FA77D" transform="translate(' + x + ' ' + y + ') rotate(' + a + ')"/>'; };
    return '<svg viewBox="0 0 200 140" width="' + s + '" height="' + (s * .7) + '" style="' + (flip ? "transform:scale(-1,-1)" : "") + '"><path d="M0 8C50 10 90 30 120 60S170 110 196 136" fill="none" stroke="#6FA77D" stroke-width="2.5"/><path d="M0 40C30 40 60 50 80 70" fill="none" stroke="#6FA77D" stroke-width="2"/>' +
      fl(30, 12, -20) + fl(70, 26, 30) + fl(100, 48, -40) + fl(140, 82, 20) + fl(46, 46, 25) + fl(166, 108, -30) +
      f("#E58FAD", 20, 9, 1.5) + f("#F7C6D6", 58, 18, 1.1) + f("#C2577A", 92, 38, 1.6) + f("#F7C6D6", 128, 74, 1.1) + f("#E58FAD", 160, 104, 1.3) + f("#C2577A", 64, 58, 1) + "</svg>";
  }

  /* cada tema tem um desenho proprio:
     topo = faixa logo abaixo do menu; dobra = detalhes dentro da primeira tela; aro/enfeite = foto principal */
  var TEMAS = {
    natal: {
      nome: "Natal", faixa: ["#8C1626", "#F5F0DC", "#EFAD4C"],
      topo: function (w) { var n = Math.max(3, Math.round(w / 150)); return { h: 58, html: festaoCorda(n, "#1F5C3F", 5, "#EFAD4C", function () { return S.bola("#8C1626", 14); }, function (i) { return S.estrela("#EFAD4C", i % 2 ? 14 : 18); }, "rgba(239,173,76,.85)", w < 600 ? [4, 14, 2, 10] : [8, 22, 4, 16, 12, 26, 6, 18]) }; },
      dobra: function () { return particulas(26, function (i) { return S.brilho(i % 2 ? "#C9A961" : "#B8C4D6", 8 + i % 3 * 3); }, false, 11); },
      aro: ["#8C1626", "#1F5C3F"], enfeite: function (s) { return S.azevinho(s); }, enfeitePos: "baixo",
      passa: "treno"
    },
    anonovo: {
      nome: "Ano Novo", faixa: ["#0D1636", "#F5F0DC", "#EFAD4C"],
      topo: function (w) {
        var alt = w < 600 ? 92 : 128, h = '<div style="position:absolute;inset:0;background:radial-gradient(120% 140% at 50% 120%,#24357A 0,#13215E 45%,#0B1230 100%);border-bottom:2px solid #EFAD4C;overflow:hidden">',
          cores = ["#F6D27A", "#E9EEF5", "#F4B6A0", "#EFAD4C", "#BFD7FF", "#F6D27A"], n = w < 600 ? 4 : 8;
        for (var i = 0; i < (w < 600 ? 18 : 44); i++) h += '<span class="df-est" style="left:' + ((i * 29 + 7) % 100) + '%;top:' + ((i * 37) % (alt - 10)) + 'px;animation-delay:-' + (i % 7) * .4 + 's"></span>';
        for (i = 0; i < n; i++) { var ry = (w < 600 ? 22 : 34) - (i % 3) * 4; h += fogo(cores[i % 6], (i + .5) * 100 / n + ((i % 3) - 1) * 3, ry + 6 + (i % 3) * ((alt - 2 * ry - 14) / 2), -(i * .53 + (i % 2) * .9), ry, alt - (ry + 6 + (i % 3) * ((alt - 2 * ry - 14) / 2))); }
        return { h: alt, html: h + "</div>" };
      },
      aro: ["#C9A961", "#C9CED6"], enfeite: function (s) { return TACA(s * 1.1); }, enfeitePos: "baixo"
    },
    pascoa: {
      nome: "Páscoa", faixa: ["#6E4F9E", "#FFFFFF", "#FFD98A"],
      topo: function () { return { h: 16, html: '<div style="position:absolute;inset:0;background:radial-gradient(circle at 10px -2px,#E9DDF7 9px,transparent 10px) 0 0/20px 16px repeat-x"></div>' }; },
      dobra: function (w) {
        var n = Math.round(w / 90), ovos = "", cores = [["#B9A3DC", "#FFFFFF"], ["#9FD8C3", "#FFFFFF"], ["#F4B9CC", "#FFFFFF"], ["#FFD98A", "#B9A3DC"]];
        for (var i = 0; i < n; i++) if (i % 2 === 0 || w < 600) ovos += '<span style="position:absolute;bottom:' + (8 + i % 3 * 4) + 'px;left:' + ((i + .3) * 100 / n) + '%;transform:rotate(' + ((i % 3 - 1) * 12) + 'deg)">' + S.ovo(cores[i % 4][0], cores[i % 4][1], 20 + i % 2 * 6) + "</span>";
        var grama = '<svg viewBox="0 0 400 40" preserveAspectRatio="none" style="position:absolute;left:0;bottom:0;width:100%;height:40px"><path d="M0 40V22' + Array.apply(null, Array(40)).map(function (_, k) { return "L" + (k * 10 + 5) + " " + (k % 2 ? 8 : 14) + " L" + (k * 10 + 10) + " 22"; }).join(" ") + 'V40Z" fill="#A8D5A2"/><path d="M0 40V30' + Array.apply(null, Array(40)).map(function (_, k) { return "L" + (k * 10) + " " + (k % 2 ? 18 : 24) + " L" + (k * 10 + 5) + " 30"; }).join(" ") + 'V40Z" fill="#8CC487"/></svg>';
        return '<div style="position:absolute;left:0;right:0;bottom:0;height:60px">' + grama + ovos + "</div>";
      },
      aro: ["#B9A3DC", "#9FD8C3"], enfeite: function (s) { return S.orelhas(s * .8); }, enfeitePos: "topo",
      passa: "coelho",
      enfeite2: function (s) { var o = [["#B9A3DC", "#FFFFFF"], ["#F4B9CC", "#FFFFFF"], ["#FFD98A", "#B9A3DC"], ["#9FD8C3", "#FFFFFF"]];
        return '<span style="position:relative;display:block;width:' + (s * 1.9) + 'px;height:' + (s * .48) + 'px"><svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" style="position:absolute;bottom:0"><path d="M0 30C5 12 20 6 50 6S95 12 100 30Z" fill="#A8D5A2"/>' + Array.apply(null, Array(14)).map(function (_, k) { return '<path d="M' + (8 + k * 6.5) + ' ' + (k % 3 ? 12 : 9) + 'l2 -8 2 8" fill="#8CC487"/>'; }).join("") + '</svg>' +
          o.map(function (c, k) { return '<span style="position:absolute;bottom:' + (s * .1) + 'px;left:' + (14 + k * 19) + '%;transform:rotate(' + (k % 2 ? 14 : -12) + 'deg)">' + S.ovo(c[0], c[1], s * (k % 2 ? .24 : .3)) + "</span>"; }).join("") + "</span>"; }
    },
    maes: {
      nome: "Dia das Mães", faixa: ["#A8325A", "#FFFFFF", "#FFD6E2"],
      topo: function (w) {
        var n = Math.round(w / 70), p = "M0 18", fl = "", cores = ["#E58FAD", "#C2577A", "#F7C6D6"];
        for (var i = 0; i < n; i++) p += " Q " + ((i + .5) * 1000 / n) + " " + (i % 2 ? 30 : 6) + " " + ((i + 1) * 1000 / n) + " 18";
        for (i = 0; i < n; i++) {
          var x = (i + .5) * 100 / n, y = i % 2 ? 24 : 12;
          fl += '<span style="position:absolute;left:' + x + '%;top:' + (y - 9) + 'px;transform:translateX(-50%)">' + S.flor(cores[i % 3], "#E8A33D", i % 3 === 1 ? 20 : 15) + "</span>";
          fl += '<span style="position:absolute;left:calc(' + (x + 50 / n) + '% - 6px);top:' + (i % 2 ? 4 : 22) + 'px">' + S.folha("#6FA77D", 14, i % 2 ? 30 : -30) + "</span>";
        }
        return { h: 38, html: '<svg viewBox="0 0 1000 36" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:36px"><path d="' + p + '" fill="none" stroke="#6FA77D" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>' + fl };
      },
      dobra: function (w) {
        return particulas(16, function (i) { return S.coracao(["#F7C6D6", "#E58FAD", "#C2577A"][i % 3], 10 + i % 3 * 3); }, true, 12);
      },
      aro: ["#C2577A", "#F7C6D6"],
      enfeite: function (s) { return '<span style="display:flex;align-items:flex-end">' + S.folha("#6FA77D", s * .35, -30) + S.flor("#E58FAD", "#E8A33D", s * .42) + S.flor("#C2577A", "#E8A33D", s * .55) + S.flor("#F7C6D6", "#E8A33D", s * .42) + S.folha("#6FA77D", s * .35, 30) + "</span>"; }, enfeitePos: "baixo"
    },
    pais: {
      nome: "Dia dos Pais", faixa: ["#1B2A4A", "#F5F0DC", "#EFAD4C"],
      topo: function () { return { h: 14, html: '<div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(122,78,45,.55) 0 6px,transparent 6px 18px),repeating-linear-gradient(0deg,rgba(239,173,76,.5) 0 2px,transparent 2px 7px),#1B2A4A"></div>' }; },
      dobra: function (w) {
        var t = w < 600 ? 96 : 150;
        return '<div style="position:absolute;top:0;right:0;width:' + t + 'px;height:' + t + 'px;overflow:hidden"><div style="position:absolute;top:' + (t * .2) + 'px;right:-' + (t * .32) + 'px;width:' + (t * 1.3) + 'px;transform:rotate(45deg);background:#13215E;border-top:2px solid #EFAD4C;border-bottom:2px solid #EFAD4C;padding:6px 0;display:flex;justify-content:center;gap:10px">' + S.estrela("#EFAD4C", 12) + S.estrela("#EFAD4C", 12) + S.estrela("#EFAD4C", 12) + "</div></div>";
      },
      aro: ["#13215E", "#7A4E2D"], enfeite: function (s) { return S.gravata("#13215E", "#EFAD4C", s * 1.1); }, enfeitePos: "baixo"
    },
    junina: {
      nome: "Festa Junina", faixa: ["#C2531B", "#FFFFFF", "#FFD23F"],
      topo: function (w) {
        var cores = ["#E4572E", "#F2C14E", "#2E86AB", "#76B041", "#E94F8A", "#F28C28"], f = "", k = Math.round(w / 34);
        var linha = function (sag, off, top) { var o = ""; for (var j = 0; j < k; j++) { var x = (j + .5) / k, y = top + sag * 4 * x * (1 - x); o += '<div class="deco-bal" style="position:absolute;top:' + (y - 1) + 'px;left:calc(' + (x * 100) + '% - 9px);width:18px;height:22px;background:' + cores[(j + off) % 6] + ';clip-path:polygon(0 0,100% 0,100% 100%,50% 72%,0 100%)"></div>'; } return o; };
        f = linha(14, 0, 2) + linha(26, 3, 0);
        return { h: 58, html: '<svg viewBox="0 0 1000 40" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:40px"><path d="M0 2Q500 30 1000 2M0 0Q500 52 1000 0" fill="none" stroke="#8A5A2B" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>' + f };
      },
      dobra: function () { return '<div style="position:absolute;left:0;right:0;bottom:0;height:14px;background:repeating-conic-gradient(#E4572E 0 25%,#FFF3E0 0 50%) 0 0/14px 14px;opacity:.85"></div>'; },
      aro: ["#E4572E", "#F2C14E"], enfeite: function (s) { return S.balao(s * .55); }, enfeitePos: "topo-dir"
    }
  };

  function aplicar(chave, msg, site) {
    var t = TEMAS[chave], cfg = SITES[site] || SITES.principal, w = window.innerWidth;
    if (!t || document.getElementById("deco-sazonal")) return;
    var st = document.createElement("style"); st.id = "deco-sazonal";
    st.textContent =
      ".deco-faixa{background:" + t.faixa[0] + ";color:" + t.faixa[1] + ";text-align:center;font:500 .9rem/1.4 Inter,system-ui,sans-serif;padding:.55rem 1rem}" +
      ".deco-faixa b{color:" + t.faixa[2] + "}" +
      ".deco-topo{position:relative;z-index:5;pointer-events:none}" +
      ".deco-dobra{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}" +
      ".deco-p{position:absolute;top:-24px;opacity:.75}.deco-p.sobe{top:auto;bottom:-24px}" +
      ".deco-enfeite{position:absolute;z-index:3;pointer-events:none}" +
      (cfg.aro ? cfg.aro + "{border-color:" + t.aro[0] + " !important}" + cfg.aro + "::before{border-color:" + t.aro[1] + " !important}" : "") +
      "@media (prefers-reduced-motion:no-preference){" +
      ".deco-bal{animation:deco-bal 4s ease-in-out infinite alternate;transform-origin:top center}" +
      ".deco-p.cai{animation:deco-cai linear infinite}.deco-p.sobe{animation:deco-sobe linear infinite}" +
      "}" +
      ".deco-passa{position:absolute;left:0;top:0;z-index:4;pointer-events:none}" +
      ".df{position:absolute;width:0;height:0}.df i{position:absolute;left:0;top:0;display:block;border-radius:50%;opacity:0}" +
      ".df-pt{width:4px;height:4px;margin:-2px}.df-fg{width:3px;height:14px;margin:-7px -1.5px;border-radius:2px !important;background:linear-gradient(var(--c),transparent)}" +
      ".df-fl{width:70px;height:70px;margin:-35px;background:radial-gradient(circle,var(--c),transparent 65%)}" +
      ".df-est{position:absolute;width:2px;height:2px;border-radius:50%;background:#F5F0DC;opacity:.6}" +
      "@media (prefers-reduced-motion:no-preference){" +
      ".df,.df i{animation-duration:3.2s;animation-iteration-count:infinite}.df i{animation-delay:inherit}" +
      ".df-pt{animation-name:df-pt;animation-timing-function:cubic-bezier(.15,.7,.3,1)}.df-fg{animation-name:df-fg;animation-timing-function:ease-out}.df-fl{animation-name:df-fl}" +
      ".df-est{animation:df-est 2.4s ease-in-out infinite alternate}" +
      ".dt-voa{offset-rotate:-16deg;animation:dt-voa 10.5s cubic-bezier(.45,.05,.4,1) 1 both;animation-delay:1.2s;offset-distance:0%;opacity:0}" +
      ".dt-perna{animation:dt-perna .42s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 0}.dt-perna.b{animation-direction:alternate-reverse}" +
      ".dt-aceno{animation:dt-aceno .6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:100% 100%}.dt-nariz{animation:dt-nariz 1s ease-in-out infinite alternate}" +
      ".dt-ras{offset-rotate:0deg;animation:dt-voa 10.5s cubic-bezier(.45,.05,.4,1) 1 both;opacity:0}.dt-ras i{display:block;filter:drop-shadow(0 0 3px rgba(239,173,76,.8))}" +
      ".dc-anda{animation:dc-anda 22s linear infinite;animation-delay:1s;transform:translateX(-140px)}" +
      ".dc-corpo{animation:dc-pulo .7s cubic-bezier(.3,0,.4,1) infinite;transform-box:fill-box;transform-origin:50% 100%}" +
      ".dc-orelhas{animation:dc-orelha .7s ease-in-out infinite;transform-box:fill-box;transform-origin:30% 100%}" +
      ".dc-sombra{animation:dc-sombra .7s cubic-bezier(.3,0,.4,1) infinite}}" +
      "@media (prefers-reduced-motion:reduce){.deco-passa{display:none}}" +
      "@keyframes df-fg{0%{transform:translateY(var(--sobe));opacity:0}4%{opacity:1}26%{transform:translateY(0);opacity:1}28%,100%{opacity:0}}" +
      "@keyframes df-fl{0%,26%{transform:scale(.2);opacity:0}30%{transform:scale(1);opacity:.55}48%,100%{transform:scale(1.3);opacity:0}}" +
      "@keyframes df-pt{0%,27%{transform:translate(0,0) scale(.4);opacity:0}29%{opacity:1}58%{transform:translate(var(--dx),var(--dy)) scale(1);opacity:1}82%{transform:translate(var(--dx),calc(var(--dy) + 14px)) scale(.6);opacity:0}100%{opacity:0}}" +
      "@keyframes df-est{from{opacity:.15;transform:scale(.6)}to{opacity:.9;transform:scale(1.2)}}" +
      "@keyframes dt-voa{0%{offset-distance:0%;opacity:0}3%{opacity:1}97%{opacity:1}100%{offset-distance:100%;opacity:0}}" +
      "@keyframes dt-perna{from{transform:rotate(-22deg)}to{transform:rotate(18deg)}}" +
      "@keyframes dt-aceno{from{transform:rotate(-8deg)}to{transform:rotate(22deg)}}" +
      "@keyframes dt-nariz{from{opacity:.1;transform:scale(.7)}to{opacity:.5;transform:scale(1.3)}}" +
      "@keyframes dc-anda{0%{transform:translateX(-140px)}48%{transform:translateX(calc(100vw + 20px))}100%{transform:translateX(calc(100vw + 20px))}}" +
      "@keyframes dc-pulo{0%{transform:translateY(0) scale(1.08,.86)}12%{transform:translateY(0) scale(.94,1.08)}50%{transform:translateY(-46px) scale(.97,1.04) rotate(-4deg)}86%{transform:translateY(0) scale(1.02,.98)}100%{transform:translateY(0) scale(1.08,.86)}}" +
      "@keyframes dc-orelha{0%,12%{transform:rotate(6deg)}50%{transform:rotate(-14deg)}90%{transform:rotate(10deg)}100%{transform:rotate(6deg)}}" +
      "@keyframes dc-sombra{0%,100%{transform:scaleX(1);opacity:.35}50%{transform:scaleX(.55);opacity:.12}}" +
      "@keyframes deco-bal{from{rotate:-3deg}to{rotate:3deg}}" +
      "@keyframes deco-cai{from{transform:translateY(0) rotate(0)}to{transform:translateY(900px) rotate(240deg)}}" +
      "@keyframes deco-sobe{0%{transform:translateY(0);opacity:0}15%{opacity:.8}100%{transform:translateY(-700px);opacity:0}}" +
      "";
    document.head.appendChild(st);

    if (msg) document.body.insertAdjacentHTML("afterbegin", '<div class="deco-faixa" role="note">' + msg + "</div>");

    var cab = document.querySelector(cfg.cab);
    if (cab && t.topo) { var tp = t.topo(w); cab.insertAdjacentHTML("afterend", '<div class="deco-topo" aria-hidden="true" style="height:' + tp.h + 'px">' + tp.html + "</div>"); }

    var dobra = document.querySelector(cfg.dobra);
    if (dobra && t.dobra) {
      if (getComputedStyle(dobra).position === "static") dobra.style.position = "relative";
      dobra.insertAdjacentHTML("afterbegin", '<div class="deco-dobra" aria-hidden="true">' + t.dobra(w) + "</div>");
      Array.prototype.forEach.call(dobra.children, function (c) { if (!c.classList.contains("deco-dobra") && getComputedStyle(c).position === "static") { c.style.position = "relative"; c.style.zIndex = 1; } });
    }

    if (dobra && t.passa === "treno") {
      var W = dobra.offsetWidth, H = dobra.offsetHeight, mob = W < 600, esc = mob ? .55 : .9;
      var cam = "path('M " + (-60) + " " + (H * .92) + " C " + (W * .35) + " " + (H * .9) + " " + (W * .62) + " " + (H * .5) + " " + (W + 380 * esc) + " " + (-40) + "')";
      var ras = "";
      for (var r = 1; r <= 22; r++) { var tm = Math.max(3, 13 - r * .45); ras += '<div class="deco-passa dt-ras" style="offset-path:' + cam + ';animation-delay:' + (1.2 + r * .055) + 's"><i style="opacity:' + (1 - r / 24) + ';transform:translate(-50%,' + ((r % 3 - 1) * 5 - 6) + 'px) rotate(' + (r * 25) + 'deg)">' + S.brilho(r % 4 ? "#E8A23A" : "#C8202F", tm * 1.4) + '</i></div>'; }
      dobra.insertAdjacentHTML("beforeend", ras + '<div class="deco-passa dt-voa" aria-hidden="true" style="offset-path:' + cam + '"><div style="transform:translate(-4%,-62%) scale(' + esc + ');transform-origin:0 62%">' + TRENO + "</div></div>");
    }
    if (dobra && t.passa === "coelho") {
      var e2 = dobra.offsetWidth < 600 ? .7 : 1;
      dobra.insertAdjacentHTML("beforeend", '<div class="deco-passa dc-anda" aria-hidden="true" style="top:auto;bottom:' + (14 * e2) + 'px"><div style="transform:scale(' + e2 + ');transform-origin:0 100%;position:relative"><span class="dc-sombra" style="position:absolute;left:12px;bottom:-4px;width:84px;height:12px;border-radius:50%;background:#4E7A47;display:block"></span>' + COELHO + "</div></div>");
    }

    var foto = cfg.foto && document.querySelector(cfg.foto);
    if (foto && t.enfeite) {
      var s = Math.max(60, foto.offsetWidth * .28), css =
        t.enfeitePos === "baixo" ? "left:50%;bottom:-5%;transform:translateX(-50%)" :
        t.enfeitePos === "topo" ? "left:50%;top:-" + (s * .55) + "px;transform:translateX(-50%);z-index:0" :
        "right:-4%;top:-4%";
      foto.insertAdjacentHTML(t.enfeitePos === "topo" ? "afterbegin" : "beforeend", '<div class="deco-enfeite" aria-hidden="true" style="' + css + '">' + t.enfeite(s) + "</div>");
      if (t.enfeite2) foto.insertAdjacentHTML("beforeend", '<div class="deco-enfeite" aria-hidden="true" style="left:50%;bottom:-6%;transform:translateX(-50%)">' + t.enfeite2(s) + "</div>");
    }
  }

  /* texto da faixa: escapa HTML e transforma *assim* em destaque */
  function faixaHtml(t) {
    return String(t || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; })
      .replace(/\*([^*]+)\*/g, "<b>$1</b>");
  }

  /* le a agenda no Firestore e aplica a decoracao que estiver no periodo.
     A hora usada e a do servidor do Google (readTime); o relogio do aparelho so entra se ela faltar. */
  function iniciar() {
    var me = document.currentScript || document.querySelector('script[src*="decoracoes.js"]');
    var site = (me && me.dataset.site) || "principal";
    var q = new URLSearchParams(location.search), teste = q.get("decoracao");
    if (teste) return aplicar(teste, faixaHtml(q.get("faixa")), site);
    var nome = "projects/" + PROJ + "/databases/(default)/documents/vitrine/config-decoracoes";
    fetch("https://firestore.googleapis.com/v1/projects/" + PROJ + "/databases/(default)/documents:batchGet?key=" + KEY, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ documents: [nome] })
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (res) {
        var item = res && res[0], d = item && item.found;
        if (!d) return;
        var agora = Date.parse(item.readTime) || Date.now();
        var lista = d.fields && d.fields.agenda && d.fields.agenda.arrayValue.values || [];
        for (var i = 0; i < lista.length; i++) {
          var f = lista[i].mapValue.fields, ini = Date.parse(f.inicio.stringValue), fim = Date.parse(f.fim.stringValue);
          var sites = f.sites && f.sites.arrayValue.values ? f.sites.arrayValue.values.map(function (v) { return v.stringValue; }) : null;
          if (f.ativo && f.ativo.booleanValue === false) continue;
          if (sites && sites.indexOf(site) < 0) continue;
          if (agora >= ini && agora < fim) { aplicar(f.tema.stringValue, faixaHtml(f.mensagem ? f.mensagem.stringValue : ""), site); break; }
        }
      }).catch(function () {});
  }
  window.PTDecoracoes = { aplicar: aplicar, temas: TEMAS };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
