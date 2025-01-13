export default function AboutUs() {
  return (
    <section className="about-section fix">
      <div className="about-container-wrapper style1">
        <div className="container">
          <div className="about-wrapper style1">
            <div className="row gy-5 gx-60">
              <div className="col-xl-6">
                <div className="about-thumb">
                  <div className="bg" />
                  <div className="thumbShape1 d-none d-xxl-block cir36">
                    <img
                      src="assets/images/shape/aboutThumbShape1_1.png"
                      alt="shape"
                    />
                  </div>
                  <div className="thumbShape2 d-none d-xxl-block cir36">
                    <img
                      src="assets/images/shape/aboutThumbShape1_2.png"
                      alt="shape"
                    />
                  </div>
                  <div className="thumbShape3 d-none d-xxl-block cir36 float-bob-y">
                    <img
                      src="assets/images/shape/aboutThumbShape1_3.png"
                      alt="shape"
                    />
                  </div>
                  <div className="thumbShape4 d-none d-xxl-block cir36">
                    <img
                      src="assets/images/shape/aboutThumbShape1_4.png"
                      alt="shape"
                    />
                  </div>
                  <div className="main-thumb">
                    <img
                      src="assets/images/about/aboutThumb1_1.png"
                      alt="thumb"
                    />
                  </div>
                  <div className="absolute-thumb float-bob-x">
                    <img
                      src="assets/images/about/aboutThumb1_2.png"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-content">
                  <div className="section-title">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                      About Our App{" "}
                      <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                      Simple Reports &amp; Analytics Backdown As it
                    </h2>
                    <p
                      className="section-desc wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use
                    </p>
                  </div>
                  <ul
                    className="checklist style1 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <li>
                      <img
                        src="assets/images/icon/checkmarkIcon.svg"
                        alt="icon"
                      />{" "}
                      With our Technological and Marketing Solutions.
                    </li>
                    <li>
                      <img
                        src="assets/images/icon/checkmarkIcon.svg"
                        alt="icon"
                      />{" "}
                      We are trusted all over the world.{" "}
                    </li>
                    <li>
                      <img
                        src="assets/images/icon/checkmarkIcon.svg"
                        alt="icon"
                      />{" "}
                      Start Your 14 Days Free Trials Today!{" "}
                    </li>
                  </ul>
                  <a
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".2s"
                    href="about.html"
                  >
                    Discover More
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
