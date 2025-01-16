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
const TestimonialSection = React.lazy(() => import("../components/testimonialSection"));
const FeatureSection = React.lazy(() => import("../components/featureSection")); 
const PricingSection = React.lazy(() => import("../components/pricingSection"));
const LinkSection = React.lazy(() => import("../components/linkSection"));
const BlogSection = React.lazy(() => import("../components/blogSection"));
const FooterSection = React.lazy(() => import("../components/footerSection"));
const Test = React.lazy(() => import("../components/Test"));
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
      <BrandsSlider />
      <AboutUs />
      <WorkProcess />
      <AdvantageSection />
      <WhyOurApp />
      <CounterSection />
      <FaqSection />
      <TestimonialSection />
      <FeatureSection />
      <PricingSection />
      <LinkSection />
      <BlogSection />
      <FooterSection />
      <Test />
    
    </Suspense>
  );
};

export default App;
