import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rohith</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/rohith-chippa-bb5a2916b/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/Chippa-Rohith"
            className="footer__social-link"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>

        {/*<span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span>*/}
      </div>
    </footer>
  );
};

export default Footer;
