import MainLayout from "./layout";
import ComingSoonPage from "./components/ComingSoonPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/main.css";
import "swiper/css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Base URL renders MainLayout */}
        <Route path="/" element={<MainLayout />} />

        {/* Any other path redirects to ComingSoonPage */}
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;