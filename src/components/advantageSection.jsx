import React from "react";
export default function AdvantageSection() {
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
    <section className="advantage-section fix">
      <div className="advantage-container-wrapper style1">
        <div className="container">
          <div className="advantage-wrapper style1 section-padding">
            <div className="container">
              <div className="row gy-5 d-flex align-items-center">
                <div className="col-xl-6 order-2 order-xl-1">
                  <div className="advantage-content">
                    <div
                      className="section-title wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="subtitle">
                        App Advantage{" "}
                        <img
                          src="assets/images/icon/tennis_ball.svg"
                          alt="icon"
                        />
                      </div>
                      <h2 className="title">
                        Enhance Your Padel Experience with US!
                      </h2>
                      {isMobile && (
                        <div className="col-xl-6 order-1 order-xl-2  d-flex justify-content-center text-center">
                          <div className="advantage-thumb">
                            <div
                              className="thumb2 img-custom-anim-right wow fadeInRight"
                              data-wow-delay=".4s"
                              data-tilt=""
                              data-tilt-max={15}
                            >
                              <img
                                src="assets/images/phonedesignapp.png"
                                alt="thumb"
                                width={300}
                              />
                            </div>
                            <div className="shape1">
                              <img
                                src="assets/images/shape/advanceThumbShapeblue3.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <p className="section-desc">
                        We want to turn your love for padel into a seamless,
                        joyful, and rewarding journey by providing :
                      </p>
                      
                    </div>
                    <div
                      className="checklist-wrapper style1 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      {isMobile ? (
                        <ul className="checklist style1">
                          <li>
                            <img
                              src="assets/images/icon/checked.png"
                              alt="icon"
                              style={{ width: "30px", height: "30px" }}
                            />
                            Friendly Design
                          </li>
                          <li>
                            <img
                              src="assets/images/icon/checked.png"
                              alt="icon"
                              style={{ width: "30px", height: "30px" }}
                            />
                            Community Connection
                          </li>
                          <li>
                            <img
                              src="assets/images/icon/checked.png"
                              alt="icon"
                              style={{ width: "30px", height: "30px" }}
                            />
                            Progress Tracking
                          </li>
                          <li>
                            <img
                              src="assets/images/icon/checked.png"
                              alt="icon"
                              style={{ width: "30px", height: "30px" }}
                            />
                            Competitive Mode
                          </li>
                        </ul>
                      ) : (
                        <>
                          <ul className="checklist style1">
                            <li>
                              <img
                                src="assets/images/icon/checked.png"
                                alt="icon"
                                style={{ width: "30px", height: "30px" }}
                              />
                              Friendly Design
                            </li>
                            <li>
                              <img
                                src="assets/images/icon/checked.png"
                                alt="icon"
                                style={{ width: "30px", height: "30px" }}
                              />
                              Community Connection
                            </li>
                          </ul>
                          <ul className="checklist style1">
                            <li>
                              <img
                                src="assets/images/icon/checked.png"
                                alt="icon"
                                style={{ width: "30px", height: "30px" }}
                              />
                              Progress Tracking
                            </li>
                            <li>
                              <img
                                src="assets/images/icon/checked.png"
                                alt="icon"
                                style={{ width: "30px", height: "30px" }}
                              />
                              Competitive Mode
                            </li>
                          </ul>
                        </>
                      )}
                    </div>

                  </div>
                </div>
                {!isMobile && (
                  <div className="col-xl-6 order-1 order-xl-2  d-flex justify-content-end text-end">
                    <div className="advantage-thumb">
                      <div
                        className="thumb2 img-custom-anim-right wow fadeInRight"
                        data-wow-delay=".4s"
                        data-tilt=""
                        data-tilt-max={15}
                      >
                        <img
                          src="assets/images/phonedesignapp.png"
                          alt="thumb"
                          width={500}
                        />
                      </div>
                      <div className="shape1">
                        <img
                          src="assets/images/shape/advanceThumbShapeblue2.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
