import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";

const ComingSoonPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <section
      className="cta-section"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="cta-container-wrapper style1"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <div
            className="cta-wrapper style1  section-padding fix"
            style={{
              height: "100vh",
              borderRadius: 0,
              margin: 0,
            }}
          >
            <div className="shape1 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_2.png" alt="shape" />
            </div>
            <div className="shape3 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_3.png" alt="shape" />
            </div>
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  top: 50,
                  left: 20,
                  mb: 2,
                }}
                className="wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="assets/images/logowhitte.png"
                  alt="P4P Logo"
                  style={{ width: 120 }}
                />
              </Box>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // vertical center
                height: "100%",
              }}
            >
              <div
                style={{
                  // center
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="cta-content">
                  <div className="section-title">
                    {!isMobile ? (
                      <>
                        <div
                          className="subtitle text-white bg2 wow fadeInUp"
                          data-wow-delay=".2s"
                          style={{
                            marginBottom: 40,
                          }}
                        >
                          Coming Soon{" "}
                          <img
                            src="assets/images/icon/fireIcon.svg"
                            alt="icon"
                          />
                        </div>

                        {/* Logo */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                          className="wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <img
                            src="assets/images/logowhitte.png"
                            alt="P4P Logo"
                            style={{ width: 220 }}
                          />
                        </Box>
                      </>
                    ) : (
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                          color: "white",
                          textShadow: "4px 4px 10px rgba(0, 0, 0, 0.54)",
                          fontSize: "4.5rem", // Ajuste la taille manuellement si nécessaire
                          fontFamily: "Birthstone",
                          textAlign: "center",
                        }}
                        className="wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        COMING SOON
                      </Typography>
                    )}

                    <Container
                      sx={{ position: "relative", zIndex: 2 }}
                      className="wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          // if desktop font size is 2rem else 1.5rem
                          fontSize: { xs: "1.5rem", md: "2rem" },
                          mt: 2,
                          color: "#D2F429",
                          whiteSpace: "nowrap",
                          fontFamily: "Bebas Neue",
                        }}
                      >
                        {`${timeLeft.days} Days : ${timeLeft.hours} Hours : ${timeLeft.minutes} Minutes : ${timeLeft.seconds} Seconds`}
                      </Typography>
                    </Container>

                    <p
                      className="section-desc text-white mxw-651 wow fadeInUp 
                      text-center transition-colors duration-300
                      "
                      data-wow-delay=".6s"
                    >
                      Check out our form to help us improve! 🎾
                    </p>
                    <div
                      style={{
                        // this one is end of line
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        rel="noopener noreferrer"
                        onClick={() => {
                          window.open("https://tally.so/r/mDA9y5", "_blank");
                        }}
                        style={{
                          backgroundColor: "#D2F429",
                          color: "black",
                          transition: "all 0.3s",
                          zIndex: 2,
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                          },
                        }}
                        className="btn btn-primary wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        Fill Out the Form 🚀
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;
