import { FullScreenScrollFX } from "./components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Géopolitique",
    title: "Études, notes, formation, communication",
    rightLabel: "Lapin Bleu",
    background:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  {
    leftLabel: "Sur mesure",
    title: "Études géopolitiques",
    rightLabel: "Analyse",
    background:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1920&q=80",
  },
  {
    leftLabel: "Synthèses",
    title: "Notes de géopolitique",
    rightLabel: "Décryptages",
    background:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80",
  },
  {
    leftLabel: "Équipes",
    title: "Formation",
    rightLabel: "Transmission",
    background:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
  },
  {
    leftLabel: "Prise de parole",
    title: "Communication",
    rightLabel: "Influence",
    background:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
  },
  {
    leftLabel: "Offre à part",
    title: "SEO & GEO",
    rightLabel: "Visibilité IA",
    background:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
  },
  {
    leftLabel: "À partir de",
    title: "400€ / mois",
    rightLabel: "Étude offerte",
    background:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  },
];

export default function App() {
  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <div>Lapin</div>
          <div style={{ color: "#6c5ce7" }}>Bleu</div>
        </>
      }
      footer={
        <a
          href="mailto:contact@lapinbleu.art"
          style={{
            color: "rgba(245,245,245,0.92)",
            textDecoration: "none",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          contact@lapinbleu.art
        </a>
      }
      showProgress
      durations={{ change: 0.7, snap: 800 }}
      colors={{
        text: "rgba(245,245,245,0.92)",
        overlay: "rgba(10,10,46,0.55)",
        pageBg: "#0a0a2e",
        stageBg: "#0a0a2e",
      }}
    />
  );
}
