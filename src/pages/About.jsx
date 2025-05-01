import React from "react";
import "../../src/App.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="about">
        <div className="container">
          <h1>About Us</h1>
          <p>
            We are a team of passionate developers dedicated to crafting
            elegant, efficient, and responsive websites. With years of
            experience in HTML, CSS, JavaScript, and more, we focus on clean
            design and great user experiences.
          </p>
          <div className="team grid">
            <div className="member">
              <h3>Jane Doe</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="member">
              <h3>John Smith</h3>
              <p>Backend Developer</p>
            </div>
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

export default About;
