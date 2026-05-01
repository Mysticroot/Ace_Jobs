import React from 'react'
import '../style.scss'
import './common.scss'

const Footer = () => {
  return (
    <footer className="aj-footer">
      <div className="aj-footer-content">
        <div className="footer-section">
          <h3 className="footer-title">AceJobs</h3>
          <p className="footer-desc">Your gateway to ace job interviews and land your dream role.</p>
          <div className="footer-social">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/interview">Interviews</a></li>
            <li><a href="/logout">Logout</a></li>
            {/* <li><a href="/blog">Blog</a></li> */}
          </ul>
        </div>

        {/* <div className="footer-section">
          <h4 className="footer-subtitle">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">License</a></li>
          </ul>
        </div> */}
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© {new Date().getFullYear()} AceJobs. All rights reserved.</span>
        <span className="footer-credit">Made with ❤️ by the AceJobs team</span>
      </div>
    </footer>
  )
}

export default Footer
