import React from "react";
import "../style.scss";
import "./common.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const Footer = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async (e) => {
    e.preventDefault();
    await handleLogout();
    navigate("/");
  };

  return (
    <footer className="aj-footer">
      <div className="aj-footer-content">
        <div className="footer-section">
          <h3 className="footer-title">AceJobs</h3>
          <p className="footer-desc">
            Your gateway to ace job interviews and land your dream role.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/plans">Interview Plans</Link>
                </li>
                <li>
                  <a href="#logout" onClick={onLogout}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {/* <li><a href="/blog">Blog</a></li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © {new Date().getFullYear()} AceJobs. All rights reserved.
        </span>
        <span className="footer-credit">Made with ❤️ by the AceJobs team</span>
      </div>
    </footer>
  );
};

export default Footer;
