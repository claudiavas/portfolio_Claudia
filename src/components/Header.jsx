import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";

const Header = ({ classicHeader, darkTheme, homeRef, handleNavClick }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const menuOptions = [
    { text: "Home", to: "home" },
    { text: "About Me", to: "about" },
    { text: "Skills", to: "skills" },
    { text: "Portfolio", to: "portfolio" },
    { text: "Contact", to: "contact" }
  ];

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2, alignItems: 20">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <div styles={{ justifyItems: "center" }}>
              <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                <img
                  className="img-fluid rounded-pill d-block"
                  src="images/profile.jpg"
                  title="I'm Claudia"
                  alt="profile"
                  style={{ maxWidth: "150px", height: "auto" }}
                />
              </span>
              <h1 className="text-5 text-white text-center mb-0 d-lg-block">
                Claudia Vásquez
              </h1>
            </div>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              {menuOptions.map((option, index) => (
                <li key={index} className="nav-item">
                  <Link
                    className="nav-link"
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to={option.to}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {option.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex mb-4">
            <li className="social-icons-linkedin">
              <Tooltip text="Linkedin" placement="top">
                <a
                  href="http://www.linkedin.com/es/claudiavas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ fontSize: "20px" }} />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-github">
              <Tooltip text="Google" placement="top">
                <a
                  href="http://www.github.com/claudiavas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" style={{ fontSize: "20px" }} />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;