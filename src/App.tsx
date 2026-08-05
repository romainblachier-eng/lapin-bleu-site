import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeoGeo from "./pages/SeoGeo";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo-geo" element={<SeoGeo />} />
      </Routes>
    </BrowserRouter>
  );
}
