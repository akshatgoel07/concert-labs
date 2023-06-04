import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="path_to_your_image" alt="Logo" />
      </div>
      <div className="navbar-middle">
        <h1>TheWeekday.</h1>
      </div>
      <div className="navbar-right">
        <a href="#">Log in</a>
        <a href="#" className="signup">Sign up</a>
      </div>
    </nav>
  )
}
