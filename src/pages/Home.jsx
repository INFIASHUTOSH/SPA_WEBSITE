import React from "react";
import "../../src/App.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Website</h1>
          <p>Building beautiful web experiences.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container grid">
          <div className="feature">
            <h3>Fast</h3>
            <p>Lightning fast load times for users.</p>
          </div>
          <div className="feature">
            <h3>Responsive</h3>
            <p>Looks great on all devices.</p>
          </div>
          <div className="feature">
            <h3>Modern</h3>
            <p>Built with modern web standards.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          &copy; 2025 MySite. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
