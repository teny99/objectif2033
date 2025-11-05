"use client";

import Link from "next/link";

export default function ClientHome() {
  const year = new Date().getFullYear();

  return (
    <main>
      {/* Header */}
      <header className="hdr">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Objectif 2033">
            <div className="brand-logo" aria-hidden="true">
              <img
                src="https://raw.githubusercontent.com/teny99/logos/main/Logo-APOKALYON1.png"
                alt="Logo APOKALYON"
              />
            </div>
            <span>Objectif&nbsp;2033</span>
          </a>

          <nav>
            <ul>
              <li><a href="#demo">La démonstration</a></li>
              <li><a href="#themes">Les 7 thèmes</a></li>
              <li><a href="#apo">APOKALYON</a></li>
              <li><a href="#actu">Vidéos</a></li>
            </ul>
          </nav>

          <div className="nav-ctas">
            <a className="btn btn-ghost" href="#contact">Contact</a>
            <a
              className="btn btn-primary"
              href="https://thirdweb.com/polygon/0x4B37e583731FFd9feAd5D4b58DCa84bD6C41e1C9"
              target="_blank" rel="noopener"
            >
              Je réclame 26&nbsp;APO
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-wrap">
          <div>
            <span className="badge">🚀 Mouvement mondial • ✨ Conscience • 🕊️ 2033</span>
            <h1>
              La conscience n’est pas un accident.<br />
              Rejoignez <em>Objectif&nbsp;2033</em>.
            </h1>
            <p>
              Notre mission&nbsp;: éclairer la question de la conscience, préparer la
              célébration des 2000 ans en 2033 et fédérer une communauté créative
              (vidéos, défis, NFT, token communautaire <strong>APOKALYON</strong>).
            </p>
            <div className="ctas">
              <a
                className="btn btn-primary"
                href="https://thirdweb.com/polygon/0x4B37e583731FFd9feAd5D4b58DCa84bD6C41e1C9"
                target="_blank" rel="noopener"
              >
                Je réclame 26&nbsp;APO
              </a>
              <a className="btn" href="#demo">Voir la démonstration</a>
            </div>

            <div className="grid grid-3 hero-grid">
              <div className="hero-card">
                <div className="hero-metric">
                  <strong>🎬</strong>
                  <div>
                    <div className="metric-title">Vidéos & Shorts</div>
                    <small className="muted">Contenus réguliers pour éveiller et débattre</small>
                  </div>
                  <a href="#actu" aria-label="Voir les vidéos">→</a>
                </div>
                <div className="hero-metric">
                  <strong>🪙</strong>
                  <div>
                    <div className="metric-title">APO distribué</div>
                    <small className="muted">Récompenses pour l’engagement</small>
                  </div>
                  <a href="#apo" aria-label="Découvrir APOKALYON">→</a>
                </div>
                <div className="hero-metric">
                  <strong>🗓️</strong>
                  <div>
                    <div className="metric-title">Cap sur 2033</div>
                    <small className="muted">Feuille de route et événements</small>
                  </div>
                  <a href="#roadmap" aria-label="Voir la roadmap">→</a>
                </div>
              </div>
            </div>
          </div>

          {/* Vidéo phare */}
          <div className="card floaty">
            <h3 className="card-title">Vidéo phare</h3>
            <div className="video-wrap">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/1PTwTsv1XyU"
                title="Vidéo phare — Objectif 2033"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="mini-card">
              <h4 className="mini-title">La démonstration, en 4 idées simples</h4>
              <ol className="mini-list">
                <li>La biologie décrit des corrélats, pas l’expérience subjective.</li>
                <li>La conscience se manifeste comme un fait premier.</li>
                <li>Ignorer ce fait biaise notre méthode scientifique.</li>
                <li>Réouvrir le champ mène à de nouvelles hypothèses fécondes.</li>
              </ol>
              <div className="pills">
                <a className="pill" href="#demo">Lire en 3&nbsp;min</a>
                <a className="pill" href="#actu">Voir la vidéo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Thèmes */}
      <section id="themes">
        <div className="container">
          <h2 className="section-title">Les 7 piliers du projet</h2>
          <p className="section-desc">Un parcours éditorial clair pour comprendre, participer et partager.</p>
          <div className="grid grid-3">
            {[
              ["1. Projet 2033", "Vision, communauté et calendrier jusqu’en avril 2033."],
              ["2. Chronologie biblique", "Le génie d’une lecture scientifique et historique."],
              ["3. Insuffisance du corps", "Pourquoi la biologie seule ne rend pas compte de la conscience."],
              ["4. Sommes-nous seuls ?", "Cosmologie, probabilités et émergence du sens."],
              ["5. Prophéties & lucidité", "Texte, symboles et résonances avec l’époque."],
              ["6. Mystère de la conscience", "Phénoménologie, information, et nouvelles pistes."],
              ["7. Réforme des religions", "Vers une intelligence spirituelle renouvelée."],
            ].map(([title, desc]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p className="muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APOKALYON */}
      <section id="apo">
        <div className="container">
          <h2 className="section-title">APOKALYON (APO)</h2>
          <p className="section-desc">
            Le token communautaire qui récompense l’engagement (visionnage, partage, défis, contributions).
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h3>Comment gagner des APO&nbsp;?</h3>
              <ul className="list muted">
                <li>Réclame initial&nbsp;: 26&nbsp;APO pour rejoindre.</li>
                <li>Quêtes hebdomadaires&nbsp;: défis contenus & science.</li>
                <li>Participation aux lives et commentaires pertinents.</li>
              </ul>
              <div className="row-gap">
                <a
                  className="btn btn-primary"
                  href="https://thirdweb.com/polygon/0x4B37e583731FFd9feAd5D4b58DCa84bD6C41e1C9"
                  target="_blank" rel="noopener"
                >
                  Réclamer 26&nbsp;APO
                </a>
                <a className="btn" href="#faq">En savoir plus</a>
              </div>
            </div>

            <div className="card">
              <h3>À quoi servent les APO&nbsp;?</h3>
              <ul className="list muted">
                <li>Accès à des salons privés et votes DAO.</li>
                <li>Réductions / accès anticipé à des NFT.</li>
                <li>Badges, rangs et rôles communautaires.</li>
              </ul>
              <p className="muted small">Fonctionnant sur Polygon. Non financier. Utilité communautaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéos / Actu */}
      <section id="actu">
        <div className="container">
          <h2 className="section-title">Vidéos & Actus</h2>
          <p className="section-desc">Derniers contenus «&nbsp;Theos Apokalypsi&nbsp;» et annonces communautaires.</p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Vidéo phare</h3>
              <p className="muted">«&nbsp;La conscience, évidence première&nbsp;»</p>
              <a className="pill" href="https://youtu.be/1PTwTsv1XyU" target="_blank" rel="noopener">Regarder →</a>
            </article>
            <article className="card">
              <h3>Live • Q/R</h3>
              <p className="muted">Session mensuelle des Pèlerins de 2033</p>
              <a className="pill" href="#contact">S’inscrire →</a>
            </article>
            <article className="card">
              <h3>Short • 60 s</h3>
              <p className="muted">«&nbsp;Les 4 raisons&nbsp;»</p>
              <a className="pill" href="#actu">Bientôt →</a>
            </article>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap">
        <div className="container">
          <h2 className="section-title">Feuille de route vers&nbsp;2033</h2>
        </div>
        <div className="container timeline">
          <div className="t-item">
            <h3>2025&nbsp;–&nbsp;2026 • Vitrine & Communauté</h3>
            <p className="section-desc">Refonte du site, claims APO, 30 shorts pédagogiques, premiers NFT de collection.</p>
          </div>
          <div className="t-item">
            <h3>2027&nbsp;–&nbsp;2030 • Accélération</h3>
            <p className="section-desc">Partenariats, manifeste, événements annuels, séries documentaires.</p>
          </div>
          <div className="t-item">
            <h3>2031&nbsp;–&nbsp;2033 • Célébration mondiale</h3>
            <p className="section-desc">Rassemblement des Pèlerins de 2033, publication finale et engagements.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Entrer en contact</h2>
          <p className="section-desc">Proposer une collaboration, un témoignage, une idée de vidéo.</p>

          <form name="contact" method="POST" data-netlify="true" className="card">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-2 gap-12">
              <div>
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" required placeholder="Votre nom" className="input" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="vous@example.com" className="input" />
              </div>
            </div>
            <div className="mt-12">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Votre message..." className="textarea" />
            </div>
            <div className="row-gap mt-12">
              <button className="btn btn-primary" type="submit">Envoyer</button>
              <Link className="btn" href="/chat">Rejoindre le chat</Link>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container foot">
          <div>© {year} Objectif&nbsp;2033 • Un projet par la communauté des Pèlerins de&nbsp;2033</div>
          <div className="links">
            <a href="https://www.youtube.com/@TheosApokalypsi" target="_blank" rel="noopener">YouTube</a>
            <a href="https://x.com/miteny" target="_blank" rel="noopener">X/Twitter</a>
            <a href="https://instagram.com/projet2033" target="_blank" rel="noopener">Instagram</a>
            <a href="https://dieuexiste.com" target="_blank" rel="noopener">dieuexiste.com</a>
            <a href="#legal">Mentions légales</a>
          </div>
        </div>
      </footer>

      {/* Styles localisés */}
      <style jsx>{`
        :global(html, body) { margin: 0; background: #0a1020; color: #e7ecf5; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans'; }
        :global(*) { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }
        :root { --bg:#0a1020; --bg-2:#0d142a; --text:#e7ecf5; --muted:#b5c0d0; --brand:#54d6ff; --brand-2:#7cf5a6; --card:rgba(255,255,255,.06); --glass:rgba(255,255,255,.08); --radius:18px; --shadow:0 12px 40px rgba(0,0,0,.45); }
        .container{ width:min(1150px,92vw); margin:0 auto; }
        .muted{ color:var(--muted); } .small{ font-size:13px; } .row-gap{ display:flex; gap:10px; flex-wrap:wrap; } .mt-12{ margin-top:12px; }
        .hdr{ position:sticky; top:0; z-index:40; backdrop-filter:saturate(160%) blur(8px); background:linear-gradient(180deg, rgba(10,16,32,.88), rgba(10,16,32,.55) 60%, transparent); border-bottom:1px solid rgba(255,255,255,.06); }
        .nav{ display:flex; align-items:center; justify-content:space-between; padding:14px 0; }
        .brand{ display:flex; align-items:center; gap:10px; font-weight:700; letter-spacing:.2px; }
        .brand-logo{ width:34px; height:34px; border-radius:10px; overflow:hidden; box-shadow: inset 0 0 18px rgba(255,255,255,.18), 0 8px 20px rgba(84,214,255,.25); }
        .brand span{ font-family: Georgia, 'Times New Roman', serif; font-weight:700; font-size:18px; }
        nav ul{ display:flex; gap:18px; list-style:none; padding:0; margin:0; }
        nav a{ opacity:.88; padding:8px 12px; border-radius:10px; } nav a:hover{ background:rgba(255,255,255,.05); opacity:1; }
        .btn{ display:inline-flex; align-items:center; gap:10px; padding:12px 18px; border-radius:14px; font-weight:700; border:1px solid rgba(255,255,255,.12); transition: transform .15s ease, box-shadow .2s ease; }
        .btn-primary{ background:linear-gradient(135deg, var(--brand), var(--brand-2)); color:#08111f; border:none; box-shadow:0 12px 28px rgba(84,214,255,.25); }
        .btn-primary:hover{ transform:translateY(-1px); box-shadow:0 14px 34px rgba(124,245,166,.28); }
        .btn-ghost{ background:transparent; }
        .hero{ position:relative; overflow:hidden; background: radial-gradient(1200px 600px at 70% 10%, rgba(84,214,255,.12), transparent), radial-gradient(1000px 520px at 20% 30%, rgba(124,245,166,.10), transparent), linear-gradient(180deg, var(--bg), var(--bg-2)); border-bottom:1px solid rgba(255,255,255,.06); }
        .hero-wrap{ display:grid; grid-template-columns:1.2fr 1fr; gap:40px; padding:72px 0 64px; align-items:center; }
        .badge{ display:inline-flex; gap:8px; align-items:center; padding:8px 12px; border-radius:999px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.04); color:var(--muted); font-size:14px; margin:0 0 12px; }
        h1{ font-size:clamp(36px,5vw,56px); line-height:1.04; margin:0 0 14px; letter-spacing:.2px; font-family: Georgia, 'Times New Roman', serif; }
        .ctas{ display:flex; flex-wrap:wrap; gap:12px; }
        .hero-grid{ margin-top:20px; }
        .hero-card{ background:var(--glass); border:1px solid rgba(255,255,255,.1); border-radius:var(--radius); box-shadow:var(--shadow); padding:18px; display:grid; gap:12px; }
        .hero-metric{ display:grid; grid-template-columns:auto 1fr auto; gap:12px; align-items:center; padding:10px 12px; border-radius:14px; background:rgba(255,255,255,.04); }
        .metric-title{ font-weight:700; }
        .card{ background:var(--card); border:1px solid rgba(255,255,255,.08); border-radius:var(--radius); padding:18px; box-shadow:var(--shadow); }
        .card-title{ margin:0 0 8px; font-size:18px; }
        .video-wrap{ position:relative; width:100%; padding-top:56.25%; border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); }
        .video{ position:absolute; inset:0; width:100%; height:100%; border:0; }
        .mini-card{ margin-top:12px; } .mini-title{ margin:0 0 6px; } .mini-list{ margin:0; padding-left:18px; color:var(--muted); }
        section{ padding:72px 0; } .section-title{ font-size:clamp(28px,4vw,40px); margin:0 0 10px; font-family: Georgia, 'Times New Roman', serif; } .section-desc{ color:var(--muted); margin:0 0 28px; }
        .grid{ display:grid; gap:18px; } .grid-3{ grid-template-columns:repeat(3,1fr); } .grid-2{ grid-template-columns:repeat(2,1fr); } .gap-12{ gap:12px; }
        @media (max-width:960px){ .hero-wrap{ grid-template-columns:1fr; } .grid-3,.grid-2{ grid-template-columns:1fr; } }
        .list{ margin:8px 0 0 18px; }
        .pill{ display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; background:rgba(84,214,255,.12); border:1px dashed rgba(84,214,255,.35); font-size:14px; }
        .timeline{ position:relative; padding-left:22px; }
        .timeline::before{ content:""; position:absolute; left:9px; top:0; bottom:0; width:2px; background: linear-gradient(#54d6ff, transparent); }
        .t-item{ position:relative; margin:0 0 24px; }
        .t-item::before{ content:""; position:absolute; left:-2px; top:2px; width:12px; height:12px; border-radius:50%; background:#54d6ff; box-shadow:0 0 0 4px rgba(84,214,255,.15); }
        label{ display:block; font-size:14px; margin-bottom:6px; color:var(--muted); }
        .input,.textarea{ width:100%; padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.04); color:var(--text); }
        .footer{ padding:40px 0 60px; border-top:1px solid rgba(255,255,255,.06); color:var(--muted); }
        .foot{ display:grid; gap:12px; } .links{ display:flex; gap:14px; flex-wrap:wrap; }
        @media (prefers-reduced-motion: no-preference){ .floaty{ animation:floaty 6s ease-in-out infinite; } @keyframes floaty{ 0%{transform:translateY(0)} 50%{transform:translateY(-6px)} 100%{transform:translateY(0)} } }
      `}</style>
    </main>
  );
}
