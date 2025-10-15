import React from "react";
import './SignUp.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AuthApp. All rights reserved.</p>
      <p>Designed with ❤️ by <strong>Sandeep</strong></p>
    </footer>
  );
};

export default Footer;
