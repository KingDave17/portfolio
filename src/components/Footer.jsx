import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} David Ajibade. All rights reserved.</p>
        <nav className="footer-links">
          <a href="https://www.linkedin.com/in/kingdave17" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/KingDave17" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://twitter.com/Ajibadedev" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:ajibaveday@gmail.com">Email</a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
