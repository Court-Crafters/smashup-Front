import { useEffect, useRef } from "react";


export default function Header() {
 // headerRef to be sticky
 const headerRef = useRef(null); // Reference for the header element

 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 100) {
        console.log(headerRef.current);
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
                    <img src="assets/images/logo/logo.svg" alt="logo-img" />
                  </a>
                </div>
              </div>
              <div className="header-middle">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="#">
                            Home
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                <div className="homemenu">
                                  <div className="homemenu-thumb">
                                    <img
                                      src="assets/images/header/home-1.png"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        className="theme-btn"
                                        href="index.html"
                                      >
                                        Multi Page
                                      </a>
                                      <a
                                        className="theme-btn"
                                        href="index-one-page.html"
                                      >
                                        One Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 01</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/images/header/home-2.png"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        className="theme-btn"
                                        href="index2.html"
                                      >
                                        Multi Page
                                      </a>
                                      <a
                                        className="theme-btn"
                                        href="index-two-page.html"
                                      >
                                        One Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 02</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/images/header/home-3.png"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        className="theme-btn"
                                        href="index3.html"
                                      >
                                        Multi Page
                                      </a>
                                      <a
                                        className="theme-btn"
                                        href="index-three-page.html"
                                      >
                                        One Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 03</h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <a href="index.html" className="border-none">
                            Home
                            <i className="fa-regular fa-plus" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="index.html">Home 01</a>
                            </li>
                            <li>
                              <a href="index2.html">Home 02</a>
                            </li>
                            <li>
                              <a href="index3.html">Home 03</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="services.html">
                            Services
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">
                            Pages
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li className="has-dropdown">
                              <a href="project1.html">
                                Project
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="project1.html">Project 01</a>
                                </li>
                                <li>
                                  <a href="project2.html">Project 02</a>
                                </li>
                                <li>
                                  <a href="project-details.html">
                                    Project Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="team.html">
                                Team
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="team.html">Team</a>
                                </li>
                                <li>
                                  <a href="team-details.html">Team Details</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="faq.html">Faq&apos;s</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blogs
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-standard.html">Blog Standard</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
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
