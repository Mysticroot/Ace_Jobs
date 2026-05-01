import React from "react";
import { Link, useNavigate } from "react-router";
import "../style.scss";
import "./common.scss";
import { useAuth } from "../features/auth/hooks/useAuth";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async (e) => {
    e.preventDefault();
    await handleLogout();
    navigate("/");
  };

  return (
    <nav className="aj-navbar">
      <div className="aj-nav-container">
        <Link to="/" className="aj-brand aj-nav-logo">
          {/* <img src="/logo.png" alt="AceJob Logo" className="aj-logo-image" /> */}
          <span className="aj-logo">AceJob</span>
        </Link>

        <ul className="aj-nav-links">
          {user ? (
            <>
              <li>
                <Link to="/home" className="aj-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="aj-nav-link">
                  Interview Plans
                </Link>
              </li>
              <li>
                <a href="#logout" onClick={onLogout} className="aj-nav-link">
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="aj-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="aj-nav-link aj-btn aj-btn--outline"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="aj-nav-link aj-btn aj-btn--primary"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
