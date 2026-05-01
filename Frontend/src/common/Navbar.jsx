import React from 'react'
import '../style.scss'
import './common.scss'

const Navbar = () => {
  return (
    <nav className="aj-navbar">
      <div className="aj-nav-container">
        <a href="/" className="aj-brand aj-nav-logo">
          {/* <img src="/logo.png" alt="AceJob Logo" className="aj-logo-image" /> */}
          <span className="aj-logo">AceJob</span>
        </a>
        <ul className="aj-nav-links">
          <li><a href="/" className="aj-nav-link">Home</a></li>
          <li><a href="/interview" className="aj-nav-link">Interviews</a></li>
          <li><a href="/logout" className="aj-nav-link">Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
