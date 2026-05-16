import { Link } from "react-router-dom";
import { FullScreenScrollFX } from "../components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Lapin Bleu",
    title: "Études & notes de géopolitique",
    rightLabel: "Analyses",
    background:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1920&q=80",
  },
  {
    leftLabel: "Énergie · Taïwan",
    title: "Domaines d'expertise",
    rightLabel: "Indo-Pacifique",
    background:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
  },
  {
    leftLabel: "Équipes",
    title: "Formation",
    rightLabel: "Transmission",
    background:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
  },
  {
    leftLabel: "Sciences Po · IEP Lyon · ILERI · HEIP",
    title: "Enseignement",
    rightLabel: "Depuis 2010",
    background:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=1920&q=80",
  },
  {
    leftLabel: "Fondation Jean Jaurès · Telos · La Grande Conversation",
    title: "Publications",
    rightLabel: "Asia Times · Taipei Times",
    background:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&q=80",
  },
  {
    leftLabel: "À partir de",
    title: "400€ / mois",
    rightLabel: "Étude offerte",
    background:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  },
];

export default function Home() {
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
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
          <Link
            to="/seo-geo"
            style={{
              color: "rgba(245,245,245,0.6)",
              textDecoration: "none",
              fontSize: "clamp(0.8rem, 1.4vw, 1rem)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              borderLeft: "1px solid rgba(245,245,245,0.3)",
              paddingLeft: "1.5rem",
            }}
          >
            → Offre SEO & GEO
          </Link>
        </div>
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
