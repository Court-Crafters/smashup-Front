import React, { Suspense } from "react";
import Preloader from "../components/preloader";

const Header = React.lazy(() => import("../components/header"));
const CanvasSlider = React.lazy(() => import("../components/header-mobile"));
const HeroSection = React.lazy(() => import("../components/heroSection"));
const MouseCursor = React.lazy(() => import("../components/mouseEffect"));
const BrandsSlider = React.lazy(() => import("../components/brands-slider"));
const AboutUs = React.lazy(() => import("../components/aboutUs"));
const WorkProcess = React.lazy(() => import("../components/workProcess"));
const AdvantageSection = React.lazy(() => import("../components/advantageSection"));
const WhyOurApp = React.lazy(() => import("../components/whyOurApp"));
const CounterSection = React.lazy(() => import("../components/counterSection"));
const FaqSection = React.lazy(() => import("../components/faqSection"));
const LinkSection = React.lazy(() => import("../components/linkSection"));
const FooterSection = React.lazy(() => import("../components/footerSection"));

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
    setIsMobile(mediaQuery.matches);
  };

  return (
    <Suspense fallback={<Preloader />}>
      {/* ✅ Wrapper with background color */}
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        {!isMobile ? <MouseCursor /> : null}

        <button
          id="back-top"
          className="back-to-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa-solid fa-chevron-up" />
        </button>

        {isMobile ? <CanvasSlider /> : <Header />}
        <HeroSection id="hero" />
        <BrandsSlider />
        <AboutUs id="about" />
        <WorkProcess id="work-process" />
        <AdvantageSection id="advantage" />
        <WhyOurApp id="why-us" />
        <CounterSection />
        <FaqSection id="faq" />
        {/* <TestimonialSection /> */}
        {/* <FeatureSection /> */}
        {/* <PricingSection /> */}
        <LinkSection id="our-form" />
        {/* <BlogSection /> */}
        <FooterSection />
      </div>
    </Suspense>
  );
};

export default App;
