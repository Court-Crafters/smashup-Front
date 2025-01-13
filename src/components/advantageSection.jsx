export default function AdvantageSection() {
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
                        <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                      </div>
                      <h2 className="title">
                        Get Benefit By Using Trending Apps
                      </h2>
                      <p className="section-desc">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly
                      </p>
                    </div>
                    <div
                      className="checklist-wrapper style1 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <ul className="checklist style1">
                        <li>
                          <img
                            src="assets/images/icon/checkmarkIcon.svg"
                            alt="icon"
                          />{" "}
                          Friendly Design
                        </li>
                        <li>
                          <img
                            src="assets/images/icon/checkmarkIcon.svg"
                            alt="icon"
                          />
                          SEO Optimized
                        </li>
                      </ul>
                      <ul className="checklist style1">
                        <li>
                          <img
                            src="assets/images/icon/checkmarkIcon.svg"
                            alt="icon"
                          />{" "}
                          Cloud Storage{" "}
                        </li>
                        <li>
                          <img
                            src="assets/images/icon/checkmarkIcon.svg"
                            alt="icon"
                          />{" "}
                          Strong Security{" "}
                        </li>
                      </ul>
                    </div>
                    <a
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".6s"
                      href="about.html"
                    >
                      {" "}
                      Download App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_43_54)">
                          <path
                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_54">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 order-1 order-xl-2">
                  <div className="advantage-thumb">
                    <div
                      className="thumb1 img-custom-anim-top wow fadeInDown"
                      data-wow-delay=".8s"
                      data-tilt=""
                      data-tilt-max={10}
                    >
                      <img
                        src="assets/images/advantage/advantageThumb1_1.png"
                        alt="thumb"
                      />
                    </div>
                    <div
                      className="thumb2 img-custom-anim-right wow fadeInRight"
                      data-wow-delay=".4s"
                      data-tilt=""
                      data-tilt-max={15}
                    >
                      <img
                        src="assets/images/advantage/advantageThumb1_2.png"
                        alt="thumb"
                      />
                    </div>
                    <div className="shape1">
                      <img
                        src="assets/images/shape/advanceThumbShape1_1.png"
                        alt="shape"
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
  );
}
