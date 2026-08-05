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
          <span>SEO</span>
          <span style={{ color: "var(--lb-accent)" }}> & GEO</span>
        </>
      }
      footer={
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
          <Link
            to="/"
            style={{
              color: "var(--lb-ink-soft)",
              textDecoration: "none",
              fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
              fontFamily: "var(--lb-sans)",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              paddingLeft: "1.2rem",
              borderLeft: "1px solid var(--lb-accent-soft)",
            }}
          >
            ← Lapin Bleu
          </Link>
        </div>
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
