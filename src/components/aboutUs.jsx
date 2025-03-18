import React from "react";
export default function AboutUs() {
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
    <section className="about-section fix">
      <div className="about-container-wrapper style1">
        <div className="container">
          <div className="about-wrapper style1">
            <div className="row gx-60">
              <div className="col-xl-6">
                {!isMobile && (
                  <div className="about-thumb">
                    <div className="bg" />

                    <div className="main-thumb">
                      <img src="assets/images/illustration.png" alt="thumb" />
                    </div>
                    <div className="absolute-thumb float-bob-x">
                      <img
                        src="assets/images/about/aboutThumb1_2.png"
                        alt="thumb"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-xl-6">
                <div
                  className="about-content"
                  style={
                    isMobile ? { marginTop: "0px", paddingTop: "0px" } : {}
                  }
                >
                  <div className="section-title">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                      About Our App{" "}
                      <img
                        src="assets/images/icon/tennis_ball.svg"
                        alt="icon"
                      />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                      Padel for Passion is a one-stop app for all this sport
                      enthusiasts
                    </h2>

                    <p
                      className="section-desc wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Join the growing community passionate about padel and take
                      your game to the next level with P4P:
                    </p>
                    <div className="main-thumb">
                      {isMobile && (
                        <img
                          src="assets/images/illustration.png"
                          alt="thumb"
                          width={400}
                        />
                      )}
                    </div>
                  </div>
                  <ul
                    className="checklist style1 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    {[
                      "With our Matchmaking find your ideal match based on skill level and availability.",
                      "Coaches can easily create and manage their sessions.",
                      'Compete & organize your events effortlessly "Leagues or Tournaments".',
                      "With our chat connect seamlessly with your buddies.",
                      "With our shop you can sell or buy padel gear and equipment.",
                    ].map((text, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <img
                          src="assets/images/icon/checked.png"
                          alt="icon"
                          style={{
                            width: "30px",
                            height: "30px",
                            flexShrink: 0,
                          }}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".2s"
                    href="about.html"
                  >
                    Your padel journey starts here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_18_41)">
                        <path
                          d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_41">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
