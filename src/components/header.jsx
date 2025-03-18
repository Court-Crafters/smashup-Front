import { useEffect, useRef } from "react";
export default function Header() {
  // headerRef to be sticky
  const headerRef = useRef(null); // Reference for the header element

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current?.classList.add("sticky");
      } else {
        headerRef.current?.classList.remove("sticky");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-section-1" ref={headerRef}>
      <div id="header-sticky" className="header-1" ref={headerRef}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img
                      src="assets/images/logo/p1.png"
                      alt="logo-img"
                      width="120"
                      height="120"
                    />
                  </a>
                </div>
              </div>
              <div className="header-middle">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="about.html">App</a>
                        </li>
                        <li>
                          <a href="about.html">Why Us</a>
                        </li>
                        <li>
                          <a href="about.html">FAQ's</a>
                        </li>
                        <li>
                          <a href="about.html">Our Form</a>
                        </li>

                        <li>
                          <a href="about.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button ms-4">
                  <a href="contact.html" className="theme-btn">
                    <span>
                      Get Started
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
                <div className="header__hamburger d-block d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
