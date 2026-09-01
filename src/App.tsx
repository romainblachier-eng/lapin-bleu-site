import { useEffect, useState } from "react";

const contactHref =
  "mailto:romain.blachier@lapinbleu.art?subject=Échange%20sur%20une%20mission%20Lapin%20Bleu";

const offers = [
  {
    number: "01",
    title: "Politiques publiques & aide à la décision",
    promise: "Éclairer les arbitrages derrière un dossier public complexe.",
    deliverables:
      "Diagnostic institutionnel ou sectoriel, note de cadrage, étude comparée, cartographie réglementaire, recommandations.",
    usefulFor:
      "Réforme publique, stratégie territoriale, coopération internationale, énergie, climat ou infrastructures.",
  },
  {
    number: "02",
    title: "Gouvernance, réformes & acceptabilité",
    promise:
      "Sécuriser une réforme en intégrant les institutions, les acteurs, les usages et les territoires.",
    deliverables:
      "Cartographie des parties prenantes, entretiens, stratégie de concertation, pédagogie tarifaire, feuille de route.",
    usefulFor:
      "Transformation d’un service public, évolution tarifaire, infrastructure, réorganisation institutionnelle ou gestion du changement.",
  },
  {
    number: "03",
    title: "Formation & capacités",
    promise: "Transformer un besoin institutionnel en compétences réellement mobilisables.",
    deliverables:
      "Diagnostic des besoins, référentiel, catalogue, parcours métiers, modules, animation et évaluation.",
    usefulFor:
      "Cadres, élus, agents publics, équipes de programme, opérateurs et organismes de formation.",
  },
  {
    number: "04",
    title: "Appui aux cabinets & consortiums",
    promise:
      "Compléter une équipe par une expertise en politiques publiques, gouvernance et contextes francophones.",
    deliverables:
      "Contribution aux offres, analyse institutionnelle, consultation, rédaction, renforcement de capacités et coordination terrain.",
    usefulFor:
      "Missions de bailleurs, appels d’offres publics et équipes recherchant un expert complémentaire en gouvernance ou en énergie.",
  },
];

const audiences = [
  {
    title: "Institutions & régulateurs",
    text: "Ministères, agences, autorités de régulation et programmes de réforme qui doivent instruire une décision et la rendre applicable.",
  },
  {
    title: "Opérateurs & services publics",
    text: "Entreprises électriques et structures publiques confrontées à une évolution de gouvernance, d’organisation ou de relation aux usagers.",
  },
  {
    title: "Collectivités & territoires",
    text: "Décideurs locaux qui doivent relier infrastructure, planification, acceptabilité et capacité réelle d’action.",
  },
  {
    title: "Cabinets & groupements",
    text: "Équipes recherchant un renfort en politiques publiques, concertation, formation, rédaction francophone ou coordination institutionnelle.",
  },
];

const process = [
  {
    number: "1",
    title: "Cadrer",
    text: "Comprendre la décision à prendre, les livrables attendus et les contraintes du commanditaire.",
  },
  {
    number: "2",
    title: "Enquêter",
    text: "Analyser les textes et les données, conduire les entretiens et comparer les situations pertinentes.",
  },
  {
    number: "3",
    title: "Arbitrer",
    text: "Hiérarchiser les options, expliciter les risques et proposer une trajectoire praticable.",
  },
  {
    number: "4",
    title: "Transmettre",
    text: "Livrer une note exploitable, animer la restitution et, si nécessaire, outiller les équipes.",
  },
];

const publications = [
  {
    type: "Policy paper",
    context: "Gabon · Politique énergétique · 8 pages",
    title: "Rétablir un service électrique fiable au Gabon",
    description:
      "Deux mesures opérationnelles et chiffrées pour améliorer la fiabilité du service : régulariser les branchements et sortir progressivement de la location thermique flottante.",
    topics: ["Électricité", "Gouvernance", "Afrique centrale"],
    href: "/publications/policy-paper-electricite-gabon.pdf",
  },
  {
    type: "Note de politique publique",
    context: "France · Gouvernance territoriale · 9 pages",
    title: "Data centers : négocier avant le permis",
    description:
      "Un guide pratique pour aider les intercommunalités à négocier l’énergie, l’eau, la fiscalité, l’emploi et les contreparties territoriales avant d’autoriser un projet.",
    topics: ["Collectivités", "Infrastructures numériques", "Énergie"],
    href: "/publications/note-data-centers-intercommunalites.pdf",
  },
];

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function usePageMetadata(title: string, description: string, path = "/") {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", `https://lapinbleu.art${path}`, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", `https://lapinbleu.art${path}`);
  }, [description, path, title]);
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"night" | "day">(() => {
    if (typeof window === "undefined") return "day";
    return window.localStorage.getItem("lb-theme-v2") === "night" ? "night" : "day";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("lb-theme-v2", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === "day" ? "Passer au thème nuit" : "Passer au thème jour"}
      onClick={() => setTheme((current) => (current === "day" ? "night" : "day"))}
    >
      {theme === "day" ? "Nuit" : "Jour"}
    </button>
  );
}

