import React from "react";
const HeroSection = () => {
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
    <>
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Intro Section S T A R T */}
      <section className="intro-section" id="home">
        <div className="intro-container-wrapper style1">
          <div className="container">
            <div className="intro-wrapper style1 fix">
              <div className="shape1">
                <img src="assets/images/shape/introShape1_1.png" alt="shape" />
              </div>
              <div className="shape2">
                <img src="assets/images/shape/introShape1_2.png" alt="shape" />
              </div>
              <div className="shape3 d-none d-xxl-block cir36">
                <img src="assets/images/shape/introShape1_3.png" alt="shape" />
              </div>
              <div className="shape4 d-none d-xxl-block cir36">
                <img src="assets/images/shape/introShape1_4.png" alt="shape" />
              </div>
              <div className="shape5 d-none d-xxl-block cir36">
                <img src="assets/images/shape/introShape1_5.png" alt="shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 order-2 order-xl-1">
                    <div
                      className="intro-content"
                      style={
                        isMobile ? { marginTop: "0px", paddingTop: "0px" } : {}
                      }
                    >
                      <div className="intro-section-title">
                        <div className="intro-subtitle">
                          <span>P4P!</span>Follow Your Passion{" "}
                        </div>
                        <h3
                          className="intro-title wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          Padel For Passion is coming soon!
                        </h3>
                        {isMobile && (
                          <img
                            className="main-thumb img-custom-anim-right wow fadeInUp"
                            data-wow-delay=".4s"
                            src="assets/images/phone-2.png"
                            width={350}
                            alt="thumb"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        )}

                        <p
                          className="intro-desc wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          &quot;Padel-4-Passion&quot; unites players and
                          coaches, making padel more exciting than ever. Find
                          your perfect match, join leagues, book sessions, and
                          connect with the community—all in one app. Whether
                          you’re here to play, compete, or shop, your padel
                          journey starts now!
                        </p>
                      </div>
                      <div
                        className="btn-wrapper style1 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <a className="theme-btn" href="contact.html">
                          Get Started Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_11_22)">
                              <path
                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_11_22">
                                <rect width={16} height={16} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a
                          className="theme-btn style2 wow fadeInUp"
                          data-wow-delay=".2s"
                          href="https://tally.so/r/mDA9y5"
                        >
                          Check our form
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_11_27)">
                              <path
                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                fill="#d2f429"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_11_27">
                                <rect width={16} height={16} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 order-1 order-xl-2">
                    <div className="intro-thumb">
                      <div className="thumbShape1">
                        <img
                          src="assets/images/shape/introThumbShape1_1.png"
                          alt="thumbShape"
                        />
                      </div>
                      {!isMobile && (
                        <img
                          className="main-thumb img-custom-anim-right wow fadeInUp"
                          data-wow-delay=".4s"
                          src="assets/images/phone-2.png"
                          width={600}
                          alt="thumb"
                        />
                      )}
                      <div className="thumbShape2">
                        <img
                          src="assets/images/shape/introThumbShape1_2.png"
                          alt="thumbShape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
