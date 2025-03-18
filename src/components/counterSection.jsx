export default function CounterSection() {
  return (
    <div className="counter-section fix">
      <div className="counter-container-wrapper style1">
        <div className="container">
          <div
            className="counter-wrapper style1 section-padding"
            data-bg-src="assets/images/shape/counterShape1_b.png"
          >
            <div className="shape" />
            <div className="container">
              <div className="row gy-5">
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="counter">
                      <span className="counter-number">2,500</span>{" "}
                      <span className="plus">+</span>
                    </div>
                    <p className="text">Matches arranged monthly</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="counter">
                      <span className="counter-number">10</span>{" "}
                      <span className="plus">k</span>
                    </div>
                    <p className="text">Active players and coaches </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="counter">
                      <span className="counter-number">20</span>{" "}
                      <span className="plus">+</span>
                    </div>
                    <p className="text">Active players and coaches</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="counter">
                      <span className="counter-number">60%</span>{" "}
                    </div>
                    <p className="text">
                    Growth in Padel Participation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
