import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Menu from '../assets/menu.svg';
export default function Navbar() {
  // state for menu 
  const [show, setShow] = useState(false);
  function menuBar(){
    setShow(!show);
  }
    return (
        <div className="navbar container">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} />
                </Link>
            </div>
            <div className="menu-btn" onClick={() => menuBar()}>
              <img src={Menu} alt="" />
            </div>
            {show === true? (

              <div className="menuBar">
               <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
              </div>
            ):(
             null
            )}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </div>
    );
}
