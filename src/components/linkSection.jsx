export default function LinkSection() {
  return (
    <section className="cta-section">
      <div className="cta-container-wrapper style1">
        <div className="container">
          <div className="cta-wrapper style1  section-padding fix">
            <div className="shape1 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_2.png" alt="shape" />
            </div>
            <div className="shape3 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_3.png" alt="shape" />
            </div>
            <div className="shape4 d-none d-xxl-block">
              <img src="assets/images/shape/ctaShape1_4.png" alt="shape" />
            </div>
            <div className="container">
              <div className="row gy-5">
                <div className="col-xl-8 order-2 order-xl-1">
                  <div className="cta-content">
                    <div className="section-title">
                      <div
                        className="subtitle text-white bg2 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        Our App{" "}
                        <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                      </div>
                      <h2
                        className="title text-white wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        Download our app and start your free trail to get
                        started today!
                      </h2>
                      <p
                        className="section-desc text-white mxw-651 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised
                      </p>
                    </div>
                    <a
                      className="playstore"
                      href="https://play.google.com/store"
                    >
                      <img
                        src="assets/images/cta/ctaplayStore1_1.png"
                        alt="img"
                      />
                    </a>
                    <a href="https://www.apple.com/store">
                      <img
                        src="assets/images/cta/ctaAppleStore1_1.png"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 order-1 order-xl-2">
                  <div className="cta-thumb wow fadeInUp" data-wow-delay=".2s">
                    <img src="assets/images/cta/ctaThumb1_1.png" alt="thumb" />
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
