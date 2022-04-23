import { Link } from "react-router-dom";

import bgMain from "../../assets/bgmain.jpg";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="app__landing_container">
      <img className="app__landing-img" src={bgMain} alt="" />
      <div className="app__landing-bg"></div>
      <div className="app__landing_content">
        <div className="app__landing_contentItems">
          <h1 className="title">Countries App</h1>
          <Link to="/home">
            <button className="cta">
              <span>Explore</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <footer className="app__landing_footer">
        <p>
          <span className="footer__text"> Henry © 2022</span>
          <a
            className="social"
            href="https://twitter.com/kimblandon"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/kimberly-blandon/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="social"
            href="https://github.com/Kimblag"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </p>
      </footer>
    </div>
  );
}
