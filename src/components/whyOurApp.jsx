export default function WhyOurApp() {
  return (
    <section className="wcu-section section-padding fix" id="why-us">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
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
              Why Using Our App{" "}
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
            <h2 className="title" style={{ color: "#1a22b7" }}>
              Our app is for all, Players, Coaches & Club owners
            </h2>
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <div className="fancy-box style2">
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_1.svg" alt="icon" />
                    </div>
                    <div className="content wow fadeInUp" data-wow-delay=".2s">
                      <h4 style={{ color: "#1a22b7" }}>Easy matchmaking</h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Find your perfect partner or opponent in just a few
                        clicks!
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-box style2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_2.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 style={{ color: "#1a22b7" }}>
                        Join leagues & stay competitive
                      </h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Compete, improve, and challenge yourself in exciting
                        tournaments!
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-box style2 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_3.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 style={{ color: "#1a22b7" }}>Coaching Session </h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Promote and manage your coaching sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <img src="assets/images/courtillustration.png" alt="thumb" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <div
                    className="fancy-box style2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_4.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 style={{ color: "#1a22b7" }}>Free Live Chat</h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Chat and share updates with your padel network
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-box style2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_5.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 style={{ color: "#1a22b7" }}>Marketplace</h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Access the latest gear in our shop.
                      </p>
                    </div>
                  </div>
                  <div
                    className="fancy-box style2 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="icon">
                      <img src="assets/images/icon/wcuIcon1_6.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 style={{ color: "#1a22b7" }}>Track Progress</h4>
                      <p style={{ color: "#1a22b7" }} className="text">
                        Measure your growth with stats and achievements to keep
                        you motivated.
                      </p>
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
}
