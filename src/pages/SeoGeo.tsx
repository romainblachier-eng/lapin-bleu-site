import { Link } from "react-router-dom";
import { FullScreenScrollFX } from "../components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Offre dédiée",
    title: "SEO & GEO",
    rightLabel: "Visibilité IA",
    background:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
  },
  {
    leftLabel: "ChatGPT",
    title: "Les IA parlent de vous",
    rightLabel: "Claude",
    background:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80",
  },
  {
    leftLabel: "Optimisation",
    title: "Référencement naturel",
    rightLabel: "Trafic organique",
    background:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
  {
    leftLabel: "Generative",
    title: "Engine Optimization",
    rightLabel: "Citations IA",
    background:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1920&q=80",
  },
  {
    leftLabel: "À partir de",
    title: "400€ / mois",
    rightLabel: "Audit gratuit",
    background:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  },
];

export default function SeoGeo() {
  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <div>SEO</div>
          <div style={{ color: "#6c5ce7" }}>& GEO</div>
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
            to="/"
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
            ← Lapin Bleu
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
