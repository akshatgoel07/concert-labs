import React from 'react'
export default function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>The
          <div className="logo">
          Weekday.
          </div>
        
          </h1>
      </div>
      <div className="navbar-right">
       <ul className="footer-links">
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
      <li><a href="/">Privacy Policy</a></li>
    </ul>
      </div>
    </nav>
  )
}