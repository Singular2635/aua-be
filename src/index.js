const HTML = `<!DOCTYPE html>
<html lang="de-CH" data-theme="auto">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Äuä – Das Bärner Wort</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    /* ===== RESET & BASE ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      transition: background 0.4s ease, color 0.4s ease;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ===== THEME VARIABLES ===== */
    :root {
      --bg: #FAFAFA;
      --bg2: #F0F0F2;
      --text: #1C1C1E;
      --text2: #6E6E73;
      --accent: #DC0B17;
      --accent-glow: rgba(220,11,23,0.15);
      --card: #FFFFFF;
      --border: rgba(0,0,0,0.08);
      --shadow: 0 4px 24px rgba(0,0,0,0.07);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
    }
    [data-theme="dark"] {
      --bg: #0C0C0E;
      --bg2: #1C1C1E;
      --text: #F5F5F7;
      --text2: #98989D;
      --accent: #FF453A;
      --accent-glow: rgba(255,69,58,0.15);
      --card: #1C1C1E;
      --border: rgba(255,255,255,0.08);
      --shadow: 0 4px 24px rgba(0,0,0,0.3);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.5);
    }

    /* ===== HEADER ===== */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.85rem 2rem;
      background: color-mix(in srgb, var(--bg) 85%, transparent);
      backdrop-filter: blur(20px) saturate(1.5);
      -webkit-backdrop-filter: blur(20px) saturate(1.5);
      border-bottom: 1px solid var(--border);
    }
    .logo {
      font-size: 1.5rem; font-weight: 900; color: var(--accent);
      letter-spacing: -0.03em; user-select: none;
    }
    .controls { display: flex; gap: 0.6rem; align-items: center; }
    .btn {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 100px; padding: 0.4rem 1rem;
      cursor: pointer; font-size: 0.78rem; font-weight: 600;
      color: var(--text); transition: all 0.2s; white-space: nowrap;
      font-family: inherit;
    }
    .btn:hover {
      background: var(--accent); color: #fff;
      border-color: var(--accent); transform: scale(1.04);
    }

    /* ===== PARTICLES ===== */
    .particles {
      position: fixed; inset: 0; pointer-events: none;
      overflow: hidden; z-index: 0;
    }
    .particle {
      position: absolute; font-size: 1.2rem;
      animation: floatUp linear infinite; opacity: 0;
    }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; padding: 7rem 2rem 5rem;
      position: relative; overflow: hidden; z-index: 1;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 70% 60% at 50% 40%, var(--accent-glow), transparent);
      pointer-events: none;
    }
    .hero-eyebrow {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em;
      text-transform: uppercase; color: var(--accent);
      margin-bottom: 1.5rem;
      opacity: 0; animation: fadeUp 0.7s ease 0.2s forwards;
    }
    .hero-word {
      font-size: clamp(5rem, 22vw, 18rem);
      font-weight: 900; line-height: 0.88;
      letter-spacing: -0.04em; margin-bottom: 2rem;
      position: relative;
    }
    .hero-word .letter {
      display: inline-block;
      opacity: 0; animation: letterPop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    .hero-word .letter:nth-child(1) { animation-delay: 0.35s; color: var(--accent); }
    .hero-word .letter:nth-child(2) { animation-delay: 0.5s; }
    .hero-word .letter:nth-child(3) { animation-delay: 0.65s; color: var(--accent); }
    .hero-sub {
      font-size: clamp(1rem, 2.5vw, 1.3rem); color: var(--text2);
      font-weight: 300; max-width: 480px; line-height: 1.7;
      opacity: 0; animation: fadeUp 0.7s ease 1s forwards;
    }
    .scroll-hint {
      position: absolute; bottom: 2.5rem;
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      color: var(--text2); font-size: 0.72rem; letter-spacing: 0.1em;
      text-transform: uppercase;
      opacity: 0; animation: fadeIn 1s ease 1.6s forwards;
    }
    .scroll-chevron {
      width: 22px; height: 22px; animation: bounce 2s ease infinite;
    }

    /* ===== SECTIONS ===== */
    .content { padding: 4rem 1.5rem 6rem; max-width: 1000px; margin: 0 auto; position: relative; z-index: 1; }
    .card {
      background: var(--card); border-radius: 20px;
      padding: 2.5rem; margin-bottom: 1.5rem;
      border: 1px solid var(--border); box-shadow: var(--shadow);
      opacity: 0; transform: translateY(28px);
      transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
    }
    .card.visible { opacity: 1; transform: translateY(0); }
    .card:hover { box-shadow: var(--shadow-lg); }
    .card-num {
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em;
      text-transform: uppercase; color: var(--accent); margin-bottom: 0.4rem;
    }
    .card-title {
      font-size: clamp(1.4rem, 3.5vw, 2.2rem);
      font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1rem;
    }
    .card-text { font-size: 1rem; line-height: 1.85; color: var(--text2); }

    /* Pronunciation box */
    .pron-box {
      background: var(--bg2); border-radius: 14px;
      padding: 1.5rem; margin-top: 1.5rem;
      border: 1px solid var(--border);
      display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; align-items: center;
    }
    .ipa { font-size: 2.2rem; font-weight: 800; color: var(--accent); font-family: serif; }
    .ipa-desc { font-size: 0.88rem; color: var(--text2); line-height: 1.8; }
    .ipa-desc strong { color: var(--text); }

    /* Meaning chips */
    .chips { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px,1fr)); gap: 0.75rem; margin-top: 1.5rem; }
    .chip {
      background: var(--bg2); border-radius: 12px; padding: 1rem;
      border: 1px solid var(--border); text-align: center;
      font-weight: 600; font-size: 0.85rem; transition: all 0.2s; cursor: default;
    }
    .chip:hover { background: var(--accent); color: #fff; transform: translateY(-3px); box-shadow: 0 8px 20px var(--accent-glow); }
    .chip .ch-icon { font-size: 1.6rem; display: block; margin-bottom: 0.4rem; }

    /* Examples */
    .examples { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
    .ex {
      background: var(--bg2); border-radius: 12px;
      padding: 1.2rem 1.4rem;
      border-left: 3px solid var(--accent);
    }
    .ex-q { font-size: 1.05rem; font-weight: 700; font-style: italic; margin-bottom: 0.2rem; }
    .ex-t { font-size: 0.82rem; color: var(--text2); }

    /* ===== BEAR SECTION ===== */
    .bear-wrap {
      text-align: center; padding: 4rem 2rem;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      background: var(--bg2); position: relative; z-index: 1;
    }
    .bear {
      font-size: 4rem; cursor: pointer; display: inline-block;
      transition: transform 0.2s; user-select: none; line-height: 1;
    }
    .bear:hover { transform: scale(1.1) rotate(-5deg); }
    .bear.shake { animation: shake 0.45s ease; }
    .bear-hint { font-size: 0.8rem; color: var(--text2); margin-top: 0.6rem; }

    /* ===== FOOTER ===== */
    footer {
      text-align: center; padding: 2.5rem 1rem;
      color: var(--text2); font-size: 0.82rem;
      position: relative; z-index: 1;
    }

    /* ===== OVERLAYS ===== */
    .overlay {
      position: fixed; inset: 0; z-index: 500;
      background: rgba(0,0,0,0.88);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
    }
    .overlay.on { opacity: 1; pointer-events: all; }

    /* Konami overlay */
    .konami-box {
      text-align: center; color: #fff; padding: 3rem;
      animation: zoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
    }
    .konami-title { font-size: clamp(2rem,6vw,3.5rem); font-weight: 900; margin-bottom: 0.4rem; }
    .konami-sub { color: rgba(255,255,255,0.55); font-size: 0.9rem; margin-bottom: 2.5rem; }
    .bars { display: flex; align-items: flex-end; justify-content: center; gap: 5px; height: 48px; }
    .bar {
      width: 9px; background: var(--accent); border-radius: 4px;
      animation: musicBar 0.7s ease infinite alternate;
    }
    .bar:nth-child(1) { height: 14px; animation-delay: 0s; }
    .bar:nth-child(2) { height: 26px; animation-delay: 0.12s; }
    .bar:nth-child(3) { height: 40px; animation-delay: 0.24s; }
    .bar:nth-child(4) { height: 26px; animation-delay: 0.36s; }
    .bar:nth-child(5) { height: 14px; animation-delay: 0.48s; }
    .esc-hint { margin-top: 2rem; font-size: 0.72rem; color: rgba(255,255,255,0.25); letter-spacing: 0.1em; }

    /* Slideshow modal */
    .ss-modal {
      background: var(--card); border-radius: 22px;
      max-width: 560px; width: 92%; overflow: hidden;
      animation: zoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 40px 80px rgba(0,0,0,0.6);
    }
    .ss-head {
      padding: 1.25rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
    }
    .ss-head-title { font-weight: 800; font-size: 1rem; }
    .ss-close {
      width: 30px; height: 30px; border-radius: 50%;
      background: var(--bg2); border: none; cursor: pointer;
      font-size: 0.9rem; color: var(--text); display: flex;
      align-items: center; justify-content: center;
      transition: background 0.2s; font-family: inherit;
    }
    .ss-close:hover { background: var(--accent); color: #fff; }
    .ss-stage {
      position: relative; aspect-ratio: 16/9; overflow: hidden;
      background: var(--bg2);
    }
    .slide {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      font-size: 3.5rem; gap: 0.5rem;
      opacity: 0; transition: opacity 0.5s;
      background: var(--bg2);
    }
    .slide.on { opacity: 1; }
    .slide small { font-size: 0.9rem; color: var(--text2); font-weight: 600; }
    .ss-foot {
      padding: 1rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid var(--border);
    }
    .ss-btn {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 8px; padding: 0.45rem 1rem;
      cursor: pointer; font-size: 0.8rem; font-weight: 600;
      color: var(--text); transition: all 0.2s; font-family: inherit;
    }
    .ss-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
    .ss-count { font-size: 0.8rem; color: var(--text2); }

    /* ===== KEYFRAMES ===== */
    @keyframes letterPop {
      from { opacity: 0; transform: translateY(24px) scale(0.75); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes bounce {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(7px); }
    }
    @keyframes floatUp {
      0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      8%   { opacity: 0.12; }
      92%  { opacity: 0.12; }
      100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
    }
    @keyframes shake {
      0%,100% { transform: rotate(0); }
      20%     { transform: rotate(-16deg) scale(1.15); }
      45%     { transform: rotate(16deg) scale(1.25); }
      65%     { transform: rotate(-10deg) scale(1.1); }
      85%     { transform: rotate(8deg); }
    }
    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.82); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes musicBar {
      from { transform: scaleY(0.25); }
      to   { transform: scaleY(1); }
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 640px) {
      header { padding: 0.7rem 1.1rem; }
      .content { padding: 3rem 1rem 4rem; }
      .card { padding: 1.75rem 1.25rem; }
      .pron-box { grid-template-columns: 1fr; text-align: center; }
      .chips { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>

<!-- ========== HEADER ========== -->
<header>
  <div class="logo">Äuä</div>
  <div class="controls">
    <button class="btn" id="langBtn">
      <span data-bärn>DE</span><span data-hochd style="display:none">BE</span>
    </button>
    <button class="btn" id="themeBtn" title="Theme">
      <span id="themeIcon">☀️</span>
    </button>
  </div>
</header>

<!-- ========== PARTICLES ========== -->
<div class="particles" id="pts"></div>

<!-- ========== HERO ========== -->
<section class="hero">
  <div class="hero-eyebrow">
    <span data-bärn>Bärndütschs Wort</span>
    <span data-hochd style="display:none">Berndeutsches Wort</span>
  </div>
  <div class="hero-word" aria-label="Äuä">
    <span class="letter">Ä</span><span class="letter">u</span><span class="letter">ä</span>
  </div>
  <p class="hero-sub">
    <span data-bärn>Es Wort, wo alles und nüt seit.</span>
    <span data-hochd style="display:none">Ein Wort, das alles und nichts sagt.</span>
  </p>
  <div class="scroll-hint">
    <svg class="scroll-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
    <span data-bärn>Witer use</span>
    <span data-hochd style="display:none">Weiter</span>
  </div>
</section>

<!-- ========== SECTIONS ========== -->
<main class="content">

  <!-- 01 Herkunft -->
  <article class="card" id="c1">
    <div class="card-num">
      <span data-bärn>01 — Herkuft</span>
      <span data-hochd style="display:none">01 — Herkunft</span>
    </div>
    <h2 class="card-title">
      <span data-bärn>Woher chunts «Äuä»?</span>
      <span data-hochd style="display:none">Woher kommt «Äuä»?</span>
    </h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch es ächts Bärndütschs Wort, wo sit Generatione im Kanton Bärn brüchlich isch. Es isch verwandt mit em alttüütsche Usruf «oh weh» und het si über d Johrhunderte zur typisch bärnerische Kürzigsform entwicklet. Es isch es Wort, wo d Bärner Seel widerspieglet: ruehig, direkt und mit emne Schuss Fatalismus.</span>
      <span data-hochd style="display:none">«Äuä» ist ein echtes Berndeutsches Wort, das seit Generationen im Kanton Bern gebräuchlich ist. Es ist verwandt mit dem althochdeutschen Ausruf «oh weh» und hat sich über die Jahrhunderte zur typisch bernerischen Kurzform entwickelt. Es ist ein Wort, das die Berner Seele widerspiegelt: ruhig, direkt und mit einer Prise Fatalismus.</span>
    </p>
  </article>

  <!-- 02 Aussprache -->
  <article class="card" id="c2">
    <div class="card-num">
      <span data-bärn>02 — Ussprach</span>
      <span data-hochd style="display:none">02 — Aussprache</span>
    </div>
    <h2 class="card-title">
      <span data-bärn>Wie sprichts me us?</span>
      <span data-hochd style="display:none">Wie spricht man es aus?</span>
    </h2>
    <p class="card-text">
      <span data-bärn>D Ussprach isch eifach, sobald me s Prinzip begriffe hät. Beidi «ä» wärde offe usgsprochen — ähnlich wie im Hochdüütsche «Bär». Dä churze «u»-Lut dazwüsche verbindet d beide Vokale zu emne fliessende Klang.</span>
      <span data-hochd style="display:none">Die Aussprache ist einfach, sobald man das Prinzip begriffen hat. Beide «ä» werden offen ausgesprochen — ähnlich wie im Hochdeutschen «Bär». Der kurze «u»-Laut dazwischen verbindet die beiden Vokale zu einem fliessenden Klang.</span>
    </p>
    <div class="pron-box">
      <div class="ipa">/ɛu̯ɛ/</div>
      <div class="ipa-desc">
        <strong>Ä</strong> — <span data-bärn>Offe «ä» wie i «Bär»</span><span data-hochd style="display:none">Offenes «ä» wie in «Bär»</span><br>
        <strong>U</strong> — <span data-bärn>Churze Übergangs-Vokal</span><span data-hochd style="display:none">Kurzer Übergangsvokal</span><br>
        <strong>Ä</strong> — <span data-bärn>Wieder offe «ä», en Töne tiefer</span><span data-hochd style="display:none">Wieder offenes «ä», einen Ton tiefer</span>
      </div>
    </div>
  </article>

  <!-- 03 Bedeutung -->
  <article class="card" id="c3">
    <div class="card-num">
      <span data-bärn>03 — Bedütig</span>
      <span data-hochd style="display:none">03 — Bedeutung</span>
    </div>
    <h2 class="card-title">
      <span data-bärn>Was bedeutets?</span>
      <span data-hochd style="display:none">Was bedeutet es?</span>
    </h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch vielsiitig: Es chan Resignatio usdrücke, Bedure, oder eifach d Akzeptanz vo öppis, wo nüme z'ändere isch. Je nach Tonfall chan s ganz verschiedeni Nüancene ha.</span>
      <span data-hochd style="display:none">«Äuä» ist vielseitig: Es kann Resignation ausdrücken, Bedauern, oder einfach die Akzeptanz von etwas, das nicht mehr zu ändern ist. Je nach Tonlage kann es ganz verschiedene Nuancen haben.</span>
    </p>
    <div class="chips">
      <div class="chip"><span class="ch-icon">😔</span><span data-bärn>Resignatio</span><span data-hochd style="display:none">Resignation</span></div>
      <div class="chip"><span class="ch-icon">🤷</span><span data-bärn>So isch es halt</span><span data-hochd style="display:none">So ist es halt</span></div>
      <div class="chip"><span class="ch-icon">💔</span><span data-bärn>Bedure</span><span data-hochd style="display:none">Bedauern</span></div>
      <div class="chip"><span class="ch-icon">🙄</span><span data-bärn>Mild Kritik</span><span data-hochd style="display:none">Milde Kritik</span></div>
      <div class="chip"><span class="ch-icon">✌️</span><span data-bärn>Akzeptanz</span><span data-hochd style="display:none">Akzeptanz</span></div>
      <div class="chip"><span class="ch-icon">😤</span><span data-bärn>Sälber schuld</span><span data-hochd style="display:none">Selber schuld</span></div>
    </div>
  </article>

  <!-- 04 Beispiele -->
  <article class="card" id="c4">
    <div class="card-num">
      <span data-bärn>04 — Bispiel</span>
      <span data-hochd style="display:none">04 — Beispiele</span>
    </div>
    <h2 class="card-title">
      <span data-bärn>Wie brucht me s?</span>
      <span data-hochd style="display:none">Wie verwendet man es?</span>
    </h2>
    <div class="examples">
      <div class="ex">
        <div class="ex-q">«Hät s nid klappet? — Äuä.»</div>
        <div class="ex-t">
          <span data-bärn>Hat's nicht geklappt? — So isch das Läbe halt.</span>
          <span data-hochd style="display:none">Hat es nicht geklappt? — So ist das Leben halt.</span>
        </div>
      </div>
      <div class="ex">
        <div class="ex-q">«I ha mys Znacht vergässe. — Äuä!»</div>
        <div class="ex-t">
          <span data-bärn>Ich ha my Abigässe vergässe. — Sälber schuld!</span>
          <span data-hochd style="display:none">Ich habe mein Abendessen vergessen. — Selber schuld!</span>
        </div>
      </div>
      <div class="ex">
        <div class="ex-q">«Es rägnet scho wieder. — Äuä…»</div>
        <div class="ex-t">
          <span data-bärn>Es rägnet scho wieder. — Jo, was cha me mache…</span>
          <span data-hochd style="display:none">Es regnet schon wieder. — Ach ja, was soll man machen…</span>
        </div>
      </div>
    </div>
  </article>

</main>

<!-- ========== BÄREN-BEREICH ========== -->
<div class="bear-wrap">
  <div id="bearBtn" class="bear" title="🐻">🐻</div>
  <p class="bear-hint">
    <span data-bärn>Dr Bärner Bär grüsst di</span>
    <span data-hochd style="display:none">Der Berner Bär grüsst dich</span>
  </p>
</div>

<!-- ========== FOOTER ========== -->
<footer>
  <p>
    <span data-bärn>Gmacht mit ❤️ für d Bärner Sprach — Äuä.</span>
    <span data-hochd style="display:none">Gemacht mit ❤️ für die Berner Sprache — Äuä.</span>
  </p>
</footer>

<!-- ========== EASTER EGG 1: KONAMI ========== -->
<div class="overlay" id="konamiOverlay">
  <div class="konami-box">
    <div class="konami-title">🎵 Äuä!</div>
    <p class="konami-sub">
      <span data-bärn>Du häsch de Geheimcode gfunde! 🎉</span>
      <span data-hochd style="display:none">Du hast den Geheimcode gefunden! 🎉</span>
    </p>
    <div class="bars">
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div>
    </div>
    <p class="esc-hint">ESC</p>
  </div>
</div>

<!-- ========== EASTER EGG 2: SLIDESHOW ========== -->
<div class="overlay" id="ssOverlay">
  <div class="ss-modal">
    <div class="ss-head">
      <span class="ss-head-title">
        <span data-bärn>🐻 Bärn!</span>
        <span data-hochd style="display:none">🐻 Bern!</span>
      </span>
      <button class="ss-close" id="ssClose">✕</button>
    </div>
    <div class="ss-stage">
      <div class="slide on">🏔️<small><span data-bärn>Bärner Alpe</span><span data-hochd style="display:none">Berner Alpen</span></small></div>
      <div class="slide">🐻<small><span data-bärn>Dr Bärner Bär</span><span data-hochd style="display:none">Der Berner Bär</span></small></div>
      <div class="slide">🌹<small><span data-bärn>D Rosetäggel</span><span data-hochd style="display:none">Die Rosengasse</span></small></div>
      <div class="slide">🏛️<small><span data-bärn>s Bundeshuus</span><span data-hochd style="display:none">Das Bundeshaus</span></small></div>
      <div class="slide">☕<small><span data-bärn>Bärner Kaffi</span><span data-hochd style="display:none">Berner Kaffee</span></small></div>
    </div>
    <div class="ss-foot">
      <button class="ss-btn" id="ssPrev">← <span data-bärn>Vorigs</span><span data-hochd style="display:none">Voriges</span></button>
      <span class="ss-count" id="ssCnt">1 / 5</span>
      <button class="ss-btn" id="ssNext"><span data-bärn>Nächstes</span><span data-hochd style="display:none">Nächstes</span> →</button>
    </div>
  </div>
</div>

<script>
// ============================================================
// THEME
// ============================================================
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
let theme = localStorage.getItem('theme') || 'auto';

function applyTheme(t) {
  const resolved = t === 'auto' ? (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light') : t;
  root.setAttribute('data-theme', resolved);
  themeIcon.textContent = resolved === 'dark' ? '🌙' : '☀️';
}
applyTheme(theme);
themeBtn.addEventListener('click', () => {
  const cur = root.getAttribute('data-theme');
  theme = cur === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme(theme);
});
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => {
  if (theme === 'auto') applyTheme('auto');
});

// ============================================================
// LANGUAGE
// ============================================================
let lang = localStorage.getItem('lang') || 'bärn';

function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('[data-bärn]').forEach(el => el.style.display = l === 'bärn' ? '' : 'none');
  document.querySelectorAll('[data-hochd]').forEach(el => el.style.display = l === 'hochd' ? '' : 'none');
}
applyLang(lang);
document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'bärn' ? 'hochd' : 'bärn'));

// ============================================================
// PARTICLES
// ============================================================
const ptc = document.getElementById('pts');
['🐻','⛰️','❄️','🌿','✦','◆','🌸','❋'].forEach((sym, i) => {
  for (let j = 0; j < 2; j++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = sym;
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.7 + Math.random() * 0.9) + 'rem';
    p.style.animationDuration = (18 + Math.random() * 22) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    ptc.appendChild(p);
  }
});

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.card').forEach(c => io.observe(c));

// ============================================================
// KONAMI CODE
// ============================================================
const KONAMI_SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let ki = 0;
let audioCtx = null;

function playMelody() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const master = audioCtx.createGain();
    master.gain.value = 0.5; // 50% Lautstärke
    master.connect(audioCtx.destination);

    // Fröhliche Melodie
    const melody = [
      { f: 523.25, t: 0.0, d: 0.18 },   // C5
      { f: 587.33, t: 0.2, d: 0.18 },   // D5
      { f: 659.25, t: 0.4, d: 0.18 },   // E5
      { f: 783.99, t: 0.6, d: 0.18 },   // G5
      { f: 1046.5, t: 0.85, d: 0.28 },  // C6
      { f: 783.99, t: 1.2, d: 0.18 },   // G5
      { f: 659.25, t: 1.4, d: 0.18 },   // E5
      { f: 523.25, t: 1.65, d: 0.35 },  // C5
      { f: 392.00, t: 2.1, d: 0.18 },   // G4
      { f: 523.25, t: 2.35, d: 0.5 },   // C5 (Ende)
    ];
    melody.forEach(({ f, t, d }) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = f;
      const now = audioCtx.currentTime;
      gain.gain.setValueAtTime(0, now + t);
      gain.gain.linearRampToValueAtTime(0.4, now + t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
      osc.connect(gain); gain.connect(master);
      osc.start(now + t); osc.stop(now + t + d + 0.05);
    });
  } catch(e) { console.warn('Audio nicht verfügbar:', e); }
}

document.addEventListener('keydown', e => {
  if (e.key === KONAMI_SEQ[ki]) {
    ki++;
    if (ki === KONAMI_SEQ.length) { ki = 0; showKonami(); }
  } else {
    ki = 0;
    if (e.key === KONAMI_SEQ[0]) ki = 1;
  }
});

function showKonami() {
  document.getElementById('konamiOverlay').classList.add('on');
  playMelody();
}

// ============================================================
// BÄREN EASTER EGG → SLIDESHOW
// ============================================================
let bearTaps = 0, bearTimer;
document.getElementById('bearBtn').addEventListener('click', function() {
  bearTaps++;
  this.classList.remove('shake');
  void this.offsetWidth; // reflow
  this.classList.add('shake');
  clearTimeout(bearTimer);
  bearTimer = setTimeout(() => { bearTaps = 0; }, 1500);
  if (bearTaps >= 5) { bearTaps = 0; showSlideshow(); }
});

// ============================================================
// SLIDESHOW
// ============================================================
let curSlide = 0;
const slides = document.querySelectorAll('.slide');
const ssCnt = document.getElementById('ssCnt');
let ssInterval;

function goSlide(i) {
  slides.forEach(s => s.classList.remove('on'));
  curSlide = (i + slides.length) % slides.length;
  slides[curSlide].classList.add('on');
  ssCnt.textContent = (curSlide + 1) + ' / ' + slides.length;
}
function showSlideshow() {
  document.getElementById('ssOverlay').classList.add('on');
  goSlide(0);
  ssInterval = setInterval(() => goSlide(curSlide + 1), 2500);
}
function closeSlideshow() {
  document.getElementById('ssOverlay').classList.remove('on');
  clearInterval(ssInterval);
}

document.getElementById('ssClose').addEventListener('click', closeSlideshow);
document.getElementById('ssNext').addEventListener('click', () => { clearInterval(ssInterval); goSlide(curSlide + 1); });
document.getElementById('ssPrev').addEventListener('click', () => { clearInterval(ssInterval); goSlide(curSlide - 1); });

// ============================================================
// CLOSE OVERLAYS
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('konamiOverlay').classList.remove('on');
    closeSlideshow();
  }
});
['konamiOverlay', 'ssOverlay'].forEach(id => {
  document.getElementById(id).addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('on');
      if (id === 'ssOverlay') closeSlideshow();
    }
  });
});
</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  },
};
