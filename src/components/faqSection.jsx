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
                      <img src="assets/images/icon/tennis_ball.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                      Frequently Ask Questions
                    </h2>
                    <p
                      className="section-desc wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Here are some frequently asked questions to help you get
                      started with Padel4Passion. If you need further
                      assistance, feel free to reach out to us!
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
                            Is Padel4Passion available worldwide?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Currently, Padel4Passion is focused on Tunisia, but
                            we plan to expand to other regions soon.
                          </div>
                        </div>
                      </div>
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
                            Who can use the application?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            "Padel for Passion" is for players of all levels and
                            coaches seeking to manage sessions.
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
                            Can I organize tournaments?
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Absolutely! Coaches and players can create or join
                            leagues and tournaments.
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
                            Is there a way to track my progress?
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Yes, the app offers performance tracking features to
                            help you monitor your improvement in matches,
                            coaching sessions, and leagues.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6" style={{marginTop:200}}>
                <div className="faq-thumb">
                  <img
                    className="main-thumb  wow fadeInUp"
                    data-wow-delay=".2s"
                    src="assets/images/faq.png"
                    alt="thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 