import React from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

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
    <section className="advantage-section fix" id="app">
      <div className="advantage-container-wrapper style1">
        <div className="container">
          <div className="advantage-wrapper style1 section-padding">
            <div className="container">
<div className="row gy-5 d-flex align-items-center">
  <div className="col-xl-6 order-2 order-xl-1">
    <div className="advantage-content">
      <div className="section-title wow fadeInUp" data-wow-delay=".2s">
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
          App Advantages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ width: 16, height: 16, marginLeft: 6 }}
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
          Enhance Your Padel Experience with US!
        </h2>

        {isMobile && (
          <div className="col-xl-6 order-1 order-xl-2 d-flex justify-content-center text-center">
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
                  src="assets/images/shape/advanceThumbShape1_1.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        )}

        <p className="section-desc" style={{ color: "#1a22b7" }}>
          We want to turn your love for padel into a seamless,
          joyful, and rewarding journey by providing :
        </p>
      </div>

      <div className="checklist-wrapper style1 wow fadeInUp" data-wow-delay=".4s">
        {isMobile ? (
          <ul className="checklist style1">
            {["Friendly Design","Community Connection","Progress Tracking","Competitive Mode"]
              .map((item,i)=>(
              <li key={i} style={{ color:"#1a22b7", display:"flex", alignItems:"center", gap:"8px" }}>
                <LibraryAddCheckIcon sx={{ fontSize:30, color:"#1a22b7", flexShrink:0 }} />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className="checklist style1">
              {["Friendly Design","Community Connection"].map((item,i)=>(
                <li key={i} style={{ color:"#1a22b7", display:"flex", alignItems:"center", gap:"8px" }}>
                  <LibraryAddCheckIcon sx={{ fontSize:30, color:"#1a22b7", flexShrink:0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="checklist style1">
              {["Progress Tracking","Competitive Mode"].map((item,i)=>(
                <li key={i} style={{ color:"#1a22b7", display:"flex", alignItems:"center", gap:"8px" }}>
                  <LibraryAddCheckIcon sx={{ fontSize:30, color:"#1a22b7", flexShrink:0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  </div>

  {!isMobile && (
    <div className="col-xl-6 order-1 order-xl-2 d-flex justify-content-end text-end">
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
            src="assets/images/shape/advanceThumbShape1_1.png"
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
