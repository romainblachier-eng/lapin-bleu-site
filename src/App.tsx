import { FullScreenScrollFX } from "./components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Optimisation",
    title: "GEO & SEO",
    rightLabel: "Visibilité",
    background:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  {
    leftLabel: "ChatGPT",
    title: "Les IA parlent de vous",
    rightLabel: "Claude",
    background:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
  },
  {
    leftLabel: "Sur mesure",
    title: "Études approfondies",
    rightLabel: "Données",
    background:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=80",
  },
  {
    leftLabel: "Chaque mois",
    title: "Rapports détaillés",
    rightLabel: "Insights",
    background:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1920&q=80",
  },
  {
    leftLabel: "Stratégie",
    title: "Référencement piloté",
    rightLabel: "Résultats mesurés",
    background:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
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
