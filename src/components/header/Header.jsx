import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {'<R/C>'}
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <div className="nav__icon">
                  <i className="fa fa-home nav__icon"></i>
                </div> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <div className="nav__icon">
                  <i className="fa fa-user"></i>
                </div> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <i className="fa fa-file nav__icon"></i>
                </div> Skills
              </a>
            </li>

            

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <i className="fa fa-id-card nav__icon"></i>
                </div> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <i className="fa fa-phone nav__icon"></i>
                </div> Contact
              </a>
            </li>
          </ul>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i
            className="fa fa-times nav__close"
          ></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
