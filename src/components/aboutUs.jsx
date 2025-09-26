import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

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
    <section className="about-section fix" id="about">
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
                    <div
                      className="subtitle wow fadeInUp"
                      data-wow-delay=".2s"
                      style={{
                        borderRadius: "4px",
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "2px 6px",
                        color: "white",
                        backgroundColor: "#1a22b7",
                      }}
                    >
                      About Our App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{
                          width: "16px",
                          height: "16px",
                          marginLeft: "6px",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                    <h2
                      className="title wow fadeInUp"
                      data-wow-delay=".4s"
                      style={{ color: "#1a22b7" }}
                    >
                      Padel for Passion is a one-stop app for all this sport
                      enthusiasts
                    </h2>

                    <p
                      className="section-desc wow fadeInUp"
                      data-wow-delay=".6s"
                      style={{ color: "#1a22b7" }}
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
                    style={{ color: "#1a22b7" }}
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
                          color: "#1a22b7",
                        }}
                      >
                        <LibraryAddCheckIcon
                          sx={{
                            fontSize: 30,
                            color: "#1a22b7",
                            flexShrink: 0,
                          }}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
