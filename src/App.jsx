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
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirect empty path to home */}
        <Route path="/" element={<MainLayout />} />
        <Route path="" element={<Navigate to="/" replace />} />

        {/* Privacy Policy page */}
        <Route
          path="/privacy-policy"
          element={
            <iframe
              src="/privacy-policy.html"
              title="Privacy Policy"
              style={{
                width: "100%",
                height: "100vh",
                border: "none",
                background: "#fafafa",
              }}
            />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