function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header${compact ? " site-header-compact" : ""}`}>
      <a className="brand" href="/" aria-label="Lapin Bleu — accueil">
        <span>Lapin</span> <em>Bleu</em>
      </a>
      {!compact && (
        <nav className="primary-nav" aria-label="Navigation principale">
          <a href="#offre">L’offre</a>
          <a href="#publics">Pour qui</a>
          <a href="#methode">Méthode</a>
          <a href="#references">Références</a>
          <a href="#travaux">Publications</a>
        </nav>
      )}
      <div className="header-actions">
        <ThemeToggle />
        <a className="button button-small" href={contactHref}>
          Nous contacter
        </a>
      </div>
    </header>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HomePage() {
  usePageMetadata(
    "Lapin Bleu | Conseil en politiques publiques, gouvernance et transitions énergétiques",
    "Lapin Bleu accompagne les institutions, opérateurs, collectivités et cabinets en politiques publiques, gouvernance et transitions énergétiques.",
  );

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Cabinet de conseil · Politiques publiques · Gouvernance</p>
            <h1 id="hero-title">Conseil en politiques publiques, gouvernance et transitions énergétiques.</h1>
            <p className="hero-lede">
              Lapin Bleu accompagne les institutions, opérateurs, collectivités,
              cabinets et consortiums dans l’analyse et la mise en œuvre de leurs
              politiques publiques. Une expertise particulière dans l’énergie et
              le secteur électrique.
            </p>
            <div className="hero-actions">
              <a className="button" href={contactHref}>
                Parler d’une mission <Arrow />
              </a>
              <a className="text-link" href="#offre">
                Découvrir l’offre <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-brief" aria-label="Domaines de consulting de Lapin Bleu">
            <p className="brief-kicker">Domaines de conseil</p>
            <ul className="brief-services">
              <li>Politiques publiques et gouvernance</li>
              <li>Énergie, infrastructures et transitions énergétiques</li>
              <li>Concertation et acceptabilité</li>
              <li>Renforcement de capacités</li>
            </ul>
            <dl>
              <div><dt>Expertise forte</dt><dd>Électricité · Hydroélectricité · ENR · Réseaux</dd></div>
              <div><dt>Zones</dt><dd>Afrique francophone · Europe · Indo-Pacifique</dd></div>
              <div><dt>Langues</dt><dd>Français · Anglais</dd></div>
            </dl>
          </aside>

          <div className="proof-strip" aria-label="Repères d’expérience">
            <div><strong>18 ans</strong><span>dans l’électricité renouvelable</span></div>
            <div><strong>12 ans</strong><span>de décision publique locale</span></div>
            <div><strong>16 ans</strong><span>d’enseignement supérieur</span></div>
            <div><strong>3 zones</strong><span>d’intervention internationale</span></div>
          </div>
        </section>

        <section className="section offer-section" id="offre" aria-labelledby="offer-title">
          <div className="section-heading">
            <p className="eyebrow">Offre de consulting</p>
            <h2 id="offer-title">Nos domaines d’intervention.</h2>
            <p>
              Des prestations de consulting définies à partir du mandat, du contexte
              institutionnel et des résultats attendus par le commanditaire.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article className="offer-card" key={offer.number}>
                <div className="card-topline"><span>{offer.number}</span><span>Mission sur mesure</span></div>
                <h3>{offer.title}</h3>
                <p className="offer-promise">{offer.promise}</p>
                <div className="offer-detail"><span>Livrables</span><p>{offer.deliverables}</p></div>
                <div className="offer-detail"><span>Particulièrement utile pour</span><p>{offer.usefulFor}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section audience-section" id="publics" aria-labelledby="audience-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Pour qui</p>
              <h2 id="audience-title">Des missions pour les acteurs publics, les opérateurs et leurs partenaires.</h2>
            </div>
            <p>
              Lapin Bleu intervient en direct ou au sein d’une équipe plus large,
              sur des missions courtes et moyennes, en France comme à l’international.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article key={audience.title}>
                <span>0{index + 1}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-section" id="references" aria-labelledby="case-title">
          <div className="case-intro">
            <p className="eyebrow">Cas récent · Afrique centrale · 2026</p>
            <h2 id="case-title">Appui à une réforme du secteur électrique en Afrique centrale.</h2>
            <p>
              Mission indépendante menée dans l’environnement d’un programme de
              réforme du secteur électrique financé par un bailleur multilatéral.
              Entretiens avec les acteurs du secteur, puis conception de livrables
              directement utilisables par une institution publique.
            </p>
          </div>
          <div className="case-results">
            <article><strong>23</strong><span>modules de formation conçus</span></article>
            <article><strong>6</strong><span>parcours métiers structurés</span></article>
            <article><strong>1</strong><span>projet intégrateur régional</span></article>
            <article className="case-note">
              <span>Livrables remis</span>
              <p>Note de vision et d’aide à la décision, catalogue de formation et proposition d’accompagnement technique.</p>
            </article>
          </div>
        </section>

        <section className="section publications-section" id="travaux" aria-labelledby="publications-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Policy papers · Septembre 2026</p>
              <h2 id="publications-title">Des analyses conçues pour éclairer l’action.</h2>
            </div>
            <p>
              Chaque publication part d’un problème public précis, confronte les
              données disponibles et débouche sur des recommandations directement
              mobilisables par les décideurs.
            </p>
          </div>
          <div className="publication-grid">
            {publications.map((publication, index) => (
              <article className="publication-card" key={publication.title}>
                <div className="publication-meta">
                  <span>0{index + 1}</span>
                  <span>{publication.type}</span>
                </div>
                <p className="publication-context">{publication.context}</p>
                <h3>{publication.title}</h3>
                <p className="publication-description">{publication.description}</p>
                <ul className="publication-topics" aria-label="Thèmes abordés">
                  {publication.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
                <div className="publication-footer">
                  <span>Romain Blachier · PDF</span>
                  <a
                    className="text-link"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lire ${publication.title} au format PDF`}
                  >
                    Lire le document <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <aside className="intervention-callout" aria-labelledby="intervention-title">
            <div>
              <p className="eyebrow">Fiche d’intervention · Collectivités</p>
              <h3 id="intervention-title">Data centers et territoires : décider avant le permis.</h3>
            </div>
            <div className="intervention-copy">
              <p>
                Formation des élus, atelier pour les cadres territoriaux ou appui
                à une négociation en cours : trois formats pour sécuriser les
                décisions sur l’énergie, l’eau, la fiscalité, l’emploi et l’urbanisme.
              </p>
              <a
                className="button"
                href="/publications/fiche-intervention-data-centers.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Voir la fiche d’intervention <Arrow />
              </a>
            </div>
          </aside>
        </section>

        <section className="section process-section" id="methode" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="eyebrow">Méthode</p>
            <h2 id="process-title">Une méthode adaptée aux décisions publiques et institutionnelles.</h2>
          </div>
          <ol className="process-list">
            {process.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
          <div className="methods-line">
            <span>Entretiens institutionnels</span>
            <span>Analyse documentaire et réglementaire</span>
            <span>Études de cas comparées</span>
            <span>Cartographie des parties prenantes</span>
            <span>Restitution en français et en anglais</span>
          </div>
        </section>

        <section className="section credentials-section" aria-labelledby="credentials-title">
          <div>
            <p className="eyebrow">Cadre d’intervention</p>
            <h2 id="credentials-title">Un cabinet indépendant, mobilisable en France et à l’international.</h2>
          </div>
          <div className="credentials-copy">
            <p>
              Les missions sont portées par <strong>Lapin Bleu SASU</strong>, société
              à mission et organisme de formation déclaré sous le numéro
              <strong> NDA 84692485869</strong>. Facturation en France et à l’international.
            </p>
            <ul>
              <li>Expert énergie inscrit auprès de la Banque africaine de développement.</li>
              <li>Expérience croisée d’opérateur, de collectivité et de formation.</li>
              <li>Intervention indépendante, en direct ou en groupement.</li>
            </ul>
            <a className="text-link" href="https://romainblachier.fr/conseil">
              Voir le profil et les publications <Arrow />
            </a>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div><p className="eyebrow">Questions fréquentes</p><h2 id="faq-title">Avant de nous écrire.</h2></div>
          <div className="faq-list">
            <details>
              <summary>Travaillez-vous seul ou en groupement ?</summary>
              <p>Les deux. Lapin Bleu peut conduire une mission ciblée en direct ou intervenir comme membre de groupement ou sous-traitant spécialisé.</p>
            </details>
            <details>
              <summary>Proposez-vous de la modélisation technique ou tarifaire ?</summary>
              <p>Lapin Bleu intervient sur la gouvernance, les parties prenantes, l’acceptabilité, la mise en œuvre et la formation. Lorsqu’une modélisation spécialisée est nécessaire, l’intervention complète celle d’un bureau technique ou financier.</p>
            </details>
            <details>
              <summary>Pouvez-vous intervenir à l’international ?</summary>
              <p>Oui. Les missions peuvent être facturées en France et à l’international, avec une priorité à l’Afrique francophone, à l’Europe et à l’Indo-Pacifique.</p>
            </details>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title">
          <p className="eyebrow">Échanger sur une mission</p>
          <h2 id="cta-title">Vous recherchez un appui en politiques publiques, gouvernance ou énergie ?</h2>
          <p>Présentez en quelques lignes le contexte, l’échéance et le livrable attendu. Nous vous répondrons sur la meilleure façon d’intervenir.</p>
          <a className="button button-light" href={contactHref}>Écrire à Lapin Bleu <Arrow /></a>
          <a className="email-link" href={contactHref}>romain.blachier@lapinbleu.art</a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand brand-small" href="/"><span>Lapin</span> <em>Bleu</em></a>
          <p>Conseil · études · formation en politiques publiques, gouvernance et énergie</p>
        </div>
        <div className="footer-links">
          <a href="/seo-geo">Offre SEO & GEO</a>
          <a href="https://romainblachier.fr">Romain Blachier</a>
          <a href={contactHref}>Contact</a>
        </div>
        <p className="legal">Lapin Bleu SASU · Lyon · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

const geoOffers = [
  {
    title: "Diagnostic de visibilité",
    text: "Audit du site, des contenus, des signaux d’autorité et de la présence de la marque dans les moteurs et les réponses d’IA.",
  },
  {
    title: "Plan d’action éditorial",
    text: "Priorisation des pages, questions et preuves à publier pour devenir une source claire, crédible et facilement interprétable.",
  },
  {
    title: "Optimisation continue",
    text: "Amélioration technique et éditoriale, suivi des résultats et ajustements mensuels selon les requêtes réellement utiles.",
  },
];

function SeoGeoPage() {
  usePageMetadata(
    "SEO & GEO | Visibilité dans Google et les réponses des IA — Lapin Bleu",
    "Une offre claire pour améliorer la visibilité de votre organisation dans Google, ChatGPT, Claude, Gemini et Perplexity : audit, plan d’action et optimisation continue.",
    "/seo-geo",
  );

  return (
    <div className="site-shell geo-page">
      <SiteHeader compact />
      <main>
        <section className="geo-hero">
          <p className="eyebrow">Offre dédiée · SEO & GEO</p>
          <h1>Être trouvé dans Google.<br />Être cité dans les réponses des IA.</h1>
          <p>
            Une approche commune du référencement naturel et du Generative Engine
            Optimization pour rendre votre expertise compréhensible, vérifiable et
            visible là où vos publics cherchent désormais leurs réponses.
          </p>
          <div className="hero-actions">
            <a className="button" href="mailto:romain.blachier@lapinbleu.art?subject=Audit%20SEO%20et%20GEO">Demander l’audit initial <Arrow /></a>
            <a className="text-link" href="#geo-offre">Voir le déroulé <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="section geo-offer" id="geo-offre">
          <div className="section-heading"><p className="eyebrow">Le déroulé</p><h2>Trois étapes, sans jargon inutile.</h2></div>
          <div className="geo-grid">
            {geoOffers.map((offer, index) => (
              <article key={offer.title}><span>0{index + 1}</span><h3>{offer.title}</h3><p>{offer.text}</p></article>
            ))}
          </div>
        </section>

        <section className="section geo-price">
          <div><p className="eyebrow">Accompagnement</p><h2>À partir de 400 € / mois</h2></div>
          <div>
            <p>Le périmètre dépend du volume de pages, du niveau de concurrence et des contenus à produire. L’échange initial sert à vérifier l’utilité de la démarche avant toute proposition.</p>
            <a className="button" href="mailto:romain.blachier@lapinbleu.art?subject=Audit%20SEO%20et%20GEO">Échanger sur votre site <Arrow /></a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand brand-small" href="/"><span>Lapin</span> <em>Bleu</em></a>
        <div className="footer-links"><a href="/">Offre principale</a><a href={contactHref}>Contact</a></div>
      </footer>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/seo-geo" ? <SeoGeoPage /> : <HomePage />;
}
