export default function LinkSection() {
  return (
    <section className="cta-section" id="form">
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
            <div className="container">
              <div className="row gy-5">
                <div className="col-xl-8 order-2 order-xl-1">
                  <div className="cta-content">
                    <div className="section-title">
                      <div
                        className="subtitle text-white bg2 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        Our Form{" "}
                        <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                      </div>
                      <h2
                        className="title text-white wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        Fill our Form to improve your passion
                      </h2>
                      <p
                        className="section-desc text-white mxw-651 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        Help us shape the future of padel in Tunisia! 🎾 We&apos;re
                        developing an app to enhance your padel experience, and
                        your input is essential. Take a minute to share your
                        favorite courts, playing habits, and preferences by
                        filling out our short survey. Together, we can create
                        the ultimate padel platform!
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
}
