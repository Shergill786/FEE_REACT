import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/">Home</Link> &nbsp;|&nbsp;
      <Link to="/about">About</Link>&nbsp;|&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;|&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default Navbar;