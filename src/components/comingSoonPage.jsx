import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";

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
            <div
              style={{
                // center
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                <div className="col-xl-8 order-2 order-xl-1">
                  <div className="cta-content">
                    <div className="section-title">
                      <div
                        className="subtitle text-white bg2 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        Coming Soon{" "}
                        <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                      </div>
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          zIndex: 1,
                        }}
                      >
                        {/* Animated Background Elements */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "10%",
                            left: "10%",
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            filter: "blur(50px)",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "10%",
                            right: "15%",
                            width: 150,
                            height: 150,
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            filter: "blur(80px)",
                          }}
                        ></Box>
                      </Box>

                      <Container sx={{ position: "relative", zIndex: 2 }}>
                        {/* Logo */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <img
                            src="assets/images/logowhitte.png"
                            alt="P4P Logo"
                            style={{ width: 200 }}
                          />
                        </Box>

                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: "2rem",
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
                        className="section-desc text-white mxw-651 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                         Check out our form to help us improve! 🎾
                      </p>
                      <button
                        rel="noopener noreferrer"
                        onClick={() => {
                          window.open("https://tally.so/r/mDA9y5", "_blank");
                        }}
                        className="btn btn-primary mt-4 wow fadeInUp bg-blue-600 text-white transition-colors duration-300 
                        hover:bg-yellow-400 hover:text-black active:bg-yellow-400 active:text-black"
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
