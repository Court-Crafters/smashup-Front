import React, { Suspense } from "react";
import Preloader from "../components/preloader";
const Header = React.lazy(() => import("../components/header"));
const CanvasSlider = React.lazy(() => import("../components/header-mobile"));
const HeroSection = React.lazy(() => import("../components/heroSection"));
const MouseCursor = React.lazy(() => import("../components/mouseEffect"));

const App = () => {
  // Media query to detect mobile devices
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Suspense fallback={<Preloader />}>
      <MouseCursor />
      <button
        id="back-top"
        className="back-to-top"
        onClick={() => {
          // scroll to top
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
      {isMobile ? <CanvasSlider /> : <Header />}
      <HeroSection />
      <div
        style={{
          height: "20000px",
        }}
      ></div>
    </Suspense>
  );
};

export default App;
