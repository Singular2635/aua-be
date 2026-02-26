const HTML = `<!DOCTYPE html>
<html lang="de-CH" data-theme="auto">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Äuä – Das Bärner Wort</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg); color: var(--text);
      transition: background 0.4s, color 0.4s;
      min-height: 100vh; overflow-x: hidden;
    }

    /* ===== THEME: ROT / SCHWARZ / GOLD ===== */
    :root {
      --bg:        #111111;
      --bg2:       #1A1A1A;
      --bg3:       #222222;
      --text:      #F5EDD8;
      --text2:     #A89070;
      --red:       #DC0B17;
      --red2:      #FF1E2D;
      --gold:      #F0A500;
      --gold2:     #FFD060;
      --card:      #1A1A1A;
      --border:    rgba(240,165,0,0.15);
      --shadow:    0 4px 28px rgba(0,0,0,0.5);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.7);
    }
    [data-theme="light"] {
      --bg:        #1A0000;
      --bg2:       #220000;
      --bg3:       #2A0500;
      --text:      #F5EDD8;
      --text2:     #C8A080;
      --red:       #FF1E2D;
      --red2:      #FF4D57;
      --gold:      #F0A500;
      --gold2:     #FFD060;
      --card:      #220500;
      --border:    rgba(240,165,0,0.18);
      --shadow:    0 4px 28px rgba(0,0,0,0.6);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.8);
    }

    /* ===== HEADER ===== */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.8rem 2rem;
      background: rgba(10,0,0,0.88);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border-bottom: 2px solid var(--red);
    }
    .logo { font-size: 1.5rem; font-weight: 900; color: var(--gold); letter-spacing: -0.03em; }
    .controls { display: flex; gap: 0.6rem; }
    .btn {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 100px; padding: 0.38rem 0.95rem;
      cursor: pointer; font-size: 0.76rem; font-weight: 700;
      color: var(--text); transition: all 0.2s; font-family: inherit;
    }
    .btn:hover { background: var(--red); color: #fff; border-color: var(--red); transform: scale(1.04); }

    /* ===== PARTICLES ===== */
    .particles { position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
    .particle { position: absolute; animation: floatUp linear infinite; opacity: 0; font-size: 0.9rem; }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; padding: 7rem 2rem 5rem;
      background: radial-gradient(ellipse 80% 60% at 50% 40%, #2a0000 0%, #0d0000 50%, #000000 100%);
      position: relative; overflow: hidden; z-index: 1;
    }
    .hero::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--red), var(--gold), var(--red));
    }
    .hero-eyebrow {
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 1.5rem;
      opacity: 0; animation: fadeUp 0.7s ease 0.2s forwards;
    }
    .hero-word {
      font-size: clamp(5.5rem, 22vw, 18rem);
      font-weight: 900; line-height: 0.88;
      letter-spacing: -0.04em; margin-bottom: 2rem;
    }
    .hero-word .letter {
      display: inline-block;
      opacity: 0; animation: letterPop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
      text-shadow: 0 0 80px currentColor;
    }
    .hero-word .letter:nth-child(1) { animation-delay:.35s; color: var(--red); }
    .hero-word .letter:nth-child(2) { animation-delay:.5s;  color: var(--gold); }
    .hero-word .letter:nth-child(3) { animation-delay:.65s; color: var(--red); }
    .hero-sub {
      font-size: clamp(0.95rem,2.5vw,1.25rem); color: rgba(245,237,216,0.5);
      font-weight: 300; max-width: 440px; line-height: 1.75;
      opacity: 0; animation: fadeUp 0.7s ease 1s forwards;
    }
    .scroll-hint {
      position: absolute; bottom: 2.5rem;
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      color: rgba(240,165,0,0.4); font-size: 0.68rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      opacity: 0; animation: fadeIn 1s ease 1.6s forwards;
    }
    .scroll-chevron { width: 20px; height: 20px; animation: bounce 2s ease infinite; }

    /* ===== SECTIONS ===== */
    .content { padding: 4rem 1.5rem 6rem; max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
    .card {
      background: var(--card); border-radius: 16px;
      padding: 2.5rem; margin-bottom: 1.5rem;
      border: 1px solid var(--border);
      border-left: 4px solid var(--red);
      box-shadow: var(--shadow);
      opacity: 0; transform: translateY(28px);
      transition: opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1), box-shadow .3s;
    }
    .card.visible { opacity: 1; transform: translateY(0); }
    .card:hover { box-shadow: var(--shadow-lg); border-left-color: var(--gold); }
    .card-num { font-size:.68rem; font-weight:800; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:.4rem; }
    .card-title { font-size:clamp(1.4rem,3.5vw,2.1rem); font-weight:900; letter-spacing:-.02em; margin-bottom:1rem; color:var(--text); }
    .card-text { font-size:1rem; line-height:1.85; color:var(--text2); }

    /* Pronunciation */
    .pron-box {
      background: var(--bg2); border-radius: 12px;
      padding: 1.4rem 1.6rem; margin-top: 1.5rem;
      border: 1px solid var(--border);
      display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; align-items: center;
    }
    .ipa { font-size: 2.4rem; font-weight: 900; color: var(--gold); font-family: serif; }
    .ipa-desc { font-size:.87rem; color:var(--text2); line-height:1.8; }
    .ipa-desc strong { color: var(--text); }

    /* Chips */
    .chips { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:.7rem; margin-top:1.5rem; }
    .chip {
      background:var(--bg2); border-radius:12px; padding:1rem;
      border:1px solid var(--border); text-align:center;
      font-weight:700; font-size:.82rem; transition:all .2s; cursor:default; color:var(--text);
    }
    .chip:hover { background:var(--red); color:#fff; transform:translateY(-3px); box-shadow:0 8px 20px rgba(220,11,23,.35); border-color:var(--red); }
    .chip .ch-icon { font-size:1.6rem; display:block; margin-bottom:.4rem; }

    /* Examples */
    .examples { display:flex; flex-direction:column; gap:1rem; margin-top:1.5rem; }
    .ex { background:var(--bg2); border-radius:12px; padding:1.2rem 1.4rem; border-left:3px solid var(--gold); }
    .ex-q { font-size:1.05rem; font-weight:800; font-style:italic; margin-bottom:.25rem; color:var(--text); }
    .ex-t { font-size:.81rem; color:var(--text2); }

    /* Bear section */
    .bear-wrap {
      text-align:center; padding:4rem 2rem;
      background: linear-gradient(135deg, #0d0000, #000000);
      border-top:2px solid var(--red); border-bottom:2px solid var(--red);
      position:relative; z-index:1;
    }
    .bear { font-size:4rem; cursor:pointer; display:inline-block; transition:transform .2s; user-select:none; }
    .bear:hover { transform:scale(1.12) rotate(-6deg); filter:drop-shadow(0 0 20px var(--gold)); }
    .bear.shake { animation:shake .45s ease; }
    .bear-hint { font-size:.78rem; color:var(--text2); margin-top:.5rem; }

    /* Footer */
    footer {
      text-align:center; padding:2.5rem 1rem;
      color:var(--text2); font-size:.8rem;
      background:#000;
      border-top:3px solid var(--gold);
      position:relative; z-index:1;
    }

    /* ===== OVERLAYS ===== */
    .overlay {
      position:fixed; inset:0; z-index:500;
      background:rgba(0,0,0,0.95);
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      display:flex; align-items:center; justify-content:center;
      opacity:0; pointer-events:none; transition:opacity .3s;
    }
    .overlay.on { opacity:1; pointer-events:all; }

    /* Konami */
    .konami-box { text-align:center; color:#F5EDD8; padding:3rem; animation:zoomIn .5s cubic-bezier(.34,1.56,.64,1); }
    .konami-emoji { font-size:4rem; margin-bottom:.5rem; animation:pulse 1s ease infinite; }
    .konami-title { font-size:clamp(2rem,6vw,3.5rem); font-weight:900; color:var(--gold); margin-bottom:.4rem; }
    .konami-sub { color:rgba(245,237,216,.5); font-size:.88rem; margin-bottom:2.5rem; }
    .bars { display:flex; align-items:flex-end; justify-content:center; gap:5px; height:48px; }
    .bar { border-radius:4px; animation:musicBar .7s ease infinite alternate; }
    .bar:nth-child(1){width:9px;height:14px;background:var(--red);animation-delay:0s}
    .bar:nth-child(2){width:9px;height:26px;background:var(--gold);animation-delay:.12s}
    .bar:nth-child(3){width:9px;height:40px;background:var(--red);animation-delay:.24s}
    .bar:nth-child(4){width:9px;height:26px;background:var(--gold);animation-delay:.36s}
    .bar:nth-child(5){width:9px;height:14px;background:var(--red);animation-delay:.48s}
    .esc-hint { margin-top:2rem; font-size:.7rem; color:rgba(245,237,216,.2); letter-spacing:.1em; }

    /* Slideshow */
    .ss-modal {
      background:var(--card); border-radius:22px;
      max-width:580px; width:93%; overflow:hidden;
      animation:zoomIn .5s cubic-bezier(.34,1.56,.64,1);
      box-shadow:0 40px 80px rgba(0,0,0,.8);
      border-top:4px solid var(--gold);
    }
    .ss-head {
      padding:1.2rem 1.5rem; display:flex; align-items:center; justify-content:space-between;
      border-bottom:1px solid var(--border);
      background:var(--bg2);
    }
    .ss-head-title { font-weight:900; font-size:1rem; color:var(--gold); }
    .ss-close {
      width:30px; height:30px; border-radius:50%;
      background:var(--bg3); border:1px solid var(--border); cursor:pointer;
      font-size:.9rem; color:var(--text); display:flex; align-items:center; justify-content:center;
      transition:all .2s; font-family:inherit;
    }
    .ss-close:hover { background:var(--red); color:#fff; border-color:var(--red); }
    .ss-stage { position:relative; aspect-ratio:16/9; overflow:hidden; background:#000; }
    .slide { position:absolute; inset:0; opacity:0; transition:opacity .6s; }
    .slide.on { opacity:1; }
    .slide img { width:100%; height:100%; object-fit:cover; display:block; }
    .slide-caption {
      position:absolute; bottom:0; left:0; right:0;
      background:linear-gradient(transparent,rgba(0,0,0,.8));
      padding:2rem 1rem .75rem; font-size:.88rem; font-weight:700;
      color:#F5EDD8; text-align:center;
    }
    .ss-foot {
      padding:.9rem 1.4rem; display:flex; align-items:center; justify-content:space-between;
      border-top:1px solid var(--border); background:var(--bg2);
    }
    .ss-btn {
      background:var(--bg3); border:1px solid var(--border);
      border-radius:8px; padding:.4rem .9rem;
      cursor:pointer; font-size:.78rem; font-weight:700;
      color:var(--text); transition:all .2s; font-family:inherit;
    }
    .ss-btn:hover { background:var(--gold); color:#000; border-color:var(--gold); }
    .ss-count { font-size:.78rem; color:var(--text2); font-weight:600; }

    /* ===== KEYFRAMES ===== */
    @keyframes letterPop { from{opacity:0;transform:translateY(24px) scale(.75)} to{opacity:1;transform:translateY(0) scale(1)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
    @keyframes floatUp {
      0%{transform:translateY(100vh) rotate(0deg);opacity:0}
      8%{opacity:.1} 92%{opacity:.1}
      100%{transform:translateY(-80px) rotate(360deg);opacity:0}
    }
    @keyframes shake {
      0%,100%{transform:rotate(0)}
      20%{transform:rotate(-18deg) scale(1.18)}
      45%{transform:rotate(18deg) scale(1.28)}
      65%{transform:rotate(-10deg) scale(1.12)}
      85%{transform:rotate(8deg)}
    }
    @keyframes zoomIn { from{opacity:0;transform:scale(.82)} to{opacity:1;transform:scale(1)} }
    @keyframes musicBar { from{transform:scaleY(.2)} to{transform:scaleY(1)} }
    @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }

    @media (max-width:600px) {
      header{padding:.65rem 1rem}
      .content{padding:3rem .9rem 4rem}
      .card{padding:1.6rem 1.1rem}
      .pron-box{grid-template-columns:1fr;text-align:center}
      .chips{grid-template-columns:repeat(2,1fr)}
    }
  </style>
</head>
<body>

<header>
  <div class="logo">Äuä</div>
  <div class="controls">
    <button class="btn" id="langBtn">
      <span data-bärn>DE</span><span data-hochd style="display:none">BE</span>
    </button>
    <button class="btn" id="themeBtn"><span id="themeIcon">🌙</span></button>
  </div>
</header>

<div class="particles" id="pts"></div>

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
    <svg class="scroll-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
    <span data-bärn>Witer use</span><span data-hochd style="display:none">Weiter</span>
  </div>
</section>

<main class="content">

  <article class="card" id="c1">
    <div class="card-num"><span data-bärn>01 — Herkuft</span><span data-hochd style="display:none">01 — Herkunft</span></div>
    <h2 class="card-title"><span data-bärn>Woher chunts «Äuä»?</span><span data-hochd style="display:none">Woher kommt «Äuä»?</span></h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch es ächts Bärndütschs Wort, wo sit Generatione im Kanton Bärn brüchlich isch. Es isch verwandt mit em alttüütsche Usruf «oh weh» und het si über d Johrhunderte zur typisch bärnerische Kürzigsform entwicklet. Es isch es Wort, wo d Bärner Seel widerspieglet: ruehig, direkt und mit emne Schuss Fatalismus.</span>
      <span data-hochd style="display:none">«Äuä» ist ein echtes Berndeutsches Wort, das seit Generationen im Kanton Bern gebräuchlich ist. Es ist verwandt mit dem althochdeutschen Ausruf «oh weh» und hat sich über die Jahrhunderte zur typisch bernerischen Kurzform entwickelt. Es spiegelt die Berner Seele wider: ruhig, direkt und mit einer Prise Fatalismus.</span>
    </p>
  </article>

  <article class="card" id="c2">
    <div class="card-num"><span data-bärn>02 — Ussprach</span><span data-hochd style="display:none">02 — Aussprache</span></div>
    <h2 class="card-title"><span data-bärn>Wie sprichts me us?</span><span data-hochd style="display:none">Wie spricht man es aus?</span></h2>
    <p class="card-text">
      <span data-bärn>D Ussprach isch eifach, sobald me s Prinzip begriffe hät. Beidi «ä» wärde offe usgsprochen — ähnlich wie im Hochdüütsche «Bär». Dä churze «u»-Lut dazwüsche verbindet s zu emne fliessende Klang.</span>
      <span data-hochd style="display:none">Die Aussprache ist einfach, sobald man das Prinzip begriffen hat. Beide «ä» werden offen ausgesprochen — ähnlich wie im Hochdeutschen «Bär». Der kurze «u»-Laut dazwischen verbindet alles zu einem fliessenden Klang.</span>
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

  <article class="card" id="c3">
    <div class="card-num"><span data-bärn>03 — Bedütig</span><span data-hochd style="display:none">03 — Bedeutung</span></div>
    <h2 class="card-title"><span data-bärn>Was bedeutets?</span><span data-hochd style="display:none">Was bedeutet es?</span></h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch vielsiitig — es chan Resignatio, Bedure, Akzeptanz, Überraschig oder sogar es heiters Mitlide usdrücke. Je nach Tonfall cha s völlig verschiedeni Nüancene ha.</span>
      <span data-hochd style="display:none">«Äuä» ist vielseitig — es kann Resignation, Bedauern, Akzeptanz, Überraschung oder sogar heiteres Mitgefühl ausdrücken. Je nach Tonlage kann es völlig verschiedene Nuancen haben.</span>
    </p>
    <div class="chips">
      <div class="chip"><span class="ch-icon">😔</span><span data-bärn>Resignatio</span><span data-hochd style="display:none">Resignation</span></div>
      <div class="chip"><span class="ch-icon">🤷</span><span data-bärn>So isch es halt</span><span data-hochd style="display:none">So ist es halt</span></div>
      <div class="chip"><span class="ch-icon">💔</span><span data-bärn>Bedure</span><span data-hochd style="display:none">Bedauern</span></div>
      <div class="chip"><span class="ch-icon">🙄</span><span data-bärn>Mild Kritik</span><span data-hochd style="display:none">Milde Kritik</span></div>
      <div class="chip"><span class="ch-icon">✌️</span><span data-bärn>Akzeptanz</span><span data-hochd style="display:none">Akzeptanz</span></div>
      <div class="chip"><span class="ch-icon">😤</span><span data-bärn>Sälber schuld</span><span data-hochd style="display:none">Selber schuld</span></div>
      <div class="chip"><span class="ch-icon">😲</span><span data-bärn>Überraschig</span><span data-hochd style="display:none">Überraschung</span></div>
      <div class="chip"><span class="ch-icon">🫶</span><span data-bärn>Heiters Mitlide</span><span data-hochd style="display:none">Heiteres Mitgefühl</span></div>
    </div>
  </article>

  <article class="card" id="c4">
    <div class="card-num"><span data-bärn>04 — Bispiel</span><span data-hochd style="display:none">04 — Beispiele</span></div>
    <h2 class="card-title"><span data-bärn>Wie brucht me s?</span><span data-hochd style="display:none">Wie verwendet man es?</span></h2>
    <div class="examples">
      <div class="ex">
        <div class="ex-q">«Hät s nid klappet? — Äuä.»</div>
        <div class="ex-t"><span data-bärn>Hat's nicht geklappt? — So isch das Läbe halt.</span><span data-hochd style="display:none">Hat es nicht geklappt? — So ist das Leben halt.</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«I ha mys Znacht vergässe. — Äuä!»</div>
        <div class="ex-t"><span data-bärn>Ich ha mys Abigässe vergässe. — Sälber schuld!</span><span data-hochd style="display:none">Ich habe mein Abendessen vergessen. — Selber schuld!</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«Es rägnet scho wieder. — Äuä…»</div>
        <div class="ex-t"><span data-bärn>Es rägnet scho wieder. — Jo, was cha me mache…</span><span data-hochd style="display:none">Es regnet schon wieder. — Ach ja, was soll man machen…</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«Er hät de Zug verpässt. — Äuä!»</div>
        <div class="ex-t"><span data-bärn>Er hät de Zug verpässt. — Oh nei, das isch eim leid!</span><span data-hochd style="display:none">Er hat den Zug verpasst. — Oh nein, das tut einem leid!</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«Äuä, das hätti ich nid erwartet.»</div>
        <div class="ex-t"><span data-bärn>Ei, das isch e Überraschig gsi!</span><span data-hochd style="display:none">Ei, das war eine Überraschung!</span></div>
      </div>
    </div>
  </article>

</main>

<div class="bear-wrap">
  <div id="bearBtn" class="bear">🐻</div>
  <p class="bear-hint">
    <span data-bärn>Dr Bärner Bär grüsst di</span>
    <span data-hochd style="display:none">Der Berner Bär grüsst dich</span>
  </p>
</div>

<footer>
  <p><span data-bärn>Gmacht mit ❤️ für d Bärner Sprach — Äuä.</span><span data-hochd style="display:none">Gemacht mit ❤️ für die Berner Sprache — Äuä.</span></p>
</footer>

<!-- EE1: KONAMI -->
<div class="overlay" id="konamiOverlay">
  <div class="konami-box">
    <div class="konami-emoji">🐻</div>
    <div class="konami-title">Äuä!</div>
    <p class="konami-sub">
      <span data-bärn>Du häsch de Geheimcode gfunde! 🎉</span>
      <span data-hochd style="display:none">Du hast den Geheimcode gefunden! 🎉</span>
    </p>
    <div class="bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
    <p class="esc-hint">ESC</p>
  </div>
</div>

<!-- EE2: SLIDESHOW -->
<div class="overlay" id="ssOverlay">
  <div class="ss-modal">
    <div class="ss-head">
      <span class="ss-head-title">
        <span data-bärn>🐻 Bärn bi Nacht</span>
        <span data-hochd style="display:none">🐻 Bern bei Nacht</span>
      </span>
      <button class="ss-close" id="ssClose">✕</button>
    </div>
    <div class="ss-stage" id="ssStage">
      <div class="slide on"><img src="/imges/baer1.jpg" alt="Bär in Bern"><div class="slide-caption"><span data-bärn>Dr Bär i Bärn</span><span data-hochd style="display:none">Der Bär in Bern</span></div></div>
      <div class="slide"><img src="/imges/baer2.jpg" alt="Bär in Bern"><div class="slide-caption"><span data-bärn>Dr Bär i Bärn</span><span data-hochd style="display:none">Der Bär in Bern</span></div></div>
      <div class="slide"><img src="/imges/baer3.jpg" alt="Bär in Bern"><div class="slide-caption"><span data-bärn>Dr Bär i Bärn</span><span data-hochd style="display:none">Der Bär in Bern</span></div></div>
      <div class="slide"><img src="/imges/baer4.jpg" alt="Bär in Bern"><div class="slide-caption"><span data-bärn>Dr Bär i Bärn</span><span data-hochd style="display:none">Der Bär in Bern</span></div></div>
      <div class="slide"><img src="/imges/bern.jpg" alt="Bern"><div class="slide-caption"><span data-bärn>Bärn</span><span data-hochd style="display:none">Bern</span></div></div>
    </div>
    <div class="ss-foot">
      <button class="ss-btn" id="ssPrev">←</button>
      <span class="ss-count" id="ssCnt">1 / 5</span>
      <button class="ss-btn" id="ssNext">→</button>
    </div>
  </div>
</div>

<script>
// THEME
const root = document.documentElement;
let theme = localStorage.getItem('theme') || 'auto';
function applyTheme(t) {
  const r = t === 'auto' ? (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light') : t;
  root.setAttribute('data-theme', r);
  document.getElementById('themeIcon').textContent = r === 'light' ? '☀️' : '🌙';
}
applyTheme(theme);
document.getElementById('themeBtn').addEventListener('click', () => {
  theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme); applyTheme(theme);
});
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => { if (theme === 'auto') applyTheme('auto'); });

// LANGUAGE
let lang = localStorage.getItem('lang') || 'bärn';
function applyLang(l) {
  lang = l; localStorage.setItem('lang', l);
  document.querySelectorAll('[data-bärn]').forEach(el => el.style.display = l === 'bärn' ? '' : 'none');
  document.querySelectorAll('[data-hochd]').forEach(el => el.style.display = l === 'hochd' ? '' : 'none');
}
applyLang(lang);
document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'bärn' ? 'hochd' : 'bärn'));

// PARTICLES
const ptc = document.getElementById('pts');
['🐻','⬛','🟨','❄️','🔴','⭐'].forEach(sym => {
  for (let j = 0; j < 2; j++) {
    const p = document.createElement('div');
    p.className = 'particle'; p.textContent = sym;
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.6 + Math.random() * 0.7) + 'rem';
    p.style.animationDuration = (20 + Math.random() * 25) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    ptc.appendChild(p);
  }
});

// SCROLL ANIMATIONS
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.card').forEach(c => io.observe(c));

// KONAMI
const SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let ki = 0;
document.addEventListener('keydown', e => {
  ki = e.key === SEQ[ki] ? ki + 1 : (e.key === SEQ[0] ? 1 : 0);
  if (ki === SEQ.length) { ki = 0; showKonami(); }
});

let currentAudio = null;

function playMelody() {
 try {
    // Falls schon etwas läuft → stoppen
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Neues Audio erstellen
    currentAudio = new Audio('/song.mp3');
    currentAudio.volume = 0.5;
    currentAudio.play().catch(() => {});

  } catch (e) {}
}

function showKonami() {
  document.getElementById('konamiOverlay').classList.add('on');
  playMelody();
}

// BEAR → SLIDESHOW
let taps = 0, tapTimer;
document.getElementById('bearBtn').addEventListener('click', function() {
  taps++;
  this.classList.remove('shake'); void this.offsetWidth; this.classList.add('shake');
  clearTimeout(tapTimer); tapTimer = setTimeout(() => taps = 0, 1500);
  if (taps >= 5) { taps = 0; showSlideshow(); }
});

// SLIDESHOW
let cur = 0, ssInt;
const slides = document.querySelectorAll('.slide');
const ssCnt = document.getElementById('ssCnt');
function goSlide(i) {
  slides.forEach(s => s.classList.remove('on'));
  cur = (i + slides.length) % slides.length;
  slides[cur].classList.add('on');
  ssCnt.textContent = (cur + 1) + ' / ' + slides.length;
}
function showSlideshow() {
  document.getElementById('ssOverlay').classList.add('on');
  goSlide(0);
  ssInt = setInterval(() => goSlide(cur + 1), 3000);
}
function closeSlideshow() {
  document.getElementById('ssOverlay').classList.remove('on');
  clearInterval(ssInt);
}
document.getElementById('ssClose').addEventListener('click', closeSlideshow);
document.getElementById('ssNext').addEventListener('click', () => { clearInterval(ssInt); goSlide(cur+1); });
document.getElementById('ssPrev').addEventListener('click', () => { clearInterval(ssInt); goSlide(cur-1); });

// CLOSE
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { document.getElementById('konamiOverlay').classList.remove('on'); closeSlideshow(); }
});
['konamiOverlay','ssOverlay'].forEach(id => {
  document.getElementById(id).addEventListener('click', function(e) {
    if (e.target === this) { this.classList.remove('on'); if (id === 'ssOverlay') closeSlideshow(); }
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
