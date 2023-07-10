import React from "react";
import "./navigator.css";
import { Link } from "react-router-dom";


const Navigator = () => {
  
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar" role="banner">
        <div style={{ backgroundColor: "#4E5180" }} className="px-3">
          <div className="align-items-center justify-content-between d-flex">
            <div className="">
              <h1 className="mb-0 site-logo text-white">Beta Launch assessment</h1>
            </div>
            <div className="d-none d-xl-block  ">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
        
                  <li>
                    <a href="about.html">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a
                href="/"
                className="site-menu-toggle js-menu-toggle text-white"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigator;
