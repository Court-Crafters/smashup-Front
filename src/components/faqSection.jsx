export default function FaqSection() {
  return (
    <>
      {/* Faq Section S T A R T */}
      <section className="faq-section section-padding fix">
        <div className="container">
          <div className="faq-wrapper style1">
            <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
              <div className="col-xl-6">
                <div className="faq-content style1">
                  <div className="section-title">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                      FAQs{" "}
                      <img src="assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                      Frequently Ask Questions
                    </h2>
                    <p
                      className="section-desc wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly
                    </p>
                  </div>
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            Looking for a solution to boost productivity?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            Need an easy way to manage your projects?
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            Seeking a user-friendly solution for your team?
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-thumb">
                  <img
                    className="main-thumb  wow fadeInUp"
                    data-wow-delay=".2s"
                    src="assets/images/faq/faqThumb1_2.png"
                    alt="thumb"
                  />
                  <div className="absolute-thumb float-bob-x">
                    <img src="assets/images/faq/faqThumb1_1.png" alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
