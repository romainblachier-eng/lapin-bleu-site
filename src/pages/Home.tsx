import { FullScreenScrollFX } from "../components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Lapin Bleu — Société à mission",
    title: "Études, notes, formation, communication",
    rightLabel: "Politiques énergétiques · Géopolitique",
    background:
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=1920&q=80",
  },
  {
    leftLabel: "Opérateur",
    title: "L'écart entre l'autorité et la capacité d'agir",
    rightLabel: "Collectivité · Régulateur",
    background:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&q=80",
  },
  {
    leftLabel: "Afrique francophone",
    title: "Trois zones d'intervention",
    rightLabel: "Europe · Indo-Pacifique",
    background:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80",
  },
  {
    leftLabel: "Régulation · Concessions · Codes réseaux · Interconnexions",
    title: "Domaines",
    rightLabel:
      "Hydroélectricité · ENR · Électrification · Souveraineté énergétique",
    background:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
  },
  {
    leftLabel:
      "Diagnostic institutionnel · Note de cadrage · Étude comparée",
    title: "Ce que nous livrons",
    rightLabel:
      "Prospective · Assistance technique · Appui à la concertation",
    background:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&q=80",
  },
  {
    leftLabel: "Entretiens institutionnels · Analyse réglementaire",
    title: "Méthodes",
    rightLabel:
      "Cartographie des parties prenantes · Études de cas comparées",
    background:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
  },
  {
    leftLabel: "Référentiels · Catalogues · Parcours métiers",
    title: "Ingénierie de formation",
    rightLabel:
      "Renforcement de capacités · Élus et cadres du secteur public",
    background:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
  },
  {
    leftLabel:
      "Sciences Po Paris · Sciences Po Lyon · Centrale Lyon · INSA · ENTPE · HEIP · ILERI · IRIS Sup'",
    title: "Enseignement",
    rightLabel: "Douze établissements · Depuis 2010",
    background:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=1920&q=80",
  },
  {
    leftLabel: "Think tanks · Presse",
    title: "Publications",
    rightLabel: "France · Afrique francophone · Asie du Sud-Est",
    background:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&q=80",
  },
  {
    leftLabel: "Banque africaine de développement",
    title: "Références institutionnelles",
    rightLabel: "France Stratégie · Doctorat en cours",
    background:
      "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1920&q=80",
  },
  {
    leftLabel: "Missions courtes et moyennes",
    title: "Prenons contact",
    rightLabel: "Mobilité internationale immédiate",
    background:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  },
];

export default function Home() {
  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <span>Lapin</span>
          <span style={{ color: "var(--lb-accent)" }}> Bleu</span>
        </>
      }
      footer={
        <a
          href="mailto:contact@lapinbleu.art"
          style={{
            color: "var(--lb-ink)",
            textDecoration: "none",
            fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)",
            fontFamily: "var(--lb-sans)",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--lb-accent-soft)",
            paddingBottom: "4px",
          }}
        >
          contact@lapinbleu.art
        </a>
      }
      showProgress
      durations={{ change: 0.7, snap: 800 }}
      colors={{
        text: "var(--lb-ink)",
        overlay: "rgba(5, 8, 23, 0.55)",
        pageBg: "var(--lb-navy-deep)",
        stageBg: "var(--lb-navy-deep)",
      }}
    />
  );
}
