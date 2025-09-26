export default function WorkProcess() {
  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
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
              How It Works
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
              Let us Manage Everything For You!
            </h2>
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <img
                src="assets/images/shape/workProcessShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="row" style={{ color: "#1a22b7" }}>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">STEP - 01</div>
                  <div className="title" style={{ color: "#1a22b7" }}>
                    Download App
                  </div>
                  <div className="text-blue">
                    Download the app from the App Store or Google Play.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">STEP - 02</div>
                  <div className="title" style={{ color: "#1a22b7" }}>
                    Create account
                  </div>
                  <div className="text-blue">
                    Create your account and set your preferences.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">STEP - 03</div>
                  <div className="title" style={{ color: "#1a22b7" }}>
                    Install App, &amp; Enjoy
                  </div>
                  <div className="text-blue">
                    Start playing, chatting, and shopping, all in one place!
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
