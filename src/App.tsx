import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeoGeo from "./pages/SeoGeo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo-geo" element={<SeoGeo />} />
      </Routes>
    </BrowserRouter>
  );
}
