import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import "../../src/App.css"; // Import the CSS file for styling

const Navbar = () => {
  const location = window.location.pathname; // Get the current path
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MySite</div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
