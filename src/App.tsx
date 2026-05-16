import { FullScreenScrollFX } from "./components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "GEO",
    title: "Études, notes, formation, communication",
    rightLabel: "SEO",
    background:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  {
    leftLabel: "Sur mesure",
    title: "Études approfondies",
    rightLabel: "Données",
    background:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=80",
  },
  {
    leftLabel: "Synthèses",
    title: "Notes de veille",
    rightLabel: "Décryptages",
    background:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1920&q=80",
  },
  {
    leftLabel: "Équipes",
    title: "Formation GEO & SEO",
    rightLabel: "Autonomie",
    background:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
  },
  {
    leftLabel: "ChatGPT",
    title: "Communication & IA",
    rightLabel: "Claude",
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
