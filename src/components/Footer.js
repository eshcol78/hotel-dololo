import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Hotel Dololo</h3>
          <p>Menahriya Bocho Bore, Jimma, Ethiopia</p>
          <div className="social-links">
            <a href="#facebook">📘</a>
            <a href="#twitter">🐦</a>
            <a href="#instagram">📸</a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Hotel Dololo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
