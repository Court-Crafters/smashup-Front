import MainLayout from "./layout";
import ComingSoonPage from "./components/comingSoonPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/main.css";
import "swiper/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/commingsoon" element={<ComingSoonPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
